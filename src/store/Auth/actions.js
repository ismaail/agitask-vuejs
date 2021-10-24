import axios from 'axios';
import loginMutation from '@/graphql/mutations/login';

export default {
	async login({ commit }, credentials) {
		const response = await axios({
			url: '//api.agitasks.localhost/graphql/auth', //TODO: move endpoint to config or env.
			method: 'post',
			headers: { 'content-type': 'application/json' },
			data: {
				query: loginMutation,
				variables: {
					email: credentials.email,
					password: credentials.password,
				}
			}
		});

		const errors  = response.data.errors;

		if (errors) {
			return Promise.reject(errors);
		}

		commit('setAuthenticated', true);

		return response.data;
	}
}
