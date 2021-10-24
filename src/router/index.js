import { createRouter, createWebHistory } from 'vue-router';
import Home from '@views/Home.vue';
import authStore from '@/store/Auth';

/**
 * Redirect to '/login' if User is not authenticated.
 *
 * @param {Object} to
 * @param {Object} from
 * @param next
 */
const routeGuard = (to, from, next) => {
	const isAuthenticated = authStore.getters.check(authStore.state);
	const path = isAuthenticated ? true : { name: 'Login' };

	next(path);
}

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
