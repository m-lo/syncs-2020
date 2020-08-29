import React, { useState } from 'react'
import io from 'socket.io-client'
import moment from 'moment'

import Messages from './Messages'
import Sender from './Sender'

export default function Chat({ username }) {
  const [messages, setMessages] = useState([])

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

  
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Messages messages={messages} username={username} />
      <div style={{ float: 'bottom' }}>
        <Sender onSend={handleSend} />
      </div>
    </div>
  )
}