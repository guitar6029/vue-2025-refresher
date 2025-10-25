import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Todo from "../views/Todo.vue";
import MiniTimer from "../views/Mini.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/todo", name: "Todo", component: Todo },
  { path: "/mini-timer", name: "Scheduler", component: MiniTimer },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
