import React from 'react'


function GeneratedDefinition(props){
    return (
        <div>
        <div className='def is-flex is-justify-content-center mt-6'>
            <p className='def-child'>{props.state.definition}</p>
            { props.state.definition  === '' && <p> CLICK THE BUTTON ABOVE!</p>}
        </div>
        
        { props.hint >= 1 && <div className='def is-flex is-justify-content-center mt-6'>
            <p className='def-child'> Part of Speech: {props.state.hintOne}</p>
            </div>}

        { props.hint === 2 && <div className='def is-flex is-justify-content-center mt-6'>
            <p className='def-child'>Definition #2: {props.state.hintTwo}</p>
            </div>}

        </div>
    )
}

export default GeneratedDefinition;