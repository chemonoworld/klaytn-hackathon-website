import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import SBT from '../../assets/images/sbt-256.png';
import SOUL from '../../assets/images/soul-256.png';
import './mainpage.scss';
import { test } from '../../modules/useCaver';
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
    test();
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
            <Link to="/soul">
              <div onClick={handleSlide} className="btn-joystick"></div>
            </Link>
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
                <span>
                  The{' '}
                  <span className="txt-pink txt-hover-cyan">Governance</span> is
                  based on Soul-Bound Tokens
                </span>
              </li>
              <li>
                <span>
                  The <span className="txt-pink txt-hover-cyan">Rating</span> is
                  stored on Klaytn Blockchain
                </span>
              </li>
              <li>
                <span>
                  Initially, the rating committee is composed of{' '}
                  <span>
                    <a
                      href="https://dao.postech.ac.kr/"
                      className="txt-pink txt-hover-cyan cursor-ptr"
                      target="_blank"
                    >
                      PDAO
                    </a>
                  </span>{' '}
                </span>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <div className="btn-box">
        <div className="container">
          <div className="btn-container">
            <Button onClick={handleClickMainBtns} className="btn-main-section">
              <div className="main-section-btn-txt">
                <span>Learn more</span>
              </div>
            </Button>
          </div>
          <div className="btn-container">
            <Button
              onClick={handleClickMainBtns}
              className="btn-main-section btn-white"
            >
              <div className="main-section-btn-txt">
                <span>Launch App</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
