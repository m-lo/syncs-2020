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
    
    console.log(tone_id)
    return (
        <div
          style={{
            background: '#c7efff',
            borderRadius: '4px',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
            boxSizing: 'content-box',
            fontFamily: 'Helvetica',
            margin: '5em',
            height: '60vh',
            color: '#2a4b70'
          }}
          >
          <div
            medium={2}>
            <h1>
              { name + ' ' + emoji} 
            </h1>
          </div>
          <div
            >
              { description }
          </div>
        </div>
    );
}

export default TonePage;