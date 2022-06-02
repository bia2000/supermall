
export default{
  addCart(context,payload){
    // payload 新添加的商品
    return new Promise((resolve,reject)=>{
      // 判断之前数组是否有该商品
      let oldproduct=context.state.cartList.find(item=>item.iid===payload.iid)
      if(oldproduct){
        // oldproduct.count+=1
        context.commit('addCount',oldproduct)
        resolve('当前商品数量+1')
      }else{
        payload.count=1
        // context.state.cartList.push(payload)
        context.commit('addToCart',payload)
        resolve('添加了新的商品')
      }
    })
  },
  check(context, payload) {
    for (let i = 0; i < context.state.cartList.length; i++) {
      if (context.state.cartList[i].iid === payload.iid) {
        context.commit('changeChecked', context.state.cartList[i])
      }
    }
  },
  checkAll(context, payload){
    for (let i = 0; i < context.state.cartList.length; i++) {
      if(!context.state.cartList.find((item) => !item.checked))
        context.commit('checkAll1', context.state.cartList)
      else
        context.state.cartList.forEach(item=>context.commit('checkAll2',item))
      }
    }
  
}