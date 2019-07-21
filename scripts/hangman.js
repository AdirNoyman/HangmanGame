// jshint esversion: 8
'use strict';

class HangMan {

    constructor(word, guesses) {

        this.word = word.toLowerCase().split('');
        this.guesses = guesses;
        this.guessedLetters = [];
        this.gameSatus = 'playing';

    }

    getPuzzle() {

        let puzzle = '';


        document.querySelector('#status').textContent = this.gameSatus;

        this.word.forEach(letter => {

            if (this.guessedLetters.includes(letter) || letter === ' ') {

                puzzle += `<span>${letter}</span>`;

            } else {

                puzzle += '<span>*</span>';

            }

        });

        document.querySelector('#puzzle').innerHTML = puzzle;
        document.querySelector('#game-status').innerHTML = `Number of Guesses remained: <span id="guesses"></span>`;
        document.querySelector('#guesses').textContent = this.guesses;
        console.log(this.word);

    }

    makeGuess(guess) {

        guess = guess.toLowerCase();
        const isUniqe = !this.guessedLetters.includes(guess);
        const isBadGuess = !this.word.includes(guess);

        if (this.gameSatus !== 'playing') { return; };

        if (isUniqe && isBadGuess === false) {

            this.guessedLetters.push(guess);
        }

        if (isBadGuess) {

            this.guesses--;

        }

        this.calcStatus();
        this.getStatusMessage();

    }

    calcStatus() {

        let countWordEl = this.word.filter(letter => letter !== ' ');
        countWordEl = new Set(countWordEl);

        if (!this.guesses && this.guessedLetters.length !== countWordEl.length) {

            this.gameSatus = 'failed';

        } else if (this.guessedLetters.length === countWordEl.size) {

            this.gameSatus = 'finished';

        }

    }

    getStatusMessage() {

        if (this.gameSatus === 'failed') {

            document.querySelector('#game-status').textContent = `Nice try! The word was "${this.word.join('')}".`

        } else if (this.gameSatus === 'finished') {

            document.querySelector('#game-status').textContent = 'You did it! Great work!';

        }


    }

}

