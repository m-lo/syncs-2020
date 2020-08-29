import React, { useState } from 'react'
import io from 'socket.io-client'
import moment from 'moment'

import Messages from './Messages'
import Sender from './Sender'
import PromptResponse from '../NewWindows/PromptResponse'

export default function Chat({ username }) {
  const [messages, setMessages] = useState([])
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

  const showPrompt = messages.length > 3

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