<template>
  <el-container>
    <el-aside width="200px">
      <el-col :span="15" width="200px">
        <el-menu
          default-active="this.$route.path"
          router
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">

          <el-submenu index="1">

            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户中心</span>
            </template>

            <el-menu-item index="/user">
              <template slot="title">
                <span>用户管理</span>
              </template>
            </el-menu-item>

            <el-menu-item index="role" >
              <template slot="title">
                <span>角色管理</span>
              </template>
            </el-menu-item>

            <el-menu-item index="priority" >
              <template slot="title">
                <span>权限管理</span>
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
    </el-aside>

    <el-main>
      <h2>main</h2>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'Components',
    data(){
      return{
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

</style>
