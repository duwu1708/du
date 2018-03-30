/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import HomeData from '@/api/HomeData';

class App extends React.Component {
  state = {
    navList: []
  }

  getNavData(data){
    
    this.setState({ navList: data });
    console.log(this.state.navList);
    var arr = [];
    var obj = {};
    for(var i = 0; i<data.length; i++){
      console.log("1")
    }

  }

  

  render() {
        
    return (
      <ul>
        {
          this.state.navList.map((item, index) => {
            return (
              <li key = { item.id }>{ item.brand }</li>
            )
          })
        }
      </ul>
    )
  }

  componentDidMount(){
    HomeData.getNavList(this.getNavData.bind(this))
  }
}




  
export default App;