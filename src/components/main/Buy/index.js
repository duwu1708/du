import React, { Component } from 'react';
import {Link,PullToRefresh, ListView, Button} from 'react-router-dom';
import LunboBuy from './LunboBuy.js';
import Buy_Nav from './Buy_Nav.js';
import './style.scss';
import myajax from '@/tool/myajax.js'
class Model extends Component {
    state = {
        list:[]
    }

    render() {
        return (
            <div className="box">
                <header>
                    <div className="care_header">
                        <div className="logo_box" style={{ textAlign:'left' }}>
                            <span className="buy_logo iconfont icon-fenlei">
                            </span>
                        </div>
                        <p className="care_search" style={{ textAlign: 'center' }}>
                            <span className="iconfont icon-sousuo"></span>
                            搜索商品
                        </p>
                    </div>
                </header>

                <div className="content">
                {/* 轮播图区域 */}
                    <div className="lunbo_box">
                        <LunboBuy />
                    </div>
                {/* nav */}
                    <div className="nav">
                        <Buy_Nav />
                    </div>

                    {/*列表*/}
                    <div className="list">
                    <ul>
                        {
                            this.state.list.map((item, index) => {
                            return (
                                <Link to={ "/detail/" + item.id } key = { index } className="list-item">
                                    <img src={item.img[0]} alt=""/>
                                    <p className="item-title">{item.title}</p>
                                    <strong>￥{item.price}</strong>
                                </Link>
                            )
                            })
                        }
                    </ul>
                    </div>
                </div>
                

            </div>
        )
    }

    //入口函数
    componentDidMount() {
       const config = {
          url: "http://10.8.162.5:3000/api/goods",
          option: {
            
          },
          success: (data) => {
            this.setState({
            
              list:data
            })
            console.log(this.state.list)
          }
        }
        myajax.getfetch(config)
    
    }
}

export default Model;