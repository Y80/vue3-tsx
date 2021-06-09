// import axios from '@/lib/axios';

export function login(username: string, password: string) {
  // return axios.post('', { username, password });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'y80' && password === '123456') {
        resolve({ token: '' });
      } else {
        reject(new Error('密码或账户错误'));
      }
    }, 2000);
  });
}
