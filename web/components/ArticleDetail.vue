<template>
  <div class="article-detail">
    <!-- 文章头部 -->
    <div class="article-header">
      <h1 class="article-title">如何在微信小程序中使用iconfont图标？</h1>
      <div class="article-head-icon">
        <span>
          <i class="el-icon-user"></i>轩钰
        </span>
        <span>
          <i class="el-icon-time"></i>2020年05月25日
        </span>
        <span>
          <i class="el-icon-view">1954次浏览</i>
        </span>
        <span>
          <i class="el-icon-chat-round"></i>暂无评论
        </span>
        <span>
          <i class></i>
        </span>
        <span>#微信小程序</span>
      </div>
    </div>
    <!-- 正文 -->
    <div class="article-content">
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">
            <el-tooltip class="item" effect="dark" content="返回首页" placement="top-start">
              <i class="el-icon-s-home"></i> 首页
            </el-tooltip>
          </el-breadcrumb-item>
          <el-breadcrumb-item>正文</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="share">
          <span>分享到：</span>
          <span>
            <i class="el-icon-star-on"></i>
          </span>
          <span>
            <i class="el-icon-orange"></i>
          </span>
          <span>
            <i class="el-icon-camera-solid"></i>
          </span>
        </div>
      </div>
      <!-- 正文内容 -->
      <div class="article-body">
        <div v-highlight v-html="articleData.article"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    articleData: {
      type: Object
    },
    catalogID: {
      type: String
    }
  },
  watch: {
    catalogID: function(newValu) {
      let node = document.querySelector(`[data-id="${this.catalogID}"]`);
      console.log(node);
      if (!node) {
        return;
      }

      node.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }
  }
};
</script>
<style lang="scss">
.article-detail {
  // 头部
  .article-header {
    background-color: #ffffff;
    padding: 20px;
    .article-title {
      margin-left: 10px;
      font-size: 30px;
    }
    .article-head-icon {
      margin-top: 20px;
      font-size: 13px;
      color: #98a6ad;
      span {
        margin: 0 5px;
        i {
          margin-right: 5px;
        }
      }
    }
  }
  // 正文
  .article-content {
    padding: 20px;
    background-color: #f1f3f4;
    .breadcrumb {
      background-color: #ffffff;
      padding: 10px 15px;
      margin-bottom: 20px;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .share {
        color: #58666e;
        font-size: 14px;
        span {
          margin-left: 5px;
        }
      }
    }
    // 正文内容
    .article-body {
      padding: 30px;
      border-radius: 4px;
      background-color: #ffffff;
      overflow: hidden;
      img {
        width: 100%;
      }
      ul {
        font-size: 14px;
        list-style-type: disc;
        margin-top: 8px;
        margin-bottom: 8px;
        padding-left: 25px;
        color: black;
        line-height: 1.6;
      }
      ol {
        list-style-type: decimal;
        font-size: 14px;
        margin-top: 8px;
        margin-bottom: 8px;
        padding-left: 25px;
        color: black;
        line-height: 1.6;
        text-align: left;
      }
      p {
        margin-top: 8px;
        padding-bottom: 8px;
      }
      strong {
        font-weight: bold;
        color: black;
        margin: 5px 0;
      }
      em {
        font-style: italic;
        color: black;
      }
      hr {
        margin: 20px 0;
        height: 1px;
        border: none;
        border-top: 1px solid #9466ff;
      }
      table {
        display: table;
        text-align: left;
        border-collapse: collapse;
        border-spacing: 2px;
        border-color: grey;
        font-size: 16px;
        color: black;
        line-height: 1.6;
      }
      thead {
        display: table-header-group;
        vertical-align: middle;
        border-color: inherit;
      }
      tr {
        border: 0;
        border-top: 1px solid #ccc;
        background-color: white;
        display: table-row;
        vertical-align: inherit;
      }
      td:nth-of-type(n) {
        min-width: 85px;
        padding: 5px;
      }
      td {
        border: 1px solid #9466ff;
      }
      th {
        border: 1px solid #9466ff;
        background-color: #9466ff;
        color: #f8f8f8;
        border-bottom: 0;
        padding: 5px;
      }
      a {
        color: #9466ff;
      }
      h1 {
        font-size: 22px;
      }
      h2 {
        font-size: 20px;
      }
      h3 {
        font-size: 18px;
      }
      h4 {
        font-size: 16px;
      }
      h5 {
        font-size: 14px;
      }
      h6 {
        font-size: 13px;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: 30px;
        margin-bottom: 10px;
        border-left: 5px solid #9466ff;
        background: #f0f2f7;
        padding: 10px;
        border-bottom: 2px solid #9466ff;
      }
      blockquote {
        background-color: #fbf9fd;
        padding: 20px;
        margin: 20px 0;
        color: #616161;
        border-left: 2px solid #888;
        border-right: 2px solid #888;
      }
      pre {
        border-radius: 4px;
        margin: 10px 0;
        overflow: hidden;
      }
    }
  }
}
</style>