export default{
   // mutations 的唯一目的就是修改state中的状态
   addCount(state,payload){
    payload.count++
  },
  addToCart(state,payload){
    payload.checked=true
    state.cartList.push(payload)
    // console.log(state.cartList);
  },
  changeChecked(state, payload) {
    payload.checked = !payload.checked
  },
  checkAll1(state,payload){
    for(let i in payload)
      payload[i].checked = !payload[i].checked
  },
  checkAll2(state,payload){
    payload.checked=true
  }
}