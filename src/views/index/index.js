
import { getSwipetInfoApi } from '@/utils/httpUtils/api.js'
import tabbarPage from '@/components/tabbarPage'
export default {
  components: {
    tabbarPage
  },
  data () {
    return {
      adList: []
    }
  },
  mounted () {
    this.getSwipetInfo()
  },
  methods: {
    goclass () {
      this.$router.push({
        //你需要接受路由的参数再跳转
        path: '/classIndex'
      })
    },
    getSwipetInfo () {
      const that = this
      const c = res => {
        that.adList = res.data.adList
      }
      const param = {

      }
      getSwipetInfoApi().then(c)
    }
  }
}