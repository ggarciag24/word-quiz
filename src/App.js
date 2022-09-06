import React from 'react';
import './index.css';
import Header from './components/Header';
import GenerateButton from './components/GenerateButton';
import GeneratedDefinition from './components/GeneratedDefinition';
import Answer from './components/Answer';
import WordList from './data/wordlist.json'


function App() {

  const [isState, setIsState] = React.useState({
    definition: '',
    answer: '',
    hintOne: '',
    hintTwo: '',
  })

  const [isHintCounter, setIsHintCounter] = React.useState(0)
  const [isCorrect, setIsCorrect] = React.useState(false)
  const [isWrong, setIsWrong] = React.useState(false)




  function handleClickRandom(){
    const num = getRandomNum(0,2286);
    const word = WordList[num];

    setIsState((prev) => {
      return { ...prev,
        answer: word
      }
    })

    setIsCorrect(false)
    setIsWrong(false)
    setIsHintCounter(0)


    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json())
    .then(data => setIsState((prev) => {
      return { ...prev,
        definition: data[0].meanings[0].definitions[0].definition,
        hintOne: data[0].meanings[0].partOfSpeech,
        hintTwo: data[0].meanings[0].definitions[1].definition
      }
    }
    ))
  }


  console.log(isState)

  function handleSubmit(e, guess){
    e.preventDefault();

    if(guess === isState.answer){
      setIsCorrect(true);
    } else {
      setIsWrong(true);
    }
  }

  function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }


  function handleHint(){
    setIsHintCounter(prev => prev + 1);
  }

  return (
    <div className="App">
    <Header />
    <GenerateButton  handleClickRandom={handleClickRandom}/>
    <GeneratedDefinition state={isState} hint={isHintCounter}/> 
    <Answer handleSubmit={handleSubmit} correct={isCorrect} wrong={isWrong} handleHint={handleHint}/>
    </div>
  );
}

export default App;
