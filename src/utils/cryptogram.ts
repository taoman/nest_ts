import * as crypto from 'crypto';
// 制作随机盐
export function makeSalt(): string {
  return crypto.randomBytes(3).toString('base64');
}
// 使用盐来加密
export function encryptPassword(password: string, salt: string): string {
  if (!password || !salt) {
    return '';
  }
  const tempSalt = Buffer.from(salt, 'base64');
  return crypto
    .pbkdf2Sync(password, tempSalt, 10000, 16, 'sha1')
    .toString('base64');
}
