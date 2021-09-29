import { random } from './random';
export const randomSalt = () => {
  let salt = random(3, 0xffffffff);
  if (salt % 2 === 0) salt++;
  return salt;
};
