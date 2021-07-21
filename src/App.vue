<template>
	<nav class="navbar navbar-expand-sm navbar-dark bg-gray-dark">
		<div class="container-fluid">
			<router-link to="/" class="navbar-brand">AgiTask</router-link>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarText">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<!--<a class="nav-link active" aria-current="page" href="#">Home</a>-->
						<router-link to="/" class="nav-link">Home</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/board" class="nav-link">Board</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/about" class="nav-link">About</router-link>
					</li>
				</ul>
				<img src="./assets/images/avatar.png" alt="" class="navbar-avatar">
			</div>
		</div>
	</nav>
	<router-view/>
</template>
