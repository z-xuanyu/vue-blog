<template>
  <div class="not-approved-wrap">
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
          @click="$router.push('/comment/reviewed')"
          size="small"
          type="primary"
          >已审核</el-button
        >
      </el-col>
      <el-col style="margin-top:10px">
        <el-table
          ref="multipleTable"
          :data="commentData"
          tooltip-effect="dark"
          style="width: 100%"
          border
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" align="center" width="55">
          </el-table-column>
          <el-table-column align="center" label="用户名" width="100">
            <template slot-scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column align="center" label="Email" width="180">
            <template slot-scope="scope">{{ scope.row.email }}</template>
          </el-table-column>
          <el-table-column align="center" label="用户头像" width="60">
            <template slot-scope="scope">
                <img width="30px" height="30px" :src="scope.row.avatar">
            </template>
          </el-table-column>
          <el-table-column align="center" label="评论内容" width="250">
            <template slot-scope="scope">{{ scope.row.content }}</template>
          </el-table-column>
          <el-table-column align="center" label="评论时间" width="150">
            <template slot-scope="scope">{{ scope.row.time }}</template>
          </el-table-column>
          <el-table-column align="center" label="状态" width="100">
            <template slot-scope="scope">
              <el-tag size="small" :type='scope.row.status ? "success" : "danger"' effect='dark'>{{scope.row.status?'已审核':'未审核'}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                icon="el-icon-edit"
                @click="handleEdit(scope.$index, scope.row)"
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
  data(){
    return{
      commentData:[
        {
          _id:"4667",
          name:"轩钰",
          email:"812006298@qq.com",
          avatar:"http://121.42.14.221/admin/img/avatar.146655c9.jpg",
          content:'文章写的不错哦。继续加油！',
          time:"2020-2-5",
          status:false
        },
        {
          _id:"4667",
          name:"轩钰",
          email:"812006298@qq.com",
          avatar:"http://121.42.14.221/admin/img/avatar.146655c9.jpg",
          content:'文章写的不错哦。继续加油！',
          time:"2020-2-5",
          status:false
        },{
          _id:"4667",
          name:"轩钰",
          email:"812006298@qq.com",
          avatar:"http://121.42.14.221/admin/img/avatar.146655c9.jpg",
          content:'文章写的不错哦。继续加油！',
          time:"2020-2-5",
          status:false
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.not-approved-wrap {
  background-color: #ffffff;
  margin: 20px;
  padding: 15px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  border-radius: 5px;
}
</style>
