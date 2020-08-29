import React from 'react'
import moment from 'moment'
import Message from '../components/Chat/Message'


export default {
    title: 'Screens/Message',
    component: Message,
  }

const BubbleStory = ({ username, message, isOwner }) => {
  const timestamp = moment().format()
  const payload = {
    username, message, timestamp
  }

  return (
    <div>
      <Message isOwner={isOwner} message={payload} />
    </div>
  )
}

export const Bubble = BubbleStory.bind({})

Bubble.args = {
  isOwner: false,
  username: 'marcus',
  message: 'goodnight'
}