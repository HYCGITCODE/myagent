# AI News Pulse - 技术设计文档 (TDD)

**版本**: v1.0  
**创建日期**: 2026-03-08  
**状态**: ARCHITECTURE_COMPLETE  
**负责人**: 胡小架 (Arch)

---

## 1. 技术选型

### 1.1 前端框架

| 选项 | 评估 | 决策 |
|------|------|------|
| **React** | 生态成熟，但配置复杂，需要额外状态管理 | ❌ |
| **Vue 3** | 上手快，单文件组件，内置状态管理 | ✅ **选中** |
| **Svelte** | 编译时框架，体积小但生态相对年轻 | ❌ |

**最终选择: Vue 3 + Vite**

**选型依据:**
- ⚡ **快速开发**: Vite 热更新 + Vue 单文件组件，开发效率极高
- 📦 **轻量**: Vue 3 运行时仅 ~33KB (gzip)
- 🎨 **UI 库支持**: Element Plus / Naive UI 提供现成组件
- 👥 **团队熟悉度**: Vue 在国内团队普及率高
- 🔧 **配置简单**: Vite 开箱即用，无需复杂 Webpack 配置

**技术栈:**
- Vue 3 (Composition API)
- Vite (构建工具)
- TailwindCSS (样式框架)
- Axios (HTTP 客户端)
- Vue Router (路由管理)

---

### 1.2 后端框架

| 选项 | 评估 | 决策 |
|------|------|------|
| **Node.js + Express** | 轻量、快速、RSS 解析库丰富 | ✅ **选中** |
| **Python + FastAPI** | RSS 库成熟，但需额外部署 Python 环境 | ❌ |
| **Go + Gin** | 性能最优，但开发速度较慢 | ❌ |

**最终选择: Node.js + Express**

**选型依据:**
- 🚀 **开发速度**: Express 极简 API，30 分钟可搭建完整后端
- 📚 **RSS 生态**: `rss-parser`、`node-fetch` 等库成熟稳定
- 🔗 **全栈统一**: 前后端均用 JavaScript，降低上下文切换
- ☁️ **部署友好**: Node.js 在所有免费部署平台均有支持
- ⏱️ **性能足够**: 对于 RSS 聚合场景，性能绰绰有余

**技术栈:**
- Node.js 20 LTS
- Express 4.x (Web 框架)
- rss-parser (RSS 解析)
- node-cron (定时任务)
- cors (跨域处理)

---

### 1.3 数据源 (RSS Feeds)

**主要数据源 (≥3 个):**

| # | 来源 | RSS URL | 稳定性 | 更新频率 |
|---|------|---------|--------|----------|
| 1 | TechCrunch AI | `https://techcrunch.com/category/artificial-intelligence/feed/` | ⭐⭐⭐⭐⭐ | 高 |
| 2 | VentureBeat AI | `https://venturebeat.com/category/ai/feed/` | ⭐⭐⭐⭐⭐ | 高 |
| 3 | MIT Technology Review | `https://www.technologyreview.com/topic/artificial-intelligence/feed/` | ⭐⭐⭐⭐ | 中 |
| 4 | Ars Technica AI | `https://arstechnica.com/ai/feed/` | ⭐⭐⭐⭐⭐ | 高 |
| 5 | The Verge AI | `https://www.theverge.com/ai-artificial-intelligence/rss/index.xml` | ⭐⭐⭐⭐ | 中 |

**备选数据源 (≥5 个):**

| # | 来源 | RSS URL |
|---|------|---------|
| 6 | AI News (独立站点) | `https://artificialintelligence-news.com/feed/` |
| 7 | Towards Data Science | `https://towardsdatascience.com/feed` |
| 8 | The AI Blog (Google) | `https://blog.google/technology/ai/rss/` |
| 9 | OpenAI Blog | `https://openai.com/blog/rss/` |
| 10 | Hugging Face Blog | `https://huggingface.co/blog/feed.xml` |

**数据源策略:**
- 默认启用前 5 个主要数据源
- 若某个源连续 3 次抓取失败，自动降级使用备选源
- 每条新闻记录来源标识，便于追踪和筛选

---

### 1.4 部署平台

| 平台 | 免费 Tier | 限制 | 决策 |
|------|----------|------|------|
| **Vercel** | ✅ 无限静态页面 | Serverless Function 限时 10s | ❌ (定时任务受限) |
| **Railway** | ✅ $5 免费额度 | 足够 MVP 使用 | ✅ **选中** |
| **Netlify** | ✅ 100GB/月带宽 | 定时任务需外部触发 | ❌ |
| **Render** | ✅ 免费实例 | 实例会休眠 | ⚠️ 备选 |

**最终选择: Railway**

