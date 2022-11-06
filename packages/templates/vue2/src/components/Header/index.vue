<template>
  <el-container>
    <el-header style="background: black;height:80px;" class="header">
      <div class="title">混沌工程化</div>
      <div class="account">admin</div>
    </el-header>
  </el-container>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>
<style scoped>
.header{
  display: flex;
  align-items: center;
}
.title {
  color: white;
  text-align: left !important;
  font-size: 25px;
  height: 100%;
  font-weight: bold;
  line-height: 80px;
}
.account{
  color:white;
  margin-left: auto;
  cursor: pointer;
}
</style>
