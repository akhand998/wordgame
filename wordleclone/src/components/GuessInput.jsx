import { useState } from 'react';

function GuessInput({ onGuess }) {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length !== 5) return;
    onGuess(guess.toUpperCase());
    setGuess('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex justify-center">
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        maxLength={5}
        className="border border-gray-400 px-5 py-3 rounded w-56 text-center text-lg uppercase tracking-widest shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter guess"
      />
    </form>
  );
}

export default GuessInput;
