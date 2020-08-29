import React, { useState } from 'react'
import Button from '@atlaskit/button'
import Form, { Field } from '@atlaskit/form'
import TextField from '@atlaskit/textfield'
import { analyseTone } from '../utils'
import { getProfile } from '../Start/ToneScores'

export default function Sender ({ onSend, username }) {
  const [msg, setMsg] = useState('')

  const handleSubmit = (e) => {
    
    e.preventDefault()
    setMsg('')
    onSend(msg)
  }

  const handleInput = (e) => {
    setMsg(e.target.value)
  }

  const handleAnalysis = (username, msg) => {
    // Analysis looks like
    // {
    // "document_tone": {
    // "tones": [
    //  {
    //    "score": 0.931457,
    //    "tone_id": "anger",
    //    "tone_name": "Anger"
    //  }
    // ]
    // }
    //}
    const analysis = analyseTone(username, msg)
    console.log("Analysis is " + analysis)
    const profile = getProfile(username)
    let profileTones = profile.tones
    let analysisTones = analysis.document_tone.tones
    let i = 0;
    while (i < analysisTones.length) {
      let j = 0
      while (j < profileTones.length) {
        if (analysisTones[i].tone_id === profileTones[j].tone_id) {
          profileTones[i].tone_id += analysisTones[i].tone_id
          
        }
        j++
      }
      i++
    }
    console.log(profileTones)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField type='text'
        onChange={ handleInput }
        value={msg}
        placeholder='Aa'
        elemAfterInput={
          <Button 
            onClick={handleSubmit, () => handleAnalysis(username, msg)}
          >
        send
      </Button>}
        />
    </form>
  )
}