import { useSelector,useDispatch } from "react-redux";
//导入 修改状态的方法
import { increment,decrement } from "./store/modules/counterStore";

function App() {
  //映射 store 中数据到组件中
  const { count } = useSelector(store => store.counter)
  //dispatch 函数
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{ count }</span>
      <button onClick={()=>dispatch(increment())}>+</button>
    </div>
  );
}

export default App;
