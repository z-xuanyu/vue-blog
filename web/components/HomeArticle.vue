<template>
  <div class="home-article">
    <div class="blog-title">
      <h1>轩钰博客</h1>
      <p class="desc">一往情深深几许？深山夕照深秋雨。</p>
    </div>
    <!-- 文章列表 -->
    <div class="article-wrapper">
      <ul>
        <li v-for="item in 5" :key="item">
          <!-- 大图模式 -->
          <div class="big-pic-mode" v-if="false">
            <div class="article-img">
              <img
                height="250"
                width="100%"
                src="https://wxt.sinaimg.cn/large/007XivJ0gy1g735zmmcgqj31sy0u0npd.jpg"
                alt="文章一"
              />
            </div>
            <div class="article-info">
              <h2>已经是凌晨4点了</h2>
              <p>一往情深深几许？深山夕照深秋雨一往情深深几许秋雨一往情深深几许？深山夕照深秋雨</p>
              <!-- 分割线 -->
              <el-divider></el-divider>
              <!-- 图标 -->
              <div class="article-footer">
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
            </div>
          </div>
          <!--单一图文模式 -->
          <el-row class="single-article-mode" v-if="true">
            <el-col
              :span="6"
              :xl="2"
              :lg="4"
              :sm="8"
              class="article-img"
              :style="{background:`url('https://wxt.sinaimg.cn/large/007XivJ0gy1g735zmmcgqj31sy0u0npd.jpg') center center/cover`}"
            ></el-col>
            <!-- 文章信息 -->
            <el-col :span="18" :sm="16" :xl="22" :lg="20" class="article-info">
              <h4 @click="$router.push('/article/54545')">如何在微信小程序中使用iconfont图</h4>
              <p>iconfont图标下载 进入阿里矢量图（iconfont）图标库选择自己需要的图标，选择下载至本地（也是支持外链的形式使</p>
              <el-divider></el-divider>
              <div class="article-footer">
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
            </el-col>
          </el-row>
          <!-- 笔记模式 -->
          <div class="note-article-mode" v-if="false">
            <div class="note-article-ic"></div>
            <h2>轩钰笔记：Node如如何快速的如何快速的何快速的切换镜像源?</h2>
            <p>插件介绍这是一个将介绍 这是一个将Typecho 博客 RESTful 化的插件。启用此插件，你可以通过请求 API 向站点请求或写入信息（获取文章内容、获取评论、添</p>
            <el-divider></el-divider>
            <div class="article-footer">
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
          </div>
        </li>
      </ul>
    </div>
    <!-- 分页 -->
    <div class="pagination-wrapper">
      <el-pagination background layout="prev, pager, next" :total="50"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.home-article {
  .blog-title {
    background-color: #f9f9f9;
    padding: 20px;
    h1 {
      font-size: 36px;
      font-weight: 300;
      line-height: 1.42857143;
    }
    .desc {
      color: #98a6ad;
      font-size: 13px;
    }
  }
  .article-wrapper {
    padding: 20px;
    ul {
      li {
        background-color: #ffffff;
        border-radius: 6px;
        margin-bottom: 20px;
        overflow: hidden;
        // 大图模式
        .big-pic-mode {
          .article-info {
            padding: 30px;
            h2 {
              color: #555;
              font-size: 22px;
              font-weight: 400;
              margin-bottom: 10px;
              cursor: pointer;
            }
            p {
              color: #98a6ad;
              font-size: 13px;
              line-height: 1.4;
              cursor: pointer;
            }
          }
          .article-footer {
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
        // 单一图文模式
        .single-article-mode {
          display: flex;
          .article-img {
            cursor: pointer;
            width: 40%;
            height: auto;
            min-height: 108px;
          }
          .article-info {
            padding: 20px;
            .el-divider--horizontal {
              margin: 10px 0 15px;
            }
            h4 {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-size: 22px;
              font-weight: 400;
              cursor: pointer;
            }
            @media (max-width: 767px) {
              h4 {
                font-size: 17px;
              }
              p {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              .el-divider--horizontal {
                margin: 10px 0;
              }
            }
            p {
              margin-top: 10px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              color: #98a6ad;
              line-height: 2em;
              font-size: 14px;
              cursor: pointer;
            }
            .article-footer {
              color: #98a6ad;
              font-size: 13px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              span {
                margin-right: 10px;
              }
              i {
                margin-right: 3px;
              }
            }
          }
        }
        // 笔记模式
        .note-article-mode {
          padding: 20px;
          .note-article-ic {
            background: url("https://img.zhouxuanyu.com/usr/themes/handsome/assets/img/bg-ico.png")
              no-repeat;
            background-size: 40px auto;
            background-position: 0 -160px;
            width: 42px;
            height: 42px;
            float: left;
            margin-right: 25px;
            border-radius: 50%;
            border: 1px solid #eaeaea;
          }
          h2 {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: 22px;
            color: #555;
            font-weight: 400;
            cursor: pointer;
          }
          p {
            margin-top: 10px;
            word-break: break-all;
            color: #98a6ad;
            line-height: 2em;
            font-size: 14px;
            cursor: pointer;
          }
          .article-footer {
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
  // 分页
  .pagination-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
}
</style>