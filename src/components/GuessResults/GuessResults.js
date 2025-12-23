import React from 'react';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessResults({answer, prevGuesses}) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} answer={answer} value={prevGuesses[num]}/>
      ))}
    </div>
  );
}

export default GuessResults;
