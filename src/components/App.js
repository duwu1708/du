import React, { Component } from 'react';
// 以下是引入 antd-mobile 组库
// import { List, InputItem, Toast } from 'antd-mobile';
//使用路由时，要用 "react-router-dom" 模块
import { Switch, Redirect, NavLink, Route } from 'react-router-dom'

//导入子组件
import Care from '@/components/main/Care/index.js';
import Find from '@/components/main/Find/index.js';
import Buy from '@/components/main/Buy/index.js';
import User from '@/components/main/User/index.js';
import Server from '@/components/main/Server/index.js';


class App extends Component {
  state = {
    
  }
 
 
  render() {
    return (
      <div className="App">
        <div className = "container">
          <Switch>
            <Route path = '/care' component = { Care } />
            <Route path = '/find' component = { Find } />
            <Route path = '/buy' component = { Buy } />
            <Route path = '/server' component = { Server } />
            <Route path = '/user' component = { User } />
            <Redirect to = {{ pathname:'/buy' }} />
          </Switch>
        </div>

        <footer>
        <ul>
            <li>
              <NavLink to='/care' activeClassName='active'>
              <span className="iconfont icon-poison"></span>
              <p>关注</p>
              </NavLink>
            </li>
            <li>
              <NavLink to='/find' activeClassName='active'>
              <span className="iconfont icon-zhadan"></span>
              <p>动态</p>
              </NavLink>
            </li>
            <li>
              <NavLink to='/buy' activeClassName='active'>
              <span className="iconfont icon-baoguofahuo"></span>
              <p>购买</p>
              </NavLink>
            </li>
            <li>
              <NavLink to='/server' activeClassName='active'>
              <span className="iconfont icon-shcyundunhunheyun"></span>
              <p>服务</p>
              </NavLink>
            </li>
            <li>
              <NavLink to='/user' activeClassName='active'>
              <span className="iconfont icon-tubiao_mojing"></span>
              <p>我</p>
              </NavLink>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
