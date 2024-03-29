import { state, useState } from 'react'
import ToneAnalyzer from 'ibm-watson/tone-analyzer/v3'
import { IamAuthenticator } from 'ibm-watson/auth'


const toneAnalyzer = new ToneAnalyzer({
  version: '2017-09-21',
  authenticator: new IamAuthenticator({
    apikey: 'o0l0OuMGdb1matKG5cVH1y1aeJYa2MVumkXEYoUGGShN',
    url: 'https://cors-anywhere.herokuapp.com/https://iam.cloud.ibm.com/identity/token'
  }),
  url: 'https://api.au-syd.tone-analyzer.watson.cloud.ibm.com/instances/61f8a1f0-1263-4c20-8215-ad302d4631fc'
})

export async function analyseTone(text) {
  const toneParams = {
    toneInput: { 'text': text },
    contentType: 'application/json',
  }

  let res
  try {
    res = await toneAnalyzer.tone(toneParams)
  } catch (e) {
    console.log(e)
  }
  return res?.result
}

export function generateTone(score, id, name) {
  return (
    {
      score: score,
      tone_id: id,
      tone_name: name
    }
  )
}
