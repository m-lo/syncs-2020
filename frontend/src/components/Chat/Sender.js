import React, { useState, useEffect } from 'react'
import Button from '@atlaskit/button'
import SendIcon from '@atlaskit/icon/glyph/send'
import TextField from '@atlaskit/textfield'

export default function Sender ({ onSend, username }) {
  const [msg, setMsg] = useState('')

  const handleSubmit = async (e) => {
    
    e.preventDefault()
    if (msg != '') onSend(msg)
    setMsg('')
  }

  const handleInput = (e) => {
    setMsg(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField type='text'
        onChange={ handleInput }
        value={msg}
        placeholder='Aa'
        elemAfterInput={
          <Button 
            onClick={handleSubmit}
          >
        send
      </Button>}
        elemAfterInput={<Button appearance='primary' iconAfter={<SendIcon />} onClick={handleSubmit} />}
        />
    </form>
  )
}