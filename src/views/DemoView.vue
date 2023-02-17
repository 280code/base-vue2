<template>
  <div class="home">
    <h1>demo</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <h1>element案例</h1>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-button @click="demo">axio请求</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import * as demoApi from '@/api/api'
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  created() {
    // 获取路由参数
    console.log(this.$route.query);
  },
  methods: {
    async demo() {
      // let result = await demoApi.get({demo:'demo'});
      // let result = await demoApi.post({ demo: 'demo' });
      let result = await demoApi.get({ demo: 'get' });
      console.log(result)
    }
  }
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
