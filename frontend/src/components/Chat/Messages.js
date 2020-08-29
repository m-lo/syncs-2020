import React from 'react'
import Message from './Message'

export default function Messages ({ messages, username }) {
    return (
        <div>
            {messages.map((msg, i) => <Message key={i} message={msg} isOwner={username === msg.username} /> )}
        </div>
    )
}