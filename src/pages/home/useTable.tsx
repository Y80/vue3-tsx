import { ColumnProps } from 'ant-design-vue/es/table/interface';
import { Button, message, Popconfirm } from 'ant-design-vue';
import { defineComponent, reactive, ref } from 'vue';
import * as AccountAPI from '@/api/home';

const EnableTag = defineComponent({
  props: {
    enableValue: Boolean,
  },

  setup({ enableValue }) {
    return () => {
      if (enableValue) {
        return <span class="enable-tag enable">启用</span>;
      }
      return <span class="enable-tag disable">禁用</span>;
    };
  },
});

export function useTable() {
  const dataSource = ref<any>([]);
  const loading = ref(false);
  const pagination = reactive({
    current: 1,
    pageSize: 10,
    showQuickJumper: true,
    total: 0,
    showSizeChanger: true,
    pageSizeOptions: ['5', '10', '20', '50'],
    onChange: undefined,
    onShowSizeChange: undefined,
  });
  const outerParamsCache = ref();

  async function fetchData() {
    const params = {
      ...(outerParamsCache.value || {}),
      page: pagination.current - 1,
      pageSize: pagination.pageSize,
    };

    loading.value = true;
    try {
      const { totalNumber, dataList } = await AccountAPI.getList(params);
      pagination.total = totalNumber;
      dataSource.value = dataList;
    } finally {
      loading.value = false;
    }
  }

  function handlePagerChange(current: number, pageSize: number) {
    pagination.current = current;
    pagination.pageSize = pageSize;
    fetchData();
  }

  pagination.onChange = handlePagerChange as any;
  pagination.onShowSizeChange = handlePagerChange as any;

  const columns: ColumnProps[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '状态',
      key: 'enable',
      customRender: ({ record }) => (
        <EnableTag key={record.enable} enableValue={record.enable} />
      ),
    },
    {
      title: '操作',
      key: 'action',
      customRender: ({ record }) => (
        <>
          <a
            onClick={() => {
              loading.value = true;
              AccountAPI.toggleState({ ...record, enable: !record.enable })
                .then(() => {
                  message.success(
                    `已${record.enable ? '禁用' : '启用'}【${record.name}】`
                  );
                  fetchData();
                })
                .catch(() => {
                  loading.value = false;
                });
            }}
          >
            {record.enable ? '禁用' : '启用'}
          </a>
          <Popconfirm
            title={`确定要删除【${record.name}】吗？`}
            onConfirm={() => {
              loading.value = true;
              AccountAPI.remove(record.id)
                .then(() => {
                  message.success('删除成功');
                  fetchData();
                })
                .catch(() => {
                  loading.value = false;
                });
            }}
          >
            <Button type="link">删除</Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return {
    columns,
    dataSource,
    pagination,
    loading,
    fetchData,
    outerParamsCache,
  };
}
