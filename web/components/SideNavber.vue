<template>
  <div class="side-navbar" :class="this.$store.state.drawer?'':'hidden-xs-only'">
    <!-- 用户信息 -->
    <div class="user-box">
      <el-avatar
        :size="60"
        src="https://wxt.sinaimg.cn/large/007XivJ0gy1g93mawj6coj30qn0qnabt.jpg"
        @error="errorHandler"
      >
        <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </el-avatar>
      <div class="user-name">
        <h4 class="subname">
          轩钰
          <i class="el-icon-caret-bottom"></i>
        </h4>
        <p class="desc">只要心还跳</p>
      </div>
    </div>
    <!-- 分割线 -->
    <el-divider></el-divider>
    <!-- 导航 -->
    <el-menu
      default-active="1"
      @open="handleOpen"
      @close="handleClose"
      background-color="#3a3f51"
      text-color="#fff"
      router
      active-text-color="#7266ba"
    >
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/github">
        <i class="el-icon-link"></i>
        <span slot="title">Github</span>
      </el-menu-item>
      <el-menu-item index="3">
        
        <i class="el-icon-orange"></i>
        <span slot="title">动态</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-picture"></i>
        <span slot="title">相册</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-notebook-1"></i>
        <span slot="title">书影</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-lock"></i>
        <span slot="title">日志</span>
      </el-menu-item>
      <!-- 分割线 -->
      <el-divider></el-divider>
      <!-- 展开式导航 -->
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>分类</span>
        </template>

        <el-menu-item index="7-1">NodeJs</el-menu-item>
        <el-menu-item index="7-2">Vue</el-menu-item>

        <el-menu-item index="7-3">Uniapp</el-menu-item>

        <el-submenu index="7-4">
          <template slot="title">WEB</template>
          <el-menu-item index="7-4-1">Html</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
    <!-- 导航底部 -->
    <!-- <div class="navber-footer">

    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      direction: "ltl"
    };
  },
  methods: {
    //   头像错误
    errorHandler() {
      return true;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.side-navbar {
  width: 270px;
  height: calc(100vh - 50px);
  overflow: hidden;
  overflow-y: auto;
  background-color: #3a3f51;
  .user-box {
    display: flex;
    padding: 20px;
    align-items: center;
    .user-name {
      margin-left: 10px;
      text-align: center;
      .subname {
        color: #ffffff;
        font-weight: 700;
        font-size: 14px;
      }
      .desc {
        font-size: 12px;
        color: #8b8e99;
        margin-top: 10px;
      }
    }
  }
  // 分割线
  .el-divider {
    background-color: #2e3344;
  }
  // 去掉侧边栏默认border
  .el-menu {
    border: none;
  }
  .navber-footer{
    height: 50px;
    background-color: violet;
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>