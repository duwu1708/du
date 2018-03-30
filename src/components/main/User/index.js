import React, { Component } from 'react';
import { List } from 'antd-mobile';
import './style.scss'
const Item = List.Item;
const Brief = Item.Brief;

class Model extends Component {
    state = {
         disabled: false,
    }



    render() {
        
        return (
            <div className="box">
                <header>
                    <span className="span iconfont icon-ren"></span>
                    <span>w</span>
                    <span className="span">2</span>
                </header>

                <div className="content">
                 <List renderHeader={() => 'Icon in the left'}>
                    <Item
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    arrow="horizontal"
                    onClick={() => {}}
                    >My wallet</Item>
                    <Item
                    thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                    onClick={() => {}}
                    arrow="horizontal"
                    >
                    My Cost Ratio
                    </Item>
                </List>
                </div>
            </div>
        )
    }

    //入口函数
    componentDidMount() {
        
    }
}

export default Model;