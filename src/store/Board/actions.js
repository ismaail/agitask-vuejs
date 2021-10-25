import axios from "axios";
import boardsQuery from "~/graphql/queries/boards";

export default {
	/**
	 * Fetch all Boards.
	 *
	 * @param commit
	 * @return {Promise<void>}
	 */
	async fetch({ commit }) {
		const accessToken = localStorage.getItem('accessToken');

		const response = await axios({
			url: '//api.agitasks.localhost/graphql',
			method: 'post',
			headers: {
				'content-type': 'application/json',
				Authorization: `bearer ${accessToken}`
			},
			data: {
				query: boardsQuery,
				variables: {
					limit: 10,
				}
			},
		});

		commit('setBoards', response.data.data.boards);
	}
}
