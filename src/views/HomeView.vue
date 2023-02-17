<template>
  <div class="home">
    <el-button @click="goDemo">goDemo</el-button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    goDemo() {
      console.log('demo');
      this.$router.push('/demo?id=3&&username=zhang')
    }
  }
}
</script>
