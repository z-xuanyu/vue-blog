<template>
  <div class="article-wrapper">
    <el-row>
      <!-- 文章内容部分 -->
      <el-col :xl="18" :md="18" :lg="18" :sm="24" :xs="24">
        <article-list />
      </el-col>
      <!-- 右边侧边栏 -->
      <el-col :span="6" class="hidden-sm-and-down">
        <right-side />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RightSide from "../../components/RightSide";
import ArticleList from "../../components/ArticleList";
export default {
  components: {
    RightSide,
    ArticleList
  }
};
</script>

<style lang="scss" scoped>
.article-wrapper {
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