<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
*,html{
  margin: 0;
  padding: 0;
}
.clearfix::after,
.clearfix::before{
  content: '';
  clear: both;
  display: table-cell;
}
</style>
