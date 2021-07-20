<template>
	<h1>Board</h1>
	<u>
		<li v-for="list of lists" v-bind:key="list.id">{{ list.title }}</li>
	</u>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Board',

    computed: {
        ...mapGetters({
            lists: 'board/all'
        }),
    },
}
</script>

<style scoped>

</style>
