// Provides representation info for every tone based on ID
// {
//   name: 'Anger'
//   colour: '#ff5e5e',
//   emoji: '😠',
//   description: 'Could the sender be feeling some sort of injustice, humiliation, or betrayal?'
// }
const toneInfo = {
    anger: {
        name: 'Anger',
        colour: '#ff5e5e',
        emoji: '😠',
        description: 'Could the sender be feeling some sort of injustice, humiliation, or betrayal?'
    },
    fear: {
        name: 'Fear',
        colour: '#6a42e3',
        emoji: '😨',
        description: 'Could the sender be cautious of something? Make sure they\'re hanging on okay!'
    },
    joy: {
        name: 'Joy',
        colour: '#facf43',
        emoji: '😄',
        description: 'It seems like the sender is having a good time!'
    },
    sadness: {
        name: 'Sadness',
        colour: '#5e81ff',
        emoji: '😢',
        description: 'It\'s possible the sender is feeling some sort of loss or disadvantage. Make sure they\'re hanging in okay!'
    },
    analytical: {
        name: 'Analytical',
        colour: '#4ad99b',
        emoji: '🤔',
        description: 'Looks like the sender\'s drawing some conclusions!'
    },
    confident: {
        name: 'Confident',
        colour: '#f7a145',
        emoji: '🤩',
        description: 'It seems like the sender is assured.'
    },
    tentative: {
        name: 'Tentative',
        colour: '#f58ec3',
        emoji: '😕',
        description: 'Could the sender be doubting themselves? Don\'t be afraid to let them know their opinions matter!'
    }
}
export default toneInfo