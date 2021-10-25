export default {
	setAuthenticated(state, payload) {
		localStorage.setItem('authenticated', payload);

		state.authenticated = payload;
	},

	setAccessToken(state, payload) {
		localStorage.setItem('accessToken', payload);

		state.accessToken = payload;
	}
}
