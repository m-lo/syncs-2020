import React from 'react'
import SectionMessage from '@atlaskit/section-message'
import Avatar from '@atlaskit/avatar'

export default function Message({ message, isOwner }) {
  const { message: msg, username, timestamp } = message

  return (
    <div style={{ margin: 8, maxWidth: 300 }}>
      <Avatar
        appearance='circle'
        size='medium'
        src='https://hello.atlassian.net/secure/projectavatar?pid=30630'
      />
      <p>hi</p>
    </div>
    
  )
}