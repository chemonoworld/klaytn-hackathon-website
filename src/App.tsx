import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import { BrowserRouter } from 'react-router-dom';
import SoulPage from './pages/SoulPage';

// Main / Soul page 그냥 recoil로 전역 상태관리 하는게 나을 듯
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage mainContent={true} />} />
          <Route path="/soul" element={<SoulPage mainContent={false} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
