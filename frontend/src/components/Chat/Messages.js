import React from 'react'
import Message from './Message'

export default function Messages ({ messages, username }) {
    return (
        <div style={{ width: 600, display: 'flex', flexDirection: 'column' }}>
            {messages.map((msg, i) => <div style={{ margin: 16 }}><Message key={i} message={msg} isOwner={username === msg.username} /></div> )}
        </div>
    )
}