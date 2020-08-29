import React, { useState } from 'react'
import Chat from '../Chat'
import Button from '@atlaskit/button'
import Form, { Field } from '@atlaskit/form'
import TextField from '@atlaskit/textfield'
import { userProfiles, addProfile } from './ToneScores'


export default function Start() {
  const [user, setUser] = useState()
  
  return (
    user ? <Chat username={user} /> : <div style={{ width: 320, margin: 'auto', paddingTop: '40%' }}>
      <Form onSubmit={data => {
        setUser(data.username)
        addProfile(data.username)
      }}>
        {({ formProps }) => (
          <form {...formProps}>
            <Field name='username' defaultValue='' label='username' isRequired>
              {({ fieldProps }) => <TextField elemAfterInput={<Button appearance='primary' type='submit'>
              login
            </Button>} {...fieldProps} />}
            </Field>
          </form>
        )}
      </Form>
    </div>
  )
}
