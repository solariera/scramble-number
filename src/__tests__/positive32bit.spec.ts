import { tests, TestData } from '@solariera/easy-jest/lib';
import { positive32bit as fn } from '../positive32bit';

const data: TestData<typeof fn>[] = [
  { id: 'input 0x1ca7bc5b', params: [0x1ca7bc5b], ret: 0x1ca7bc5b },
  { id: 'input 0xe3d112d6', params: [0xe3d112d6], ret: 0x63d112d6 },
  { id: 'input 0x2321a1083', params: [0x2321a1083], ret: 0x321a1083 },
  { id: 'input 0x3cbd9a6b4', params: [0x3cbd9a6b4], ret: 0x4bd9a6b4 },
  { id: 'input 0x4bed01066', params: [0x4bed01066], ret: 0x3ed01066 },
];

tests(fn, data);
