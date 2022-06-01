import BackTop from '@/components/content/backtop/BackTop.vue'
import { debounce } from '@/common/utils'

export const itemListenerMixin={
  data(){
    return {
      itemImgListener: null,
    }
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh, 200)
    // 监听图片加载完成
    this.itemImgListener = () => {
      // console.log(this.$refs.scroll.refresh)
      // this.$refs.scroll && this.$refs.scroll.refresh()
      refresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
  }
}
export const backTop={
  data(){
    return{
      isShow: false,
    }
  },
  methods:{
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500)
      console.log('混入成功');
    },
    backListner(position){
      this.isShow = position.y < -1000
    }
  },
  components:{
    BackTop
  }
}