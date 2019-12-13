<template>
  <div id="app">
    <div class="app-view">
      <Error404 />
      <router-view></router-view>
    </div>
    <!-- 版本号信息 -->
    <!--<div v-if='!searchQuery('token')' class='version'>V {{$root.version}}</div>-->
    <!-- 全局异常信息 -->
    <!-- <gs-exception></gs-exception> -->
    <!-- 全局loading -->
    <!-- <gs-loading></gs-loading> -->
  </div>
</template>
<script>
import Api from 'api';
import Error404 from '@/page/Error404.vue';

export default {
  name: 'app',
  created() {
    window.console.log(Api.aaa({ userName: 'ba', passWord: '123' }));
  },
  methods: {},
  components: {
    Error404
  }
};
</script>

<style lang='scss'>
.app-view {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
