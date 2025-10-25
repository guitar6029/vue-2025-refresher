import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/HomePage.vue"
import TodoPage from '../components/Todo/TodoPage.vue'
const routes = [
  { path: '/', name: 'Home', component: Home },
  {path: "/todo" , name: "Todo", component: TodoPage} 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
