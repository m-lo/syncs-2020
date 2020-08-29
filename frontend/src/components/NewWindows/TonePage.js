import React, { useState } from 'react'
import styled from 'styled-components'
import Tooltip from '@atlaskit/tooltip'
import Button from '@atlaskit/button'
import { Grid } from '@atlaskit/page'
import toneInfo from '../toneInfo'
//import Modal, { ModalTransition } from '@atlaskit/modal-dialog'
import Modal, { ModalTransition } from '@atlaskit/modal-dialog';
//import Modal, { ModalTransition } from '@atlaskit/modal';

function TonePage({ tone_id }) {
    
  const name = toneInfo[tone_id].name
  const emoji = toneInfo[tone_id].emoji 
  const description = toneInfo[tone_id].description
  const detail = toneInfo[tone_id].detail
  //const colour = toneInfo[tone_id].colour
  const colour0 = toneInfo[tone_id].colour[0]
  const colour1 = toneInfo[tone_id].colour[1]
  const colour2 = toneInfo[tone_id].colour[2]

  console.log(tone_id)

  const [isOpen, setIsOpen] = useState(true);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return (
    <ModalTransition>
      {isOpen && (
        <Modal
          onClose={close}
        >
          <div
            style={{
              //boxSizing: 'content-box',
              margin: 'auto',
              width: '100%',
              maxWidth: '100%',
              height: '100%',
              maxHeight: '100%',
              position: 'center',
              color: '#ffffff',
              overflow: 'auto',
              //display: 'flex'
            }}
            >
            <div
              style={{
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
                  //boxSizing: 'content-box',
                  backgroundImage: `linear-gradient(190deg, ${colour0}, ${colour1}, ${colour2})`,
                  //borderRadius: '10px',
                  padding: '2em 1em 2em 1em',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  color: '#ffffff'
                }}
              >
              <h1 
                style={{
                  fontFamily: 'Courier New', 
                  fontWeight: 'lighter', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.2em',
                  fontSize: '3em'
                  }}
                >
                { name + ' ' + emoji}
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
                  //padding: '0em 0em 0em 0em',
                  color: '#ffffff'
              }}
              >
                { detail.map(line => <p> {line }</p>) }
              </div>
            </div>
          </div>
        </Modal>
      )}
    </ModalTransition>
  );
}

export default TonePage;