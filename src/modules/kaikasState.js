import { atom } from 'recoil';

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

export const ddExpansionState = atom({
  key: 'isExpanded',
  default: false,
});
