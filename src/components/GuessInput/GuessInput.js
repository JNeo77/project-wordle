import React from 'react';

function GuessInput({ handleGuesses, isGameOver }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault()

    handleGuesses(guess)
    
    setGuess('')
  }
  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text"
        pattern="\w{5,5}"
        title="5 letter word"
        value={guess}
        onChange={event => setGuess(event.target.value.toUpperCase())}
        required
        disabled={isGameOver}
      />
    </form>
  );
}

export default GuessInput;
