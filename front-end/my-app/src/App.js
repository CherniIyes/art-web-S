import './App.css';
import Home from './Components/Home.jsx';
import { useState } from 'react';
import "./Components/nav.css"
// import test from "../src/pics/logoo.png";
import AddCard from './Components/AddCard.jsx';
function App() {
  const [view, setView] = useState('home')

  const switchView = (option) => {
    setView(option)
  }

  return (
    <div className="App">
      <div className='stic'>
      <div className='Header'>
        <div className='logoo'>
          {/* <BiAtom /> */}
          {/* Use the imported image */}
        </div>
        <div>
          <div className='nav'>
            <p onClick={() => switchView('home')} className='lii'>Home</p>
            <p  onClick={() => switchView('posts')} className='lii'>Cards</p>
          </div>
        </div>
      </div>
    </div>
    {view === 'home' && <Home/>}
      {view === 'Cards' && <AddCard/>}    </div>
  );
}

export default App;