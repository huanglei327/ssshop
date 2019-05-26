<template>
  <div>
    {{msg}}
    <tabbarPage state="3"></tabbarPage>
  </div>
</template>

<script>
import tabbarPage from '@/components/tabbarPage.vue'
export default {
  components: {
    tabbarPage
  },
  data() {
    return {
      msg: '用户'
    }
  }
}
</script>

<style>
</style>
