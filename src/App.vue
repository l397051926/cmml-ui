<template>
  <div id="app">
    <router-view/>
    <button @click="aa">按钮</button>
  </div>
</template>

<script>
  import {request} from './utils/request'
export default {
  name: 'App',
  methods:{
    aa: () =>{
      request({
        url:"/user/test"
      }).then()
    }
  }
}
</script>

<style>

</style>
