import React from 'react'
import { clsx } from 'clsx';

const Word = ({ currentWord, guessedLetters, isGameLost }) => {

    const displayWord = currentWord.split("").map((letter,index)=> {
        const shouldRevealLetter = isGameLost || guessedLetters.includes(letter);
        const letterClass = clsx(isGameLost && !guessedLetters.includes(letter) && 'reveal');
        return(
            <span key={index} className={letterClass}>
                {shouldRevealLetter ? letter.toUpperCase() : ""}
            </span>
        )
    });
    
  return (
    <section className='word'>
        {displayWord}
    </section>
  )
}

export default Word