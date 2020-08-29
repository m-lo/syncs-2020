import React from 'react'
import Chat from './components/Chat'
import PromptResponse from './components/NewWindows/PromptResponse'
import TonePage from './components/NewWindows/TonePage'
import { generateTone } from './components/utils'
import Start from './components/Start'

export default function App() {
  
  return (
    <>
    <Start />
    <PromptResponse
      tones={
        [generateTone(0.819204, 'sadness', 'Sadness'),
         generateTone(0.762356, 'analytical', 'Analytical'),
         generateTone(0.961411, 'tentative', 'Tentative')
        ]
      }/>
    <TonePage
      tone_id='anger'
    />
    
    </>
  );
}
