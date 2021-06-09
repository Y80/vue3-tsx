# Vue3 + TSX 项目模板
相关技术：
- Vue3
- Vite
- TSX(TypeScript + JSX)
- Ant-Design-Vue
- Sass

## 脚本
预先定义在 `package.json` 中，这里使用包管理工具 `pnpm`，你也可以使用 `npm` `yarn` 或其他。
### 启动本地开发服务器
```bash
$pnpm dev
```

### 为生产环境构建产物
```bash
$pnpm build
```
输出目录为项目根路径下的 `dist` 文件夹

### 本地预览生产构建产物
先 build，在启动服务预览
```bash
$pnpm preview
```