import { combineReducers } from 'redux';

import homebanner from './state/home/homebanner.js';
//import homelist from './state/home/homelist.js';
import todolist from './state/todolist.js';
const reducer = combineReducers({
  //各个组件中各自的状态
  //获取值  store.getState().homebanner
  homebanner,
  todolist
//homelist
})

export default reducer;
