import { createApp } from 'vue';
import router from './lib/router';
import store from './lib/store';
import App from './App';
// 一次性的导入所有antd的样式文件
// import 'ant-design-vue/dist/antd.min.css';
import '@styles/index.scss';

createApp(App).use(router).use(store).mount('#app');
