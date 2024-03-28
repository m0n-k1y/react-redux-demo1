import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodStore = createSlice({
  name: 'foods',
  initialState: {
    //商品列表
    foodsList: [],
    //菜单激活下标
    activeIndex: 0,
    //购物车列表
    cartList: []
  },
  reducers: {
    //更改商品列表
    setFoodList(state, action) { 
      state.foodsList = action.payload
    },
    //更改activeIndex
    changeActiveIndex(state, action) { 
      state.activeIndex = action.payload
    },
    //添加购物车
    addCart(state, action) { 
      //判断是非添加过
      const item = state.cartList.find(item => item.id === action.payload.id)
      if (item) {
        item.count++
      }
      else { 
        state.cartList.push(action.payload)
      }
    }
  }
})
//获取修改状态的方法
const { setFoodList,changeActiveIndex,addCart } = foodStore.actions

//异步获取
const fetchFoodList = () => { 
  return async (dispatch) => { 
    const res = await axios.get('  http://localhost:3004/takeaway')
    dispatch(setFoodList(res.data))
  }
}
//导出方法
export { fetchFoodList,changeActiveIndex,addCart }
//导出reducer
const reducer = foodStore.reducer
export default reducer