import React from 'react'
import TonePage from '../components/NewWindows/TonePage'

export default {
  title: 'Screens/TonePage',
  component: TonePage,
}

export const Anger = () => <TonePage tone_id='anger' />
export const Fear = () => <TonePage tone_id='fear' />
export const Joy = () => <TonePage tone_id='joy' />
export const Sadness = () => <TonePage tone_id='sadness' />
export const Analytical = () => <TonePage tone_id='analytical' />
export const Confident = () => <TonePage tone_id='confident' />
export const Tentative = () => <TonePage tone_id='tentative' />
