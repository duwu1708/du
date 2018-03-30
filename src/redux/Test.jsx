import React, { Component } from 'react';

import MyButton from './MyButton.jsx';

import store from './store/index.js';

class Test extends Component{
  constructor(props){
    super(props)
    this.state = {
     
    }
  }
  addItemHandler(){
    console.log("1111")
    store.dispatch({
      type: "GET_BANNER",
      data: "abcdefg"
    })
    console.log(store.getState().homebanner)
  }

  render(){
    
    return (
      <MyButton 
        onClick = { this.addItemHandler.bind(this) }
      />
    )
  }
  componentDidMount(){
    
  }
}

export default Test;
