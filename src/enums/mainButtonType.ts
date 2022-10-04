export const MAIN_BUTTON_TYPE = {
  LEARN_MORE: 0,
  LAUNCH_APP: 1,
  KLAIM_YOUR_SOUL: 2,
  DOWNLOAD_EXTENSION: 3,
} as const;
export type MAIN_BUTTON_TYPE =
  typeof MAIN_BUTTON_TYPE[keyof typeof MAIN_BUTTON_TYPE];
