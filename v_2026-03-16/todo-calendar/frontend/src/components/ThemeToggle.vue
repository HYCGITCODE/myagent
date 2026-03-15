<template>
  <button
    class="theme-toggle w-8 h-8 md:w-10 md:h-10 rounded-full bg-background-secondary border border-border-default flex items-center justify-center hover:bg-accent-primary hover:text-white hover:border-accent-primary transition-all duration-fast focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2"
    @click="toggleTheme"
    :aria-label="isDark ? '切换到浅色模式' : '切换到深色模式'"
  >
    <span class="text-lg md:text-xl">
      {{ isDark ? '🌙' : '☀️' }}
    </span>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const initTheme = () => {
  // Check localStorage first
  const saved = localStorage.getItem('theme')
  if (saved) {
    isDark.value = saved === 'dark'
  } else {
    // Check system preference
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme()
}

const applyTheme = () => {
  if (isDark.value) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.removeAttribute('data-theme')
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  applyTheme()
}

onMounted(() => {
  initTheme()
})
</script>

<style scoped>
.theme-toggle {
  font-size: 1.25rem;
}
</style>
