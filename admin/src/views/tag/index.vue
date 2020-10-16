<template>
  <div class="tag-page">
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
        <el-button @click="handleAddTag" size="small" type="primary" icon="el-icon-plus">添加标签</el-button>
      </el-col>
      <el-col style="margin-top:10px">
        <el-table
          ref="multipleTable"
          :data="tagData"
          tooltip-effect="dark"
          style="width: 100%"
          border
          v-loading="loading"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" align="center" width="55"></el-table-column>
          <el-table-column align="center" label="分类名称" width="180">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column align="center" label="创建时间" width="300">
            <template slot-scope="scope">{{ scope.row.updatedAt | timeFormat }}</template>
          </el-table-column>
          <el-table-column prop="address" label="操作">
            <template slot-scope="scope">
              <el-button size="mini" icon="el-icon-edit" @click="handleEdit(scope.row)">编辑</el-button>
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
    <!-- 添加标签 -->
    <el-dialog width="40%" title="添加标签" :visible.sync="addTagVisible">
      <el-form :model="addForm" :rules="rules" ref="addForm" label-width="80px">
        <el-form-item label="名称" prop="name">
          <el-input size="small" style="width:60%" v-model="addForm.name"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="addTagVisible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="addTagFormSubmit">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 分类编辑 -->
    <el-dialog width="40%" title="编辑标签" :visible.sync="editTagVisible">
      <el-form :model="editForm" ref="editForm" :rules="rules" label-width="80px">
        <el-form-item label="标签名称" prop="name">
          <el-input size="small" style="width:60%" v-model="editForm.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="editTagVisible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="editTagFormSubmit">保存编辑</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { addTag, getTagList, updatTagInfo, deleteTag } from "@/api/tag";
export default {
  data() {
    return {
      keyword: "", // 搜索关键词
      editTagVisible: false, // 编辑标签
      addTagVisible: false, // 添加标签弹出
      loading: false, //加载
      currentPage: 1, //当前所在页
      pageSize: 10, // 每一页多少条
      total: null, // 总数
      tagData: [],
      addForm: {},
      editForm: {},
      rules: {
        name: [{ required: true, message: "名称不能为空", trigger: "blur" }]
      }
    };
  },
  created() {
    this.getData();
  },
  methods: {
    // 添加标签
    handleAddTag() {
      this.addForm = {};
      this.addTagVisible = true;
    },
    addTagFormSubmit() {
      this.$refs.addForm.validate(valid => {
        if (valid) {
          addTag(this.addForm).then(res => {
            this.$message({
              type: "success",
              message: "添加成功!"
            });
            this.getData();
            this.addTagVisible = false;
          });
        }
      });
    },
    // 编辑分类
    handleEdit(row) {
      this.editForm = row;
      this.editTagVisible = true;
    },
    //  保存编辑
    editTagFormSubmit() {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          updatTagInfo(this.editForm).then(() => {
            this.$message({
              type: "success",
              message: "编辑成功!"
            });
            this.getData();
            this.editTagVisible = false;
          });
        }
      });
    },
    // 删除分类
    handleDelete(row) {
      this.$confirm(`是否确定要删除 "${row.name}"该分类！`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteTag(row).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            this.getData();
          });
        })
        .catch(() => {});
    },
    // 获取数据
    async getData() {
      const res = await getTagList({
        pageSize: this.pageSize,
        currentPage: this.currentPage
      });
      this.total = res.total;
      this.tagData = res.data;
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
    // 分页数改变时触发
    handleSizeChange(value) {
      this.loading = true;
      setTimeout(() => {
        this.pageSize = value;
        this.getData();
        this.loading = false;
      }, 500);
    },
    searchTableData() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        const arr = this.tagData.filter(
          item =>
            !this.keyword ||
            item.name.toLowerCase().includes(this.keyword.toLowerCase())
        );
        this.tagData = arr;
      }, 500);
    },
    // 选择事件触发
    handleSelectionChange(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss" scoped>
.tag-page {
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
}
</style>
