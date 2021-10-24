export default {
	setAuthenticated(state, payload) {
		localStorage.setItem('authenticated', payload);

		state.authenticated = payload;
	}
}
