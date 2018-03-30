/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';


class App extends React.Component {
  state = {
    data: ['1', '2', '3','4','5'],
    imgHeight: 176,
    slideIndex: 0,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['http://www.x-kicks.com/data/afficheimg/20180318ugimmc.jpg',
              'http://www.x-kicks.com/data/afficheimg/1504590512848380689.jpg', 
              'http://www.x-kicks.com/data/afficheimg/20180215qyveqn.jpg',
              'http://sneaker-daily.com/wp-content/uploads/2015/02/clot-nike-air-vapormax-official-release-1-1_%E5%89%AF%E6%9C%AC.jpg',
              'http://www.long7.com/upload/image/20180323/f3e40f19deecea35a0f7850ed6c1b7a4.jpg'
            ],
      });
    }, 100);
  }

  render() {

    return (

      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
          selectedIndex={1}
        >
          {this.state.data.map(val => (
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
            </a>
          ))}
        </Carousel>

        <WhiteSpace />
      </WingBlank>
    )
  }

}




  
export default App;