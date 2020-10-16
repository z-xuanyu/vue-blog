<template>
  <div class="dashboard-container">
    <!-- 博客数据 -->
    <el-card class="box-card" shadow="hover">
      <div slot="header">
        <span>博客数据</span>
      </div>
      <el-row :gutter="20">
        <el-col :span="8" :xs="24" style="margin-bottom:10px">
          <div class="article content">
            <div class="header">
              <span>文章总计</span>
              <i class="el-icon-notebook-2"></i>
            </div>
            <div class="title">
              1207篇文章
            </div>
          </div>
        </el-col>
        <el-col :span="8" :xs="24" style="margin-bottom:10px">
          <div class="comment content">
            <div class="header">
              <span>评论总计</span>
              <i class="el-icon-chat-line-square"></i>
            </div>
            <div class="title">
              24条评论
            </div>
          </div>
        </el-col>
        <el-col :span="8" :xs="24" style="margin-bottom:10px">
          <div class="category content">
            <div class="header">
              <span>分类总计</span>
              <i class="el-icon-menu"></i>
            </div>
            <div class="title">
              3个分类
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <!-- 博客最新文章，最新评论信息 -->
    <div class="new-info-wrap">
      <el-row :gutter="20">
        <el-col :span="12" :xs="24">
          <div class="new-posts">
            <el-card>
              <div slot="header">
                <span>最近发布的文章</span>
              </div>
              <div class="new-posts-content">
                <el-table :data="newPostData" style="width: 100%">
                  <el-table-column prop="time" label="时间" width="150">
                  </el-table-column>
                  <el-table-column prop="title" label="文章标题">
                  </el-table-column>
                </el-table>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="12" :xs="24">
          <div class="new-comment">
            <el-card>
              <div slot="header">
                <span>最近得到的回复</span>
              </div>
              <div class="new-posts-content">
                <el-table :data="newPostData" style="width: 100%">
                  <el-table-column prop="time" label="时间" width="150">
                  </el-table-column>
                  <el-table-column prop="title" label="文章标题">
                  </el-table-column>
                </el-table>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data(){
    return{
      newPostData:[
        {
          _id:"4736",
          time:'2020-05-20',
          title:"一篇关于前端的文章，你阅读了吗？"
        },
        {
          _id:"4736",
          time:'2020-05-20',
          title:"一篇关于前端的文章，你阅读了吗？"
        },
        {
          _id:"4736",
          time:'2020-05-20',
          title:"一篇关于前端的文章，你阅读了吗？"
        },
        {
          _id:"4736",
          time:'2020-05-20',
          title:"一篇关于前端的文章，你阅读了吗？"
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard-container {
  background-color: #ffffff;
  margin: 20px;
  padding: 15px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  border-radius: 5px;
  .box-card {
    .el-col {
      padding: 0 10px;
      .content {
        border-radius: 5px;
        height: 150px;
        color: #ffffff;
        padding: 20px;
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
        }
        .title {
          font-size: 30px;
          padding: 10px;
          margin-top: 10px;
        }
      }
      .article {
        background: linear-gradient(to right, #f12711, #f5af19);
      }
      .comment {
        background: linear-gradient(to right, #ee0979, #ff6a00);
      }
      .category {
        background: linear-gradient(to right, #11998e, #38ef7d);
      }
    }
  }
  .new-info-wrap {
    margin-top: 20px;
  }
}
</style>
