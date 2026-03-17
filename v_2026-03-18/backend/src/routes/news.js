import express from 'express';
import { getNews, getNewsBySource, refreshCache, getCacheStats } from '../services/cache.js';
import { getSources } from '../services/rssFetcher.js';

const router = express.Router();

// GET /api/news - 获取所有新闻
router.get('/', (req, res) => {
  try {
    const news = getNews();
    res.json({
      success: true,
      count: news.length,
      data: news
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch news'
    });
  }
});

// GET /api/news/sources - 获取所有来源
router.get('/sources', (req, res) => {
  try {
    const sources = getSources();
    res.json({
      success: true,
      count: sources.length,
      data: sources
    });
  } catch (error) {
    console.error('Error fetching sources:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch sources'
    });
  }
});

// GET /api/news/:source - 按来源筛选
router.get('/:source', (req, res) => {
  try {
    const { source } = req.params;
    const news = getNewsBySource(source);
    
    res.json({
      success: true,
      count: news.length,
      source,
      data: news
    });
  } catch (error) {
    console.error('Error fetching news by source:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch news'
    });
  }
});

// POST /api/news/refresh - 手动刷新缓存
router.post('/refresh', async (req, res) => {
  try {
    const news = await refreshCache();
    res.json({
      success: true,
      count: news.length,
      message: 'Cache refreshed successfully',
      data: news
    });
  } catch (error) {
    console.error('Error refreshing cache:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to refresh cache'
    });
  }
});

// GET /api/news/stats - 获取缓存统计
router.get('/stats', (req, res) => {
  try {
    const stats = getCacheStats();
    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch stats'
    });
  }
});

export default router;
