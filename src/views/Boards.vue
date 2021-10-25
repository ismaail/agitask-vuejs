<template>
	<div class="container text-center text-white my-2 flex-grow-1 d-flex justify-content-center align-items-center flex-column">
		<h1>All Boards</h1>
		<div class="list-group list-group-flush bg-white w-50 px-4 py-2 rounded-3 shadow-lg" v-if="boards">
			<a href="#" class="list-group-item list-group-item-action bg-transparent d-flex justify-content-between align-items-center py-3"
					v-for="board in boards.data" :key="board.id">
				<span class="me-3">#{{ board.id }}: {{ board.name }}</span>
				<span>members: {{ board.members.length }}</span>
			</a>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'Boards',

	mounted() {
		this.fetch();
	},

	computed: {
		...mapGetters({
			boards: 'board/all',
		}),
	},

	methods: {
		...mapActions({
			fetch: 'board/fetch',
		})
	},
}
</script>
