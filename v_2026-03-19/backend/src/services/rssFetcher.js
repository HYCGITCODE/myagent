import Parser from 'rss-parser';
import NodeCache from 'node-cache';
import crypto from 'crypto';

const parser = new Parser({
  customFields: {
    item: ['dc:creator', 'pubDate']
  }
});

// 5 个 AI 新闻数据源
const RSS_FEEDS = [
  {
    id: 'techcrunch',
    name: 'TechCrunch AI',
    url: 'https://techcrunch.com/category/artificial-intelligence/feed/'
  },
  {
    id: 'venturebeat',
    name: 'VentureBeat AI',
    url: 'https://venturebeat.com/category/ai/feed/'
  },
  {
    id: 'mit',
    name: 'MIT Technology Review',
    url: 'https://www.technologyreview.com/topic/artificial-intelligence/feed/'
  },
  {
    id: 'ars',
    name: 'Ars Technica AI',
    url: 'https://arstechnica.com/ai/feed/'
  },
  {
    id: 'verge',
    name: 'The Verge AI',
    url: 'https://www.theverge.com/ai-artificial-intelligence/rss/index.xml'
  }
];

let cache = null;
const CACHE_TTL = 3600; // 1 小时

export function initCache() {
  cache = new NodeCache({ stdTTL: CACHE_TTL });
  console.log(`✅ Cache initialized with TTL: ${CACHE_TTL}s`);
}

export function getCache() {
  return cache;
}

// 抓取单个 RSS 源
async function fetchFeed(feed) {
  try {
    const feedData = await parser.parseURL(feed.url);
    return feedData.items.map(item => ({
      id: generateId(item.link),
      title: item.title,
      link: item.link,
      source: feed.id,
      sourceName: feed.name,
      pubDate: item.pubDate || item.isoDate,
      description: item.contentSnippet || item.description || '',
      author: item.dc_creator || item.creator || '',
      fetchedAt: new Date().toISOString()
    }));
  } catch (error) {
    console.error(`❌ Error fetching ${feed.name}:`, error.message);
    return [];
  }
}

// 生成唯一 ID
function generateId(link) {
  const hash = crypto.createHash('md5');
  hash.update(link);
  return hash.digest('hex');
}

// 抓取所有新闻源
export async function fetchAllNews() {
  console.log('📰 Fetching news from all sources...');
  
  const results = await Promise.all(RSS_FEEDS.map(fetchFeed));
  let allNews = results.flat();
  
  // 按发布时间排序
  allNews = allNews.sort((a, b) => {
    return new Date(b.pubDate) - new Date(a.pubDate);
  });
  
  // 去重
  const seen = new Set();
  allNews = allNews.filter(item => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
  
  console.log(`✅ Fetched ${allNews.length} news items`);
  return allNews;
}

// 获取所有来源列表
export function getSources() {
  return RSS_FEEDS.map(feed => ({
    id: feed.id,
    name: feed.name,
    url: feed.url
  }));
}

export { RSS_FEEDS };
