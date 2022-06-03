import React, { useState } from 'react';

import './index.scss';

class Roll extends React.Component {
  rollRef = React.createRef();
  state = {
    list: [
      { title: '这是消息1' },
      { title: '这是消息2' },
      { title: '这是消息3' },
      { title: '这是消息4' },
      { title: '这是消息5' },
      { title: '这是消息6' },
      { title: '这是消息7' },
      { title: '这是消息8' },
      { title: '这是消息9' },
      { title: '这是消息10' },
      { title: '这是消息11' },
      { title: '这是消息12' },
      { title: '这是消息13' },
    ],
    count: 0,
  };

  // 页面挂载时开启定时器
  componentDidMount = () => {
    this.begin();
  };
  componentWillUnmount() {
    this.stop();
  }

  // 定时器
  begin = () => {
    // this.timer = setInterval(() => {
    //   this.Roll()
    // }, 16);
    const that = this;
    (function animloop() {
      that.Roll();
      window.requestAnimationFrame(animloop);
    })();
  };

  // 关闭定时器
  stop = () => {
    clearInterval(this.timer);
  };

  // 每次向上偏移0.5px，使用state储存偏移的次数
  Roll = () => {
    this.setState({
      count: this.state.count + 1,
    });
    this.rollRef.current.style.top = -0.5 * this.state.count + 'px';
    // 当偏移量达到40px时，将数组中第一个数据剪切到数组的最后，再减去一行高度对应的偏移次数
    if (-0.5 * this.state.count <= -64) {
      let arr = this.state.list;
      arr.push(this.state.list[0]);
      arr.splice(0, 1);
      this.setState({
        list: arr,
        count: 1,
      });
      this.rollRef.current.style.top = this.state.count * -0.5 + 'px';
    }
  };

  render() {
    return (
      <div className="wrapper-box" onMouseEnter={this.stop} onMouseLeave={this.begin}>
        <div className="wrapper-content" ref={this.rollRef}>
          {this.state.list.map((item, index) => {
            return (
              <p className="row" key={index}>
                {item.title}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Roll;
