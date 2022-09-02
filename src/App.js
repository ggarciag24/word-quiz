import './index.css';
import Header from './components/Header';
import GenerateButton from './components/GenerateButton';
import GeneratedDefinition from './components/GeneratedDefinition';
import Answer from './components/Answer';


function App() {



  function handleClickRandom(){
    console.log('random')
    //get a random word from a word list
    //use that word to fetch from the dictionary API
    //pass the information to <GeneratedDefinition /> to display the definition
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log('handling the guess')
  }

  return (
    <div className="App">
    <Header />
    <GenerateButton  handleClickRandom={handleClickRandom}/>
    <GeneratedDefinition /> 
    <Answer handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
