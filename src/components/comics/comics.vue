<template>
    <div class="comics">
      <comics-header></comics-header>
      <router-view :today="today"></router-view>
    </div>
</template>

<script>
  import comicsHeader from '../comics-header/ComicsHeader.vue'
    export default {
      components: {
        comicsHeader:comicsHeader
      },
      data(){
          return{}
      },
      props: {
        today: {
          type: Array
        }
      }
    }
</script>

<style lang="less" scoped="">

</style>
