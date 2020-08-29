import React, { useState } from 'react'
import Button from '@atlaskit/button'
import SendIcon from '@atlaskit/icon/glyph/send'
import TextField from '@atlaskit/textfield'

export default function Sender ({ onSend }) {
  const [msg, setMsg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setMsg('')
    onSend(msg)
  }

  const handleInput = (e) => {
    setMsg(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField type='text'
        onChange={handleInput}
        value={msg}
        placeholder='Aa'
        elemAfterInput={<Button iconAfter={<SendIcon />} onClick={handleSubmit} />}
        />
    </form>
  )
}