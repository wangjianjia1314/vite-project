import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "ref",
    component: () => import("../views/ref/index.vue"),
  },
  {
    path: "/reative",
    name: "reative",
    component: () => import("../views/reative/index.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes, //上面的路由数组
});
export default router;
