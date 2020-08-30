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
        colour: ['#b11d1d', '#ff5e5e', '#ff5e5e'],
        emoji: '😠',
        description: 'Could the sender be feeling some sort of injustice, humiliation, or betrayal?',
        detail: ['Social media is often an outlet where users can vent, whether it be actively through verbal attack or passive, with silent hostility. Often, someone\'s anger may be evoked if they feel like there has been some injustice, conflict, humiliation, negligence of betrayal.', 
        'If your messages on social media appear to have an angry tone, consider what\'s happening in your life, and how your friends could help you out. Or if it\'s unintentional, think about how you can change your written tone to communicate more effectively!',
        'If you notice your friends often seem passively angry, perhaps reach out to them about what could be troubling them. Or, if you find that they may be actively attacking you, consider your relationship and think about what may need to change about it.']
    },
    fear: {
        name: 'Fear',
        colour: ['#345dcc', '#6a42e3', '#b25584'],
        emoji: '😨',
        description: 'Could the sender be cautious of something? Make sure they\'re hanging on okay!',
        detail: ['Often, social media users express every facet of their lives, even reveal some things they would hide otherwise.',
                'Do you ever express things you\'re anxious or scared about online?']
    },
    joy: {
        name: 'Joy',
        colour: ['#facf43', '#ff9600', '#e342b5'],
        emoji: '😄',
        description: 'It seems like the sender is having a good time!',
        detail: [
            'FROM RED VELVET!'
        ]
    },
    sadness: {
        name: 'Sadness',
        colour: ['#64d2d9', '#5e81ff', '#3954bf'],
        emoji: '😢',
        description: 'It\'s possible the sender is feeling some sort of loss or disadvantage. Make sure they\'re hanging in okay!',
        detail: [
            'Big sad'
        ]
    },
    analytical: {
        name: 'Analytical',
        colour: ['#4ad99b', '#56d44d', '#eeff00'],
        emoji: '🤔',
        description: 'Looks like the sender\'s drawing some conclusions!',
        detail: [
            'Thinking'
        ]
    },
    confident: {
        name: 'Confident',
        colour: ['#f7a145', '#ff5e00', '#cf0035'],
        emoji: '🤩',
        description: 'It seems like the sender is assured.',
        detail: [
            'Yaassss'
        ]
    },
    tentative: {
        name: 'Tentative',
        colour: ['#f58ec3', '#d931d2', '#3f005c'],
        emoji: '😕',
        description: 'Could the sender be doubting themselves? Don\'t be afraid to let them know their opinions matter!',
        detail: [
            'hmmmmmm'
        ]
    }
}
export default toneInfo