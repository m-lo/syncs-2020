import React from 'react'
import Chat from './components/Chat'
import PromptResponse from './components/NewWindows/PromptResponse'
import TonePage from './components/NewWindows/TonePage'
import { generateTone } from './components/utils'
import Start from './components/Start'

export default function App() {
  
  return (
    <div style={{ position: 'absolute', background: '#fff', width: '100%', height: '100%' }}>
        <div style={{ width: 400, height: 640, margin: 'auto', marginTop: 40, padding: 24, borderRadius: 12, background: '#fff',
        boxShadow: `20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff` }}>
      <Start />    
    </div>
    </div>
  );
}
