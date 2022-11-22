let userName = prompt(`Welcome to Wordel! What's your name?`);
let again = false;

// array of possible words to guess
let arr1 = ['about', 'above', 'after', 'again', 'along', 'among', 'asked', 'based', 'began', 'being', 'black', 'cases', 'cause', 'child', 'class', 'clear', 'could', 'court', 'death', 'early', 'every', 'field', 'first', 'force', 'found', 'given', 'going', 'great', 'group', 'heart', 'house', 'human', 'known', 'large', 'later', 'least', 'level', 'light', 'local', 'major', 'means', 'might', 'model', 'money', 'never', 'night', 'north', 'often', 'order', 'other', 'party', 'place', 'point', 'power', 'press', 'quite', 'right', 'seems', 'sense', 'shall', 'short', 'shown', 'since', 'small', 'south', 'state', 'still', 'study', 'table', 'taken', 'terms', 'their', 'there', 'these', 'thing', 'think', 'third', 'those', 'three', 'times', 'total', 'trade', 'under', 'until', 'using', 'value', 'water', 'where', 'which', 'while', 'white', 'whole', 'whose', 'woman', 'women', 'words', 'world', 'would', 'years', 'young'];

function wordel(again, arrOfWords) {
  if (again || confirm(`Would you like to play Wordel ${userName}?`)) {
    let wordOfTheDay = arrOfWords[Math.floor(Math.random() * arrOfWords.length)];

    // gameplay('happy'); // input a specific word for testing purposes
    gameplay(wordOfTheDay);
    return;
  }
  alert('Your loss');
  return;

  function gameplay(word) {
    console.log(word); // uncomment for hacks
    word = word.split('');

    // makes sure it passes only if its a number that is greater than 0
    let lives = prompt('How many lives do you want?');

    while (isNaN(lives) || lives <= 0) lives = prompt('Please enter a valid number');

    let final = ['*', '*', '*', '*', '*'];
    let winOrLose = 'Play Again?';

    while (lives > 0) {
      // makes sure it passes only if its five letters
      let guess = prompt('Guess a five letter word');

      while (guess.length !== 5 || (/^[a-zA-Z]+$/.test(guess) === false)) guess = prompt('Please enter five letters');

      let wrongPosition = [];
      guess = guess.toLowerCase().split('');
      lives--;

      guess.forEach((el, i) => {
        if (el === word[i]) {
          final[i] = el;
        } else if (word.includes(el)) {
          final[i] = '*';
          wrongPosition.push(el);
        } else {
          final[i] = '*';
        }
      })

      let after = ` but ${wrongPosition} was in the wrong postion`;
      if (wrongPosition.length === 0) {
        alert(`You guessed ${final} right`);
      } else {
        alert(`You guessed ${final} right${after}`);
      }

      if (guess.join('') === word.join('')) {
        alert('Congrats!');
        lives = 0;
      } else if (lives === 0) {
        alert(`The word was ${word.join('')}`);
        winOrLose = 'Try Again?';
      } else {
        alert(`You have ${lives} lives left`);
      }
    };
    again = true;
    confirm(`${winOrLose}`) ? wordel(again, arrOfWords) : alert('See you soon!');
  }
}

wordel(again, arr1);
