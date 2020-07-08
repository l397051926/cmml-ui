<template>
  <el-container>

    <el-header>
      <my-header></my-header>
    </el-header>

    <my-components></my-components>

    <el-footer>
      <my-footer></my-footer>
    </el-footer>

  </el-container>
</template>


<script>

  import myHeader from './header/Header'
  import myComponents from './container/Components'
  import myFooter from './footer/Footer'

  export default {
    name: 'Home',
    components: {
      myHeader,
      myFooter,
      myComponents
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header{
    border-style: solid;
    border-width: 1px;
    text-align: right;
    font-size: 20px
  }
  .el-footer {
    border-style: solid;
    border-width: 1px;
    text-align: center;
    line-height: 60px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
