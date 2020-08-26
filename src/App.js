import React, { useState } from 'react';
import { NavBar } from './components/Navbar';
import { Profile } from './pages/Profile';
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
        page === 'home' ? <h1>Home</h1> : <Profile />
      }
    </div>
  );
}

export default App;
