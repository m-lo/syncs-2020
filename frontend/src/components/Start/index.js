import React, { useState } from 'react'

import Chat from '../Chat'
import Button from '@atlaskit/button'
import Form, { Field, FormFooter } from '@atlaskit/form'
import Textfield from '@atlaskit/textfield'


export default function Start() {
  const [user, setUser] = useState()
  return (
    user ? <Chat user={user} /> :
      <Form onSubmit={(formState) => console.log('form submitted', formState)}>
        <Field name="example-text" defaultValue="a default value">
          <Textfield />
        </Field>
        <FormFooter>
          <Button type="submit" appearance="primary">Submit</Button>
        </FormFooter>
      </Form>
  )
}
