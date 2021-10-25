<template>
  <div class="container text-center my-2 text-white">
    <img alt="Vue logo" src="../assets/images/logo.png">
    <HelloWorld msg="Welcome to AgiTasks"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '~/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
