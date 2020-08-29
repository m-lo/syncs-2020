import React, { useState } from 'react'
import { ProgressTracker, Stages } from '@atlaskit/progress-tracker';

export let userProfiles = [

]

let items = [
    {
      id: 'stage-0',
      label: '',
      percentageComplete: 0,
      status: 'unvisited',
    },
    {
      id: 'stage-1',
      label: '',
      percentageComplete: 20,
      status: 'unvisited',
    },
    {
      id: 'current-1',
      label: 'Current step',
      percentageComplete: 40,
      status: 'unvisited',
    },
    {
      id: 'unvisited-1',
      label: 'Unvisited step 1',
      percentageComplete: 60,
      status: 'unvisited',
    },
    {
      id: 'unvisited-2',
      label: 'Unvisited step 2',
      percentageComplete: 80,
      status: 'unvisited',
    },
    {
      id: 'unvisited-2',
      label: 'Unvisited step 2',
      percentageComplete: 100,
      status: 'unvisited',
    }
  ];

export function getProfile(username) {
    for(let i = 0; i < userProfiles.length; i++) {
        if (userProfiles[i][username] === username) {
            return userProfiles[i]
        }
    }
}

export function addProfile(username) {
    let profile = {
        username: username ,
        tones: [
            {
                tone_id: 'anger',
                score: 0.0,

            }, 
            {
                tone_id: 'fear',
                score: 0.0
            }, 
            {
                tone_id: 'joy',
                score: 0.0
            }, 
            {
                tone_id: 'sadness',
                score: 0.0
            }, 
            {
                tone_id: 'analytic',
                score: 0.0
            }, 
            {
                tone_id: 'confident',
                score: 0.0
            }, 
            {
                tone_id: 'tentative',
                score: 0.0
            }
        ]
    }
    userProfiles.push(profile)
    console.log(profile)
    console.log(userProfiles)
}

export default function ToneScores(profiles) {
    const [user, setUser] = useState()
    let totalScore = 0
    for (let i = 0; i < profiles.tones.length; i++) {
        totalScore += profiles.tones[i]
    }
    return (
        <div>
          { profiles.map(profile => 
          <div>
            <h1>
                { profile.username }
            </h1>
            {
                profile.tones.map(tone => <div>
                    <h3>
                        { tone.tone_id }
                    </h3>

                </div>
                )
            }
          </div>) }
        </div>
    )
  }