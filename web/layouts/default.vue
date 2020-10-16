<template>
  <div class="layout">
    <el-container class="container">
      <el-row style="width:100%" type="flex">
        <el-col style="margin:0 auto;" :lg="20" :xl="16" :md="20" :sm="22">
          <!-- 头部 -->
          <layout-header />
          <!-- 主题 -->
          <div class="main-box">
            <!-- 侧边导航 -->
            <side-navber></side-navber>
            <nuxt />
          </div>
        </el-col>
      </el-row>
    </el-container>
    <!-- <Nuxt /> -->
  </div>
</template>
<script>
import LayoutHeader from "../components/LayoutHeader";
import SideNavbar from "../components/SideNavber";
export default {
  components: {
    LayoutHeader,
    SideNavbar
  }
};
</script>
<style lang="scss" scoped>
.layout {
  height: 100vh;
  background: linear-gradient(to bottom, #2c3e50, #fd746c);
  .main-box {
    display: flex;
  }
}
</style>