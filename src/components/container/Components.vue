<template>
  <div class="components-all">
    <div class="components-left">
      <el-col :span="15">
        <el-menu
          default-active="this.$route.path"
          router
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>用户中心</span>
            </template>
            <el-menu-item v-for="(item, index) in userCenter" :index="item.namePath" :key="index">
              <template slot="title">
                <span>{{item.name}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-grid"></i>
              <span>仓库管理</span>
            </template>
          </el-submenu>
        </el-menu>
      </el-col>
    </div>

    <div class="componets-right">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Components',
    data(){
      return{
        userCenter: [
          {
            name: '用户管理',
            namePath: '/user'
          },
          {
            name: '角色管理',
            namePath: '/role'
          },
          {
            name: '权限管理',
            namePath: '/priority'
          }
        ]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>
  .components-all{
    display: flex;
  }
  .components-left{
    width: 13%;
  }
  .componets-right{
    height: 450px;
    width: 87%;
  }

</style>
