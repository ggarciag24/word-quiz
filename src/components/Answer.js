import React from 'react'


function Answer(props){
    return (
        <div className='is-flex is-flex-direction-column is-justify-content-center mt-6'>
            <button onClick={props.handleHint} className='hint-btn has-background-black-bis has-text-warning mb-3'>Hint?</button>
            {props.correct === true && <h1 className='has-text-success is-align-self-center is-size-1 mb-2'>CORRECT!!</h1>}
            {props.wrong === true && <h1 className='has-text-danger is-align-self-center is-size-1 mb-2'>WRONG!!</h1>}
            <form onSubmit={(e) => props.handleSubmit(e, e.target[0].value)}>
            <input className='answer-input input is-info' type='text' id='answer' name='answer' placeholder='Answer goes here...'/>
            <button className='guess-btn has-background-info has-text-white mt-6 mb-3' type='submit'>Guess</button>
            </form>
            

        </div>
    )
}

export default Answer;