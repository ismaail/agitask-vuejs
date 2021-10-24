import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default {
	namespaced: true,
	state: {
		authenticated: 'true' === localStorage.getItem('authenticated'),
	},
	getters,
	mutations,
	actions,
}
