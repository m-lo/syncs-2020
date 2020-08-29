import React, { useState } from 'react'
import styled from 'styled-components'
import Tooltip from '@atlaskit/tooltip'
import Button from '@atlaskit/button'
import { Grid } from '@atlaskit/page'
import toneInfo from '../toneInfo'

function TonePage({ tone_id }) {
    
  const name = toneInfo[tone_id].name
  const emoji = toneInfo[tone_id].emoji 
  const description = toneInfo[tone_id].description
  const detail = toneInfo[tone_id].detail
  //const colour = toneInfo[tone_id].colour
  const colour0 = toneInfo[tone_id].colour[0]
  const colour1 = toneInfo[tone_id].colour[1]
  const colour2 = toneInfo[tone_id].colour[2]


  return (
          <div
            style={{
              margin: 'auto',
              width: '100%',
              maxWidth: '100%',
              height: '100%',
              maxHeight: '100%',
              position: 'center',
              color: '#ffffff',
              overflow: 'auto',
              //display: 'flex'
            }}
            >
            <div
              style={{
                  backgroundImage: `linear-gradient(190deg, ${colour0}, ${colour1}, ${colour2})`,
                  padding: 40,
                  maxWidth: '100%',
                  maxHeight: '100%',
                  color: '#ffffff'
                }}
              >
              <h1 
                style={{
                  textTransform: 'uppercase', 
                  letterSpacing: '0.2em',
                  fontSize: '3em',
                  lineHeight: 0.2
                  }}
                >
                { name + ' ' + emoji}
              </h1>
              <div
                style={{
                    color: '#ffffff'
                }}
              >
                <h3>
                  { description }
                </h3>
              </div>
              <div
                style={{
                  fontStyle: 'itatlic',
                  fontSize: 14,
                  //padding: '0em 0em 0em 0em',
                  color: '#ffffff'
              }}
              >
                { detail.map(line => <p> {line }</p>) }
              </div>
            </div>
          </div>
  )
}

export default TonePage;