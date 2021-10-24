<template>
	<div
			class="container text-center text-white my-2 flex-grow-1 d-flex justify-content-center align-items-center flex-column">
		<h1 class="fw-bold">Login</h1>
		<form class="form-wrapper" @submit.prevent="onLogin">
			<div class="form-floating mb-3">
				<input type="email" class="form-control bg-transparent text-white" placeholder="E-maill" id="login-email"
						v-model="form.email" ref="email-input">
				<label for="login-email">E-mail</label>
			</div>
			<div class="form-floating mb-3">
				<input type="password" class="form-control bg-transparent text-white" placeholder="Password" id="login-password"
						v-model="form.password">
				<label for="login-password">Password</label>
			</div>
			<button class="btn btn-secondary w-100" :disabled="!isFormValid">LOGIN</button>
		</form>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {

	data() {
		return {
			form: {
				email: '',
				password: '',
			},
		};
	},

	mounted() {
		this.$refs['email-input'].focus();
	},

	methods: {
		...mapActions({
			login: 'auth/login'
		}),
		onLogin() {
			this.login(this.form)
				.then(() => this.$router.push({ name: 'board'}))
				.catch((error) => console.log('Failed to login', error.map((err) => err.message)));
		}
	},

	computed: {
		/**
		 * Check if form input data is valid to submit.
		 *
		 * @return {boolean}
		 */
		isFormValid: function () {
			return '' !== this.form.email.trim() && '' !== this.form.password;
		},
	},
}
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/functions';
@import 'bootstrap/scss/variables';
@import 'bootstrap/scss/mixins';

.form-wrapper {
  width: 350px;

  @include media-breakpoint-down('sm') {
    width: 100%;
  }
}
</style>
