import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Dashboard from './views/Dashboard.vue'
import Tickets from './views/Tickets.vue'
import TicketDetails from './views/TicketDetails.vue'
import Computers from './views/Computers.vue'
import Users from './views/Users.vue'
import Reports from './views/Reports.vue'
import About from './views/About.vue'
import './style.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Dashboard },
    { path: '/tickets', component: Tickets },
    { path: '/tickets/:id', component: TicketDetails },
    { path: '/computers', component: Computers },
    { path: '/users', component: Users },
    { path: '/reports', component: Reports },
    { path: '/about', component: About }
  ]
})
createApp(App).use(router).mount('#app')
