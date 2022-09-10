import React, { useEffect, useState } from 'react';
import './nav.scss';
import SBT from '../../assets/images/sbt-h-28.png';
import DISCORD from '../../assets/images/discord-white.png';
import TWITTER from '../../assets/images/twitter-white.png';
import GITHUB from '../../assets/images/github-white.png';

const Nav = () => {
  return (
    <div className="navbar-container bg-dark">
      <div className="navbar navbar-dark navbar-expand-lg" data-sticky="top">
        <div className="container">
          <a className="navbar-brand fade-page" href="/">
            <img src={SBT} alt="0xSBT" className="logo" />
          </a>
          <div className="navbar-right">
            <div className="navbar-link">
              <span>Team</span>
            </div>
            <div className="navbar-link">
              <span>Extension</span>
            </div>
            <div className="navbar-link">
              <span>Docs</span>
            </div>
            <a href="" className="navbar-link navbar-github">
              <img
                src={GITHUB}
                alt="GITHUB"
                className="navbar-icon navbar-github-img"
              />
            </a>
            <a href="" className="navbar-link navbar-twitter">
              <img
                src={TWITTER}
                alt="TWITTER"
                className="navbar-icon navbar-twitter-img"
              />
            </a>
            <a href="" className="navbar-link navbar-discord">
              <img
                src={DISCORD}
                alt="DISCORD"
                className="navbar-icon navbar-discord-img"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
