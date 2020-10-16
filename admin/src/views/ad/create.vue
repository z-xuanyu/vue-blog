<template>
  <div class="create-ad">
    <h3>添加广告位</h3>
    <el-form label-width="50px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input
          size="small"
          v-model="model.name"
          style="width:300px"
        ></el-input>
      </el-form-item>
      <el-form-item label="广告">
        <el-button size="small" @click="model.items.push({})">
          <i class="el-icon-plus"></i>添加广告
        </el-button>
        <!-- 添加列表 -->
        <el-row type="flex" style="flex-wrap:wrap">
          <el-col :md="24" v-for="(item, idx) in model.items" :key="idx">
            <el-form-item label-width="120px" label="跳转链接(URL)">
              <el-input
                size="small"
                style="width:500px"
                v-model="item.url"
              ></el-input>
            </el-form-item>
            <!-- 广告图片上传 -->
            <el-form-item label-width="120px" label="图片" style="margin-top:0.5rem">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="" />
              </el-dialog>
            </el-form-item>
            <!-- 删除按钮 -->
            <el-form-item style="margin-top:0.5rem" label-width="120px">
              <el-button
                size="small"
                type="danger"
                @click="model.items.splice(idx, 1)"
                >删除</el-button
              >
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" native-type="submit"
          >保存</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      model: {
        items: []
      }
    };
  },
  methods: {
    save() {},
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.create-ad {
  background-color: #ffffff;
  margin: 20px;
  padding: 15px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  border-radius: 5px;
}
</style>
