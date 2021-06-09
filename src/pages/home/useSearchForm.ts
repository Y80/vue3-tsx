import { Form } from 'ant-design-vue';
import { reactive, ref } from 'vue';
import { OptionProps } from 'ant-design-vue/es/select/index';

export function useSearchForm() {
  const model = reactive({
    username: '',
    status: undefined,
  });

  const formRef = ref<typeof Form>();
  const loading = ref(false);
  const statusOptions: OptionProps[] = [
    { value: 'true', label: '启用' },
    { value: 'false', label: '禁用' },
  ];

  return {
    model,
    formRef,
    loading,
    statusOptions,
  };
}
