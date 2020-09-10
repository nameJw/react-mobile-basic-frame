import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import store from '../Store/index.js'
// import '../style/film/film.css'

export default class Discover extends React.Component {
  // constructor() {
  //   super()
  // }
  state = {
    data: ['1', '2'],
    imgHeight: 176,
    name: '张三',
    age: '99',
    height: '190'
  }

  trigger(e) {
    store.dispatch({
      type: 'MODIFY_STATE',
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    return (
      <div id="film" className="page">
        <WingBlank>
          <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {this.state.data.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={`'../imgs/banner${val}.jpg'`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
        {/* <input type="text" name="changeStateValue"/>
        <button onClick={this.trigger.bind(this)}>改变State</button> */}
      </div>
    )
  }
}