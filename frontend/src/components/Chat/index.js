import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import moment from 'moment'

import Messages from './Messages'
import Sender from './Sender'
import PromptResponse from '../NewWindows/PromptResponse'
import { analyseTone } from '../utils'
import { getProfile } from '../Start/ToneScores'

export default function Chat({ username }) {
  const [messages, setMessages] = useState([])
  const profile = getProfile(username)
  // PROFILE TONE
  // [
//     {tone_id: "anger", score: 0.931034
//   },
//   {tone_id: "fear", score: 0.931034
//   },
//   {tone_id: "joy", score: 0
//   },
//   {tone_id: "sadness", score: 0.916667
//   },
//   {tone_id: "analytic", score: 0
//   },
//   {tone_id: "confident", score: 0
//   },
//   {tone_id: "tentative", score: 0
//   }
// ]
  let profileTones = profile.tones

  useEffect(() => {
    let ownMessages = messages.filter(msg => msg.username === username)
    let msg = ownMessages.slice(-1)[0]
    if (msg) analyseEffect(username, msg.message)
  }, [messages])


  const analyseEffect = async (username, msg) => {
    // Analysis looks like
    // {
    // "document_tone": {
    // "tones": [
    //  {
    //    "score": 0.931457,
    //    "tone_id": "anger",
    //    "tone_name": "Anger"
    //  }
    // ]
    // }
    //}
    const res = await analyseTone(msg)
    
    let analysisTones = res.document_tone.tones
    console.log(analysisTones)
    profileTones.map(tone => {
      let atone = analysisTones.find(a => a.tone_id === tone.tone_id)
      const window_size = 5
      if (atone) {
        tone.past_scores.unshift(atone.score) // Place newest score at index 0
        if (tone.past_scores.length >= window_size) {
          tone.score_valid = true
          tone.sliding_avg = tone.past_scores.reduce((a,b) => {return a + b}, 0) / window_size
          if (tone.past_scores.length > window_size) {
            tone.past_scores.pop() // Eject oldest score off the end.
            tone.sliding_avg = tone.past_scores.reduce((a,b) => {return a + b}, 0) / window_size
          }
        }
        
      }
    })
    console.log(profileTones)
  } // TODO: The scores arrays are only accessed if Watson returns some value for their respective tones. Is this intended?
  
  // TODO
  const tones = [
    {tone_id: 'sadness',
    tone_name: 'Sadness',
    score: '0.512431'}
  ]

  const addMessage = (message) => {
    console.log('adding message', message)
    setMessages([...messages, message])
  }

  const socket = io('http://localhost:5002', { query: 'username=' + username }).connect()
  socket.on('server:message', addMessage)

  const handleSend = (message) => {
    const payload = {
      username,
      message,
      timestamp: moment().unix()
    }
    console.log('sending', message)
    socket.emit('client:message', payload)
    addMessage(payload)
  }

  // Show the button if at least one tone's array is valid
  const threshold = 0.95
  const showPrompt = profileTones.some(tone => tone.sliding_avg >= threshold)

  return (
    <div style={{ height: '100%', display: 'flex', position: 'relative', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ height: '100%', overflow: 'auto' }}>
        <Messages messages={messages} username={username} />
      </div>
      <div style={{ float: 'bottom', display: 'flex', flexDirection: 'column' }}>
        {showPrompt && <div style={{ marginBottom: 16, alignSelf: 'center' }}>
          <PromptResponse tones={tones} />
        </div>}
        <Sender onSend={handleSend} username={username} />
      </div>
    </div>
  )
}