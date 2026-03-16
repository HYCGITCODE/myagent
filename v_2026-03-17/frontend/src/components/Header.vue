<template>
  <header class="header bg-background-primary border-b border-border-default h-16 flex items-center justify-between px-4 md:px-6 sticky top-0 z-50">
    <!-- Logo / Title -->
    <div class="flex items-center gap-2">
      <span class="text-2xl">🤖</span>
      <h1 class="text-xl md:text-2xl font-bold text-foreground-primary">AI News Pulse</h1>
    </div>
    
    <!-- Theme Toggle -->
    <slot name="actions">
      <ThemeToggle />
    </slot>
  </header>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue'
</script>

<style scoped>
.header {
  backdrop-filter: blur(8px);
}
</style>
