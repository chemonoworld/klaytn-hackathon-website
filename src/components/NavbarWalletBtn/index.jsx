import { useRecoilState } from 'recoil';
import Button from '../Button';
import {
  addressState,
  balanceState,
  connectionState,
  networkState,
} from '../../modules/kaikasState';
import './navbarWalletBtn.scss';

const NavbarWalletBtn = () => {
  const [isConnected, setIsConnected] = useRecoilState(connectionState);
  const [address, setAddress] = useRecoilState(addressState);
  const [balance, setBalance] = useRecoilState(balanceState);
  const [network, setNetwork] = useRecoilState(networkState);

  const handleClick = () => {
    loadAccountInfo();
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
        // console.log('address : ', account);
        // console.log('balance : ', balance);
        // console.log('network : ', network);
        clearTimeout(timer);
      }
    }, 1000);
  };
  return (
    <Button
      onClick={() => {
        handleClick();
      }}
      className="btn-connect-wallet"
    >
      {network == '8217' ? (
        <div className="network-state-dot network-state-mainnet"></div>
      ) : (
        <div className="network-state-dot network-state-testnet"></div>
      )}
      {isConnected ? (
        <span className="txt-white font-unbounded-medium">
          {address
            ? `${address.slice(0, 6)}...${address.slice(-4)}`
            : 'Connecting...'}
        </span>
      ) : (
        <span>connect wallet</span>
      )}
    </Button>
  );
};

export default NavbarWalletBtn;
