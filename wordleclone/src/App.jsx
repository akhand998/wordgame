import { useState } from 'react';
import GuessInput from './components/GuessInput';
import GuessResult from './components/GuessResult';
import {WORD} from './word'
 

function App() {
  
  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * WORD.length);
    return WORD[randomIndex].toUpperCase();
  };
  const [guesses, setGuesses] = useState([]);
  const [targetWord, setTargetWord] = useState(() => getRandomWord());
  
  // Call this when the game starts or resets
  
  const handleGuess = (guess) => {
    if (guesses.length >= 6 || guesses.includes(guess)) return;
    setGuesses([...guesses, guess]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg p-6 rounded w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Wordle Clone</h1>
        <GuessResult guesses={guesses} solution={targetWord} />
        {guesses.includes(targetWord) ? (
          <div className="mt-4 text-green-600 font-semibold">You guessed it!</div>
        ) : guesses.length >= 6 ? (
          <div className="mt-4 text-red-600 font-semibold">Game Over! Word was {targetWord}</div>
        ) : (
          <GuessInput onGuess={handleGuess} />
        )}
        <button  onClick={() => {
            setGuesses([]);
            setTargetWord(getRandomWord());
          }} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ">
          
          New Game
        </button>
      </div>
    </div>
  );
}

export default App;
