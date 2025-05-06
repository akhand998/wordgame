function getLetterStatus(guess, solution) {
    return guess.split('').map((char, idx) => {
      if (solution[idx] === char) return 'correct';
      if (solution.includes(char)) return 'present';
      return 'absent';
    });
  }
  
  function GuessResult({ guesses, solution }) {
    const TOTAL_GUESSES = 6;
    const guessRows = [...guesses];
  
    
    while (guessRows.length < TOTAL_GUESSES) {
      guessRows.push('');
    }
  
    return (
      <div className="space-y-2">
        {guessRows.map((guess, idx) => {
          const letters = guess.padEnd(5).split('');
          const status = guess ? getLetterStatus(guess, solution) : Array(5).fill(null);
  
          return (
            <div key={idx} className="flex space-x-1 justify-center">
              {letters.map((char, i) => {
                let bg = 'bg-white border border-gray-300';
                if (status[i]) {
                  bg =
                    status[i] === 'correct'
                      ? 'bg-green-500 text-white'
                      : status[i] === 'present'
                      ? 'bg-yellow-500 text-white'
                      : 'bg-gray-300 text-white';
                }
  
                return (
                  <div
                    key={i}
                    className={`${bg} w-10 h-10 flex items-center justify-center font-bold uppercase rounded`}
                  >
                    {char.trim()}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
  
  export default GuessResult;
  