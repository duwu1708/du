import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import LunboFind from './LunboFind.js'
class Model extends Component {
    state = {

    }



    render() {
        
        return (
            <div className="box">
                <header>
                    <div className="care_header">
                        <p className="care_search">
                            <span className="iconfont icon-sousuo"></span>
                            搜索用户、物品、话题、资讯
                        </p>
                        <div className="logo_box">
                            <span className="find_logo iconfont icon-xiangji1"></span>
                        </div>
                    </div>
                </header>

                <div className="content">
                    <div className="lunbo_box">
                        <LunboFind />
                    </div>
                </div>
            </div>
        )
    }

    //入口函数
    componentDidMount() {
        
    }
}

export default Model;