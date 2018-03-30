import React, { Component } from 'react';
class Model extends Component {
    state = {

    }

    goPageHandler(){
        // console.log(this);
        // this.props.history.push('/user');
        //如果要穿参数，就必须用一下写法
        // this.props.history.push({ pathname: "/detail" })
    }


    render() {
        
        return (
            <div className="box">
                <header>
                    
                   
                </header>

                <div className="content">
                    关注
                </div>
            </div>
        )
    }

    //入口函数
    componentDidMount() {
        
    }
}

export default Model;