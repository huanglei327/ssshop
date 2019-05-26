<template>
  <div>
    {{msg}}
    <tabbarPage state="1"></tabbarPage>
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
      msg: '分类'
    }
  }
}
</script>

<style>
</style>
