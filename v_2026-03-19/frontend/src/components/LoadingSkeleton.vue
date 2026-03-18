<template>
  <div class="loading-skeleton bg-background-primary border border-border-default rounded-lg p-4 animate-pulse">
    <div class="flex items-start gap-3">
      <!-- Icon Placeholder -->
      <div class="w-6 h-6 bg-border-default rounded flex-shrink-0"></div>
      
      <div class="flex-1 space-y-3">
        <!-- Title Placeholder -->
        <div class="h-5 bg-border-default rounded w-3/4"></div>
        
        <!-- Summary Placeholder -->
        <div class="h-4 bg-border-default rounded w-full"></div>
        <div class="h-4 bg-border-default rounded w-5/6"></div>
        
        <!-- Meta Placeholder -->
        <div class="h-3 bg-border-default rounded w-1/3"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Loading skeleton component for news cards
</script>

<style scoped>
@keyframes skeleton-pulse {
  0%, 100% {
    background-color: var(--border-default);
  }
  50% {
    background-color: var(--bg-tertiary);
  }
}

.animate-pulse {
  animation: skeleton-pulse 1.5s ease-in-out infinite;
}
</style>
