import { multiply32bit } from './multiply32bit';
import { reverse32bit } from './reverse32bit';

export const scramble = (v: number, salt = 0x1ca7bc5b, _salt = 0x6b5f13d3): number => {
  v = multiply32bit(v ^ salt, salt);
  v = multiply32bit(reverse32bit(v), _salt);
  v = multiply32bit(reverse32bit(v), salt);
  return v;
};
