import React, { Component } from 'react';

import MyButton from './MyButton.jsx';
import store from './store/index.js';

class MyButtonController extends Component{
  constructor(props){
    super(props)
    this.state = {
     val:"",
     flag: false
    }
  }
  getValHandler(event){
    this.setState({
      val: event.target.value
    })
  }
  addItemHandler(){
    console.log(this.state.val)
    store.dispatch({
      type: "ADD_TODO_ITEM",
      data: this.state.val
    })
  }
  delItemHandler(index){
    store.dispatch({
      type: "DEL_TODO_ITEM",
      data: index
    })
  }
  render(){
    
    return (
      <MyButton 
        flag = { this.state.flag }
        todolist = { store.getState().todolist }
        getVal = { this.getValHandler.bind(this)}
        onClick = { this.addItemHandler.bind(this) }
        onDelfn = { this.delItemHandler.bind(this) }
      />
    )
  }
  componentDidMount(){
    
  }
}

export default MyButtonController;
