import React from 'react'

export default function Message ({ isOwner, username, message, timestamp }) {
    return (
        <div>
            <p>
                {timestamp}
                {isOwner ? 'me: ' + message : username + ': ' + message}
            </p>
        </div>
    )
}