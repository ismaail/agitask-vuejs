import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default {
	namespaced: true,
	state: {
		authenticated: 'true' === localStorage.getItem('authenticated'),
		accessToken: localStorage.getItem('accessToken'),
	},
	getters,
	mutations,
	actions,
}
