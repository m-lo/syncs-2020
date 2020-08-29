import React from 'react'
import Message from './Message'

export default function Messages ({ messages }) {
    return (
        <div>
            {messages.map((msg, i) => <Message key={i} timestamp={msg?.timestamp} username={msg?.username} message={msg?.message} isOwner={msg?.isOwner} /> )}
        </div>
    )
}