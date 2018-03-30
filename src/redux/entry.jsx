import React from 'react';
import ReactDOM from 'react-dom';

import MyButtonController from './MyButtonController.jsx';
import Test from './Test.jsx';
import store from './store/index.js';

function render(){
  ReactDOM.render(
    <MyButtonController />,
    document.getElementById("root")
  );
}
render();

store.subscribe(render);
