import getters from './getters'
import mutations from './mutations';
import actions from './actions';

export default {
	namespaced: true,
	state: {
		lists: [
			{
				id: 1,
				title: 'Lorem Ipsum',
				tasks: [
					"Lorem ipsum dolor sit",
					"Aliquam consequatur nisi reprehenderit",
					"Adipisci amet aperiam odit",
					"Amet assumenda quam veniam",
					"Accusamus adipisci commodi dicta",
				],
			},
			{
				id: 2,
				title: 'Labore Quia',
				tasks: [
					"Lorem ipsum dolor sit",
					"Rerum sit suscipit veritatis",
					"Aut ea nisi veritatis",
					"Eius natus qui vel",
					"Laudantium nihil nostrum quaerat",
				],
			},
			{
				id: 3,
				title: 'Consectetur Libero',
				tasks: [
					"Et nulla reiciendis suscipit",
					"Aperiam deserunt fugiat perspiciatis",
					"Amet iusto quisquam veritatis",
					"Est quam quidem repellendus",
				],
			},
		]
	},
	getters,
	mutations,
	actions,
}
