import { tests, TestData } from '@solariera/easy-jest/lib';
import { generateSalt as fn } from '../generateSalt';

const data: TestData<typeof fn>[] = [
  { id: 'random generate salt value', params: [], ret: undefined, mode: 'not.toBe' },
  { id: 'random generate salt value', params: [], ret: undefined, mode: 'not.toBe' },
  { id: 'random generate salt value', params: [], ret: undefined, mode: 'not.toBe' },
  { id: 'random generate salt value', params: [], ret: undefined, mode: 'not.toBe' },
  { id: 'random generate salt value', params: [], ret: undefined, mode: 'not.toBe' },
  { id: 'random generate salt value', params: [], ret: undefined, mode: 'not.toBe' },
  { id: 'random generate salt value', params: [], ret: undefined, mode: 'not.toBe' },
  { id: 'random generate salt value', params: [], ret: undefined, mode: 'not.toBe' },
  { id: 'random generate salt value', params: [], ret: undefined, mode: 'not.toBe' },
  { id: 'random generate salt value', params: [], ret: undefined, mode: 'not.toBe' },
  { id: 'random generate salt value', params: [], ret: undefined, mode: 'not.toBe' },
  { id: 'random generate salt value', params: [], ret: undefined, mode: 'not.toBe' },
];

tests(fn, data);
