import { egcd } from './egcd';
export const inverseSalt = (a: number, m = 0x100000000): number | undefined => {
  const [g, x] = egcd(a, m);
  if (g !== 1) return undefined;
  return x % m;
};
