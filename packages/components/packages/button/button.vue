<template>
  <button :class="['wh-button', buttonClassName]">
    <slot name="default"></slot>
  </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";

defineOptions({ name: "wh-button" });

const props = withDefaults(
  defineProps<{
    type?: "primary" | "default" | "warning";
  }>(),
  {
    type: "default",
  }
);

const buttonClassName = computed(() => {
  const name = ["primary", "default", "warning"].includes(props.type)
    ? props.type
    : "default";

  return `wh-button--${name}`;
});
</script>

<style lang="less" scoped>
@import "./style.less";
</style>
