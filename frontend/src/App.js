import React from 'react'
import Chat from './components/Chat'
import PromptResponse from './components/NewWindows/PromptResponse'
import TonePage from './components/NewWindows/TonePage'
import { generateTone } from './components/utils'
import Start from './components/Start'

export default function App() {
  
  return (
    <div style={{ width: 600, height: 800 }}>
      <Start />    
    </div>
  );
}
