import { tests, TestData } from '@solariera/easy-jest/lib';
import { reverse32bit as fn } from '../reverse32bit';

const data: TestData<typeof fn>[] = [
  { id: 'input 0x1ca7bc5b -> ' + (-6856).toString(16), params: [0x1ca7bc5b], ret: -6856 },
  { id: 'input 0x71e8896b -> ' + (-695134322).toString(16), params: [0x71e8896b], ret: -695134322 },
  { id: 'input 0xbb5e0581 -> ' + (-2120189219).toString(16), params: [0xbb5e0581], ret: -2120189219 },
  { id: 'input 0xf2f669ad -> ' + (-1248432305).toString(16), params: [0xf2f669ad], ret: -1248432305 },
  { id: 'input 0xf2f669ae -> ' + (1972793167).toString(16), params: [0xf2f669ae], ret: 1972793167 },
];

tests(fn, data);
