import React, { useState } from 'react'

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
      <input type='text'
        onChange={handleInput}
        value={msg}
        placeholder='Aa'
        />
    </form>
  )
}