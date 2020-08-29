import React from 'react'
import moment from 'moment'
import Avatar from '@atlaskit/avatar'

export default function Message({ message, isOwner }) {
  const { message: msg, username, timestamp } = message

  return (
    <div style={{ float: isOwner ? 'right' : 'left'}}>
      <div style={{ marginLeft: 12, fontSize: 10}}>
        {moment(timestamp).format('h:mm:ss a')}
      </div>
      <div style={{
        margin: 8, padding: 12, borderRadius: 4, maxWidth: 300, display: 'flex',
        boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048)`
      }}>
        <Avatar
          appearance='circle'
          size='medium'
          src='https://hello.atlassian.net/secure/projectavatar?pid=30630'
        />
        <div style={{ display: 'flex', paddingLeft: 8, flexDirection: 'column' }}>
          <div style={{ fontSize: 12 }}>
            {isOwner ? 'me' : username}
          </div>
          <div>
            {msg}
          </div>
        </div>
      </div>
    </div>
  )
}