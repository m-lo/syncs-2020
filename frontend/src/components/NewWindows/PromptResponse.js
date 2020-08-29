import React, { useState } from 'react'
import styled from 'styled-components'
import Tooltip from '@atlaskit/tooltip'
import Button from '@atlaskit/button'
import { TooltipPrimitive } from '@atlaskit/tooltip/styled'

const InlineDialog = styled(TooltipPrimitive)`
  background: white;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  box-sizing: content-box;
  font-family: Helvetica;
  padding: 8px 12px;
`

function PromptResponse({ tones }) {
  // Tones - an array of Tones returned by the
  // IBM Tone Analyzer.

  // Tone - 
  // {
  //   'score': 0.780604,
  //   'tone_id': 'sadness',
  //   'tone_name': 'Sadness'
  // }
  const tonesString = tones.map(tone => tone.tone_name).join(', ')

  return (
    <Tooltip 
      component={InlineDialog}
      content={ "It sounds like your friend might be feeling " + tonesString }
      style={{margin: 'auto'}}>
      <Button 
        appearance="primary"
        style={{backgroundColor: '#5ce1ff'}}>
          { 'Start the conversation >' }
      </Button>
    </Tooltip>
  );
}

export default PromptResponse;