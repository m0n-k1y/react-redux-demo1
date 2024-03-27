import { createSlice } from "@reduxjs/toolkit";

const counterStore= createSlice({
  name: 'counter',
  //初始化state数据
  initialState: {
    count:0
  },

  //修改状态的方法
  reducers: {
    increment(state) { 
      state.count++
    },
    decrement(state) { 
      state.count--
    },
    addToNum(state, action) { 
      state.count =action.payload
    }
  }

})
//获取并导出 修改状态的方法
// export const { increment, decrement } = counterStore.actions

//解构出 修改状态的方法
const { increment, decrement,addToNum } = counterStore.actions
//导出
export { increment, decrement,addToNum }


//获取并导出 reducer函数
// export const reducer = counterStore.reducers

//获取 reducer函数
const reducer = counterStore.reducer
//默认导出reducer
export default reducer