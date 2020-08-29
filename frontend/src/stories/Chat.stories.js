import React from 'react'
import Chat from '../components/Chat'
import Message from '../components/Chat/Message'

export default {
  title: 'Screens/Chat',
  component: Chat,
}

export const ChatStory = () => <div style={{ display: 'flex' }}>
  <div>
    <Chat username='marcus' />
  </div>
  <div>
    <Chat username='anthy' />
  </div>
</div>