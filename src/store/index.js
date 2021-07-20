import { createStore } from 'vuex';
import Board from '@store/Board'

export default createStore({
    modules: {
        board: Board,
    }
});
