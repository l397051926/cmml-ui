<template>
  <div class="header">
    <div class="header-name">
      <i class="el-icon-lollipop"></i>
      <span>商云平台</span>
    </div>
    <div class="header-user">
      <i class="el-icon-user"></i>
      <span>{{this.$store.state.userName}}</span>
    </div>
    <div @click="quit" class="header-switch">
      <i class="el-icon-switch-button"></i>
      <span >退出</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    methods:{
      quit: () =>{
        console.log('退出')
      }
    }
  }
</script>

<style scoped>
  .header{
    display: flex;
    position: fixed;
    left: 15px;
    right: 0px;
    top: 20px;
  }
  .header-user{
    position: fixed;
    right: 90px;
  }
  .header-switch{
    position: fixed;
    right: 20px;
    cursor:pointer;
  }

</style>
