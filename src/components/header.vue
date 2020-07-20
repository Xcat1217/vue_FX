<template>
  <div class="header">
    <div class="img-wrap">
      <img src="../assets/imgs/2.png" />
    </div>
    <div class="header-tabs">
      <div class="tabs-item" :class="index === i ? 'active':''" :key="index" v-for="(item,index) in tabsItem" @click="handleClick(index)">
        {{item.name}}
        <router-link :to="item.router"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabsItem: [
        {
          name: '网站首页',
          router: '/index'
        }, {
          name: '产品服务',
          router: '/product'
        }, {
          name: '合作伙伴',
          router: '/parter'
        }, {
          name: '新闻资讯',
          router: '/news'
        }, {
          name: '关于我们',
          router: '/ours'
        }
      ],
      i: 0
    }
  },
  methods: {
    handleClick (i) {
      console.log(i)
      console.log(this.tabsItem[i].router)
      this.$router.push(this.tabsItem[i].router)
      this.i = i
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  width: 1200px;
  margin: 0 auto;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .img-wrap {
    width: 200px;
    height: 26px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .header-tabs {
    width: 500px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tabs-item {
      cursor: pointer;
    }
    .item {
      display: inline-block;
      margin: 0 auto;
    }
  }
}
.active {
  color: #42b983;
}
</style>
