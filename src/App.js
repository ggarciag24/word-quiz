import './index.css';
import Header from './components/Header'
import GenerateButton from './components/GenerateButton';
import GeneratedDefinition from './components/GeneratedDefinition';


function App() {
  return (
    <div className="App">
    <Header />
    <GenerateButton />
    <GeneratedDefinition /> 
    </div>
  );
}

export default App;
