<template>
  <article 
    class="news-card bg-background-primary border border-border-default rounded-lg p-4 shadow-sm transition-all duration-normal cursor-pointer hover:bg-background-secondary hover:border-border-hover hover:shadow-md hover:-translate-y-0.5 active:bg-background-tertiary active:border-accent-primary"
    :class="{ 'opacity-60 pointer-events-none': loading }"
    @click="handleClick"
  >
    <div class="flex items-start gap-3">
      <!-- Tag Icon -->
      <span class="text-xl flex-shrink-0">📰</span>
      
      <div class="flex-1 min-w-0">
        <!-- Title -->
        <h3 class="text-lg font-bold text-foreground-primary mb-2 line-clamp-2 leading-tight">
          {{ news.title }}
        </h3>
        
        <!-- Summary -->
        <p 
          v-if="news.summary" 
          class="text-sm text-foreground-secondary mb-3 line-clamp-2 leading-relaxed"
        >
          {{ news.summary }}
        </p>
        
        <!-- Meta Info -->
        <div class="flex items-center gap-2 text-xs text-foreground-tertiary">
          <span class="font-medium">{{ news.source }}</span>
          <span>•</span>
          <span>{{ relativeTime }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  news: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      summary: '',
      source: '',
      publishedAt: '',
      url: ''
    })
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const relativeTime = computed(() => {
  if (!props.news.publishedAt) return ''
  
  const now = new Date()
  const published = new Date(props.news.publishedAt)
  const diffMs = now - published
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)
  
  if (diffMins < 1) return '刚刚'
  if (diffMins < 60) return `${diffMins}分钟前`
  if (diffHours < 24) return `${diffHours}小时前`
  if (diffDays < 7) return `${diffDays}天前`
  
  return published.toLocaleDateString('zh-CN')
})

const handleClick = () => {
  if (props.loading) return
  
  emit('click', props.news)
  
  // Open in new tab
  if (props.news.url) {
    window.open(props.news.url, '_blank', 'noopener,noreferrer')
  }
}
</script>

<style scoped>
.news-card {
  min-height: 120px;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
