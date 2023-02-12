import './App.css';
import logo from './FreeCodeCamp_logo.png';
import Board from './components/Board';

const App = () => {

  return (
    <div className="App">
      <img src={logo} className="logo"></img>
      <h1 className='title'>Language Tutorials for Beginner Coders</h1>
      <Board />
    </div>
  )
}

export default App