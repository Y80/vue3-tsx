import { defineComponent } from '@vue/runtime-core';
import { RouterView } from 'vue-router';
import { ConfigProvider } from 'ant-design-vue';
import antdCN from 'ant-design-vue/es/locale/zh_CN';

export default defineComponent({
  render() {
    return (
      <ConfigProvider locale={antdCN}>
        <RouterView />
      </ConfigProvider>
    );
  },
});
