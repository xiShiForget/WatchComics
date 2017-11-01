<template>
    <div class="box">
      <headers></headers>
      <router-view :topics="topics" :tags="tags"></router-view>
    </div>
</template>

<script>
  import header from '../discoveryHeader/discoveryHeader.vue'
    export default {
      components: {
        headers:header
      },
      props: {
        topics: {
          type: Array
        },
        tags:{
          type:Array
        }
      }
    }
</script>

<style lang="less" scoped="">

</style>
