<template>
  <div class="create-category">
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select
          size="small"
          style="width:120px"
          v-model="model.parent"
          placeholder="请选择"
        >
          <el-option
            v-for="item in parents"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <!-- 名称 -->
      <el-form-item label="分类名称">
        <el-input
          style="width:400px"
          size="small"
          v-model="model.name"
        ></el-input>
      </el-form-item>
      <el-form-item label="分类图标">
        <el-input
          style="width:400px"
          size="small"
          v-model="model.icon"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" native-type="submit"
          >保存</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { createCategory, getCategory } from "@/api/category";
export default {
  data() {
    return {
      model: {
        parent: "",
        name: "",
        icon: ""
      },
      parents: []
    };
  },
  created() {
    getCategory().then(res => {
      this.parents = res.result;
    });
  },
  methods: {
    // 保存
    async save() {
      let data = null
      if(!this.model.parent) {
        data = { name:this.model.name,icon:this.model.icon }
      }else{
        data = this.model
      }
      const res = await createCategory(data);
      if (res) {
        this.$message({
          type: "success",
          message: "创建成功"
        });
        this.$router.push("/category/list");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.create-category {
  background-color: #ffffff;
  margin: 20px;
  padding: 15px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  border-radius: 5px;
}
</style>
