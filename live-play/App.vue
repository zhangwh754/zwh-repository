<template>
  <div>启动测试</div>

  <wh-button type="default" @click="easyLog">default</wh-button>
  <wh-button type="primary" @click="easyLog">primary</wh-button>
  <wh-button type="warning" @click="easyLog">warning</wh-button>
</template>

<script lang="ts" setup>
import { easyLog } from "@zwh/a";
</script>
