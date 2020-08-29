import React, { useState } from 'react'
import Modal, { ModalTransition } from '@atlaskit/modal-dialog'
import Start from './components/Start'

export default function App() {
  const [isOpen, setIsOpen] = useState(true)
  const close = () => setIsOpen(false)
  const open = () => setIsOpen(true)
  return (
    <div style={{ position: 'absolute', background: '#fff', width: '100%', height: '100%' }}>
      <ModalTransition>
        {isOpen && (
          <Modal
            actions={[
              { text: 'Start', onClick: close }
            ]}
            onClose={close}
            heading="Prototype Introduction"
          >
            <p style={{ lineHeight: 1.4 }}>Congrats, you have found the frontend! Please ensure that the backend (in the backend directory) is also running with <b>yarn start</b></p>
            <p style={{ lineHeight: 1.4 }}>To simulate a <b>conversation</b>, simply open a <b>duplicate window</b> and login as different users.</p>
            <p style={{ lineHeight: 1.4 }}>If we identify any <b>concerning trends or patterns</b> in the person you're talking to, we may prompt you to <b>better understand</b> the other person behind the screen to help you better navigate your online communication with them.</p>
          </Modal>
        )}
      </ModalTransition>
        <div style={{ width: 400, height: 640, margin: 'auto', marginTop: 40, padding: 24, borderRadius: 12, background: '#fff',
        boxShadow: `20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff` }}>
      <Start />    
    </div>
    </div>
  );
}
