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
    let profile = userProfiles.filter(profile => profile?.username === username)
    if (profile) return profile[0]
}

export function addProfile(username) {
    let profile = {
        username: username ,
        tones: [
            {
                tone_id: 'anger',
                past_scores: [],
                sliding_avg : 0.0,
                score_valid : false // Becomes true when the array has been written to [window_size] times

            }, 
            {
                tone_id: 'fear',
                past_scores: [],
                sliding_avg : 0.0,
                score_valid : false
            }, 
            {
                tone_id: 'joy',
                past_scores: [],
                sliding_avg : 0.0,
                score_valid : false
            }, 
            {
                tone_id: 'sadness',
                past_scores: [],
                sliding_avg : 0.0,
                score_valid : false
            }, 
            {
                tone_id: 'analytical',
                past_scores: [],
                sliding_avg : 0.0,
                score_valid : false
            }, 
            {
                tone_id: 'confident',
                past_scores: [],
                sliding_avg : 0.0,
                score_valid : false
            }, 
            {
                tone_id: 'tentative',
                past_scores: [],
                sliding_avg : 0.0,
                score_valid : false
            }
        ]
    }
    userProfiles.push(profile)
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