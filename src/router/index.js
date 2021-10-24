import { createRouter, createWebHistory } from 'vue-router';
import Home from '@views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		beforeEnter: routeGuard,
		component: () => import('@views/About.vue')
	},
	{
		path: '/board',
		name: 'Board',
		beforeEnter: routeGuard,
		component: () => import('@views/Board.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/Login.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	linkActiveClass: 'active',
});

export default router
