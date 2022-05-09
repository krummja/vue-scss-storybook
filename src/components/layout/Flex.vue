<script setup>
import { defineProps, computed } from 'vue';
import { FLEX_DIRECTION } from '../../constants.js';

const props = defineProps({
  direction: {
    type: String,
    default: FLEX_DIRECTION.row,
    validator: (value) => {
      return [
        FLEX_DIRECTION.row,
        FLEX_DIRECTION.column,
      ].indexOf(value) !== -1;
    },
  },

  gap: {
    type: Number,
    default: 10,
  },

  padding: {
    type: Object,
    default: () => ({
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    })
  },
});

const style = computed(() => ({
  '--flex-direction': props.direction,
  '--gap': `${props.gap}px`,
  '--padding-top': `${props.padding.top}px`,
  '--padding-right': `${props.padding.right}px`,
  '--padding-bottom': `${props.padding.bottom}px`,
  '--padding-left': `${props.padding.left}px`,
}));
</script>


<template>
  <div
    :style="style"
    class="flex-layout"
  >
    <slot />
  </div>
</template>


<style scoped lang="scss">
.flex-layout {
  display: flex;
  flex-direction: var(--flex-direction);
  gap: var(--gap);
  padding:
    var(--padding-top)
    var(--padding-right)
    var(--padding-bottom)
    var(--padding-left);
}
</style>
