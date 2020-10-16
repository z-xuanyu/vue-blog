<template>
  <div class="ad-list">
    <el-row>
      <!-- 搜索内容 -->
      <el-col style="padding:10px">
        <el-input
          size="small"
          placeholder="请输入搜索关键词"
          style="width:200px"
          v-model="keyword"
        >
        </el-input>
        <el-button size="small" type="primary" icon="el-icon-search"
          >搜索</el-button
        >
        <el-button
          @click="$router.push('/article/create')"
          size="small"
          type="primary"
          icon="el-icon-plus"
          >添加广告</el-button
        >
      </el-col>
      <el-col style="margin-top:10px">
        <el-table
          ref="multipleTable"
          :data="adData"
          tooltip-effect="dark"
          style="width: 100%"
          border
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" align="center" width="55">
          </el-table-column>
          <el-table-column label="广告位名称" width="250">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column align="center" label="广告素材" width="220">
            <template slot-scope="scope">{{ scope.row.pic }}</template>
          </el-table-column>
          <el-table-column align="center" label="跳转链接" width="220">
            <template slot-scope="scope">{{ scope.row.url }}</template>
          </el-table-column>
          <el-table-column prop="address" label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                icon="el-icon-edit"
                @click="$router.push(`/article/list`)"
                >编辑</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row)"
                icon="el-icon-delete"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adData: [
        {
          _id: "3449",
          name: "淘宝优惠卷",
          pic: "https://www.baidu.com",
          url: "https://www.baidu.com"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.ad-list {
  background-color: #ffffff;
  margin: 20px;
  padding: 15px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  border-radius: 5px;
}
</style>
