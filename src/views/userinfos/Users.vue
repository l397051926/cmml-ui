<template>
  <div class="user-all">
    <div>
    <h1>hhhh</h1>
    </div>
    <div>
      <el-table
        :data="tableData"
        style="width: 100%"
        height="250">
        <el-table-column
          prop="userName"
          label="姓名"
          width="170">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          width="170">
        </el-table-column>
        <el-table-column
          prop="unit"
          label="单位"
          width="170">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="电话"
          width="170">
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间"
          width="170">
        </el-table-column>
        <el-table-column
          label="操作"
          width="170">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import {request} from '@/utils/request'
  export default {
    name: 'Users',
    data() {
      return {
        tableData: []
      }
    },
    created: function () {
      request({
        url: '/user/user-info/all',
        method: 'GET',
      }).then(res => {
        console.log(res.data.data)
        this.tableData = res.data.data
      })
    }
  }
</script>

<style scoped>
  .user-all{
    display: flex;
    justify-content: center;
    flex-direction: column;

  }
</style>
