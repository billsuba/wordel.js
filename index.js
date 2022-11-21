let userName = prompt(`Welcome to Wordel! What's your name?`);

function wordel(again) {
  // array of possible words to guess
  let objOfWords = ['about', 'above', 'after', 'again', 'along', 'among', 'asked', 'based', 'began', 'being', 'black', 'cases', 'cause', 'child', 'class', 'clear', 'could', 'court', 'death', 'early', 'every', 'field', 'first', 'force', 'found', 'given', 'going', 'great', 'group', 'heart', 'house', 'human', 'known', 'large', 'later', 'least', 'level', 'light', 'local', 'major', 'means', 'might', 'model', 'money', 'never', 'night', 'north', 'often', 'order', 'other', 'party', 'place', 'point', 'power', 'press', 'quite', 'right', 'seems', 'sense', 'shall', 'short', 'shown', 'since', 'small', 'south', 'state', 'still', 'study', 'table', 'taken', 'terms', 'their', 'there', 'these', 'thing', 'think', 'third', 'those', 'three', 'times', 'total', 'trade', 'under', 'until', 'using', 'value', 'water', 'where', 'which', 'while', 'white', 'whole', 'whose', 'woman', 'women', 'words', 'world', 'would', 'years', 'young'];

  if (again === true || confirm(`Would you like to play Wordel ${userName}?`)) {
    let wordOfTheDay = objOfWords[Math.floor(Math.random() * objOfWords.length)];

    // gameplay('happy'); // input a specific word for testing purposes

    gameplay(wordOfTheDay);
    return;
  }
  alert('Your loss');
  return;

  function gameplay(word) {
    // console.log(word); // uncomment for hacks

    word = word.split('');

    let lives = Number(prompt('How many lives do you want?'));

    while (isNaN(lives)) lives = prompt('Please enter a valid number');

    let final = ['*', '*', '*', '*', '*'];

    let winOrLose = 'Play Again?';

    while (lives > 0) {
      let guess = prompt('Guess a five letter word');

      while (guess.length !== 5) {
        guess = prompt('Please enter five letters');
        if (/^[a-zA-Z]+$/.test(guess) === false) guess = 0;
      }
      guess = guess.toLowerCase().split('');

      guess.forEach(el => final[word.indexOf(el)] = el);

      let wrongPosition = [];

      for (let i = 0; i < 5; i++) {
        if (guess[i] === word[i]) {
          final[i] = guess[i];
        } else if (word.includes(guess[i])) {
          final[i] = '*';
          wrongPosition.push(guess[i]);
        } else {
          final[i] = '*';
        }
      }

      let after = ` but ${wrongPosition} was in the wrong postion`;
      if (wrongPosition.length <= 0) {
        alert(`You guessed ${final} right`);
      } else {
        alert(`You guessed ${final} right${after}`);
        after = 0;
      }

      lives--;

      if (guess.join('') == word.join('')) {
        alert('Congrats!');
        lives = 0;
      } else if (lives === 0) {
        alert(`The word was ${word.join('')}`);
        winOrLose = 'Try Again?';
      } else {
        alert(`You have ${lives} lives left`);
      }
    };
    let again = true;
    confirm(`${winOrLose}`) ? wordel(again) : alert('See you soon!');
  }
}

wordel();

// example input ('1About!.aboVe36.afteR') => result ['about', 'above', 'after']

// let alphabeth = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// console.log(prompt('Ctrl + Shift + V').toLowerCase().split('').filter(el => alphabeth.includes(el)).join('').match(/.{1,5}/g).sort());