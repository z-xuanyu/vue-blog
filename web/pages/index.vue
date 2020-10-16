<template>
  <div class="main-content">
    <el-row>
      <!-- 文章内容部分 -->
      <el-col :xl="18" :md="18" :lg="18" :sm="24" :xs="24">
        <home-article />
      </el-col>
      <!-- 右边侧边栏 -->
      <el-col :span="6" class="hidden-sm-and-down">
        <right-side />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RightSide from "../components/RightSide";
import HomeArticle from "../components/HomeArticle";
export default {
  components: {
    RightSide,
    HomeArticle
  }
};
</script>
<style lang="scss" scoped>
.main-content {
  width: 100%;
  height: calc(100vh - 50px);
  overflow: hidden;
  overflow-y: auto;
  background-color: #f1f3f4;
}
::-webkit-scrollbar {
  display: none;
}
</style>