**选型依据:**
- 🎁 **免费额度**: $5/月，MVP 阶段完全够用
- ⏰ **定时任务**: 原生支持 cron jobs，无需外部服务
- 🐳 **Docker 支持**: 可直接使用 Dockerfile 部署
- 🔄 **Git 集成**: 推送 GitHub 自动部署
- 📊 **监控面板**: 内置日志和性能监控

**备选方案: Render** (若 Railway 额度用尽)

---

## 2. 架构设计

### 2.1 系统架构图

```
┌─────────────────────────────────────────────────────────────────┐
│                         Client Layer                            │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    Vue 3 Frontend                        │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐              │   │
│  │  │  News    │  │  Source  │  │  Search  │              │   │
│  │  │  List    │  │  Filter  │  │  (P1)    │              │   │
│  │  └──────────┘  └──────────┘  └──────────┘              │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP/JSON
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                         Server Layer                            │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                 Express.js API Server                   │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │   │
│  │  │  GET /api/   │  │  GET /api/   │  │  GET /api/   │  │   │
│  │  │  /news       │  │  /sources    │  │  /health     │  │   │
│  │  └──────────────┘  └──────────────┘  └──────────────┘  │   │
│  │  ┌──────────────┐  ┌──────────────┐                     │   │
│  │  │   CORS       │  │   Rate       │                     │   │
│  │  │   Handler    │  │   Limiter    │                     │   │
│  │  └──────────────┘  └──────────────┘                     │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ Internal
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                       Data Layer                                │
│  ┌──────────────────┐         ┌──────────────────┐            │
│  │   In-Memory      │         │   RSS Fetcher    │            │
│  │   Cache          │◄────────│   (node-cron)    │            │
│  │   (News Array)   │         │   Every 1h       │            │
│  └──────────────────┘         └──────────────────┘            │
│                              │                                  │
│                              ▼                                  │
│                    ┌──────────────────┐                        │
│                    │   External RSS   │                        │
│                    │   Feeds (5+)     │                        │
│                    └──────────────────┘                        │
└─────────────────────────────────────────────────────────────────┘
```

---

### 2.2 数据流图

```
┌─────────────┐
│   用户请求   │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────┐
│  GET /api/news                  │
│  - 可选参数：source, limit      │
└──────┬──────────────────────────┘
       │
       ▼
┌─────────────────────────────────┐
│  检查内存缓存                    │
│  - 缓存存在且未过期？           │
│    - 是 → 返回缓存数据          │
│    - 否 → 继续                  │
└──────┬──────────────────────────┘
       │
       ▼
┌─────────────────────────────────┐
│  触发 RSS 抓取 (若需要)           │
│  - 并行抓取 5 个 RSS 源            │
│  - 解析 XML → JSON              │
│  - 去重 (基于 URL)              │
│  - 按时间排序                   │
│  - 更新缓存                     │
└──────┬──────────────────────────┘
       │
       ▼
┌─────────────────────────────────┐
│  返回 JSON 响应                   │
│  {                              │
│    success: true,               │
│    data: [...],                 │
│    timestamp: 1234567890        │
│  }                              │
└──────┬──────────────────────────┘
       │
       ▼
┌─────────────┐
│  前端渲染   │
└─────────────┘

定时任务流程 (每小时):
┌─────────────┐
│  node-cron  │
│  0 * * * *  │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────┐
│  后台抓取所有 RSS 源              │
│  - 失败重试 (3 次)                │
│  - 日志记录                     │
│  - 更新内存缓存                 │
└─────────────────────────────────┘
```

---

### 2.3 API 接口定义 (OpenAPI 3.0)

