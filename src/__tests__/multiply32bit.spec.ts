import { tests, TestData } from '@solariera/easy-jest/lib';
import { multiply32bit as fn } from '../multiply32bit';

const data: TestData<typeof fn>[] = [
  { id: 'input zero', params: [0, 0x1ca7bc5b], ret: 0 },
  { id: 'input 0x1ca7bc5b', params: [1, 0x1ca7bc5b], ret: 0x1ca7bc5b },
  { id: 'input 0x71e8896b', params: [2, 0x71e8896b], ret: 0x63d112d6 },
  { id: 'input 0xbb5e0581', params: [3, 0xbb5e0581], ret: 0x321a1083 },
  { id: 'input 0xf2f669ad', params: [4, 0xf2f669ad], ret: 0x4bd9a6b4 },
  { id: 'input 0xf2f669ae', params: [5, 0xf2f669ae], ret: 0x3ed01066 },
];

tests(fn, data);
