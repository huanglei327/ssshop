<template>
  <div>
    {{msg}}
    <tabbarPage state="2"></tabbarPage>
  </div>
</template>

<script>
import tabbarPage from '@/components/tabbarPage.vue'
export default {
  components: {
    tabbarPage
  },
  data () {
    return {
      msg: '购物车'
    }
  }
}
</script>

<style>
</style>
