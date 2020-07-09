<template>
  <div class="header">
    <div class="header-name">
      <span>
        商云平台
      </span>
    </div>
    <div class="header-user">
      <span>
        <i class="el-icon-user"></i>
        王小虎
      </span>
      <span>
        <i class="el-icon-user"></i>
        退出
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>
  .header-user{
    height: 40px;
    width: auto;
    line-height: 40px;
    color: #FFFFFF;
    text-align: right;
  }
  .header-name{
    text-align: left;
  }
</style>
