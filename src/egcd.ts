export const egcd = (a: number, b: number): [number, number, number] => {
  if (a === 0) return [b, 0, 1];
  const [g, y, x] = egcd(b % a, a);
  return [g, x - Math.floor(b / a) * y, y];
};