```yaml
openapi: 3.0.3
info:
  title: AI News Pulse API
  description: AI 行业新闻聚合 API
  version: 1.0.0
  contact:
    name: AI News Pulse Team

servers:
  - url: https://ai-news-pulse.railway.app/api
    description: Production
  - url: http://localhost:3000/api
    description: Local Development

paths:
  /news:
    get:
      summary: 获取新闻列表
      description: 返回聚合的 AI 新闻列表，支持来源筛选
      tags:
        - News
      parameters:
        - name: source
          in: query
          description: 来源筛选 (可选)
          schema:
            type: string
            enum: [techcrunch, venturebeat, mit, ars, verge]
        - name: limit
          in: query
          description: 返回数量限制
          schema:
            type: integer
            default: 20
            minimum: 1
            maximum: 100
        - name: offset
          in: query
          description: 偏移量 (用于分页)
          schema:
            type: integer
            default: 0
      responses:
        '200':
          description: 成功
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/NewsResponse'
        '500':
          description: 服务器错误
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'

  /sources:
    get:
      summary: 获取来源列表
      description: 返回所有可用的新闻来源及新闻数量
      tags:
        - Sources
      responses:
        '200':
          description: 成功
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SourcesResponse'

  /health:
    get:
      summary: 健康检查
      description: 检查服务状态
      tags:
        - Health
      responses:
        '200':
          description: 服务正常
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                    enum: [healthy, unhealthy]
                  lastFetch:
                    type: string
                    format: date-time
                  sourcesActive:
                    type: integer

components:
  schemas:
    NewsResponse:
      type: object
      properties:
        success:
          type: boolean
        data:
          type: array
          items:
            $ref: '#/components/schemas/NewsItem'
        timestamp:
          type: integer
          description: Unix 时间戳
    
    NewsItem:
      type: object
      required:
        - id
        - title
        - link
        - source
        - pubDate
      properties:
        id:
          type: string
          description: 新闻唯一标识 (基于 URL 的哈希)
        title:
          type: string
        link:
          type: string
          format: uri
        source:
          type: string
          enum: [techcrunch, venturebeat, mit, ars, verge]
        sourceName:
          type: string
        pubDate:
          type: string
          format: date-time
        description:
          type: string
          description: 新闻摘要 (可选)
        imageUrl:
          type: string
          format: uri
          description: 缩略图 (可选)
    
    SourcesResponse:
      type: object
      properties:
        success:
          type: boolean
        data:
          type: array
          items:
            type: object
            properties:
              id:
                type: string
              name:
                type: string
              count:
                type: integer
                description: 当前新闻数量
    
    Error:
      type: object
      properties:
        success:
          type: boolean
          enum: [false]
        error:
          type: string
        message:
          type: string
```

---

### 2.4 目录结构

```
ai-news-pulse/
├── .env.example              # 环境变量示例
├── .gitignore
├── package.json
├── README.md
├── Dockerfile
├── railway.json              # Railway 部署配置
│
├── docs/
│   ├── prd.md                # 产品需求文档
│   ├── tdd.md                # 技术设计文档 (本文件)
│   ├── api.md                # API 文档 (Swagger UI)
│   └── deployment.md         # 部署指南
│
├── src/
│   ├── client/               # 前端代码 (Vue 3)
│   │   ├── index.html
│   │   ├── vite.config.js
│   │   ├── package.json
│   │   ├── tailwind.config.js
│   │   │
│   │   └── src/
│   │       ├── main.js
│   │       ├── App.vue
│   │       │
│   │       ├── components/
│   │       │   ├── NewsList.vue
│   │       │   ├── NewsCard.vue
│   │       │   ├── SourceFilter.vue
│   │       │   └── LoadingSpinner.vue
│   │       │
│   │       ├── composables/
│   │       │   ├── useNews.js
│   │       │   └── useSources.js
│   │       │
│   │       └── styles/
│   │           └── main.css
│   │
│   └── server/               # 后端代码 (Node.js + Express)
│       ├── index.js          # 入口文件
│       ├── package.json
│       │
│       ├── config/
│       │   ├── rss-sources.js    # RSS 源配置
│       │   └── constants.js      # 常量定义
│       │
│       ├── routes/
│       │   ├── news.js           # 新闻路由
│       │   ├── sources.js        # 来源路由
│       │   └── health.js         # 健康检查路由
│       │
│       ├── services/
│       │   ├── rss-fetcher.js    # RSS 抓取服务
│       │   ├── news-cache.js     # 缓存管理
│       │   └── scheduler.js      # 定时任务
│       │
│       ├── middleware/
│       │   ├── cors.js           # 跨域处理
│       │   ├── rate-limit.js     # 速率限制
│       │   └── error-handler.js  # 错误处理
│       │
│       └── utils/
│           ├── logger.js         # 日志工具
│           └── helpers.js        # 辅助函数
│
└── tests/                    # 测试文件 (可选，时间允许可实现)
    ├── api.test.js
    └── rss-fetcher.test.js
```

---

## 3. 跨域问题解决方案

### 3.1 问题分析
前端 (Vercel/Netlify) 与后端 (Railway) 可能部署在不同域名，需要处理 CORS。

### 3.2 解决方案

**后端配置 (Express):**
```javascript
const cors = require('cors');

app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
```

**环境变量:**
```bash
# .env
FRONTEND_URL=https://ai-news-pulse.vercel.app
BACKEND_URL=https://ai-news-pulse.railway.app
```

**备选方案:** 若部署在同一平台 (如 Railway 同时部署前后端)，可使用反向代理统一域名。

---

## 4. 性能优化策略

### 4.1 前端优化
- ✅ Vite 代码分割 (Code Splitting)
- ✅ 图片懒加载
- ✅ TailwindCSS PurgeCSS 移除未使用样式
- ✅ 虚拟滚动 (若新闻列表 > 100 条)

