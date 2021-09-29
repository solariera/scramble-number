export const positive32bit = (v: number): number => {
  return v & 0x7fffffff;
};
