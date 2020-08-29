import React, { Fragment, useState } from 'react'
import Chat from '../Chat'
import Button from '@atlaskit/button'
import Form, { Field, FormFooter, HelperMessage } from '@atlaskit/form'
import Textfield from '@atlaskit/textfield'


export default function Start() {
  const [user, setUser] = useState()
  return (
    user ? <Chat user={user} /> : <div>
      <Form
      onSubmit={(formState) =>
        console.log('form submitted', formState)
      }
    >
      {({ formProps }) => (
        <form {...formProps}>
          <Field name="username">
            {({ fieldProps }) => (
              <Fragment>
                <Textfield {...fieldProps} />
              </Fragment>
            )}
          </Field>
          <FormFooter>
            <Button type="submit" appearance="primary">Login</Button>
          </FormFooter>
        </form>
      )}
    </Form>
      </div>
  )}
