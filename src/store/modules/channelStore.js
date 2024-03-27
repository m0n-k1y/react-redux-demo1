import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const channelStore =  createSlice({
  name: 'channel',
  //初始化
  initialState: {
    channelList:[]
  },
  //修改状态的方法
  reducers: {
    setChannnels(state, action) { 
      state.channelList = action.payload
    }
  }
})

//解构出 修改状态的方法
const { setChannnels } = channelStore.actions
//异步请求部分
const url = 'http://geek.itheima.net/v1_0/channels'
const fetchChannelList = () => { 
  return async (dispatch) => { 
    const res = await axios.get(url)
    dispatch(setChannnels(res.data.data.channels))
  }
}

//导出函数
export { fetchChannelList }
//获取并 默认导出 reducer
const reducer = channelStore.reducer
export default reducer