import axios from '@/lib/axios';

interface Account {
  enable: boolean;
  id: number;
  name: string;
}

// 获取用户列表
export function getList(params: {
  enable?: boolean;
  name?: string;
  page: number;
  pageSize: number;
}): Promise<{
  totalNumber: number;
  dataList: Account[];
}> {
  return axios.get('accounts', { params });
}

// 新增用户
export function add(payload: { username: string }) {
  return axios.post('accounts', payload);
}

// 删除用户
export function remove(id: number) {
  return axios.delete(`accounts/${id}`);
}

// 切换用户可用状态
export function toggleState(payload: Account) {
  return axios.patch(`accounts/${payload.id}`, payload);
}
