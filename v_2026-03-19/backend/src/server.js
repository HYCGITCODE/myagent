import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import newsRouter from './routes/news.js';
import healthRouter from './routes/health.js';
import { initCache } from './services/cache.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());

// 初始化缓存
initCache();

// 路由
app.use('/api/news', newsRouter);
app.use('/health', healthRouter);

// 根路径
app.get('/', (req, res) => {
  res.json({
    name: 'AI News Pulse API',
    version: '1.0.0',
    endpoints: {
      news: '/api/news',
      health: '/health'
    }
  });
});

// 404 处理
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// 错误处理
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`🚀 AI News Pulse API running on port ${PORT}`);
  console.log(`📰 Health check: http://localhost:${PORT}/health`);
  console.log(`📰 News API: http://localhost:${PORT}/api/news`);
});

export default app;
