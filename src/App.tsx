import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import SoulPage from './pages/SoulPage';
import RatingPage from './pages/Rating';

function App() {
  const openModal = () => {
    const modalContainer = document.querySelector('.modal-container');
    modalContainer?.classList.remove('hidden');
    console.log('open modal');
  };
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/soul" element={<SoulPage />} />
            <Route path="/rating" element={<RatingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
