import React from 'react'


function GenerateButton(props){
    return (
        <div className='is-flex is-justify-content-center mt-6'>
            <button className='button is-warning is-large mt-6' onClick={props.handleClickRandom}>Random Definition</button>
        </div>
    )
}

export default GenerateButton;