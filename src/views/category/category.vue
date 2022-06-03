<template>
  <div class="category">
    <nav-bar class="category-nav"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <Scroll class="wrapper1" :scrollEnd="true" :probeType="1">
        <main-category
          :categoryList="categoryList"
          @change="onChange"
        ></main-category>
      </Scroll>
      <Scroll class="wrapper2" :scrollEnd="true" :probeType="1">
        <sub-category
          :subCategoryList="subCategoryList"
          :key="subKey"
        ></sub-category>
      </Scroll>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import SubCategory from './categoryComps/SubCategory.vue'
import MainCategory from './categoryComps/MainCategory.vue'
import Scroll from '@/components/common/scroll/Scroll.vue'
import { getSubCategory, getMainCategory } from '@/apis/category'
export default {
  name: 'category',
  components: {
    NavBar,
    SubCategory,
    MainCategory,
    Scroll,
  },
  data() {
    return {
      categoryList: [],
      subCategoryList: [],
      subKey: 0,
    }
  },
  methods: {
    getCategory() {
      getMainCategory().then((res) => {
        this.categoryList = res.data.category.list
      })
    },
    getSubData(key) {
      getSubCategory(key).then((res) => {
        this.subCategoryList = res.data.list
      })
    },
    onChange(key) {
      this.getSubData(key)
    },
  },
  created() {
    this.getCategory()
  },
  mounted() {},
}
</script>
<style lang="less" scoped>
.category {
  margin: 44px 0 49px 0;
  // margin: 10px;
  .category-nav {
    position: fixed;
    color: #fff;
    background-color: var(--color-high-text);
    top: 0;
    left: 0;
    right: 0;
  }
  .content {
    display: flex;
    .wrapper1 {
      flex: 1;
    }
    .wrapper2 {
      flex: 3;
    }
  }
}
</style>
