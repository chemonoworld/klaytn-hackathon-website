import { useRecoilState } from 'recoil';
import Button from '../Button';
import {
  addressState,
  balanceState,
  connectionState,
  networkState,
} from '../../modules/kaikasState';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import COPY from '../../assets/images/copy-24.png';
import './navbarWalletBtn.scss';
import { useState } from 'react';

const NavbarWalletBtn = () => {
  const [isConnected, setIsConnected] = useRecoilState(connectionState);
  const [address, setAddress] = useRecoilState(addressState);
  const [balance, setBalance] = useRecoilState(balanceState);
  const [network, setNetwork] = useRecoilState(networkState);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    loadAccountInfo();
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
    console.log(isExpanded);
  };
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
  };
  const handleClickDropdown = e => {
    e.stopPropagation();
  };
  const loadAccountInfo = async () => {
    const { klaytn } = window;
    if (klaytn) {
      try {
        const result = await klaytn.enable();
        result !== undefined ? setIsConnected(true) : setIsConnected(false);
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
  return (
    <Button
      onClick={() => {
        klaytn.selectedAddress === undefined
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
            <div className="dd-wrapper" onClick={handleClickDropdown}>
              <div className="dd-container">
                <div className="dd-menu">
                  <span>
                    network:
                    {network == '8217' ? (
                      <span className="dd-txt-green"> mainnet</span>
                    ) : network == '1001' ? (
                      <span className="dd-txt-red"> testnet</span>
                    ) : (
                      <span className="dd-txt-red"> invalid</span>
                    )}
                  </span>
                </div>
                <div className="dd-menu" onClick={handleCopyAddress}>
                  <span className="dd-txt-common">Copy address</span>
                  <img src={COPY} className="copy-icon" alt="copy"></img>
                </div>
                <div className="dd-menu">
                  <span className="dd-link-wrapper">
                    <a
                      href={`https://scope.klaytn.com/account/${address}?tabId=approvals&sub=kip7`}
                      target="_blank"
                      className="dd-link txt-deco-none dd-txt-common"
                    >
                      View on explorer
                    </a>
                  </span>
                </div>
                <div className="dd-menu">
                  <span className="dd-txt-common">Disconnect</span>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <span>connect wallet</span>
      )}
    </Button>
  );
};

export default NavbarWalletBtn;
