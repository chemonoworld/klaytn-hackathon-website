import { atom, useRecoilState } from 'recoil';
import "./connectWallet.d.ts";
import Caver from 'caver-js';

const caver = new Caver(window.klaytn);

export const addressState = atom({
    key: 'address',
    default: '',
});

export const balanceState = atom({
    key: 'balance',
    default: 0,
});

export const networkState = atom({
    key: 'network',
    default: '',
});

export const connectionState = atom({
    key: 'isConnected',
    default: false,
});

const [address, setAddress] = useRecoilState(addressState);
const [balance, setBalance] = useRecoilState(balanceState);
const [network, setNetwork] = useRecoilState(networkState);
const [isConnected, setIsConnected] = useRecoilState(connectionState);

export const setAccountINfo = async () => {
    const { klaytn } = window;
    if (klaytn === undefined) return;
}

export const loadAccountInfo = async () => {
    const { klaytn } = window

    if (klaytn) {
        try {
            const result = await klaytn.enable();
            if (result !== undefined) {
                setIsConnected(true);
            } else {
                setIsConnected(false);
            }
            setAccountInfo()
            klaytn.on('accountsChanged', () => setAccountInfo())
        } catch (error) {
            console.log('로그인이 실패하였습니다.')
        }
    } else {
        console.log('카이카스 지갑을 설치해주세요.')
    }
}

export const setAccountInfo = async () => {
    const { klaytn } = window
    if (klaytn === undefined) return

    const account = klaytn.selectedAddress;
    const balancePeb = await caver.klay.getBalance(account);
    const balance = caver.utils.fromPeb(balancePeb, 'KLAY');
    setAddress(account);
    setBalance(Math.floor(balance * 1000000) / 1000000);
}

export const setNetworkInfo = () => {
    const { klaytn } = window
    if (klaytn === undefined) return

    setNetwork(klaytn.networkVersion)
    klaytn.on('networkChanged', async() => {
      setNetworkInfo(klaytn.networkVersion);
      const account = klaytn.selectedAddress;
      const balancePeb = await caver.klay.getBalance(account);
      const balance = caver.utils.fromPeb(balancePeb, 'KLAY');
      setBalance(Math.floor(balance*1000000)/1000000);
    })
  }


