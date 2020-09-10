import React from 'react';
import './App.css';

import Film from './Pages/Film'
import Discover from './Pages/Discover'
import Mine from './Pages/Mine'
import Cinema from './Pages/Cinema'

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="page-container">
          {/* 首页 */}
          <Route path="/" render={() => {
            return <Film />
          }}></Route>

          {/* 订单页 */}
          <Route path="/cinema" render={() => {
            return <Cinema />
          }}></Route>

          {/* 发现页 */}
          <Route path="/discover" render={() => {
            return <Discover />
          }}></Route>

          {/* 我的 */}
          <Route path="/mine" render={() => {
            return <Mine />
          }}></Route>
        </div>
        <div className="items">
          <NavLink className="item" exact activeClassName="act-n" to="/">电影</NavLink>
          <NavLink className="item" activeClassName="act-n" to="/cinema">影院</NavLink>
          <NavLink className="item" activeClassName="act-n" to="/discover">特惠</NavLink>
          <NavLink className="item" activeClassName="act-n" to="/mine">我的</NavLink>
        </div>
      </Router>
    </div>
  );
}

export default App;
