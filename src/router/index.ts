import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const BASE = import.meta.env.VITE_BASE;
const routes: Array<RouteRecordRaw> = [
  {
    path: `${BASE}`,
    name: "login",
    component: () => import("@/views/login/index.vue"),
    children: [],
  },
  {
    path: `${BASE}home`,
    name: "home",
    redirect: `${BASE}home/overview`,
    children: [
      {
        path: "overview",
        name: "overview",
        component: () => import("@/views/home/overview.vue"),
        children: [],
      }
    ],
  },
];
// const routerHistory = createWebHashHistory();
const router = createRouter({
  history: createWebHistory(),
  routes,
});
//全局后置守卫
router.afterEach((to, from, failure) => {
  // if (window.parent != window.self && from.fullPath !== "/") {
  //   window.parent.postMessage({ url: location.href }, "*");
  //   localStorage.setItem("url", to.fullPath);
  // }
});
export default router;
