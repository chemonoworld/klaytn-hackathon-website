import { useRecoilState } from 'recoil';
import Button from '../Button';
import {
  addressState,
  balanceState,
  connectionState,
  networkState,
} from '../../modules/kaikasState';
import './navbar.scss';
import SBT from '../../assets/images/sbt-h-256.png';
import DISCORD from '../../assets/images/discord-white.png';
import TWITTER from '../../assets/images/twitter-white.png';
import GITHUB from '../../assets/images/github-white.png';
import WALLET from '../../assets/images/wallet-large.png';
import { Link } from 'react-router-dom';
// import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';

const Navbar = () => {
  const [isConnected, setIsConnected] = useRecoilState(connectionState);
  const [address, setAddress] = useRecoilState(addressState);
  const [balance, setBalance] = useRecoilState(balanceState);
  const [network, setNetwork] = useRecoilState(networkState);
  return (
    <div className="navbar-container bg-dark">
      <div className="navbar navbar-dark navbar-expand-lg" data-sticky="top">
        <div className="container">
          <a className="navbar-brand fade-page" href="/">
            <img src={SBT} alt="0xSBT" className="navbar-logo-img" />
          </a>
          <div className="navbar-content navbar-collapsed">
            <div className="navbar-link-container navbar-link-collapsed">
              <Link to="/" className="navbar-link">
                DA0xSBT
              </Link>
            </div>
            <div className="navbar-link-container navbar-link-collapsed">
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
              <a href="https://dorahacks.io/buidl/3364" className="navbar-link">
                About us
              </a>
            </div>
            <div className="navbar-icons-box">
              <a
                href="https://github.com/0xSBT/Contracts"
                className="navbar-icon-container navbar-github"
                target="_blank"
              >
                <img
                  src={GITHUB}
                  alt="GITHUB"
                  className="navbar-icon-img navbar-github-img"
                />
              </a>
              <a
                href="https://twitter.com/postech_dao"
                className="navbar-icon-container navbar-twitter"
                target="_blank"
              >
                <img
                  src={TWITTER}
                  alt="TWITTER"
                  className="navbar-icon-img navbar-twitter-img"
                />
              </a>
              <a
                href="https://discord.gg/QZC9HaCnYz"
                className="navbar-icon-container navbar-discord"
                target="_blank"
              >
                <img
                  src={DISCORD}
                  alt="DISCORD"
                  className="navbar-icon-img navbar-discord-img"
                />
              </a>
            </div>
          </div>
          {network == '8217' ? (
            <div className="network-state-dot network-state-mainnet"></div>
          ) : (
            <div className="network-state-dot network-state-testnet"></div>
          )}
          <div className="navbar-btn-container navbar-btn-collapsed">
            <Button
              onClick={() => {
                alert('connect wallet');
              }}
              className="btn-connect-wallet"
            >
              <span>connect wallet</span>
            </Button>
          </div>
          <div
            className="navbar-btn-container navbar-btn-icon-hidden"
            onClick={() => {
              alert('connect wallet');
            }}
          >
            <img
              src={WALLET}
              alt="connect-wallet"
              className="wallet-icon-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
