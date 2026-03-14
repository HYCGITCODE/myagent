import NodeCache from 'node-cache';
import { fetchAllNews } from './rssFetcher.js';

let cache = null;
const CACHE_KEY = 'all_news';
const CACHE_TTL = 3600; // 1 小时

// 初始化缓存
export function initCache() {
  cache = new NodeCache({ stdTTL: CACHE_TTL });
  console.log(`✅ Cache initialized with TTL: ${CACHE_TTL}s`);
  
  // 启动定时任务，每小时更新缓存
  setInterval(async () => {
    console.log('🔄 Auto-refreshing news cache...');
    await refreshCache();
  }, CACHE_TTL * 1000);
  
  // 立即填充缓存
  refreshCache();
}

export function getCache() {
  return cache;
}

// 刷新缓存
export async function refreshCache() {
  try {
    const news = await fetchAllNews();
    cache.set(CACHE_KEY, news);
    console.log(`✅ Cache refreshed with ${news.length} items`);
    return news;
  } catch (error) {
    console.error('❌ Cache refresh failed:', error.message);
    // 返回旧缓存数据（如果有）
    return cache.get(CACHE_KEY) || [];
  }
}

// 获取新闻列表
export function getNews() {
  return cache.get(CACHE_KEY) || [];
}

// 按来源筛选
export function getNewsBySource(sourceId) {
  const allNews = getNews();
  return allNews.filter(item => item.source === sourceId);
}

// 获取缓存统计
export function getCacheStats() {
  if (!cache) return null;
  
  const stats = cache.getStats();
  const news = getNews();
  
  return {
    keys: stats.keys,
    hits: stats.hits,
    misses: stats.misses,
    hitRate: stats.hits / (stats.hits + stats.misses) || 0,
    newsCount: news.length,
    lastFetch: news.length > 0 ? news[0].fetchedAt : null,
    ttl: CACHE_TTL
  };
}
