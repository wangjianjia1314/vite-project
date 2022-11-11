<template>
  <div class="main">
    <div class="main-menu">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        :default-active="routes[0].path"
        :router="true"
        text-color="#fff"
      >
        <el-menu-item
          v-for="(item, i) in routes"
          :index="item.path"
          :key="item.path"
        >
          <el-icon><document /></el-icon>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Document, Menu as IconMenu, Setting } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
const {
  options: { routes },
} = useRouter();
</script>
<style scoped lang="scss">
.main {
  display: flex;
  &-menu {
    width: 200px;
    height: 100vh;
    background-color: #545c64;
  }
  &-content {
    flex: 1;
    margin: 10px;
  }
}
</style>
