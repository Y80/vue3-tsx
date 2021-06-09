import { defineComponent } from 'vue';
import { Dropdown, Layout, Menu } from 'ant-design-vue';
import { RouterView } from 'vue-router';
import classes from '@styles/pages/dashboard.module.scss';
import UserIcon from '@/assets/images/user.png';
import ArrowIcon from '@/assets/images/arrow.png';
import store from '@/lib/store';
import router from '@/lib/router';

export default defineComponent({
  render() {
    return (
      <Layout class={classes.dashboard}>
        <Layout.Header>
          <div class="left">
            <span>驾驶舱权限管理后台</span>
          </div>
          <Dropdown
            class="right"
            overlay={
              <Menu>
                <Menu.Item
                  onClick={() => {
                    store.commit('setToken', '');
                    router.push('/login');
                  }}
                >
                  退出登录
                </Menu.Item>
              </Menu>
            }
          >
            <div>
              <img src={UserIcon} />
              <img src={ArrowIcon} />
            </div>
          </Dropdown>
        </Layout.Header>
        <Layout.Content>
          <RouterView />
        </Layout.Content>
      </Layout>
    );
  },
});
