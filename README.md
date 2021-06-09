# Vue3 + TSX 项目模板
## 相关技术栈
- Vue3
- Vite
- TSX(TypeScript + JSX)
- Ant-Design-Vue
- Sass

## 脚本
预先定义在 `package.json` 中
### 启动本地开发服务器
```bash
$yarn dev
```

### 为生产环境构建产物
```bash
$yarn build
```
输出目录为项目根路径下的 `dist` 文件夹

### 本地预览生产构建产物
先 build，在启动服务预览
```bash
$yarn preview
```

## CI/CD
通过 Github Actions 自动打包部署至仓库 gh-pages 分支下，访问地址：https://lccl.cc/vue3-tsx