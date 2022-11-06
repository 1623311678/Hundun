<template>
  <div>
    <Header></Header>
    <el-container class="container">
      <div class="left">
        <Menu></Menu>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </el-container>
  </div>
</template>
<script>
import Header from "./components/Header";
import Menu from "./components/Menu";
export default {
  name: "App",
  components: { Header, Menu },
  data() {
    return {};
  },
};
</script>
<style scoped>
.container {
  display: flex;
  height:calc(100vh - 80px);
}
.left {
  min-width: 200px;
  height: 100%
}
</style>
