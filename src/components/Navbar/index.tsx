import React, { useEffect, useState } from 'react';
import './navbar.scss';

import OOAK from '../../assets/images/ooak.png';
import Twitter from '../../assets/images/twitter.png';
import Discord from '../../assets/images/discord.png';
import Kakao from '../../assets/images/kakao.png';
import KlaytnSymbol from '../../assets/images/klaytn.png';
import Expand from '../../assets/images/expand.png';

const Navbar = () => {
  return (
    <header className="nav-bar-container">
      <a href="https://theooak.io" className="nav-bar-logo-image">
        <img src={OOAK} alt="ooak-logo" />
      </a>

      <a href="https://twitter.com/Team_OOAK" className="nav-bar-link-image">
        <img src={Twitter} alt="twitter" />
      </a>
      <a href="https://discord.gg/NcNyyUMXuf" className="nav-bar-link-image">
        <img src={Discord} alt="discord" />
      </a>
      <a
        href="https://open.kakao.com/o/gWFIyBYd"
        className="nav-bar-link-image"
      >
        <img src={Kakao} alt="kakao" />
      </a>
      <div className="nav-bar-right btn-connect-wallet"></div>
    </header>
  );
};

export default Navbar;