### 4.2 后端优化
- ✅ 内存缓存 (避免重复抓取)
- ✅ RSS 抓取并行化 (Promise.all)
- ✅ 响应压缩 (compression 中间件)
- ✅ 连接池复用

### 4.3 缓存策略
```
┌─────────────────────────────────────┐
│  缓存层级                           │
├─────────────────────────────────────┤
│  L1: 浏览器缓存 (ETag) - 5 分钟      │
│  L2: 内存缓存 (Node.js) - 1 小时     │
│  L3: RSS 源缓存 (Last-Modified)      │
└─────────────────────────────────────┘
```

---

## 5. 错误处理与监控

### 5.1 错误处理
- 全局错误中间件捕获未处理异常
- RSS 抓取失败自动重试 (3 次，指数退避)
- 降级策略：单源失败不影响整体服务

### 5.2 日志记录
```javascript
// 日志格式
{
  timestamp: "2026-03-08T13:00:00Z",
  level: "INFO|WARN|ERROR",
  service: "rss-fetcher",
  message: "Successfully fetched 20 items from TechCrunch",
  metadata: { source: "techcrunch", duration: 1234 }
}
```

### 5.3 健康检查
- `/api/health` 端点返回服务状态
- Railway 健康检查配置
- 告警阈值：连续 3 次抓取失败

---

## 6. 安全考虑

### 6.1 MVP 安全措施
- ✅ HTTPS 强制 (Railway 自动提供)
- ✅ 速率限制 (100 请求/分钟/IP)
- ✅ XSS 防护 (内容转义)
- ✅ 敏感信息环境变量化

### 6.2 后续迭代 (P1/P2)
- [ ] API Key 认证 (若开放公共 API)
- [ ] DDoS 防护 (Cloudflare)
- [ ] 输入验证 (Joi/Zod)

---

## 7. 开发环境配置

### 7.1 本地运行

```bash
# 后端
cd src/server
npm install
cp .env.example .env
npm run dev

# 前端
cd src/client
npm install
npm run dev
```

### 7.2 环境变量

```bash
# .env.example
NODE_ENV=development
PORT=3000
FRONTEND_URL=http://localhost:5173
RSS_FETCH_INTERVAL=0 * * * *  # 每小时
LOG_LEVEL=debug
```

---

## 8. 部署流程

### 8.1 Railway 部署

```bash
# 1. 安装 Railway CLI
npm install -g @railway/cli

# 2. 登录
railway login

# 3. 初始化项目
railway init

# 4. 部署
railway up
```

### 8.2 环境变量配置
在 Railway Dashboard 设置:
- `NODE_ENV=production`
- `FRONTEND_URL=<前端域名>`

### 8.3 定时任务配置
Railway 自动识别 `package.json` 中的 cron 配置或使用内置 Scheduler。

---

## 9. 技术债务与后续优化

### 9.1 MVP 阶段技术债务
- [ ] 内存缓存重启后丢失 → 后续可加 Redis
- [ ] 无数据库 → 后续可加 SQLite/PostgreSQL
- [ ] 无单元测试 → 后续补充

### 9.2 P1/P2 迭代计划
- [ ] 添加搜索功能 (Algolia/Meilisearch)
- [ ] 用户收藏系统 (需要数据库)
- [ ] 邮件订阅 (SendGrid/Mailgun)
- [ ] RSS 输出 (为其他聚合器提供 Feed)

---

## 10. 参考资源

### 10.1 文档链接
- [Vue 3 官方文档](https://vuejs.org/)
- [Vite 官方文档](https://vitejs.dev/)
- [Express.js 指南](https://expressjs.com/)
- [rss-parser NPM](https://www.npmjs.com/package/rss-parser)
- [Railway 文档](https://docs.railway.app/)

### 10.2 代码模板
- [Vue 3 + Vite 模板](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-vue)
- [Express 最佳实践](https://github.com/expressjs/express-promise-router)

---

**文档状态**: ✅ ARCHITECTURE_COMPLETE  
**下一步**: 通知 BE 开始后端开发

---

## 附录 A: RSS 源测试清单

在开发前需验证所有 RSS 源可用性:

```bash
# 测试脚本 (开发时执行)
curl -s "https://techcrunch.com/category/artificial-intelligence/feed/" | head -50
curl -s "https://venturebeat.com/category/ai/feed/" | head -50
# ... 其他源
```

**验证标准:**
- ✅ 返回有效 XML
- ✅ 包含 `<item>` 标签
- ✅ 包含 `<title>`, `<link>`, `<pubDate>` 字段
- ✅ 响应时间 < 3 秒

---

**文档结束**
