import React, { useState, forwardRef } from 'react'
import styled from 'styled-components'
import Tooltip from '@atlaskit/tooltip'
import Button from '@atlaskit/button'
import ChevronRightCircleIcon from '@atlaskit/icon/glyph/chevron-right-circle'
import Modal, { BodyComponentProps, ModalTransition } from '@atlaskit/modal-dialog'
import TonePage from './TonePage'
import { TooltipPrimitive } from '@atlaskit/tooltip/styled'

// const InlineDialog = styled(TooltipPrimitive)`
//   background: white;
//   border-radius: 4px;
//   box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
//   box-sizing: content-box;
//   font-family: Helvetica;
//   padding: 8px 12px;
// `


function PromptResponse({ tones }) {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)
  const open = () => setIsOpen(true)
  // Tones - an array of Tones returned by the
  // IBM Tone Analyzer.

  // Tone - 
  // {
  //   'score': 0.780604,
  //   'tone_id': 'sadness',
  //   'tone_name': 'Sadness'
  // }
  const tonesString = tones.map(tone => tone.tone_name).join(', ')

  const CustomBody = forwardRef((props, ref) => {
    return (
      <TonePage
        {...props}
        tone_id='anger'
        ref={ref}
      />
    )
  })

  return (
      // <Tooltip 
      //   // component={InlineDialog}
      //   mousePosition='right'
      //   content={ 'It sounds like your friend might be feeling ' + tonesString }
      //   position='right'
      //   >
      <>
      <Button 
        onClick={open}
          style={{ borderRadius: 40, padding: '0 4px 0px 12px' }}
          iconAfter={<ChevronRightCircleIcon size='medium' />}
        >
        <span style={{ fontSize: 12 }}>Start the Conversation</span>
      </Button>
      <ModalTransition>
      {isOpen && (
        <Modal
        components={{
          Body: CustomBody,
        }}
        onClose={close}
      />
      )}
    </ModalTransition>
    </>
  )
}

export default PromptResponse;