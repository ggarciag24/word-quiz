import React from 'react'


function GeneratedDefinition(props){
    return (
        <div className='def is-flex is-justify-content-center mt-6'>
            <p>{props.state.definition}</p>
            { props.state.definition  === '' && <p> CLICK THE BUTTON ABOVE!</p>}
        </div>
    )
}

export default GeneratedDefinition;