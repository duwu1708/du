import React from 'react';
import ReactDOM from 'react-dom';
import '@/index.scss';
import App from '@/components/App';
import Detail from '@/components/main/Detail/index.js';
import Login from '@/components/Login';
import Register from '@/components/Register';

import p from '@/components/pulldown.js';
import registerServiceWorker from '@/registerServiceWorker';
//引入路由，必须在全局的入口js文件中，引入路由模块
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <Router>
        <Switch>
            <Route path = '/detail/:goodsID' component = { Detail } />
            <Route path = '/p' component = { p } />
            <Route path = '/login' component = { Login } />
            <Route path = '/register' component = { Register } />
            <Route path = '/' component = { App } />
        </Switch>
    </Router>,
    
    document.getElementById('root'));
registerServiceWorker();
