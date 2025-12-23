import React from 'react';

function Banner({ hasWon, numOfGuesses, answer }) {

  return (
    <div className={`${hasWon ? "happy" : "sad"} banner`}>
      {
        hasWon ? 
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numOfGuesses} guesses</strong>.
        </p> :
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      }
    </div>
  )
}

export default Banner;
