import React from 'react';
import Button from '../../components/Button';
import SBT from '../../assets/images/sbt-256.png';
import SOUL from '../../assets/images/soul-256.png';

const MainPage = () => {
  return (
    <div className="root-container">
      <section className="main-section">
        <div className="container main-section-container">
          <div className="main-section-content main-logo-box">
            <img src={SBT} className="main-logo logo-sbt" alt="logo" />
          </div>
          <div className="main-section-content explanation-box">
            <span className="explanation-title">FEATURE</span>
            <ol>
              <li>
                <span>
                  <span className="txt-pink">
                    0x
                    <span className="txt-hover-cyan">SBT</span>
                  </span>{' '}
                  is a DAO which Evaluates other DAOs
                </span>
              </li>
              <li>
                <span>
                  All DAOs can be evaluated from other DAOs in
                  <span> </span>
                  <span className="txt-pink">
                    0x
                    <span className="txt-hover-cyan">SBT</span>
                  </span>
                </span>
              </li>
              <li>
                <span>The Governance is based on Soul-Bound Tokens</span>
              </li>
              <li>
                <span>The Rating is stored on Klaytn Blockchain</span>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <div className="btn-box">
        <div className="btn-container">
          <Button
            onClick={() => alert('Learn more')}
            className="btn-main-section"
          >
            <div className="main-section-btn-txt">
              <span>Learn more</span>
            </div>
          </Button>
        </div>
        <div className="btn-container">
          <Button
            onClick={() => alert('Launch App')}
            className="btn-main-section btn-white"
          >
            <div className="main-section-btn-txt">
              <span>Launch App</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
