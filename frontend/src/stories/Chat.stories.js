import React from 'react'
import Chat from '../components/Chat'
import Message from '../components/Chat/Message'

export default {
    title: 'Screens/Chat',
    component: Chat,
  }

export const ChatStory = () => <div>
  <Chat username='marcus' />
  <Chat username='anthy' />
</div>