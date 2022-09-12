import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/soul" element={<MainPage />} />
    </Routes>
  );
}

export default App;
