import { atom, useRecoilState } from 'recoil';
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
