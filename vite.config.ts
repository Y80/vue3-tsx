import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import importStyle from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // 支持SFC方式构建组件
    vue(),
    // 支持JSX方式构建组件
    vueJsx(),
    // 按需导入 antd-vue 的样式文件
    importStyle({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => `ant-design-vue/es/${name}/style/css`,
        },
      ],
    }),
  ],

  resolve: {
    alias: {
      '@': '/src',
      '@styles': '/src/assets/styles',
    },
  },

  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
});
