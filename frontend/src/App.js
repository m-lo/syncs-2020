import React from 'react'
import Chat from './components/Chat'
import PromptResponse from './components/NewWindows/PromptResponse'
import TonePage from './components/NewWindows/TonePage'
import { generateTone } from './components/utils'
import Start from './components/Start'

export default function App() {
  
  return (
    <div style={{ width: 500, height: 600, margin: 'auto', boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048)` }}>
      <Start />    
    </div>
  );
}
