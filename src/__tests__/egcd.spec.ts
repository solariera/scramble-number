import { tests, TestData } from '@solariera/easy-jest/lib';
import { egcd as fn } from '../egcd';

const data: TestData<typeof fn>[] = [
  { id: 'input 0x1ca7bc5b', params: [0x1ca7bc5b, 0x100000000], ret: [1, 1801393107, -201637937], mode: 'toEqual' },
  { id: 'input 0x71e8896b', params: [0x71e8896b, 0x100000000], ret: [1, 295787331, -131611898], mode: 'toEqual' },
  { id: 'input 0xbb5e0581', params: [0xbb5e0581, 0x100000000], ret: [1, 945830529, -692256584], mode: 'toEqual' },
  { id: 'input 0xf2f669ad', params: [0xf2f669ad, 0x100000000], ret: [1, 276357669, -262283453], mode: 'toEqual' },
  { id: 'input 0xf2f669ae', params: [0xf2f669ae, 0x100000000], ret: [2, 621477607, -589827282], mode: 'toEqual' },
];

tests(fn, data);
