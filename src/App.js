import { useSelector,useDispatch } from "react-redux";
//导入 修改状态的方法
import { increment, decrement, addToNum } from "./store/modules/counterStore";
import { fetchChannelList } from "./store/modules/channelStore";
import store from "./store";
import { useEffect } from "react";

function App() {
  //映射 store 中数据到组件中
  const { count } = useSelector(state => state.counter)
  const { channelList } = useSelector(state => state.channel)
  //dispatch 函数
  const dispatch = useDispatch()
  //使用useEffect触发异步请求
  useEffect(() => { 
    dispatch(fetchChannelList())
  },[dispatch])
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{ count }</span>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>add to num 10</button>
      <ul>
        {channelList.map(item => <li key={item.id}>{ item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
