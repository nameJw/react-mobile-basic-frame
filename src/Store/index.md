import { createStore } from 'redux'

// createStore()接收一个函数作为参数，返回新生成的store对象
let fn = () => {

}
const store = createStore(fn)
// store对象包含所有数据
// store.getState() 可以拿到当前时刻的State

// view 更改state的唯一方法就是使用action

// action是一个对象，其中有一个 type 属性是必须的，表示 action 的名称。其他属性可以自由设置
const action = {
  type: 'ADD_TODO',
  payload: 'Learn Redux'
}

// dispatch() 接收 action对象作为参数将它发送出去
store.dispatch(action)

// store接收到action后，会给出一个新的state，这样才会使view发生变化。这种state的计算过程叫做 Reducer

// Reducer 是一个函数，接收 action 和 State 作为参数，返回一个新的State

const reducer = (state, action) => {
  // ...
  return new_state
}