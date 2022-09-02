import './index.css';
import Header from './components/Header';
import GenerateButton from './components/GenerateButton';
import GeneratedDefinition from './components/GeneratedDefinition';
import Answer from './components/Answer';


function App() {
  return (
    <div className="App">
    <Header />
    <GenerateButton />
    <GeneratedDefinition /> 
    <Answer />
    </div>
  );
}

export default App;
