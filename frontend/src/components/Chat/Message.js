import React from 'react'

export default function Message ({ message, isOwner }) {
    const { message: msg, username, timestamp } = message
    return (
        <div>
            <p>
                {timestamp}
                {isOwner ? 'me: ' + msg : username + ': ' + msg}
            </p>
        </div>
    )
}