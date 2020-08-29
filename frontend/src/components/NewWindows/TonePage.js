import React, { useState } from 'react'
import styled from 'styled-components';
import Tooltip from '@atlaskit/tooltip'
import Button from '@atlaskit/button'
import { Grid } from '@atlaskit/page'
import toneInfo from '../toneInfo'


// Displays information associated with given tone.
function TonePage({ tone_id }) {
    
    const name = toneInfo[tone_id].name
    const emoji = toneInfo[tone_id].emoji 
    const description = toneInfo[tone_id].description
    const detail = toneInfo[tone_id].detail
    
    console.log(tone_id)
    return (
        <div
          style={{
            boxSizing: 'content-box',
            margin: 'auto',
            //margin: '2em 20em 2em 20em',
            padding: '1em 1em 1em 1em',
            width: '50%',
            maxWidth: '100%',
            height: '100%',
            maxHeight: '100%',
            position: 'center',
            color: '#ffffff',
            overflow: 'auto',
          }}
          >
          <div
            style={{
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
                boxSizing: 'content-box',
                backgroundImage: 'linear-gradient(#5da4dc,#377dc9,#3a0e37)',
                borderRadius: '10px',
                padding: '2em 5em 2em 5em',
                maxWidth: '100%',
                maxHeight: '100%',
                color: '#ffffff',
              }}
            >
            <h1>
              { name + ' ' + <span style={{color: 'blue'}}> emoji </span> }
            </h1>
            <div
              style={{
                  fontStyle: 'italic',
                  color: '#ffffff'
              }}
            >
              <h3>
                { description }
              </h3>
            </div>
            <div
              style={{
                padding: '0em 0em 0em 0 em',
                color: '#ffffff'
            }}
            >
              { detail.map(line => <p> {line }</p>) }
            </div>
          </div>
          
        </div>
    );
}

export default TonePage;