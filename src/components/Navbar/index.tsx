import React, { useEffect, useState } from 'react';
import './navbar.scss';

import ZeroXSBT from '../../assets/images/sbt-128.png';
import Github from '../../assets/images/github-white.png';
import Discord from '../../assets/images/discord-white.png';
import Twitter from '../../assets/images/twitter-white-2.png';

const Navbar = () => {
  return (
    <header className="nav-bar-container">
      <div className="wrapper">
        <a href="#" className="nav-bar-logo-image">
          <img
            src={ZeroXSBT}
            alt="zero-x-sbt-logo"
            className="nav-bar-home-img"
          />
        </a>
        <a
          href="https://github.com/chemonoworld/klaytn-hackathon"
          className="nav-bar-link-image"
        >
          <img src={Github} alt="github-white" className="nav-bar-img" />
        </a>
        <a href="https://twitter.com/GRT_LEE" className="nav-bar-link-image">
          <img src={Twitter} alt="twitter-white" className="nav-bar-img" />
        </a>
        <a href="https://discord.gg/QZC9HaCnYz" className="nav-bar-link-image">
          <img src={Discord} alt="discord-white" className="nav-bar-img" />
        </a>
        <div className="nav-bar-right btn-connect-wallet"></div>
      </div>
    </header>
  );
};

export default Navbar;
