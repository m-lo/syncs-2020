import React from 'react'
import Chat from '../components/Chat'
import Message from '../components/Chat/Message'

export default {
  title: 'Screens/Chat',
  component: Chat,
}

export const ChatStory = () => <div style={{ display: 'flex' }}>
  <div style={{ width: 500, height: 600, margin: 12 }}>
    <Chat username='marcus' />
  </div>
  <div style={{ width: 500, height: 600, margin: 12 }}>
    <Chat username='anthy' />
  </div>
</div>