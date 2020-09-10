import React from 'react'
import store from '../Store/index.js'

export default class Discover extends React.Component {
  // constructor() {
  //   super()
  // }
  componentDidMount() {
    this.unsubscibe = store.subscribe(() => {
      console.log('监听到了')
      this.forceUpdate()
    })
  }
  componentWillUnmount() {
    this.unsubscibe()
  }

  render() {
    return (
      <div id="cinema" className="page">
        <h1>订单页</h1>
        <p>{store.getState().name}</p>
        <p>{store.getState().age}</p>
        <p>{store.getState().height}</p>
      </div>
    )
  }
}