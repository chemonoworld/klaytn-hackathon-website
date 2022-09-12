import React, { useEffect, useState } from 'react';
import Button from '../Button';
import './navbar.scss';
import SBT from '../../assets/images/sbt-h-256.png';
import DISCORD from '../../assets/images/discord-white.png';
import TWITTER from '../../assets/images/twitter-white.png';
import GITHUB from '../../assets/images/github-white.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-container bg-dark">
      <div className="navbar navbar-dark navbar-expand-lg" data-sticky="top">
        <div className="container">
          <a className="navbar-brand fade-page" href="/">
            <img src={SBT} alt="0xSBT" className="navbar-logo-img" />
          </a>
          <div className="navbar-content navbar-collapsed">
            <div className="navbar-link-container">
              <Link to="/" className="navbar-link">
                DAO
              </Link>
            </div>
            <div className="navbar-link-container">
              <Link to="/soul" className="navbar-link">
                0xSOUL
              </Link>
            </div>
            <div className="navbar-link-container">
              <a href="/extension" className="navbar-link">
                Extension
              </a>
            </div>
            <div className="navbar-link-container">
              <a href="/docs" className="navbar-link">
                Team
              </a>
            </div>
            <div className="navbar-link-container">
              <a href="/docs" className="navbar-link">
                Docs
              </a>
            </div>
            <div className="navbar-icons-box">
              <a
                href="https://github.com/0xSBT/Contracts"
                className="navbar-icon-container navbar-github"
              >
                <img
                  src={GITHUB}
                  alt="GITHUB"
                  className="navbar-icon-img navbar-github-img"
                />
              </a>
              <a href="" className="navbar-icon-container navbar-twitter">
                <img
                  src={TWITTER}
                  alt="TWITTER"
                  className="navbar-icon-img navbar-twitter-img"
                />
              </a>
              <a
                href="https://discord.gg/QZC9HaCnYz"
                className="navbar-icon-container navbar-discord"
              >
                <img
                  src={DISCORD}
                  alt="DISCORD"
                  className="navbar-icon-img navbar-discord-img"
                />
              </a>
            </div>
          </div>
          <div className="navbar-btn-container">
            <Button
              onClick={() => {
                alert('click connect wallet');
              }}
              className="btn-connect-wallet"
            >
              <span>connect wallet</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
