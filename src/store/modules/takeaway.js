import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodStore = createSlice({
  name: 'foods',
  initialState: {
    foodList:[]
  },
  reducers: {
    setFoodList(state, action) { 
      state.foodList = action.payload
    }
  }
})
//获取修改状态的方法
const { setFoodList } = foodStore.actions

//异步获取
const fetchFoodList = () => { 
  return async (dispatch) => { 
    const res = await axios.get('  http://localhost:3004/takeaway')
    dispatch(setFoodList(res.data))
  }
}
//导出异步方法
export { fetchFoodList }
//导出reducer
const reducer = foodStore.reducer
export default reducer