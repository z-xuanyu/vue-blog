<template>
  <div class="category-list">
    <el-row>
      <!-- 搜索内容 -->
      <el-col style="padding:10px">
        <el-button
          @click="$router.push('/category/create')"
          size="small"
          type="primary"
          icon="el-icon-plus"
        >新建分类</el-button>
        <el-button size="small" @click="deleteSelection" type="danger" icon="el-icon-delete">删除选中项</el-button>
      </el-col>
      <el-col style="margin-top:10px">
        <el-table
          ref="multipleTable"
          :data="categoryData"
          tooltip-effect="dark"
          style="width: 100%"
          border
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" align="center" width="55"></el-table-column>
          <el-table-column align="center" label="分类名称" width="140">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column align="center" label="上级分类" width="200">
            <template slot-scope="scope">
              {{
              scope.row.parent ? scope.row.parent.name : "暂无上级"
              }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="分类图标" width="220">
            <template slot-scope="scope">{{ scope.row.icon }}</template>
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
    <!-- 分类编辑 -->
    <el-dialog title="编辑分类" :visible.sync="editCategoryVisible">
      <el-form :model="form" label-width="80px">
        <el-form-item label="分类名称">
          <el-input size="small" style="width:60%" v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="分类图标">
          <el-input size="small" style="width:60%" v-model="form.icon" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="上级分类">
          <el-select size="small" style="width:120px" v-model="form.parent" placeholder="请选择">
            <el-option
              v-for="item in categoryData"
              :key="item._id"
              :label="item.name"
              :value="item._id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogFormVisible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getCategory, deleteCategory } from "@/api/category";
export default {
  data() {
    return {
      editCategoryVisible: false,
      categoryData: [],
      form: {
        name: "",
        icon: "",
        parent: "",
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    // 编辑分类
    handleEdit(row) {
      this.form = row;
      this.editCategoryVisible = true;
      console.log(row);
    },
    // 删除选中项
    deleteSelection(select){
      this.$confirm('您确定要删除选择项么？','提示',{
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(()=>{
        console.log(select)
      })
    },
    // 删除分类
    handleDelete(row) {
      this.$confirm(`是否确定要删除 "${row.name}"该分类！`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deleteCategory(row)
            .then(() => {
              this.$message({
                type: "success",
                message: "删除成功!",
              });
            })
            .catch(() => {
              this.$message({
                type: "error",
                message: "删除失败!",
              });
            });
          // 重新获取数据
          this.getData();
        })
        .catch(() => {});
    },
    // 获取数据
    async getData() {
      const { result } = await getCategory();
      this.categoryData = result;
    },
    // 选择事件触发
    handleSelectionChange(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
.category-list {
  background-color: #ffffff;
  margin: 20px;
  padding: 15px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  border-radius: 5px;
}
</style>
