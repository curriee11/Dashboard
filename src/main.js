

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import MaskGroup from "./pages/MaskGroup.vue";
import "./global.css";

const routes = [
  {
    path: "/",
    name: "MaskGroup",
    component: MaskGroup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, _, next) => {
  const metaTitle = toRoute?.meta?.title;
  const metaDesc = toRoute?.meta?.description;

  window.document.title = metaTitle || "Dashboard";
  if (metaDesc) {
    addMetaTag(metaDesc);
  }
  next();
});

const addMetaTag = (value) => {
  const element = document.querySelector(`meta[name='description']`);
  if (element) {
    element.setAttribute("content", value);
  }
};

createApp(App).use(router).mount("#app");

export default router;
