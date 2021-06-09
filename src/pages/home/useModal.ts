import { reactive } from 'vue';
import { add } from '@/api/home';
import { message } from 'ant-design-vue';

export function useModal() {
  const data = reactive({
    visible: false,
    username: '',
    submitting: false,
  });

  async function handleAddUser() {
    if (!data.username) {
      message.warn('请输入用户姓名');
      return Promise.reject();
    }

    data.submitting = true;
    try {
      await add({ username: data.username });
      data.visible = false;
      message.success('添加成功');
    } finally {
      data.submitting = false;
    }
    return Promise.resolve();
  }

  function openModal() {
    data.visible = true;
    data.username = '';
  }

  return { data, handleAddUser, openModal };
}
