<template>
  <el-card>
    <div>ref</div>
    <div>{{ Man.name }} isRef {{ isRefObj }}</div>
    <el-button type="primary" @click="change">修改</el-button>
  </el-card>
  <el-card class="cardMar">
    <div>shallowRef 响应式只到了value</div>
    <div>{{ data1.name }}</div>
    <el-button type="primary" @click="change1">修改</el-button>
    <el-button type="primary" @click="change2">修改</el-button>
    <el-button type="primary" @click="change3">triggerRef</el-button>
  </el-card>
  <el-card class="cardMar">
    <div ref="dom">refdom</div>
    <el-button type="primary" @click="change4">获取dom</el-button>
  </el-card>
</template>

<script setup lang="ts">
import { ref, isRef, shallowRef, triggerRef } from "vue";
type M = {
  name: string;
};
const Man = ref<M>({ name: "man" });
const change = () => {
  Man.value.name = "满";
};
const isRefObj = isRef<boolean>(Man);

const data1 = shallowRef({ name: "浅响应式" });
const change1 = () => {
  data1.value.name = "不会被修改";
};
const change2 = () => {
  data1.value = { name: "被修改了" };
};
const change3 = () => {
  data1.value.name = "triggerRef是会强制修改";
  triggerRef(data1);
};
const dom = ref<HTMLDivElement>();
const change4 = () => {
  console.log(dom.value?.innerHTML);
};
</script>

<style lang="scss" scoped>
.cardMar {
  margin-top: 10px;
}
</style>
