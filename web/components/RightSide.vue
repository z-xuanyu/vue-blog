<template>
  <div class="right-side">
    <!-- 博客公告 -->
    <div class="blog-notice">
      <el-card>
        <div slot="header">
          <span>
            <i class="el-icon-postcard"></i>博客公告
          </span>
        </div>
        <p>
          喜欢这款主题的朋友可以按教程折腾。
          本站采用Nuxtjs+Wordpress Rest Api渲染页面，源码存放在Github，欢迎使用。
          微信小程序版已上线，欢迎体验。
        </p>
      </el-card>
    </div>
    <!-- 热门文章,热门评论,最新文章 -->
    <el-tabs v-model="activeName" @tab-click="handleClickTabs" stretch>
      <!-- 热门文章 -->
      <el-tab-pane name="hot">
        <span slot="label">
          <i class="el-icon-orange"></i>
        </span>
        <div class="hot-article">
          <div class="big-title">热门文章</div>
          <ul>
            <li v-for="item in 4" :key="item">
              <el-avatar
                shape="square"
                :size="40"
                src="https://img.zhouxuanyu.com/usr/themes/handsome/usr/img/sj2/3.jpg!/fwfh/80x80/compress/true"
              ></el-avatar>
              <div class="content">
                <h4>轩钰笔记：常用的Vue开发技巧</h4>
                <span>
                  <i class="el-icon-chat-line-round"></i>245
                </span>
              </div>
            </li>
          </ul>
        </div>
      </el-tab-pane>
      <!-- 最新评论 -->
      <el-tab-pane name="new">
        <span slot="label">
          <i class="el-icon-chat-dot-square"></i>
        </span>
        <div class="new-comment">
          <div class="big-title">最新评论</div>
          <ul>
            <li v-for="item in 4" :key="item">
              <el-avatar
                shape="square"
                :size="40"
                src="https://img.zhouxuanyu.com/usr/themes/handsome/usr/img/sj2/3.jpg!/fwfh/80x80/compress/true"
              ></el-avatar>
              <div class="content">
                <div class="name">ayu</div>
                <p class="text">文章写得不错</p>
              </div>
            </li>
          </ul>
        </div>
      </el-tab-pane>
      <!-- 随机文章 -->
      <el-tab-pane name="random">
        <span slot="label">
          <i class="el-icon-chat-dot-square"></i>
        </span>
        <div class="random-article">
          <div class="big-title">随机文章</div>
          <ul>
            <li v-for="item in 4" :key="item">
              <el-avatar
                shape="square"
                :size="40"
                src="https://img.zhouxuanyu.com/usr/themes/handsome/usr/img/sj2/3.jpg!/fwfh/80x80/compress/true"
              ></el-avatar>
              <div class="content">
                <h4>轩钰笔记：常用的Vue开发技巧</h4>
                <span>
                  <i class="el-icon-chat-line-round"></i>245
                </span>
              </div>
            </li>
          </ul>
        </div>
      </el-tab-pane>
    </el-tabs>

    <!-- 博客信息 -->
    <div class="blog-info">
      <el-card>
        <div slot="header">
          <span>博客信息</span>
        </div>
        <ul v-for="(item,index) in blogInfoData" :key="index">
          <li>
            <span>
              <i :class="item.icon"></i>
              {{item.name}}
            </span>
            <el-tag size="mini" effect="dark">{{item.text}}</el-tag>
          </li>
        </ul>
      </el-card>
    </div>
    <!-- 标签云 -->
    <div class="tags-cloud">
      <el-card>
        <div slot="header">
          <span>标签云</span>
        </div>
        <div class="tags-box">
          <el-tag v-for="item in 6" :key="item" type="warning" size="small" effect="dark">自言自语</el-tag>
        </div>
      </el-card>
    </div>
    <!-- 文章目录 -->
    <div class="article-catalogue" ref="catalogue" v-if="isAricleRouter">
      <el-card>
        <div slot="header">
          <span>文章目录</span>
        </div>
        <ul>
          <li
            v-for="item in articleData.toc"
            :key="item.id"
            @click="scrollTo(item.id)"
            :style="{paddingLeft: `${item.indent}em`}"
            :title="item.text"
          >{{ item.text }}</li>
        </ul>
      </el-card>
    </div>
    <!-- 广告栏 -->
    <div class="ad">
      <el-card>
        <div slot="header">
          <span>赞助广告</span>
        </div>
        <img src="https://www.zhujiceping.com/3yyy.jpg" alt />
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articleData: {
      type: Object,
    },
  },
  data() {
    return {
      activeName: "hot",
      isAricleRouter: false,
      isFixed: false,
      blogInfoData: [
        {
          name: "文章数目",
          icon: "el-icon-tickets",
          text: 16,
        },
        {
          name: "评论数目",
          icon: "el-icon-tickets",
          text: 15,
        },
        {
          name: "运行天数",
          icon: "el-icon-tickets",
          text: "3年322年",
        },
        {
          name: "最后活动",
          icon: "el-icon-tickets",
          text: "1个月前",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleClickTabs(tab, event) {
      console.log(tab, event);
    },
    // 文章目录点击滚动
    scrollTo(id) {
      this.$emit("scrollTo", id);
    },
    // 页面滚动文章目录置顶
    handleScroll(event) {
      const top = event.target.scrollTop;
      console.log(event);
      // const offsetTop = this.$refs.catalogue.offsetTop || 0;
      // console.log(offsetTop);
      // top >= offsetTop ? (this.isFixed = true) : (this.isFixed = false);
      // console.log(typeof top >= offsetTop)
    },
  },
  created() {
    if (this.$route.name === "article-id") {
      this.isAricleRouter = true;
    }
  },
};
</script>
<style lang="scss" scoped>
.right-side {
  background-color: #f9f9f9;
  padding: 10px;
  // 博客公告
  .blog-notice {
    margin: -10px -10px 10px;
    span {
      font-size: 14px;
    }
    .el-icon-postcard {
      margin-right: 5px;
      font-size: 16px;
    }
    p {
      line-height: 1.4;
      font-size: 14px;
    }
  }
  .hot-article,
  .new-comment,
  .random-article {
    ul {
      margin-top: 20px;
      li {
        display: flex;
        padding-bottom: 20px;
        .content {
          margin-left: 20px;
          .name {
            font-size: 14px;
            color: #333;
          }
          .text {
            color: #78838a;
            font-size: 13;
            margin-top: 10px;
          }
          h4 {
            font-size: 14px;
            cursor: pointer;
            color: #78838a;
            font-weight: 400;
            line-height: 20px;
            margin-bottom: 3px;
          }
          span {
            color: #78838a;
            font-size: 13px;
            i {
              margin-right: 3px;
            }
          }
        }
      }
    }
  }
  // 博客信息
  .blog-info {
    margin-top: 10px;
    ul {
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        color: #58666e;
        font-size: 14px;
      }
    }
  }
  // 标签云
  .tags-cloud {
    margin-top: 20px;
    .tags-box {
      .el-tag {
        margin: 0 10px 10px 0;
      }
    }
  }
  // 文章目录、
  .article-catalogue {
    margin-top: 20px;
    ul {
      li {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 10px 5px;
        cursor: pointer;
        font-size: 14px;
        color: #9466ff;
        text-decoration: underline;
      }
      :hover {
        background-color: #f3f3f3;
      }
    }
  }
  // 广告
  .ad {
    margin-top: 20px;
    img {
      width: 100%;
    }
  }
}
</style>