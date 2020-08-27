import React, { useState } from 'react';
import { NavBar } from './components/Navbar';
import { Profile } from './pages/Profile';
import { Objects} from './pages/Objects';
import './App.css';

const App = () => {
  const [page, setPage] = useState('home');

  const handleClick = (e) => {
    setPage(e.key);
  }

  return (
    <div className="App">
      <NavBar handleClick={handleClick} />
      {
        page === 'home' ? <Objects /> : <Profile />
      }
    </div>
  );
}

export default App;
