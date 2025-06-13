import React from 'react'
import { getFarewellText } from '../asset_file/farewellTextFn';
import { languages } from '../asset_file/languages';
import { clsx } from 'clsx';

const Status = ( {currentWord, guessedLetters, wrongGuessCount, isGameWon, isGameLost}) => {
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessWrong = lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  const gameStatusClass = clsx('game-status', {
    won: isGameWon,
    lost: isGameLost,
    farewell: isLastGuessWrong && !isGameOver,
    'active': isGameOver || isLastGuessWrong,
    'not-active': !isGameOver && !isLastGuessWrong
  });

  function renderStatus() {
    if(!isGameOver && isLastGuessWrong) {
      return(
         <p className='farewell-text'>
          { getFarewellText(languages[wrongGuessCount - 1].name) }
        </p>
      )
    }

    if(isGameWon){
      return(
        <>
          <h2>You Win!</h2>
          <p>Well done! 🎉</p>
        </>
      )
    }

    if(isGameLost){
      return(
        <>
          <h2>You Lose!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      )
    }

    return null;
  }

  return (
    <section className={gameStatusClass}>
      {renderStatus()}
    </section>
  )
}

export default Status