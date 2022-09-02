import React from 'react'


function Answer(){
    return (
        <div className='is-flex is-flex-direction-column is-justify-content-center mt-6'>
            <input className='answer-input input is-info' type='text' id='answer' name='answer' placeholder='Answer goes here...'/>
            <button className='guess-btn has-background-info has-text-white mt-6' type='submit'>Guess</button>
        </div>
    )
}

export default Answer;