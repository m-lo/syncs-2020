const avatars = {
    'a': '1',
    'b': '2',
    'c': '3',
    'd': '4',
    'e': '5',
    'f': '6',
    'h': '7',
    'i': '8',
    'j': '9',
    'k': '10',
    'l': '11',
    'm': '12',
    'n': '13',
    'o': '14',
    'p': '15',
    'q': '1',
    'r': '2',
    's': '3',
    't': '4',
    'u': '5',
    'v': '6',
    'w': '7',
    'x': '8',
    'y': '9',
    'z': '10',
    'default': '11',
}

export function getAvatar(string) {
    return process.env.PUBLIC_URL + '/avatars/' + (avatars[string?.charAt().toLowerCase()] || avatars['default'] || '1') + '.png'
}