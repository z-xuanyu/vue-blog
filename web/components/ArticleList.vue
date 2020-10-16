<template>
  <div class="article-list">
    <div class="header">
      <h1 class="title">全部文章列表</h1>
    </div>
    <div class="list-warpper">
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">
            <el-tooltip class="item" effect="dark" content="返回首页" placement="top-start">
              <i class="el-icon-s-home"></i> 首页
            </el-tooltip>
          </el-breadcrumb-item>
          <el-breadcrumb-item>文章列表</el-breadcrumb-item>
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
      <!-- 文章列表 -->
      <div class="list-item">
        <div class="card" v-for="item in 3" :key="item">
          <el-row class="item">
            <el-col :span="6" class="article-img"></el-col>
            <el-col :span="18" class="article-info">
              <h3>上的斯柯达斯柯达斯柯达</h3>
              <p>♯三等54564564撒大苏打撒旦是大苏打撒旦是是三撒旦是旦是是三等撒旦是是三等等54564564撒大苏打撒旦是是三等54564564撒大苏打撒旦是是三等54564564撒大苏打撒旦是是三等54564564撒大苏打撒旦是是</p>
              <div class="article-footer">
                <div class="footer-icon">
                  <span>
                    <i class="el-icon-user"></i>轩钰
                  </span>
                  <span>
                    <i class="el-icon-time">2020-05-12 10:21</i>
                  </span>
                  <span>
                    <i class="el-icon-chat-dot-round">暂无评论</i>
                  </span>
                </div>
                <el-button
                  @click="$router.push('/article/54545')"
                  size="mini"
                  type="primary"
                  round
                >阅读文章</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.article-list {
  .header {
    background-color: #ffffff;
    padding: 20px;
    .title {
      margin-left: 10px;
      font-size: 24px;
      font-size: 400;
      color: #000;
    }
  }
  .list-warpper {
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
    .list-item {
      padding: 10px 15px;
      .card {
        background-color: #ffffff;
        height: 200px;
        width: 100%;
        margin-bottom: 20px;
        border-radius: 10px;
        box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
        .item {
          display: flex;
          padding: 30px 20px;
          .article-img {
            overflow: hidden;

            height: 140px;
            box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            background: url("https://img.zhouxuanyu.com/upload/img/20200417144311.png")
              no-repeat center center/cover;
          }
          .article-info {
            padding: 10px;
            h3 {
              font-size: 18px;
              font-weight: 600;
              margin-bottom: 15px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            p {
              font-size: 14px;
              line-height: 1.6;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }
            .article-footer {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: 5px;
              .footer-icon {
                color: #98a6ad;
                font-size: 13px;
                span {
                  margin-right: 10px;
                }
                i {
                  margin-right: 3px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>