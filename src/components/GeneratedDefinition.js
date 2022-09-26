import React from 'react'


function GeneratedDefinition(props){
    return (
        <div>
        <div className='def is-flex is-justify-content-center mt-6' data-testid='def-1'>
            <p className='def-child'>{props.state.definition}</p>
        </div>
        
        { props.hint >= 1 && <div className='def is-flex is-justify-content-center mt-6' data-testid='partOfSpeech'>
            <p className='def-child'> Part of Speech: {props.state.hintOne}</p>
            </div>}

        { props.hint >= 2 && <div className='def is-flex is-justify-content-center mt-6' data-testid='def-2'>
            <p className='def-child'>Definition #2: {props.state.hintTwo}</p>
            </div>}

        </div>
    )
}

export default GeneratedDefinition;