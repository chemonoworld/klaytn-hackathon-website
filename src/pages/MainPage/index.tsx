import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import SBT from '../../assets/images/sbt-256.png';
import SOUL from '../../assets/images/soul-256.png';
import './mainpage.scss';
import JOYSTICK from '../../assets/images/joystick-64.png';
import JOYSTICK_RIGHT from '../../assets/images/joystick-right-64.png';

const MainPage = () => {
  const [SBTorSOUL, setSBTorSOUL] = useState(true); // true : SBT false: SOUL
  const [isLogoTranslate, setIsLogoTranslate] = useState(false);
  useEffect(() => {
    if (!isLogoTranslate) {
      const mainLogo = document.querySelector('.main-logo');
      mainLogo?.setAttribute('class', 'main-logo main-logo-appear');
    }
  }, [isLogoTranslate]);
  const handleCarousel = () => {
    const mainLogo = document.querySelector('.main-logo');
    mainLogo?.setAttribute('class', 'main-logo main-logo-init');
    setIsLogoTranslate(true);
    const joystick = document.querySelector('.btn-joystick');
    joystick?.setAttribute('class', 'btn-joystick btn-joystick-clicked');
    const timer = setTimeout(() => {
      const mainLogo = document.querySelector('.main-logo');
      mainLogo?.setAttribute('class', 'main-logo');
      setIsLogoTranslate(false);
      joystick?.setAttribute('class', 'btn-joystick');
      clearTimeout(timer);
    }, 200);
    if (SBTorSOUL) {
      setSBTorSOUL(false);
      const btn = document.querySelectorAll('.btn-main-section')[0];
      const whiteBtn = document.querySelectorAll('.btn-main-section')[1];
      const textInPinkBtn = btn.querySelector('span');
      const textInWhiteBtn = whiteBtn.querySelector('span');
      btn?.setAttribute('class', 'button btn-main-section btn-red');
      textInPinkBtn?.innerText
        ? (textInPinkBtn.innerText = 'Klaim your soul')
        : alert('button color shift error');
      textInWhiteBtn?.innerText
        ? (textInWhiteBtn.innerText = 'Download Extension')
        : alert('button color shift error');
    } else {
      setSBTorSOUL(true);
      const btn = document.querySelectorAll('.btn-main-section')[0];
      const whiteBtn = document.querySelectorAll('.btn-main-section')[1];
      const textInRedBtn = btn.querySelector('span');
      const textInWhiteBtn = whiteBtn.querySelector('span');
      btn?.setAttribute('class', 'button btn-main-section');
      textInRedBtn?.innerText
        ? (textInRedBtn.innerText = 'Learn more')
        : alert('button color shift error');
      textInWhiteBtn?.innerText
        ? (textInWhiteBtn.innerText = 'Launch app')
        : alert('button color shift error');
    }
  };
  const handleClickMainBtns = () => {
    alert('hihi');
  };
  return (
    <div className="root-container">
      <section className="main-section">
        <div className="container main-section-container">
          <div className="main-section-content main-logo-container">
            {SBTorSOUL === true ? (
              <img src={SBT} className="main-logo logo-sbt" alt="logo" />
            ) : (
              <img src={SOUL} className="main-logo logo-sbt" alt="logo" />
            )}
            <div onClick={handleCarousel} className="btn-joystick"></div>
          </div>
          <div className="main-section-content explanation-box">
            <span className="explanation-title">FEATURE</span>
            {SBTorSOUL === true ? (
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
                  <span>
                    The{' '}
                    <span className="txt-pink txt-hover-cyan">Governance</span>{' '}
                    is based on Soul-Bound Tokens
                  </span>
                </li>
                <li>
                  <span>
                    The <span className="txt-pink txt-hover-cyan">Rating</span>{' '}
                    is stored on Klaytn Blockchain
                  </span>
                </li>
              </ol>
            ) : (
              <ol>
                <li>
                  <span>
                    <span className="txt-red">
                      0x
                      <span className="txt-hover-cyan">SOUL</span>
                    </span>{' '}
                    is a SBT to move your soul to Twitter
                  </span>
                </li>
                <li>
                  <span>
                    <span className="txt-red txt-hover-cyan">SOUL</span> is
                    connected to your address and Twitter ID
                  </span>
                </li>
                <li>
                  <span>
                    Extension shows your{' '}
                    <span className="txt-red txt-hover-cyan">SOUL</span> on
                    Twitter
                  </span>
                </li>
                <li>
                  <span>
                    Extension shows the list of{' '}
                    <span className="txt-red txt-hover-cyan">DAOs</span> you
                    belong to
                  </span>
                </li>
                <li>
                  <span className="new-line-float-left">
                    Extension show the{' '}
                    <span className="txt-red txt-hover-cyan">rating</span> of
                    the DAOs you belong to
                  </span>
                </li>
              </ol>
            )}
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
