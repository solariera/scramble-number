import { trim32bit } from './trim32bit';
export const multiply32bit = (v: number, salt: number): number => {
  return trim32bit(v * salt);
};
