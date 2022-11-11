<template>
  <div id="">
    <el-card>
      <div>ref支持所有类型reactive 只能支持引用类型 不需要.value</div>
      <div>{{ obj.age }}</div>
      <div>{{ arr }}</div>
      <div>
        readonly 如果传入的为变量 变量修改readonly也会被修改的{{ read }}
      </div>
      <div>{{ state }}</div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, readonly, shallowReactive, isReactive } from "vue";
const obj = reactive({
  age: 18,
});
obj.age = 20;
let arr = reactive([0, 1, 2, 3, 4]);
//只读的
const read = readonly(arr);
arr[0] = 10;
setTimeout(() => {
  //在异步里无法直接赋值 可以使用数组方法 去重新赋值 push + 解构 或者数组作为对象的属性去修改
  arr = [6, 7, 8, 9];
  //可以修改原数组的值
  arr[1] = 10;
});
const state = shallowReactive({
  foo: 1,
  nested: {
    bar: 2,
  },
});
// 更改状态自身的属性是响应式的
state.foo++;
// ...但下层嵌套对象不会被转为响应式
isReactive(state.nested); // false
// 不是响应式的
state.nested.bar++;
state.foo++;
const arrData = [1, 2, 3, 4, 5, 6, 7];
const t = 5;
const arrSearch = (target: number, arr: number[]) => {
  let star = 0;
  let end = arr.length;
  while (star <= end) {
    let mid = Math.floor((star + end) / 2);
    let value = arr[mid];
    if (value === target) {
      return mid;
    }
    if (value > target) {
      end = mid;
    }
    if (value < target) {
      star = mid;
    }
  }
};

console.log(arrSearch(t, arrData));
</script>

<style lang="scss" scoped></style>
