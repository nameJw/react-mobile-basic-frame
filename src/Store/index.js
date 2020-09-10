import { createStore } from 'redux'

import moduleA from './ModuleA'
// import moduleB from './ModuleB'

// createStore()接收一个函数作为参数，返回新生成的store对象

// 作为参数的函数就是下面的reducer函数，把下面的reducer函数写到上面
// const reducer = (state, action) => {
//   return new_state
// }
// const store = createStore(reducer)
// 上面这句代码，以后每当store.dispatch()发送过来一新的state就会自动调用reducer,得到新的State


// store对象包含所有数据
// store.getState() 可以拿到当前时刻的State

// view 更改state的唯一方法就是使用action

// action是一个对象，其中又一个 type 属性是必须的，表示 action 的名称。其他属性可以自由设置
// const action = {
//   type: 'ADD_TODO',
//   payload: 'Learn Redux'
// }

// dispatch() 接收 action对象作为参数将它发送出去
// store.dispatch(action)

// store接收到action后，会给出一个新的state，这样才会使view发生变化。这种state的计算过程叫做 Reducer

// Reducer 是一个函数，接收 action 和 State 作为参数，返回一个新的State

// const reducer = (state, action) => {
//   // ...
//   return new_state
// }

// 所以

const reducer = (state, action) => {
  console.log(state)
  console.log(action)
  if (!state) {
    state = {
      name: '李四',
      age: '88',
      height: '180'
    }
  }
  // if (action.type === 'MODIFY_STATE') {
  //   return Object.assign({}, state, action)
  // }
  return moduleA(state, action)
  // return state
}
const store = createStore(reducer)
export default store