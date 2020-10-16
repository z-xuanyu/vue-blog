<template>
  <div class="create-article">
    <el-form label-width="100px" @submit.native.prevent="save">
      <!-- 文章所属分类 -->
      <el-form-item size="small" label="所属分类">
        <el-select size="small" v-model="model.categories" multiple placeholder="请选择">
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <!-- 文章标题 -->
      <el-form-item label="文章标题">
        <el-input size="small" style="width:80%" v-model="model.title"></el-input>
      </el-form-item>
      <!-- 文章封面 -->
      <el-form-item label="文章封面">
        <el-input size="small" style="width:50%" v-model="model.pic"></el-input>
        <el-upload
          class="pic-uploader"
          :action="httpBase + '/imgUpload'"
          :headers="headers"
          :show-file-list="false"
          :on-success="handlePicSuccess"
          :before-upload="beforePicUpload"
        >
          <img v-if="model.pic" :src="model.pic" class="pic" />
          <i v-else class="el-icon-plus pic-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <!-- 文章标签 -->
      <el-form-item size="small" label="文章标签">
        <el-select size="small" v-model="model.tags" multiple placeholder="请选择">
          <el-option v-for="item in tags" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <!-- 文章类型样式选择 1：小版式  2：大版式 3：图片版式-->
      <el-form-item label="文章版式">
        <el-select size="small" v-model="model.postStyle" placeholder="请选择">
          <el-option
            v-for="item in postStyle"
            :key="item.type"
            :label="item.name"
            :value="item.type"
          ></el-option>
        </el-select>
      </el-form-item>
      <!-- 文章发布时间 -->
      <el-form-item label="发布时间">
        <el-date-picker
          v-model="model.time"
          type="datetime"
          style="width:200px"
          placeholder="选择日期时间"
          size="small"
        ></el-date-picker>
      </el-form-item>
      <!-- 文章作者 -->
      <el-form-item label="撰写人">
        <el-input size="small" style="width:200px" v-model="model.author"></el-input>
      </el-form-item>
      <!-- 文章详情内容 -->
      <el-form-item label="详情">
        <mavon-editor
          style="height:500px"
          codeStyle="solarized-dark"
          ref="md"
          @save="save"
          @imgAdd="imgAdd"
          placeholder="开始你的灵魂创作吧"
          v-model="model.body"
        />
      </el-form-item>
      <!-- 分布，更新按钮 -->
      <el-form-item>
        <el-button size="small" type="primary" native-type="submit">{{ id?'更新':'发布' }}</el-button>
        <el-button size="small" type="primary" native-type="submit">保存草稿</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getCategory } from "@/api/category";
import { getToken } from "@/utils/auth";
import {
  createArticle,
  updateArticle,
  getEditArticle,
  imgUpload
} from "@/api/article";
import { getTagList } from "@/api/tag";
export default {
  props: {
    id: {}
  },
  data() {
    return {
      httpBase: process.env.VUE_APP_BASE_API,
      model: {
        pic: ""
      },
      picUrl: "",
      headers: {
        authorization: getToken()
      },
      categories: [],
      tags: [],
      postStyle: [
        {
          type: 1,
          name: "小版式"
        },
        {
          type: 2,
          name: "大版式"
        },
        {
          type: 3,
          name: "图文版式"
        }
      ]
    };
  },
  created() {
    //获取分类数据
    getCategory().then(res => {
      this.categories = res.result;
    });
    // 获取标签列表
    getTagList().then(res => {
      this.tags = res.data;
    });
    // 获取编辑文章内容
    this.id && this.getEditArtcleData();
  },
  methods: {
    // 保存
    async save() {
      if (this.id) {
        const res = await updateArticle(this.model);
        if (res) {
          this.$router.push("/article/list");
          this.$message({
            type: "success",
            message: "更新成功"
          });
        }
      } else {
        const res = await createArticle(this.model);
        if (res) {
          this.$router.push("/article/list");
          this.$message({
            type: "success",
            message: "保存成功"
          });
        }
      }
    },
    // 获取编辑内容数据
    async getEditArtcleData() {
      const res = await getEditArticle(this.id);
      this.model = res.result;
    },
    // 封面图上传处理
    handlePicSuccess(response) {
      this.model.pic = response.url;
      this.picUrl = response.url;
    },
    // 封面图片上传前处理
    beforePicUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("图片只能是 JPG/PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    // 编辑器图片上传
    imgAdd(pos, $file) {
      const formData = new FormData();
      formData.append("file", $file);
      imgUpload(formData).then(res => {
        const $vm = this.$refs.md;
        $vm.$img2Url(pos, res.url);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.create-article {
  background-color: #ffffff;
  margin: 20px;
  padding: 15px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  border-radius: 5px;
  // 上传封面
  .pic-uploader {
    margin-top: 10px;
  }
  .pic-uploader >>> .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    :hover {
      border-color: #409eff;
    }
  }
  .pic-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .pic {
    width: 100px;
    height: 100px;
    display: block;
  }
}
</style>
