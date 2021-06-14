import { reactive, ref } from 'vue';
import { message } from 'ant-design-vue';
import { ValidationRule } from 'ant-design-vue/es/form/Form';
import { login } from '@/api/login';
import store from '@/lib/store';
import router from '@/lib/router';

const rules: Record<string, ValidationRule> = {
  username: {
    required: true,
    message: '账号不能为空',
    trigger: 'blur',
  },
  password: {
    required: true,
    message: '密码不能为空',
    trigger: 'blur',
  },
};

export function useForm() {
  const model = reactive({
    username: 'admin',
    password: '123456',
  });
  const submitting = ref(false);

  function handleFinishFailed() {
    message.warn('请检查您的输入');
  }

  function handleFinish() {
    submitting.value = true;
    login(model.username, model.password)
      .then((token) => {
        message.success('登录成功');
        store.dispatch('setToken', token).then(() => {
          router.push('/home');
        });
      })
      .catch((error) => {
        message.error(error.message);
      })
      .finally(() => {
        submitting.value = false;
      });
  }

  return {
    model,
    rules,
    handleFinish,
    handleFinishFailed,
    submitting,
  };
}
