// jshint esversion: 8
'use strict';

let game1;

window.addEventListener('keypress', event => {

    const guess = event.key;
    game1.makeGuess(guess);
    game1.getPuzzle();

});


const startGame = async () => {

    const puzzle = await getPuzzleWord(2);
    game1 = new HangMan(puzzle, 5);
    game1.getPuzzle();

};

document.querySelector('#reset').addEventListener('click', startGame);

startGame();

// getPuzzleWord("2").then(puzzle => {

//     console.log(puzzle);


// }).catch(error => {

//     console.log(`Error: ${error}`);
// });



getCountry('US').then(country => {


    console.log(`The country is ${country.name}.`);


}).catch(error => {

    console.log(`Error: ${error}`);

});



getLocation().then(data => {

    return getCountry(data.country);

}).then(country => {

    console.log(country.name);


}).catch(err => {

    console.log(`Error: ${err}`);
});

// getCurrentCountry().then(country => {

//     console.log(country.name);

// }).catch(error => {

//     console.log(`Error: ${error}`);
// });





// ip token: c0757743a4ef89
