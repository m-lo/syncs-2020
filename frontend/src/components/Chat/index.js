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

    profileTones.map(tone => {
      let atone = analysisTones.find(a => a.tone_id === tone.tone_id)
      if (atone) tone.score += atone.score
    })
  }
  
  // TODO
  const tones = [
    {tone_id: 'sadness',
    tone_name: 'Sadness',
    score: '0.512431'}
  ]

  const addMessage = (message) => {
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

    socket.emit('client:message', payload)
    addMessage(payload)
  }

  const showPrompt = messages.length > 3 // TODO

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