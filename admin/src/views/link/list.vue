<template>
  <div class="link-list">
    <el-row>
      <!-- 搜索内容 -->
      <el-col style="padding:10px">
        <el-input size="small" placeholder="请输入搜索关键词" style="width:200px" v-model="keyword"></el-input>
        <el-button size="small" @click="searchTableData" type="primary" icon="el-icon-search">搜索</el-button>
        <el-button size="small" @click="deleteSelection" type="danger" icon="el-icon-delete">删除选中项</el-button>
        <el-button
          @click="$router.push('/link/create')"
          size="small"
          type="primary"
          icon="el-icon-plus"
        >添加链接</el-button>
      </el-col>
      <el-col style="margin-top:10px">
        <el-table
          ref="multipleTable"
          :data="linkData"
          tooltip-effect="dark"
          style="width: 100%"
          border
          v-loading="loading"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" align="center" width="55"></el-table-column>
          <el-table-column align="center" label="链接名称" width="140">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column align="center" label="URL" width="200">
            <template slot-scope="scope">{{ scope.row.url }}</template>
          </el-table-column>
          <el-table-column align="center" label="描述" width="220">
            <template slot-scope="scope">{{ scope.row.desc }}</template>
          </el-table-column>
          <el-table-column align="center" label="创建时间" width="150">
            <template slot-scope="scope">{{ scope.row.time | timeFormat('yyyy-mm-dd') }}</template>
          </el-table-column>
          <el-table-column align="center" label="状态" width="100">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.status"
                active-color="#13ce66"
                inactive-color="#ff4949"
                @change="handleChang(scope.row)"
              ></el-switch>
            </template>
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
    </el-row>
    <!-- 编辑内容弹出层 -->
    <el-dialog title="编辑内容" :visible.sync="linkFormVisible">
      <el-form label-width="100px" :model="form">
        <el-form-item label="链接名称">
          <el-input style="width:60%" size="small" v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="URL">
          <el-input style="width:60%" size="small" v-model="form.url" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input size="small" v-model="form.desc" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-date-picker
            v-model="form.time"
            type="datetime"
            style="width:200px"
            placeholder="选择日期时间"
            size="small"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="状态">
          <el-switch v-model="form.status" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button size="small" @click="linkFormVisible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="updataLinkData">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getLinkInfo, deleteLink, updataLink } from "@/api/link";
export default {
  data() {
    return {
      keyword: "",
      linkData: [],
      loading: false, //加载
      linkFormVisible: false, //弹出层
      form: {
        name: "",
        url: "",
        desc: "",
        time: "",
        status: false
      },
      selectionArr: [] //选中项
    };
  },
  created() {
    this.getData();
  },
  methods: {
    // 编辑链接
    handleEdit(row) {
      this.form = row;
      this.linkFormVisible = true;
    },
    // 删除链接
    handleDelete(row) {
      this.$confirm(`是否确定要删除 "${row.name}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        deleteLink(row)
          .then(() => {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          })
          .catch(() => {
            this.$message({
              type: "error",
              message: "删除失败!"
            });
          });
        // 重新获取数据
        this.getData();
      });
    },
    // 改变状态
    handleChang(row) {
      updataLink(row)
        .then(() => {
          this.$message({
            type: "success",
            message: "状态更新成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "error",
            message: "状态更新失败!"
          });
        });
    },
    // 更新链接信息
    updataLinkData() {
      updataLink(this.form)
        .then(() => {
          this.$message({
            type: "success",
            message: "更新成功!"
          });
          this.linkFormVisible = false;
          this.getData();
        })
        .catch(() => {
          this.$message({
            type: "error",
            message: "更新失败!"
          });
        });
    },
    // 表格选择中事件
    handleSelectionChange(val) {
      this.selectionArr = val;
    },
    // 删除选中项
    deleteSelection() {
      if (!this.selectionArr.length)
        return this.$message({ type: "error", message: "没有选择项哦！" });
      this.$confirm(`是否确定要删除选中项?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        this.selectionArr.forEach(item => {
          deleteLink(item);
        });
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        // 重新获取数据
        this.getData();
      });
    },
    // 搜索
    searchTableData() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        const arr = this.linkData.filter(
          item =>
            !this.keyword ||
            item.name.toLowerCase().includes(this.keyword.toLowerCase())
        );
        this.linkData = arr;
      }, 1000);
    },
    // 获取数据
    getData() {
      getLinkInfo().then(res => {
        this.linkData = res.result;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.link-list {
  background-color: #ffffff;
  margin: 20px;
  padding: 15px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  border-radius: 5px;
}
</style>
