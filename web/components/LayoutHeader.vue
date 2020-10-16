<template>
  <div class="layout-header">
    <el-row type="flex" justify="space-between" align="center" style="height:50px">
      <!-- 展开side icon -->
      <el-col :span="2" class="left hidden-sm-and-up">
        <i @click="$store.commit('changeDrawer')" class="el-icon-s-fold"></i>
      </el-col>
      <!-- 标题 -->
      <el-col :lg="10" :sm="22" :md="16" :xl="8" :xs="8" class="title">
        <i class="el-icon-s-home"></i>
        <h1 @click="$router.push('/')">轩钰博客</h1>
        <!-- 搜索 -->
        <el-input
          class="header-search hidden-xs-only"
          size="small"
          placeholder="输入关键词搜索"
          suffix-icon="el-icon-search"
          v-model="keyword"
        ></el-input>
      </el-col>
      <el-col :xs="4" :xl="10" class="right">
        <i class="el-icon-search hidden-sm-and-up"></i>
        <!-- 音乐盒子 -->
        <div class="music-box hidden-sm-and-down">音乐盒子</div>
        <div class="navbar-nav hidden-xs-only">
          <!-- 动态 -->
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-orange"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <div class="feathericons">
                <el-card>
                  <div slot="header">
                    <span class="header-title">闲言碎语</span>
                  </div>
                  <ul>
                    <li v-for="(item,index) in 4" :key="index" class="item">
                      <div class="title">很不错的一篇文章！很不错的一篇文章很不错的一篇文章</div>
                      <p class="time">2020-5-24 10:22:47</p>
                    </li>
                  </ul>
                </el-card>
              </div>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- 夜间或白天模式 -->
          <span class="el-dropdown-link">
            <i class="el-icon-sunny"></i>
          </span>
          <!-- 用户登录 -->
          <el-dropdown>
            <span>
              <i class="el-icon-user-solid"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <div class="user-login-form">
                <el-form label-width="80px" :rules="ruleLoginForm" :model="loginForm">
                  <el-form-item label="用户名" prop="username">
                    <el-input size="small" v-model="loginForm.username" placeholder="用户名"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="password">
                    <el-input
                      type="password"
                      v-model="loginForm.password"
                      placeholder="密码"
                      size="small"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button
                      round
                      style="width:100%"
                      size="small"
                      @click="submitLoginForm('loginForm')"
                      type="primary"
                    >立即登录</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: "",
      loginForm: {
        username: "",
        password: ""
      },
      ruleLoginForm: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    hadnleClick() {
      console.log("32454");
    },
    submitLoginForm(loginForm) {
      console.log(loginForm);
      this.$message({ type: "error", message: "登录失败" });
    }
  }
};
</script>

<style lang="scss" scoped>
.layout-header {
  background-color: #7266ba;
  .left {
    line-height: 50px;
    color: #ffffff;
    text-align: center;
  }
  .right {
    line-height: 50px;
    display: flex;
    align-items: center;
    color: #ffffff;
    justify-content: flex-end;
    padding-right: 10px;
    .navbar-nav {
      margin-left: 100px;
      cursor: pointer;
      .el-dropdown {
        color: #ffffff;
        width: 50px;
        text-align: center;
        font-size: 16px;
      }
    }
  }
  .title {
    padding-left: 10px;
    display: flex;
    align-items: center;
    color: #ffffff;
    cursor: pointer;
    h1 {
      margin-left: 5px;
      font-weight: 700;
    }
    .header-search {
      width: 180px;
      margin-left: 50px;
    }
  }
}
// 登录
.user-login-form {
  padding: 20px 20px 0;
}
// 动态
.feathericons {
  .item {
    height: 60px;
    border-bottom: 1px solid #979797;
    .title {
      font-size: 14px;
      padding: 5px 0;
      margin-bottom: 10px;
    }
    .time {
      font-size: 12px;
    }
  }
}
</style>