import classNames from 'classnames'
import './index.scss'
import { useDispatch, useSelector } from 'react-redux'

//导入  更改activeIndex 方法
import { changeActiveIndex } from '../../store/modules/takeaway'

const Menu = () => {
  //导入状态变量
  const { foodsList, activeIndex } = useSelector(state => state.foods)
  //将foodList分成几个大类
  const menus = foodsList.map(item => ({ tag: item.tag, name: item.name }))
  // console.log(menus);
  const dispatch = useDispatch()

  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            onClick={()=>dispatch(changeActiveIndex(index))}
            key={item.tag}
            className={classNames(
              'list-menu-item',
              //条件判断  来实现点击高亮
              index === activeIndex && 'active'
            )}
          >
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}

export default Menu
