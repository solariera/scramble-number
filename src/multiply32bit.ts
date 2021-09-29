import { positive32bit } from './positive32bit';
export const multiply32bit = (v: number, salt: number): number => {
  return positive32bit(v * salt);
};
