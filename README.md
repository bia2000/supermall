# supermall

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 1.划分目录结构

### 2.引用两个初始化css文件

### 3.模块划分和引入tabbar

### 4.首页整体框架搭建
#### 导航栏（navbar
#### 轮播图(homeswiper)
element UI
#### 推荐(homerecommend)
#### 特色(feature)
div>a>img
#### 导航控件（tabcontrol
props-titles
div>根据titles v-for循环div->span{titles}
选中哪一个tab，哪一个会变颜色，并增加下边框
使用currentindex判断

#### 首页商品数据的请求
  设计数据结构
goods：{
  pop:{page:0,list[]}
  new:{page:0,list[]}
  sell:{page:0,list[]}
}
发送数据请求
  在home.js封装getHomeGoods(type,page)
  在home.vue中，又在method中getHomeGoods(type)
  调用getHomeGoods('pop')/getHomeGoods('sell)/getHomeGoods('new')
    page:动态获取相应的page
  获取到数据res
    this.goods[type].list.push(...res.data.list)
    this.goods[type].page+=1

对商品数据进行展示
  封装GoodsList.vue
    props:goods->根据点击titles传入list
    取出数据进行展示
#### 对滚动进行重构（better-scroll
  导入better-scroll
  const scroll = new BScroll
  注意：wrapper->content->很多内容
  监听滚动
    probeType 0/1/2（手指滚动）/3（只要是滚动）
    bscroll.on('srcoll',position=>{})
  上拉加载
    pullUpLoad：true
    bscroll.on('pullingUp',()={})
#### 回到顶部BackTop
  不能直接监听组件，需要添加修饰.native
  回到顶部
    scroll对象，scroll.scrollTo(x,y,time)
    home.vue   this.$refs.scroll.scrollTo(0,0,500)
  组件的显示和隐藏
    isShow false
    监听滚动，拿到滚动的位置
      position.y >1000 ->isShow : true
#### 解决首页中可滚动区域的问题
●Better Scroll在决定有多少区域可以滚动时,是根据scrollerHeight属性决定
。scrollerHeight属 性是根据放Better-Scroll的content中的子组件的高度
。但是我们的首页中,刚开始在计算scrollerHeight属性时,是没有将图片计算在内的
。所以,计算出来的告诉是错误的(1300+)
。后来图片加载进来之后有了新的高度,但是SscrollerHeight属性并没有进行更新.
。所以滚动出现了问题
●如何解决这个问题了?
。监听每- -张图片是否加载完成,只要有- -张图片加载完成了, 执行- -次refresh()
。如何监听图片加载完成了?
，原生的sS监听图片: img.onload = function() }
Vue中监听: @load=方法'
。调用srol的refresh()
●如何将GoodsListltem.vue中 的事件传入到Home.yue中
。因为涉及到非父子组件的通信,所以这里我们选择了事件总线
。bus ->总线
。vue.prototype.bus=new Vue()
。this.bus.emit('事件名称'，参数)
。this.bus.on('事件名称'，回调函数（参数）)


#### 防抖节流
  防抖 debounce/节流 throttle
  refresh传入debounce函数中，生成一个新的函数
  在调用非常频繁的时候，就使用该函数，
  新函数，并不会非常频繁的调用，如果下一次执行非常快，那么上一次就会被取消的
  ```
   debounce(func, delay) {
      let timer = null
      return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout((args) => {
          func.apply(this, args)
        }, delay)
      }
    },
   ```
#### 上拉加载更多

#### tabcontrol吸顶效果
  在updated中获取tabcontrol的offsetTop高度（因为其他图片可能还未加载出来会影响tabcontrol的计算高度）
  
  动态的改变tabcontrol样式时，会出现两个问题：
  问题一：下面的商品内容会突然上移
  问题二：tabcontrol虽然设置了fixed，但是也随着batter-scroll一起滚出去了

  解决方法
  在最上面，多复制一份tabcontrol组件，脱离滚轮，当用户滚到tabcontrol的位置，这一份组件再出现，替代原本组件，起到吸顶的作用


  ### 详情页实现思路
  #### 点击商品进入详情页
  Goods List点击
  点击之后获取商品的ID，跳转到详情页，并传入ID

  #### 详情页的导航实现
  返回按钮  left
  标题列表的展示  center
  #### 请求详情页的数据
  接口：/detail？iid=
  #### 轮播图的实现
  调用组件
  #### 商品基本信息的展示
  数据来自四面八方
  在请求数据时对数据进行汇总，汇总至一个对象中，
  一个对象传入子组件中
  #### 店铺信息的展示

  #### 商品图片的展示

  #### 参数信息的展示

  #### 评论信息的展示
  时间格式化
  服务器返回的时间戳->Date->格式化
  yyyy-MM-dd hh:mm:ss

  #### 推荐数据的展示
  goodslist展示数据

  #### 混入（mixin
  创建一个混入对象：const mixin ={}
  组件对象中：mixin:[item]

  #### 标题和内容联动效果
  监听标题的点击，获取index
  根据点击，拿到每个组件顶部的高度
  在数据没有完全渲染完成之前，无法获取到正确的高度

  

  #### 底部工具栏，加入购物车

  #### 回到顶部（混入完成