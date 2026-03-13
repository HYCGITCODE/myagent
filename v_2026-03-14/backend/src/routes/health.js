import express from 'express';
import { getCacheStats } from '../services/cache.js';

const router = express.Router();

// GET /health - 健康检查
router.get('/', (req, res) => {
  const stats = getCacheStats();
  
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    service: 'AI News Pulse API',
    version: '1.0.0',
    cache: stats ? {
      newsCount: stats.newsCount,
      hitRate: stats.hitRate.toFixed(2),
      lastFetch: stats.lastFetch
    } : null
  });
});

// GET /health/ready - 就绪检查（缓存有数据才算就绪）
router.get('/ready', (req, res) => {
  const stats = getCacheStats();
  
  if (stats && stats.newsCount > 0) {
    res.json({
      status: 'ready',
      newsCount: stats.newsCount
    });
  } else {
    res.status(503).json({
      status: 'not_ready',
      message: 'Cache is empty, waiting for initial fetch'
    });
  }
});

export default router;
