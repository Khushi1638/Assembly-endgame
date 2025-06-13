import React from 'react'
import { languages } from '../asset_file/languages'
import { clsx  } from 'clsx'

const Languages = ({ wrongGuessCount }) => {

    const languageChips = languages.map((langObj,index)=> {
        const isWrong = index < wrongGuessCount;
        const languageChipClass = clsx('chip', isWrong && 'lost');
        const styles = {
            backgroundColor: langObj.backgroundColor,
            color: langObj.color
        }
        return(
            <span 
                key={langObj.name} 
                style={styles}
                className= {languageChipClass}
            >{langObj.name}
            </span>
        ) 
    })

  return (
    <section className='language-chips'>
        {languageChips}
    </section>
  )
}

export default Languages