import { createStore } from 'vuex';
import Board from '@store/Board'
import Auth from '@store/Auth';

export default createStore({
	modules: {
		board: Board,
		auth: Auth,
	}
});
