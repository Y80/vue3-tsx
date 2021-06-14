import { defineComponent } from '@vue/runtime-core';
import {
  Form,
  Button,
  Input,
  Select,
  Modal,
  Table,
  Space,
} from 'ant-design-vue';
import classes from '@styles/pages/home.module.scss';
import { useSearchForm } from './useSearchForm';
import { useTable } from './useTable';
import { useModal } from './useModal';

function setup() {
  const table = useTable();
  const modal = useModal();
  const searchForm = useSearchForm();

  function handleSearch() {
    table.outerParamsCache.value = {
      enable: searchForm.model.status,
      name: searchForm.model.username,
    };
    table.fetchData();
  }

  // table.fetchData();

  function handleAddAccount() {
    modal.handleAddUser().then(table.fetchData);
  }

  return () => (
    <>
      <section class={[classes.section, 'block'].join(' ')}>
        <Form
          model={searchForm.model}
          layout="inline"
          ref={(el: any) => {
            searchForm.formRef.value = el;
          }}
        >
          <Form.Item label="姓名" name="username">
            <Input
              value={searchForm.model.username}
              allowClear
              onChange={(event) => {
                searchForm.model.username = event.target.value;
              }}
            />
          </Form.Item>
          <Form.Item label="状态" name="status">
            <Select
              allowClear
              style="width: 100px"
              value={searchForm.model.status}
              onChange={(value) => {
                searchForm.model.status = value;
              }}
              options={searchForm.statusOptions}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8 }}>
            <Space>
              <Button
                type="primary"
                loading={searchForm.loading.value}
                onClick={() => {
                  table.pagination.current = 1;
                  handleSearch();
                }}
              >
                查询
              </Button>
              <Button
                onClick={() => {
                  searchForm.formRef.value?.resetFields();
                  handleSearch();
                }}
              >
                重置
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </section>

      <section class={[classes.section, 'block'].join(' ')}>
        <p>
          <span>共 {table.pagination.total} 名</span>
          <Button type="primary" onClick={modal.openModal}>
            新增用户
          </Button>
        </p>
        <Table
          dataSource={table.dataSource.value}
          columns={table.columns}
          loading={table.loading.value}
          rowKey="name"
          scroll={{ x: true, y: window.innerHeight - 385 }}
          pagination={table.pagination}
        />
      </section>

      <Modal
        visible={modal.data.visible}
        title="新增用户"
        centered
        confirmLoading={modal.data.submitting}
        onOk={handleAddAccount}
        onCancel={() => {
          modal.data.visible = false;
        }}
      >
        <Form
          model={{ name: modal.data.username }}
          rules={{
            name: {
              required: true,
              message: '请输入新增用户的姓名',
              trigger: 'blur',
            },
          }}
          labelCol={{ span: 3 }}
          wrapperCol={{ span: 21 }}
        >
          <Form.Item label="姓名：" name="name">
            <Input
              onKeydown={(e: KeyboardEvent) => {
                e.code === 'Enter' && handleAddAccount();
              }}
              value={modal.data.username}
              onChange={(e) => {
                modal.data.username = e.target.value;
              }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default defineComponent({ setup });
