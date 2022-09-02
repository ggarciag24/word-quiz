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
    answer: ''
  })

  const [isResult, setIsResult] = React.useState(false)



  function handleClickRandom(){
    const num = getRandomNum(0,2286);
    const word = WordList[num];

    setIsState((prev) => {
      return { ...prev,
        answer: word
      }
    })

    setIsResult(false)

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json())
    .then(data => setIsState((prev) => {
      return { ...prev,
        definition: data[0].meanings[0].definitions[0].definition
      }
    }))
  }


  console.log(isState)

  function handleSubmit(e, guess){
    e.preventDefault();

    if(guess === isState.answer){
      setIsResult(true);
    } else {
      setIsResult(false)
    }
  }

  function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

  return (
    <div className="App">
    <Header />
    <GenerateButton  handleClickRandom={handleClickRandom}/>
    <GeneratedDefinition state={isState}/> 
    <Answer handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
