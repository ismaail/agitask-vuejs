<template>
	<div class="container-fluid flex-nowrap row gx-2 overflow-auto flex-grow-1 flex-shrink-0 pt-2">
		<!--.board-card>.card.bg-secondary.rounded-3>.card-header.border-bottom-0>lorem2^(.card-body.bg-white.mx-2.mb-2.p-2.rounded-3*5>.badge.bg-primary>lorem1^p.card-text>lorem4)+.card-footer.border-top-0.mx-0.px-2.pt-0.bg-secondary>btn.btn.btn-sm.btn-outline-secondary.border-0.text-text>i.icon.icon-add+{ New Task}-->
		<div class="board-card" v-for="list of lists" v-bind:key="list.id">
			<div class="card bg-secondary rounded-3">
				<!-- header -->
				<div class="card-header border-bottom-0">{{ list.title }}</div>
				<!-- Tasks -->
				<div class="card-body bg-white mx-2 mb-2 p-2 rounded-3" v-for="(task,index) of list.tasks" v-bind:key="index">
					<!-- Labels -->
					<div class="d-flex gap-1">
						<div class="badge bg-primary">Lorem.</div>
						<div class="badge bg-success text-text">ipsum.</div>
					</div>
					<!-- Task Text -->
					<p class="card-text">{{ task }}</p>
				</div>
				<!-- footer -->
				<div class="card-footer border-top-0 mx-0 px-2 pt-0 bg-secondary">
					<button class="btn btn-sm btn-outline-secondary border-0 text-text">
						<i class="icon icon-add"></i>
						New Task
					</button>
				</div>
			</div>
		</div>
	</div>
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

<style scoped lang="scss">
.board-card {
  flex-basis: 265px;

  .card {
    .card-body {
      .card-text {
        font-size: 0.95rem;
      }
    }
  }
}
</style>
