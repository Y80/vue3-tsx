import classes from '@styles/pages/login.module.scss';
import { defineComponent } from '@vue/runtime-core';
import { Button, Input, Form } from 'ant-design-vue';
import { useForm } from './useForm';

function setup() {
  const form = useForm();

  return () => (
    <div class={classes.login}>
      <h1>后台管理系统</h1>
      <Form
        model={form.model}
        rules={form.rules}
        onFinish={form.handleFinish}
        onFinishFailed={form.handleFinishFailed}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
      >
        <Form.Item label="账号" name="username">
          <Input
            allowClear
            value={form.model.username}
            onChange={(e) => {
              form.model.username = e.target.value;
            }}
          />
        </Form.Item>
        <Form.Item label="密码" name="password">
          <Input.Password
            name="password"
            value={form.model.password}
            onChange={(e) => {
              form.model.password = e.target.value;
            }}
          />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          block
          loading={form.submitting.value}
        >
          登录
        </Button>
      </Form>
    </div>
  );
}

export default defineComponent({ setup });
