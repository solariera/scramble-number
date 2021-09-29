import { tests, TestData } from '@solariera/easy-jest/lib';
import { inverseSalt as fn } from '../inverseSalt';

const data: TestData<typeof fn>[] = [
  { id: 'input 0x1ca7bc5b', params: [0x1ca7bc5b], ret: 0x6b5f13d3 },
  { id: 'input 0x71e8896b', params: [0x71e8896b], ret: 0x11a15b43 },
  { id: 'input 0xbb5e0581', params: [0xbb5e0581], ret: 0x38603a81 },
  { id: 'input 0xf2f669ad', params: [0xf2f669ad], ret: 0x1078e225 },
  { id: 'undefined check', params: [0xf2f669ae], ret: undefined },
];

tests(fn, data);
