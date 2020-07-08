<template>
  <el-container>

    <el-header>
      <my-header></my-header>
    </el-header>

    <el-container>

      <el-aside width="200px">
        <my-aside></my-aside>
      </el-aside>

      <el-main>
        <my-main></my-main>
      </el-main>

    </el-container>

    <el-footer>
      <my-footer></my-footer>
    </el-footer>

  </el-container>
</template>


<script>

  import myHeader from './header/Header'
  import myAside from './container/Aside'
  import myMain from './container/MyMain'
  import myFooter from './footer/Footer'

  export default {
    name: 'Home',
    components: {
      myHeader,
      myAside,
      myMain,
      myFooter
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

  .el-aside {
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    text-align: center;
    line-height: 160px;
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
