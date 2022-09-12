import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;
