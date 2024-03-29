import React from 'react'
import Message from './Message'

export default function Messages ({ messages, username }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {messages.map((msg, i) => 
              <div key={i} 
              style={{ margin: 16 }}>
              <Message message={msg} 
              isOwner={username === msg.username} 
            /></div> )}
        </div>
    )
}