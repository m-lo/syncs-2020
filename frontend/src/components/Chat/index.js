import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import moment from 'moment'
import Avatar from '@atlaskit/avatar'
import { getAvatar } from './avatars'


import Messages from './Messages'
import Sender from './Sender'
import PromptResponse from '../NewWindows/PromptResponse'
import { analyseTone } from '../utils'
import { getProfile, userProfiles, addProfile } from '../Start/ToneScores'

export default function Chat({ username }) {
  const [messages, setMessages] = useState([])
  const [currentAnalysis, setCurrentAnalysis] = useState()
  const [prevAnalysis, setPrevAnalysis] = useState()
  const [detectedTones, setDetectedTones] = useState()
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
    let others = messages.filter(msg => msg.username !== username)
    let msg = others.pop()
    if (msg && msg.message !== prevAnalysis?.message) {
      setCurrentAnalysis(msg)
    }
  }, [messages])

  useEffect(() => {
    if (currentAnalysis && currentAnalysis?.message !== prevAnalysis?.message) {
      if (!userProfiles.find(profile => profile.username === currentAnalysis.username)) {
        addProfile(currentAnalysis.username)
      }

      analyseEffect(currentAnalysis.username, currentAnalysis.message)
      console.log('anlysing effect', currentAnalysis, prevAnalysis)
      setPrevAnalysis(currentAnalysis)
    }
  }, [currentAnalysis])


  const analyseEffect = async (username, msg) => {
    const res = await analyseTone(msg)
    if (!res) return
    let analysisTones = res.document_tone.tones
    let analyseProfile = userProfiles.find(profile => profile.username === username)
    analyseProfile.tones.map(tone => {
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
    setDetectedTones(analyseProfile.tones)
  } // TODO: The scores arrays are only accessed if Watson returns some value for their respective tones. Is this intended?

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

  // Show the button if at least one tone's array is valid
  const threshold = 0.8
  const showPrompt = userProfiles.some(p => p.username !== username && p.tones.some(t => t.sliding_avg >= threshold))

  return (
    <div style={{ height: '100%', display: 'flex', position: 'relative', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ height: '100%', overflow: 'auto' }}>
        <div style={{ display: 'flex' }}>
          <Avatar
              appearance='circle'
              size='large'
              src={getAvatar(username)}
            />
          <div style={{ fontWeight: 700, alignSelf: 'center', paddingLeft: 8, fontSize: 28 }}>
            @{username}
          </div>
        </div>
        <Messages messages={messages} username={username} />
      </div>
      <div style={{ float: 'bottom', display: 'flex', flexDirection: 'column' }}>
        {showPrompt && <div style={{ marginBottom: 16, alignSelf: 'center' }}>
          <PromptResponse tones={detectedTones} />
        </div>}
        <Sender onSend={handleSend} username={username} />
      </div>
    </div>
  )
}