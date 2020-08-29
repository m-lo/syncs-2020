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
            backgroundImage: 'linear-gradient(#f67a36,#ed008c)',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
            boxSizing: 'content-box',
            fontFamily: 'Menlo',
            margin: '2em 20em 2em 20em',
            height: '60vh',
            color: '#2a4b70'
          }}
          >
          <div
            style={{
                backgroundImage: 'linear-gradient(#5da4dc,#377dc9,#3a0e37)',
                borderRadius: '4px',
                padding: '2em 5em 2em 5em',
                height: '60vh',
                color: '#2a4b70'
              }}>
            <h1>
              { name + ' ' + emoji} 
            </h1>
            <div
              style={{
                  color: '#276cab'
              }}
            >
              <h3>
                { description }
              </h3>
            </div>
            <div
              style={{
                padding: '0em 0em 0em 0em',
                color: '#5075fa'
            }}
            >
              { detail.map(line => <h5> {line }</h5>)}
            </div>
          </div>
          
        </div>
    );
}

export default TonePage;