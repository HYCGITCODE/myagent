<template>
  <div class="app min-h-screen bg-background-primary">
    <!-- Header -->
    <Header />
    
    <!-- Source Filter Bar -->
    <div class="source-filter bg-background-secondary border-b border-border-default h-14 flex items-center px-4 md:px-6 overflow-x-auto sticky top-16 z-40">
      <div class="flex gap-2">
        <SourceTag
          label="全部"
          :is-active="activeSource === 'all'"
          @click="selectSource('all')"
        />
        <SourceTag
          v-for="source in availableSources"
          :key="source"
          :label="source"
          :is-active="activeSource === source"
          @click="selectSource(source)"
        />
      </div>
    </div>
    
    <!-- Main Content -->
    <main class="main-content px-4 md:px-6 py-6">
      <!-- Error State -->
      <div v-if="error" class="error-state max-w-4xl mx-auto text-center py-12">
        <p class="text-semantic-error mb-4">{{ error }}</p>
        <button
          class="px-6 py-2 bg-accent-primary text-white rounded-lg font-medium hover:bg-accent-hover transition-colors"
          @click="refreshNews"
        >
          重试
        </button>
      </div>
      
      <!-- Loading State (Initial) -->
      <div v-else-if="loading && newsList.length === 0" class="space-y-4 max-w-4xl mx-auto">
        <LoadingSkeleton v-for="i in 5" :key="i" />
      </div>
      
      <!-- News List -->
      <div v-else class="space-y-4 max-w-4xl mx-auto">
        <NewsCard
          v-for="news in filteredNews"
          :key="news.id"
          :news="news"
          :loading="loading"
          @click="handleNewsClick"
        />
        
        <!-- Loading More Indicator -->
        <div v-if="loading && newsList.length > 0" class="flex justify-center py-4">
          <div class="animate-pulse text-foreground-secondary">加载中...</div>
        </div>
        
        <!-- Load More Button -->
        <div v-else-if="hasMore && !loading && newsList.length > 0" class="text-center py-4">
          <button
            class="px-6 py-2 bg-accent-primary text-white rounded-lg font-medium hover:bg-accent-hover transition-colors"
            @click="loadMore"
          >
            加载更多
          </button>
        </div>
        
        <!-- No More Data -->
        <div v-if="!hasMore && newsList.length > 0" class="text-center py-4 text-foreground-tertiary">
          没有更多新闻了
        </div>
        
        <!-- Empty State -->
        <div v-if="!loading && filteredNews.length === 0 && newsList.length > 0" class="text-center py-12">
          <p class="text-foreground-secondary text-lg">该来源暂无新闻</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { fetchNews, handleApiError } from './services/api'
import Header from './components/Header.vue'
import SourceTag from './components/SourceTag.vue'
import NewsCard from './components/NewsCard.vue'
import LoadingSkeleton from './components/LoadingSkeleton.vue'

// State
const newsList = ref([])
const activeSource = ref('all')
const loading = ref(false)
const error = ref('')
const hasMore = ref(true)
const page = ref(1)
const pageSize = 20

// Computed - Get unique sources from news
const availableSources = computed(() => {
  const sourceSet = new Set(newsList.value.map(n => n.source).filter(Boolean))
  return Array.from(sourceSet)
})

const filteredNews = computed(() => {
  if (activeSource.value === 'all') {
    return newsList.value
  }
  return newsList.value.filter(news => news.source === activeSource.value)
})

// Methods
const selectSource = (source) => {
  activeSource.value = source
  page.value = 1
  newsList.value = []
  hasMore.value = true
  fetchNewsData(true)
}

const fetchNewsData = async (isRefresh = false) => {
  try {
    loading.value = true
    error.value = ''
    
    const data = await fetchNews({
      page: isRefresh ? 1 : page.value,
      source: activeSource.value === 'all' ? undefined : activeSource.value,
      limit: pageSize
    })
    
    const newNews = data.news || data.items || []
    
    if (isRefresh) {
      newsList.value = newNews
      page.value = 1
    } else {
      newsList.value = [...newsList.value, ...newNews]
    }
    
    hasMore.value = data.hasMore !== false && newNews.length === pageSize
    if (!isRefresh) {
      page.value++
    }
    
  } catch (err) {
    console.error('Fetch news error:', err)
    error.value = handleApiError(err)
    if (isRefresh && newsList.value.length === 0) {
      // Show mock data for demo
      loadMockData()
      error.value = ''
    }
  } finally {
    loading.value = false
  }
}

const loadMockData = () => {
  // Mock data for development/demo
  const mockSources = ['TechCrunch', 'VentureBeat', 'The Verge', 'MIT Tech Review', 'Ars Technica']
  const mockNews = Array.from({ length: 20 }, (_, i) => ({
    id: `mock-${i}`,
    title: `AI News ${i + 1}: Breaking developments in artificial intelligence`,
    summary: `This is a sample news summary for demonstration purposes. Real content will be fetched from the API.`,
    source: mockSources[i % mockSources.length],
    publishedAt: new Date(Date.now() - i * 3600000).toISOString(),
    url: 'https://example.com'
  }))
  newsList.value = mockNews
  hasMore.value = true
}

const loadMore = () => {
  if (!loading.value && hasMore.value) {
    fetchNewsData(false)
  }
}

const refreshNews = () => {
  fetchNewsData(true)
}

const handleNewsClick = (news) => {
  console.log('News clicked:', news)
}

// Lifecycle
onMounted(() => {
  fetchNewsData(true)
})
</script>

<style scoped>
.source-filter {
  scrollbar-width: thin;
}

.source-filter::-webkit-scrollbar {
  height: 4px;
}

.source-filter::-webkit-scrollbar-thumb {
  background: var(--border-hover);
  border-radius: 2px;
}
</style>
