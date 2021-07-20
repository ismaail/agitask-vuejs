import getters from './getters'
import mutations from './mutations';
import actions from './actions';

export default {
    namespaced: true,
    state: {
        lists: [
            {
                id: 1,
                title: 'lorem 1',
            },
            {
                id: 2,
                title: 'lorem 2',
            },
            {
                id: 3,
                title: 'lorem 3',
            },
            {
                id: 4,
                title: 'lorem 4',
            },
        ]
    },
    getters,
    mutations,
    actions,
}
