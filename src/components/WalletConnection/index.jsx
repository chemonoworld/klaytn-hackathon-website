import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import {
  addressState,
  balanceState,
  connectionState,
  networkState,
} from '../../modules/kaikasState';
import Caver from 'caver-js';
import './wallet.scss';

const caver = new Caver(window.klaytn);

const WalletConnection = () => {
  const [address, setAddress] = useRecoilState(addressState);
  const [balance, setBalance] = useRecoilState(balanceState);
  const [network, setNetwork] = useRecoilState(networkState);
  const [isConnected, setIsConnected] = useRecoilState(connectionState);

  useEffect(() => {
    loadAccountInfo();
    setNetworkInfo();
  }, []);

  let detectionTimer = setTimeout(() => {
    const { klaytn } = window;
    if (
      klaytn.selectedAddress !== '' &&
      klaytn.selectedAddress !== undefined &&
      klaytn.selectedAddress !== address
    ) {
      console.log('account changed');
    }
    if (
      klaytn.networkVersion !== '' &&
      klaytn.networkVersion !== undefined &&
      klaytn.networkVersion !== network
    ) {
      console.log('network changed');
    }
    clearTimeout(detectionTimer);
    // klaytn.on('accountsChanged', () => console.log('account changed'));
    // klaytn.on('networkChanged', () => console.log('network changed'));
  }, 1000);

  const loadAccountInfo = async () => {
    const { klaytn } = window;

    if (klaytn) {
      try {
        const result = await klaytn.enable();
        if (result !== undefined) {
          setIsConnected(true);
        } else {
          setIsConnected(false);
        }
        await setAccountInfo();
        klaytn.on('accountsChanged', () => setAccountInfo());
      } catch (error) {
        console.log('로그인이 실패하였습니다.');
      }
    } else {
      console.log('카이카스 지갑을 설치해주세요.');
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
        console.log('address : ', account);
        console.log('balance : ', balance);
        console.log('network : ', network);
        clearTimeout(timer);
      }
    }, 1000);
  };

  const setNetworkInfo = () => {
    const { klaytn } = window;
    if (klaytn === undefined) return;

    setNetwork(klaytn.networkVersion);
    klaytn.on('networkChanged', async () => {
      setNetworkInfo(klaytn.networkVersion);
      const account = klaytn.selectedAddress;
      const balancePeb = await caver.klay.getBalance(account);
      const balance = caver.utils.fromPeb(balancePeb, 'KLAY');
      setBalance(Math.floor(balance * 1000000) / 1000000);
    });
  };

  return <div className="wallet-connect"></div>;
};

export default WalletConnection;
