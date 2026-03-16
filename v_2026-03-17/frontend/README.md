# AI News Pulse - Frontend

AI 行业新闻聚合 Web 应用的前端部分。

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **Tailwind CSS 4** - 实用优先的 CSS 框架
- **PostCSS** - CSS 预处理工具

## 功能特性

- ✅ 新闻列表展示
- ✅ 来源筛选
- ✅ 响应式设计 (Mobile/Tablet/Desktop)
- ✅ 深色模式切换
- ✅ 加载状态处理
- ✅ 错误处理
- ✅ 无限滚动/加载更多

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173

### 生产构建

```bash
npm run build
```

构建输出到 `dist/` 目录

### 预览生产构建

```bash
npm run preview
```

## 项目结构

```
frontend/
├── src/
│   ├── components/       # Vue 组件
│   │   ├── Header.vue       # 顶部导航
│   │   ├── NewsCard.vue     # 新闻卡片
│   │   ├── SourceTag.vue    # 来源标签
│   │   ├── LoadingSkeleton.vue  # 加载骨架屏
│   │   └── ThemeToggle.vue  # 主题切换
│   ├── services/         # API 服务
│   │   └── api.js
│   ├── assets/           # 静态资源
│   ├── App.vue           # 根组件
│   ├── main.js           # 入口文件
│   └── style.css         # 全局样式
├── index.html
├── tailwind.config.js    # Tailwind 配置
├── postcss.config.js     # PostCSS 配置
├── vite.config.js        # Vite 配置
└── package.json
```

## API 对接

前端通过 Vite 代理连接到后端 API：

- `GET /api/news` - 获取新闻列表
- `POST /api/news/refresh` - 手动刷新

开发时代理配置在 `vite.config.js` 中指向 `http://localhost:3000`

## 设计系统

基于 `/design/tokens.json` 的设计令牌：

- **颜色**: 浅色/深色主题完整支持
- **字体**: -apple-system 字体栈
- **间距**: 4px 基准单位
- **圆角**: 4px-16px 阶梯
- **阴影**: sm/base/md/lg 四级
- **响应式**: mobile (375px) / tablet (768px) / desktop (1024px)

## 组件状态

所有组件均实现完整状态：

- **NewsCard**: Default / Hover / Active / Loading
- **SourceTag**: Default / Hover / Active / Disabled
- **ThemeToggle**: Light / Dark

## 开发规范

- 使用 Vue 3 Composition API (`<script setup>`)
- 组件命名使用 PascalCase
- 样式使用 Tailwind 工具类
- 响应式设计优先移动端

## 浏览器支持

- Chrome (最近 2 版本)
- Firefox (最近 2 版本)
- Safari (最近 2 版本)
- Edge (最近 2 版本)

## 许可证

MIT
