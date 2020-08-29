import React, { useState } from 'react'
import Button from '@atlaskit/button'
import Form, { Field } from '@atlaskit/form'
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
        elemAfterInput={<Button onClick={handleSubmit}>
        send
      </Button>}
        />
    </form>
  )
}