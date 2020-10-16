<template>
  <div class="article-wrapper">
    <el-row>
      <!-- 文章内容部分 -->
      <el-col :xl="18" :md="18" :lg="18" :sm="24" :xs="24">
        <article-detail :articleData="articleData" :catalogID="catalogID"></article-detail>
      </el-col>
      <!-- 右边侧边栏 -->
      <el-col :span="6" class="hidden-sm-and-down">
        <right-side @scrollTo="scrollTo" :articleData="articleData" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RightSide from "../../components/RightSide";
import ArticleDetail from "../../components/ArticleDetail";
import marked from "marked";
import catalogue from "../../utils/catalogue";
export default {
  async asyncData({ $axios }) {
    const res = await $axios.$get(
      "http://localhost:3000/web/api/getArticleInfo"
    );
    return { articleData: catalogue(marked(res.data.body)) };
  },
  components: {
    RightSide,
    ArticleDetail
  },
  data() {
    return {
      catalogID: ""
    };
  },
  methods: {
    scrollTo(id) {
      this.catalogID = id;
    }
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