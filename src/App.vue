<template>
  <div id="app">
    <router-view/>
    <h1>--{{this.$store.state.token}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods:{

    }
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
