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

  const initRender = async () => {
    const { klaytn } = window;
    if (klaytn) {
      try {
        const enable = await klaytn.enable();
        enable !== undefined ? setIsConnected(true) : setIsConnected(false);
        // setAccountInfo();
        await klaytn.on('accountsChanged', () => {
          console.log('account changed');
        });
        await klaytn.on('networkChanged', () => {
          console.log('network changed');
          klaytn.selectedAddress === undefined
            ? setNetwork('')
            : setNetwork(klaytn.networkVersion);
        });
      } catch (error) {
        alert('로그인이 실패하였습니다.');
      }
    } else {
      alert('카이카스 지갑을 설치해주세요.');
    }
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
    klaytn.selectedAddress === undefined
      ? setNetwork('')
      : setNetwork(klaytn.networkVersion);
    const timer = setTimeout(async () => {
      const account = klaytn.selectedAddress;
      if (account !== '' && account !== undefined) {
        setAddress(account);
        const balancePeb = await caver.klay.getBalance(account);
        const balance = caver.utils.fromPeb(balancePeb, 'KLAY');
        setBalance(Math.floor(balance * 1000000) / 1000000);
        console.log('address : ', account);
        console.log('balance : ', balance);
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

  return <div className="wallet-connect"></div>;
};

export default WalletConnection;
