import React from 'react'
import { clsx } from 'clsx';

const Keyboard = ({ onLetterClick,guessedLetters,currentWord, isGameOver }) => {

    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const keyboardElements = alphabet.split("").map((letter,index) => {
        // Check if the letter is already guessed
        const isGuessed = guessedLetters.includes(letter);
        const isCorrect = isGuessed && currentWord.includes(letter);
        const isWrong = isGuessed && !currentWord.includes(letter);
        
        const btnCorrectOrWrongClass = clsx({
            correct: isCorrect,
            wrong: isWrong
        });
        
        return(
            <button 
                key ={index}
                onClick={() => onLetterClick(letter)}
                className={btnCorrectOrWrongClass}
                disabled={isGameOver}
            >{letter.toUpperCase()}
            </button>
        )
    })

  return (
    <section className='keyboard'>
        {keyboardElements}
    </section>
  )
}

export default Keyboard