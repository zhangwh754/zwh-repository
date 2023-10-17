<template>
  <button :class="['wh-button', buttonClassName]">
    <slot name="default">测试</slot>
  </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import "./style.less";

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
