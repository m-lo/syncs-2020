import React from 'react'
import PromptResponse from '../components/NewWindows/PromptResponse'

export default {
    title: 'Screens/PromptResponse',
    component: PromptResponse,
  }

export const Prompt = () => <PromptResponse tones={[
  {tone_name: 'happy'},
  {tone_name: 'depression'},
  {tone_name: 'hates themselves'},
]} />