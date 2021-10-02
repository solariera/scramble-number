export const trim32bit = (v: number): number => {
  return v & 0x7fffffff;
};
