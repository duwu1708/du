import React, { Component } from 'react';

import DetailData from '@/api/DetailData.js'
import { Carousel, NavBar, Icon,List,ActionSheet,  Button, Toast  } from 'antd-mobile';
import './style.scss';
const Item = List.Item;
const Brief = Item.Brief;
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class App extends Component {
  state = {
      data: ['1', '2', '3'],
    imgHeight: 176,
    slideIndex: 0,
    goodsName: '',
    price:'',
    img:[],
    dos:true,
    clicked2: 'none',
    size:{}
  }
 tolist=()=>{
  this.props.history.push("/buy")
 }
 dataList = [
    { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
    { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
    { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
    { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
    { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
  ].map(obj => ({
    icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
    title: obj.title,
  }));
    showShareActionSheetMulpitleLine = () => {
    const data = [[...this.dataList, this.dataList[2]], [this.dataList[3], this.dataList[4]]];
    ActionSheet.showShareActionSheetWithOptions({
      options: data,
      message: 'I am description, description, description',
    },
    (buttonIndex, rowIndex) => {
      this.setState({ clicked2: buttonIndex > -1 ? data[rowIndex][buttonIndex].title : 'cancel' });
    })
    
  }
  render() {
    return (
      <div className="App">
        <div className = "container">
          <div className="box">
                  <header>
                      <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={this.tolist}
                        rightContent={[
                          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                          <Icon key="1" type="share" />,
                        ]}
                      >毒物</NavBar>
                  </header>

                  <div className="content">
                    <Carousel
                    autoplay={false}
                    infinite
                    selectedIndex={1}
                  >
                    {this.state.img.map(val => (
                      <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                      >
                        <img
                          src={val}
                          alt=""
                          style={{ width: '100%', verticalAlign: 'top' }}
                          onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                          }}
                        />
                        <h3>{this.state.goodsName}</h3>
                         <h3>{this.state.price}</h3>
                      </a>
                    ))}
                  </Carousel>
                <div className="select">
                <Button onClick={this.showShareActionSheetMulpitleLine}>
                  <NavBar
                      mode="light"
                      leftContent={'选择尺码'}
                      rightContent={[
                        <Icon key="0" type="right" style={{ marginRight: '16px' }} />,
                      ]}
                    >请选择尺码</NavBar>
                </Button>
                  
                </div>
                    <div className="server rela">
                      <ul>
                        <li>
                          <a>
                            <span className="iconfont icon-poison"></span>
                            <p>商品保障</p>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span className="iconfont icon-poison"></span>
                            <p>品牌鉴别</p>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span className="iconfont icon-poison"></span>
                            <p>交易流程</p>
                          </a>
                        </li>
                        <li>
                          <a>
                            <span className="iconfont icon-poison"></span>
                            <p>售后权益</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                      
                  </div>
              </div>
        </div>
           <List  className="my-list">
        <Item extra={'发货日期 2018.2.24'}>配送 顺丰</Item>
        <Item extra={'官方价格 ￥1299仅供参考'}>配色 红/白/黑</Item>
        <Item extra={'不支持7天无理由退换货'}>货号 555088-610</Item>
      </List>
      
      <div className="server rela">
        <NavBar
        mode="light"
        leftContent={'相关商品'}
        rightContent={'全部'}
      ></NavBar>
        <ul>
          <li>
            <a>
              <img src={this.state.img[0]} alt=""/>
              <p>Air joan1皇家蓝</p>
              <strong>￥ 1299</strong>
            </a>
          </li>
          <li>
            <a>
              <img src={this.state.img[0]} alt=""/>
              <p>Air joan1皇家蓝</p>
              <strong>￥ 1299</strong>
            </a>
          </li>
          <li>
            <a>
              <img src={this.state.img[0]} alt=""/>
              <p>Air joan1皇家蓝</p>
              <strong>￥ 1299</strong>
            </a>
          </li>
        </ul>
      </div>
      <NavBar
          mode="light"
          leftContent={'最近购买'}
          rightContent={'全部'}
        ></NavBar>
              <List  className="my-list">
                <Item extra={'1小时前'}>罗****啦</Item>
                <Item extra={'1小时前'}>d****e</Item>
                <Item extra={'1小时前'}>w****号</Item>
              </List>
        <footer>
          <p >出售</p>
          <p className="shou">立即购买</p>
        </footer>
      </div>
    );
  }
//在入口函数中，在详情中获取数据
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
    const goodsID = this.props.match.params.goodsID;
    DetailData.getDetailData(goodsID, (data) => {
      this.setState({
        goodsName: data[0].title,
        price: data[0].price,
        img:data[0].img,
        size:data[0].size
      })
    })
  }

}

export default App;
