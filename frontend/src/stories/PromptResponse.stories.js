import React from 'react'
import PromptResponse from '../components/NewWindows/PromptResponse'

export default {
    title: 'Screens/PromptResponse',
    component: PromptResponse,
  }

export const Prompt = () => <PromptResponse tones={[
  {tone_id: 'sadness',
  tone_name: 'Sadness',
  score: '0.512431'}
]} />