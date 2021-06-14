import { LoginInfo } from '@interface/login-info';

export function login(
  username: string,
  password: string
): Promise<LoginInfo | Error> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === '123456') {
        resolve({
          token: 'this is a token string',
          username: 'y80',
          role: 'Admin',
        });
      } else {
        reject(new Error('密码或账户错误'));
      }
    }, 2000);
  });
}
