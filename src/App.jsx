import React from 'react'
import Header from './components/Header'
import Status from './components/Status'
import Languages from './components/Languages'
import Word from './components/Word'
import Keyboard from './components/Keyboard'
import { getRandomWord } from './asset_file/farewellTextFn';
import { languages } from './asset_file/languages';
import Confetti from 'react-confetti'

const App = () => {

  
  //the word to guess
  const [currentWord, setCurrentWord] = React.useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  const [isAnimating, setIsAnimating] = React.useState(false);

  console.log(currentWord)
  console.log(guessedLetters)
  //variable derived from state
  const wrongGuessCount = guessedLetters.filter(letter => !currentWord.word.includes(letter)).length;
  const isGameWon = currentWord.word.split('').every(letter => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  const handleLetterGuess = (letter) => {
    if(guessedLetters.includes(letter)) {
      return; // Letter already guessed
    } else{
      setGuessedLetters((prevGuessedLetters) => [...prevGuessedLetters, letter])
    }
  }

  const newGame = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentWord(getRandomWord());
      setGuessedLetters([]);
      setIsAnimating(false);
    },500)
  }
 
  return (
    <main className= {`game-container ${isAnimating ? 'fade-out' : 'fade-in'}`}>
      {isGameWon && <Confetti />}
      <Header />
      <Status 
        currentWord= {currentWord.word}
        guessedLetters= {guessedLetters}
        wrongGuessCount= {wrongGuessCount}
        isGameWon= {isGameWon}
        isGameLost= {isGameLost}
      />
      <Languages 
        wrongGuessCount= {wrongGuessCount}
      />
      <p className='hint'>Hint: {currentWord.hint}</p>
      <Word 
        currentWord= {currentWord.word}
        guessedLetters= {guessedLetters}
        isGameLost= {isGameLost}
      />
      <Keyboard 
        onLetterClick={handleLetterGuess}
        guessedLetters={guessedLetters}
        currentWord={currentWord.word}
        isGameOver={isGameOver}
      />

      {isGameOver && <button className='new-game' onClick={newGame}>New Game</button>}
    </main>
  )
}

export default App