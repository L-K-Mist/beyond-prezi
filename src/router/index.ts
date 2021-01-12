import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SimpleSvg.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/RotationNavigation.vue"
      ),
  },
  {
    path: "/test-bluetooth",
    name: "Test Bluetooth",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TestBluetooth.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
