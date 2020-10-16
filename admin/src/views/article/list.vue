<template>
  <div class="article-list">
    <el-row>
      <!-- 搜索内容 -->
      <el-col style="padding:10px">
        <el-input
          size="small"
          placeholder="请输入搜索关键词"
          style="width:200px"
          v-model="keyword"
          @keyup.enter.native="searchTableData"
        ></el-input>
        <el-button @click="searchTableData" size="small" type="primary" icon="el-icon-search">搜索</el-button>
        <el-button
          @click="$router.push('/article/create')"
          size="small"
          type="primary"
          icon="el-icon-plus"
        >撰写文章</el-button>
      </el-col>
      <el-col style="margin-top:10px">
        <el-table
          ref="multipleTable"
          :data="articleData"
          tooltip-effect="dark"
          style="width: 100%"
          border
          v-loading="loading"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" align="center" width="55"></el-table-column>
          <el-table-column label="文章标题" width="250">
            <template slot-scope="scope">
              <div class="article-title">{{ scope.row.title }}</div>
            </template>
          </el-table-column>
          <!-- 文字封面图 -->
          <el-table-column align="center" label="封面图" width="100">
            <template slot-scope="scope">
              <el-image style="width: 50px; height: 50px" :src="scope.row.pic" fit="cover"></el-image>
            </template>
          </el-table-column>
          <el-table-column align="center" label="发布时间" width="160">
            <template slot-scope="scope">{{ scope.row.time | timeFormat }}</template>
          </el-table-column>
          <el-table-column align="center" label="所属分类">
            <template slot-scope="scope">
              <div class="category-name">
                <el-tag
                  class="category-tag-item"
                  size="small"
                  v-for="(item, index) in scope.row.categories"
                  :key="index"
                  type="successs"
                >{{ item.name }}</el-tag>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" label="阅读量" sortable width="100">
            <template slot-scope="scope">{{ scope.row.views }}</template>
          </el-table-column>
          <el-table-column align="center" label="发布状态" width="120">
            <template slot-scope="scope">
              <el-tag v-if="scope.row.isRelease" size="small" effect="dark" type="success">已发布</el-tag>
              <el-tag v-else size="small" effect="dark" type="danger">未发布</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                icon="el-icon-edit"
                @click="$router.push(`/article/edit/${scope.row._id}`)"
              >编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row)"
                icon="el-icon-delete"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <!-- 分页 -->
      <el-col class="pagination-wrap">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[1,10, 20, 30, 40]"
          :page-size="pageSize"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getArticle, deleteArticle } from "@/api/article";
export default {
  data() {
    return {
      keyword: "",
      loading: false, //加载
      currentPage: 1, //当前所在页
      pageSize: 10, // 每一页多少条
      total: null, // 总数
      articleData: [],
      multipleSelection: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    // 获取文章列表数据
    getData() {
      getArticle({
        pageSize: this.pageSize,
        currentPage: this.currentPage
      }).then(res => {
        this.total = res.total;
        this.articleData = res.data;
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 分页数改变时触发
    handleSizeChange(value) {
      this.loading = true;
      setTimeout(() => {
        this.pageSize = value;
        this.getData();
        this.loading = false;
      }, 500);
    },
    // 当前页面触发
    handleCurrentChange(value) {
      this.loading = true;
      setTimeout(() => {
        this.currentPage = value;
        this.getData();
        this.loading = false;
      }, 500);
    },
    // 删除
    handleDelete(row) {
      this.$confirm(`是否确定要删除文章 "${row.title}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await deleteArticle(row);
        if (res) {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.getData();
        }
      });
    },
    // 搜索文章
    searchTableData() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        const arr = this.articleData.filter(
          item =>
            !this.keyword ||
            item.title.toLowerCase().includes(this.keyword.toLowerCase())
        );
        this.articleData = arr;
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.article-list {
  background-color: #ffffff;
  margin: 20px;
  padding: 15px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  border-radius: 5px;
  .pagination-wrap {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .article-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .category-tag-item {
    display: inline-block;
    margin-right: 5px;
  }
}
</style>
