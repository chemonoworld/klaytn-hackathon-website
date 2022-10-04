import { useRecoilState } from 'recoil';
import Button from '../Button';
import {
  addressState,
  balanceState,
  connectionState,
  ddExpansionState,
  networkState,
} from '../../modules/kaikasState';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import COPY from '../../assets/images/copy-24.png';
import './navbarWalletBtn.scss';
import { useEffect, useState } from 'react';
import DropdownMenu from '../DropdownMenu';
import WALLET from '../../assets/images/wallet-large.png';

const NavbarWalletBtn = props => {
  const [isConnected, setIsConnected] = useRecoilState(connectionState);
  const [address, setAddress] = useRecoilState(addressState);
  const [balance, setBalance] = useRecoilState(balanceState);
  const [network, setNetwork] = useRecoilState(networkState);
  const [isExpanded, setIsExpanded] = useRecoilState(ddExpansionState);

  const handleClick = () => {
    loadAccountInfo();
    setNetworkInfo();
  };
  const handleClickAfterConnected = () => {
    const expandEl = document.getElementsByClassName('expand-icon');
    if (expandEl === undefined || expandEl[0] === undefined) return;
    if (
      expandEl[0].classList.contains('expand-icon-more') === false &&
      expandEl[0].classList.contains('expand-icon-less') === false
    ) {
      expandEl[0].classList.add('expand-icon-more');
    } else {
      expandEl[0].classList.toggle('expand-icon-more');
      expandEl[0].classList.toggle('expand-icon-less');
    }
    isExpanded === true ? setIsExpanded(false) : setIsExpanded(true);
  };
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
  };
  const handleClickDropdown = e => {
    e.stopPropagation();
  };
  const handleDisconnect = () => {
    setIsConnected(false);
    setIsExpanded(false);
    setAddress('');
    setNetwork('');
  };
  const loadAccountInfo = async () => {
    const { klaytn } = window;
    if (klaytn) {
      try {
        const isEnable = await klaytn.enable();
        isEnable !== undefined ? setIsConnected(true) : setIsConnected(false);
        setAccountInfo();
        klaytn.on('accountsChanged', () => setAccountInfo());
      } catch (error) {
        alert('로그인이 실패하였습니다.');
      }
    } else {
      alert('카이카스 지갑을 설치해주세요.');
    }
  };
  const setAccountInfo = async () => {
    const { klaytn } = window;
    if (klaytn === undefined) return;
    const timer = setTimeout(async () => {
      const account = klaytn.selectedAddress;
      if (account !== '' && account !== undefined) {
        setAddress(account);
        const balancePeb = await caver.klay.getBalance(account);
        const balance = caver.utils.fromPeb(balancePeb, 'KLAY');
        setBalance(Math.floor(balance * 1000000) / 1000000);
        clearTimeout(timer);
      }
    }, 1000);
  };
  const setNetworkInfo = async () => {
    const { klaytn } = window;
    if (klaytn === undefined) return;
    klaytn.selectedAddress === undefined
      ? setNetwork('')
      : setNetwork(klaytn.networkVersion);
    klaytn.on('networkChanged', async () => {
      klaytn.selectedAddress === undefined
        ? setNetwork('')
        : setNetwork(klaytn.networkVersion);
      const account = klaytn.selectedAddress;
      const balancePeb = await caver.klay.getBalance(account);
      const balance = caver.utils.fromPeb(balancePeb, 'KLAY');
      setBalance(Math.floor(balance * 1000000) / 1000000);
    });
  };
  return (
    <>
      {props.isSmallIcon === true ? (
        <div
          onClick={() => {
            klaytn.selectedAddress === undefined || isConnected == false
              ? handleClick()
              : handleClickAfterConnected();
          }}
          className="small-btn-connect-wallet"
        >
          <img src={WALLET} className="wallet-icon-img" alt="wallet" />
          {isExpanded === true && (
            <DropdownMenu
              handleClickDropdown={handleClickDropdown}
              handleCopyAddress={handleCopyAddress}
              handleDisconnect={handleDisconnect}
              address={address}
              network={network}
            />
          )}
        </div>
      ) : (
        <Button
          onClick={() => {
            klaytn.selectedAddress === undefined || isConnected == false
              ? handleClick()
              : handleClickAfterConnected();
          }}
          className="btn-connect-wallet"
        >
          {network == '8217' ? (
            <div className="network-state-dot network-state-mainnet"></div>
          ) : (
            <div className="network-state-dot network-state-testnet"></div>
          )}
          {isConnected ? (
            <>
              <span className="txt-white font-unbounded-medium">
                {address
                  ? `${address.slice(0, 6)}...${address.slice(-4)}`
                  : 'Connecting...'}
              </span>
              <div className="expand-icon-container">
                <ExpandMoreIcon className="expand-icon txt-hover-cyan" />
              </div>
              {isExpanded === true && (
                <DropdownMenu
                  handleClickDropdown={handleClickDropdown}
                  handleCopyAddress={handleCopyAddress}
                  handleDisconnect={handleDisconnect}
                  address={address}
                  network={network}
                />
              )}
            </>
          ) : (
            <span>connect wallet</span>
          )}
        </Button>
      )}
    </>
  );
};

export default NavbarWalletBtn;
