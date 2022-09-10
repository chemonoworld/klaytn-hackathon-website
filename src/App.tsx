import React from 'react';
import logo from './assets/images/sbt-256.png';
// import logo from './assets/images/sbt-256-2.png';
import './App.scss';
import Button from './components/Button';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="root-container">
        <div className="wrapper">
          <div className="App-logo-box">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="btn-box">
            <Button onClick={() => alert('click')} className="test-btn">
              <div>
                <span>Klaim your soul</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
