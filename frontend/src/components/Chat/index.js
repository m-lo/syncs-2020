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
      timestamp: moment().format()
    }

    socket.emit('client:message', payload)
    payload.isOwner = true
    addMessage(payload)
  }

  
  return (
    <div>
      <Messages messages={messages} />
      <Sender onSend={handleSend} />
    </div>
  )
}