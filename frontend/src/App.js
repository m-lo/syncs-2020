import React from 'react'
import ToneAnalyzer from 'ibm-watson/tone-analyzer/v3'
import { IamAuthenticator } from 'ibm-watson/auth'


function App() {

  const test = {
    "utterances": [
      {
        "text": "Hello, I'm having a problem with your product.",
        "user": "customer"
      },
      {
        "text": "OK, let me know what's going on, please.",
        "user": "agent"
      },
      {
        "text": "Well, nothing is working :(",
        "user": "customer"
      },
      {
        "text": "Sorry to hear that.",
        "user": "agent"
      }
    ]
  }
  const toneAnalyzer = new ToneAnalyzer({
    version: '2017-09-21',
    authenticator: new IamAuthenticator({
      apikey: 'o0l0OuMGdb1matKG5cVH1y1aeJYa2MVumkXEYoUGGShN',
      url: 'https://cors-anywhere.herokuapp.com/https://iam.cloud.ibm.com/identity/token'
    }),
    url: 'https://cors-anywhere.herokuapp.com/https://api.au-syd.tone-analyzer.watson.cloud.ibm.com/instances/61f8a1f0-1263-4c20-8215-ad302d4631fc'
  })
  const text = "Good morning everyone. I see that our quarter four metrics are lower than expected. I know we have had a tough year and moral is down. Can we think of ways to increase our performance next year";
  const toneParams = {
    toneInput: { 'text': text },
    contentType: 'application/json',
  };
  
  toneAnalyzer.tone(toneParams)
    .then(toneAnalysis => {
      console.log(JSON.stringify(toneAnalysis, null, 2))
    })
    .catch(err => {
      console.log('error:', err)
    })
  return (
    <div>hi</div>
  );
}

export default App;
