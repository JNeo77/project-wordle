import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Banner from '../Banner/Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [prevGuesses, setPrevGuesses] = React.useState([])

  const isMaxGuesses = prevGuesses.length >= NUM_OF_GUESSES_ALLOWED
  const hasWon = prevGuesses.includes(answer)
  const isGameOver = hasWon || isMaxGuesses
  
  function handleGuesses(guess) {
    setPrevGuesses([...prevGuesses, guess])
  }

  return (
    <>
      <GuessResults answer={answer} prevGuesses={prevGuesses} />
      <GuessInput isGameOver={isGameOver} handleGuesses={handleGuesses} />
      {isGameOver && 
        <Banner hasWon={hasWon} numOfGuesses={prevGuesses.length} answer={answer} />
      }
    </>
  )
}

export default Game;
