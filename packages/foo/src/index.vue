<template>
  <div>
    Foo 组件
    <p>{{ name }}</p>
    <button @click="onBtnClick">点击</button>
  </div>
</template>
<script>
export default {
  name: "Foo",
};
</script>
<script setup lang="ts">
import { Ref, ref } from "vue";
import { testLog } from "@sjl-library/utils";
const name: Ref<string> = ref("Foo");
console.log();
const onBtnClick = () => {
  testLog("点击按钮测试");
};
</script>
<style lang="scss" scoped></style>
