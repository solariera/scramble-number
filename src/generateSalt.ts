import { randomSalt } from './randomSalt';
import { inverseSalt } from './inverseSalt';

export const generateSalt = (): [number, number] | undefined => {
  const salt = randomSalt();
  const _salt = inverseSalt(salt);
  if (_salt === undefined) return undefined;
  return [salt, _salt];
};
