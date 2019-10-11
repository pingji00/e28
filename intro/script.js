let app = new Vue({
    el: '#app',
    data: {
        'playerName': null,
        'guess': null,
        'guesses': [],
        'guessesDetailed': [
            { guess: 15, result: 'low' },
            { guess: 80, result: 'high' },
            { guess: 30, result: 'low' },
        ]
    },
});