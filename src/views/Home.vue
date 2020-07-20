<template>
  <div class="home">
    <!-- 头部区域 -->
    <index-header></index-header>
    <!-- 中间内容区域 -->
    <router-view></router-view>
    <!-- 底部区域 -->
    <!-- <index-footer></index-footer> -->
  </div>
</template>

<script>
import Header from '../components/header'
// import Footer from '../components/footer'
export default {
  created () {
    if (this.$router.path !== '/index') {
      this.$router.replace('/index')
    }
  },
  data () {
    return {

    }
  },
  components: {
    'index-header': Header
    // 'index-footer': Footer
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
