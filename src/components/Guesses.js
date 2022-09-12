import React from 'react'



function Guesses(props){
 
    return (
        <div className='guess-list'>
           <p>{props.word}</p>
        </div>
    )
}



export default Guesses