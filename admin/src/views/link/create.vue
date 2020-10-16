<template>
  <div class="create-link">
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="链接名称">
        <el-input
          size="small"
          v-model="model.name"
          style="width:180px"
        ></el-input>
      </el-form-item>
      <el-form-item label="URL">
        <el-input
          size="small"
          v-model="model.url"
          style="width:450px"
        ></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input
          size="small"
          v-model="model.desc"
          style="width:450px"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="small" native-type="submit" type="primary"
          >保存</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addLink } from "@/api/link";
export default {
  data() {
    return {
      model: {
        name: "",
        url: "",
        desc: ""
      }
    };
  },
  methods: {
    save() {
      addLink(this.model).then(res => {
        this.$message({
          message: "恭喜你，添加成功！",
          type: "success"
        });
        this.$router.push("/link/list");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.create-link {
  background-color: #ffffff;
  margin: 20px;
  padding: 15px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  border-radius: 5px;
}
</style>
