<script setup>
import { BUTTON_TYPE } from '../../constants.js';
import { defineProps, computed } from 'vue';

const props = defineProps({
  path: {
    type: String,
    default: '#',
  },

  type: {
    type: String,
    default: BUTTON_TYPE.basic,
    validator: (value) => {
      return [
        BUTTON_TYPE.basic,
        BUTTON_TYPE.positive,
        BUTTON_TYPE.negative,
      ].indexOf(value) !== -1;
    },
  },
});

const classObj = computed(() => ({
  'button--basic': props.type === BUTTON_TYPE.basic,
  'button--positive': props.type === BUTTON_TYPE.positive,
  'button--negative': props.type === BUTTON_TYPE.negative,
}));
</script>


<template>
  <div
    class="button noselect"
    :class="classObj"
  >
    <slot />
  </div>
</template>


<style scoped lang="scss">
@use "sass:map";
@use "sass:color";
@import "../../assets/scss/utils.scss";
@import "../../assets/scss/colors.scss";

$basic-color: color.adjust(map.get($sunset, "blue"), $lightness: -30%);
$positive-color: color.adjust(map.get($sunset, "green"), $lightness: -40%);
$negative-color: color.adjust(map.get($sunset, "red"), $lightness: -20%);

.button {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  min-width: 80px;
  height: 40px;

  cursor: pointer;
  border-radius: 4px;

  font: 16px 'Roboto', sans-serif;
  font-weight: 500;

  transition: 50ms transform, 0.1s cubic-bezier(0, 0, 0.35, 1) min-width;

  &:active {
    transform: scale(0.95);
  }
}

.button--basic {
  color: $basic-color;

  &:hover {
    background-color: color.adjust($basic-color, $alpha: -0.9);
  }

  &:active {
    background-color: color.adjust($basic-color, $alpha: -0.75);
  }
}

.button--positive {
  color: $positive-color;

  &:hover {
    background-color: color.adjust($positive-color, $alpha: -0.9);
  }

  &:active {
    background-color: color.adjust($positive-color, $alpha: -0.75);
  }
}

.button--negative {
  color: $negative-color;

  &:hover {
    background-color: color.adjust($negative-color, $alpha: -0.9);
  }

  &:active {
    background-color: color.adjust($negative-color, $alpha: -0.75);
  }
}
</style>
