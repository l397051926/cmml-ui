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

  import myHeader from '../components/header/Header'
  import myComponents from '../components/container/Components'
  import myFooter from '../components/footer/Footer'

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
    width: 100%;
    height: 64px;
    background: #2d2f34;
    padding: 0 24px;
    color: #fff;
  }
  .el-footer {
    border-style: solid;
    border-width: 1px;
    text-align: center;
    line-height: 60px;
  }

</style>
