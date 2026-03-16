# AI News Pulse Backend

后端 API 服务 - RSS 新闻聚合

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 生产模式
npm start

# 手动抓取新闻
npm run fetch
```

## API 端点

| 端点 | 方法 | 描述 |
|------|------|------|
| `/api/news` | GET | 获取所有新闻 |
| `/api/news/sources` | GET | 获取所有新闻源 |
| `/api/news/:source` | GET | 按来源筛选新闻 |
| `/api/news/refresh` | POST | 手动刷新缓存 |
| `/api/news/stats` | GET | 获取缓存统计 |
| `/health` | GET | 健康检查 |
| `/health/ready` | GET | 就绪检查 |

## 数据源

- TechCrunch AI
- VentureBeat AI
- MIT Technology Review
- Ars Technica AI
- The Verge AI

## 缓存机制

- 自动刷新：每小时
- 缓存 TTL: 3600 秒
- 内存缓存：NodeCache

## 部署到 Railway

1. 连接 GitHub 仓库
2. 设置 Root Directory: `backend`
3. 自动部署

## 技术栈

- Node.js 18+
- Express.js
- rss-parser
- node-cache
- cors
