import { tests, TestData } from '@solariera/easy-jest/lib';
import { scramble as fn } from '../';

const data: TestData<typeof fn>[] = [
  { id: 'input 0', params: [0], ret: 1219901536 },
  { id: 'input 1', params: [1], ret: 239563430 },
  { id: 'input 2', params: [2], ret: 953425272 },
  { id: 'input 3', params: [3], ret: 1286381126 },
  { id: 'input 4', params: [4], ret: 1451104176 },
  { id: 'input 5', params: [5], ret: 1145421752 },
  { id: 'input 10', params: [10], ret: 703895380 },
  { id: 'input 100', params: [100], ret: 1759918748 },
  { id: 'input 1000', params: [1000], ret: 173710952 },
];

tests(fn, data);
