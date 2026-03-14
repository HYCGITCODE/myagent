<template>
  <button
    class="source-tag inline-flex items-center justify-center h-8 px-3 text-sm font-medium rounded-full border transition-all duration-fast whitespace-nowrap"
    :class="[
      isActive 
        ? 'bg-accent-primary text-white border-accent-primary' 
        : 'bg-background-secondary text-foreground-secondary border-border-default hover:bg-accent-primary hover:text-white hover:border-accent-primary',
      disabled && 'opacity-50 pointer-events-none'
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  count: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['click'])

const handleClick = () => {
  if (props.disabled) return
  emit('click', props.label)
}
</script>

<style scoped>
.source-tag {
  min-width: 44px;
  min-height: 44px;
}

@media (min-width: 768px) {
  .source-tag {
    min-height: 32px;
  }
}
</style>
