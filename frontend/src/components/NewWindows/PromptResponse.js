import React, { useState } from 'react'
import Tooltip from '@atlaskit/tooltip'
import Button from '@atlaskit/button'


function PromptResponse({ tones }) {
  // Tones - an array of Tones returned by the
  // IBM Tone Analyzer.

  // Tone - 
  // {
  //   'score': 0.780604,
  //   'tone_id': 'sadness',
  //   'tone_name': 'Sadness'
  // }
  let tonesString = tones[0].tone_name

  for (let i = 1; i < tones.length; i++) {
    tonesString += ", " + tones[i].tone_name
  }

  return (
    <Tooltip 
      content={ "It sounds like your friend might be feeling " + tonesString }>
      <Button 
        appearance="primary">
          Start the conversation.
      </Button>
    </Tooltip>
  );
}

export default PromptResponse;