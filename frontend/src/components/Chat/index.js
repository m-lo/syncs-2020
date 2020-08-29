import React, { useState } from 'react'
import io from 'socket.io-client'

export default function Chat({ username = 'marcus' }) {
  const [messages, setMessages] = useState([])
  const addMessage = (message) => {
    setMessages([...messages, message])
  }
  const socket = io('http://localhost:5002', { query: 'username=' + username }).connect()

  socket.on('server:message', addMessage)
  return (
    <pre>hello</pre>
  )
}