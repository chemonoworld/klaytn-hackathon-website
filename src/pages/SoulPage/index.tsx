import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import SBT from '../../assets/images/sbt-256.png';
import SOUL from '../../assets/images/soul-256.png';
import '../MainPage/mainpage.scss';
import { Link } from 'react-router-dom';

type mainContentProps = {
  // true : SBT false: SOUL
  mainContent: boolean;
};

const MainPage = ({ mainContent }: mainContentProps) => {
  const [SBTorSOUL, setSBTorSOUL] = useState(mainContent);
  const [isLogoTranslate, setIsLogoTranslate] = useState(false);
  const [isJoystickTrans, setIsJoystickTrans] = useState(false);
  useEffect(() => {
    if (!isJoystickTrans) {
      const joystick = document.querySelector('.btn-joystick');
      joystick?.setAttribute('class', 'btn-joystick btn-joystick-clicked');
    }
    if (!isLogoTranslate) {
      const mainLogo = document.querySelector('.main-logo');
      mainLogo?.setAttribute('class', 'main-logo main-logo-appear');
    }
  }, [isJoystickTrans, isLogoTranslate]);
  const startJoystickAnim = () => {
    const joystick = document.querySelector('.btn-joystick');
    joystick?.setAttribute('class', 'btn-joystick btn-joystick-clicked');
    setIsJoystickTrans(true);
    const joystickTimer = setTimeout(() => {
      joystick?.setAttribute('class', 'btn-joystick');
      setIsJoystickTrans(false);
      clearTimeout(joystickTimer);
    }, 500);
  };
  const handleSlide = () => {
    const mainLogo = document.querySelector('.main-logo');
    mainLogo?.setAttribute('class', 'main-logo main-logo-init');
    setIsLogoTranslate(true);
    const logoTimer = setTimeout(() => {
      const mainLogo = document.querySelector('.main-logo');
      mainLogo?.setAttribute('class', 'main-logo');
      setIsLogoTranslate(false);
      clearTimeout(logoTimer);
    }, 500);
    startJoystickAnim();
  };
  const handleClickMainBtns = () => {
    alert('click button');
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
            <Link to="/">
              <div onClick={handleSlide} className="btn-joystick"></div>
            </Link>
          </div>
          <div className="main-section-content explanation-box">
            <span className="explanation-title">FEATURE</span>
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
                  <span className="txt-red txt-hover-cyan">rating</span> of the
                  DAOs you belong to
                </span>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <div className="btn-box">
        <div className="container">
          <div className="btn-container">
            <Button
              onClick={handleClickMainBtns}
              className="btn-main-section btn-red"
            >
              <div className="main-section-btn-txt">
                <span>Klaim your soul</span>
              </div>
            </Button>
          </div>
          <div className="btn-container">
            <Button
              onClick={handleClickMainBtns}
              className="btn-main-section btn-white"
            >
              <div className="main-section-btn-txt">
                <span>Download extension</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
