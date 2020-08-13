<template>
  <div class="user-all">
    <div class="user-button">
      <el-row>
        <h1></h1>
        <el-button type="primary" @click="centerDialogVisible = true">新增</el-button>
        <el-dialog
          :visible.sync="centerDialogVisible"
          width="500px"
          center>
          <sign></sign>
        </el-dialog>
      </el-row>
    </div>
    <div>
      <el-divider></el-divider>
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
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import {request} from '@/utils/request'
  import sign from '../login/Sign'
  export default {
    name: 'Users',
    data() {
      return {
        tableData: [],
        centerDialogVisible: false
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
    },
    methods: {
      handleEdit(index, row) {
        console.log( row);
      },
      handleDelete(index, row) {
        console.log(index, row);
        request({
          url: '/user/user-info/deleteById',
          method: 'DELETE',
          params:{
            "id": row.id
          }
        }).then(res => {
          request({
            url: '/user/user-info/all',
            method: 'GET',
          }).then(res => {
            console.log(res.data.data)
            this.tableData = res.data.data
          })
        })
      }
    },
    components: {
      sign
    }
  }
</script>

<style scoped>
  .user-all{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .user-button{

  }
</style>
