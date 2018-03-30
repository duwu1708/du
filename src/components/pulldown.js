/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PullToRefresh, ListView, Button } from 'antd-mobile';


const data = [
    {
      img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
      title: 'Meet hotel',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
      img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
      title: 'McDonald\'s invites you',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
      img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
      title: 'Eat the week',
      des: '不是所有的兼职汪都需要风吹日晒',
    },
  ];
  const NUM_ROWS = 10;
  let pageIndex = 0;
  
  function genData(pIndex = 0) {
    const dataArr = [];
    for (let i = 0; i < NUM_ROWS; i++) {
      dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
    }
    return dataArr;
  }
  
  class App extends React.Component {
    constructor(props) {
      super(props);
      //dataSource是一个实例，固定写法
      const dataSource = new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      });
  
      this.state = {
        dataSource,
        refreshing: true,
        isLoading: true,
        height: document.documentElement.clientHeight,
        useBodyScroll: false,
      };
    }
  

  
    componentDidUpdate() {
      if (this.state.useBodyScroll) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
    }
  
    componentDidMount() {
      const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
  
      setTimeout(() => {
        this.rData = genData();
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(genData()),
          height: hei,
          refreshing: false,
          isLoading: false,
        });
      }, 1500);
    }
  
    //必需，刷新时回调函数
    onRefresh = () => {
      this.setState({ refreshing: true, isLoading: true });
      // simulate initial Ajax
      setTimeout(() => {
        this.rData = genData();
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.rData),
          refreshing: false,
          isLoading: false,
        });
      }, 1500);
    };
  
    onEndReached = (event) => {
      // load new data
      // hasMore: from backend data, indicates whether it is the last page, here is false
      if (this.state.isLoading && !this.state.hasMore) {
        return;
      }
      console.log('reach end', event);
      this.setState({ isLoading: true });
      setTimeout(() => {
        this.rData = [...this.rData, ...genData(++pageIndex)];
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.rData),
          isLoading: false,
        });
      }, 1000);
    };
  
    render() {
      const separator = (sectionID, rowID) => (
        <div
          key={`${sectionID}-${rowID}`}
          style={{
            backgroundColor: '#F5F5F9',
            height: 8,

          }}
        />
      );
      let index = data.length - 1;
      const row = (rowData, sectionID, rowID) => {
        if (index < 0) {
          index = data.length - 1;
        }
        const obj = data[index--];
        return (
            <div style={{width: '200px',height:'50px'}}>
               <h1> aaaaaaaa</h1>
            </div>
        );
      };
      return (<div>
        <ListView
          key={this.state.useBodyScroll ? '0' : '1'}
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          renderFooter={() => (<div style={{ padding: 10, textAlign: 'center' }}>
            {this.state.isLoading ? <span className='iconfont icon-jiazaishibaitidaiicon' style={{fontSize:'40px'}}></span> : 'Loaded'}
          </div>)}
          renderRow={row}
          renderSeparator={separator}
          useBodyScroll={this.state.useBodyScroll}
          style={this.state.useBodyScroll ? {} : {
            height: this.state.height,
            border: '1px solid #ddd',
            margin: '5px 0',
          }}
          pullToRefresh={<PullToRefresh
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />}
          onEndReached={this.onEndReached}
          pageSize={5}
        />
      </div>);
    }
  }
  
export default App;