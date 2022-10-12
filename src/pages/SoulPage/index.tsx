import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import SOUL from '../../assets/images/soul-256.png';
import '../MainPage/mainpage.scss';
import { Link } from 'react-router-dom';
import { MAIN_BUTTON_TYPE } from '../../enums/mainButtonType';

const SoulPage = () => {
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
    const DELAY = 500;
    const joystickTimer = setTimeout(() => {
      joystick?.setAttribute('class', 'btn-joystick');
      setIsJoystickTrans(false);
      clearTimeout(joystickTimer);
    }, DELAY);
  };
  const handleSlide = () => {
    const mainLogo = document.querySelector('.main-logo');
    mainLogo?.setAttribute('class', 'main-logo main-logo-init');
    setIsLogoTranslate(true);
    const DELAY = 500;
    const logoTimer = setTimeout(() => {
      const mainLogo = document.querySelector('.main-logo');
      mainLogo?.setAttribute('class', 'main-logo');
      setIsLogoTranslate(false);
      clearTimeout(logoTimer);
    }, DELAY);
    startJoystickAnim();
  };
  const handleClickMainBtns = (btnType: MAIN_BUTTON_TYPE) => {
    if (btnType === MAIN_BUTTON_TYPE.KLAIM_YOUR_SOUL) {
      openModal();
    } else {
      window.open(
        'https://chrome.google.com/webstore/category/extensions',
        '_blank',
      );
    }
  };
  const openModal = () => {
    const modalContainer = document.querySelector('.modal-container');
    modalContainer?.classList.remove('hidden');
    console.log('open modal');
  };
  return (
    <div className="root-container">
      <section className="main-section">
        <div className="container main-section-container">
          <div className="main-section-content main-logo-container">
            <img src={SOUL} className="main-logo logo-sbt" alt="logo" />
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
                  Klaim your{' '}
                  <span className="txt-red txt-hover-cyan">SOUL</span> to join
                  DA0xSBT
                </span>
              </li>
              <li>
                <span>
                  Extension is a{' '}
                  <span className="txt-red txt-hover-cyan">bridge</span> between
                  DA0xSBT & Twitter
                </span>
              </li>
              <li>
                <span>
                  Download{' '}
                  <span className="txt-red txt-hover-cyan">EXTENSION </span>to
                  show 0xSOUL on Twitter
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
              onClick={() => {
                handleClickMainBtns(MAIN_BUTTON_TYPE.KLAIM_YOUR_SOUL);
              }}
              className="btn-main-section btn-red"
            >
              <div className="main-section-btn-txt">
                <span>Klaim your soul</span>
              </div>
            </Button>
          </div>
          <div className="btn-container">
            <Button
              onClick={() => {
                handleClickMainBtns(MAIN_BUTTON_TYPE.DOWNLOAD_EXTENSION);
              }}
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

export default SoulPage;
