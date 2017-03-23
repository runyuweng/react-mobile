import React from 'react';
import "../ZhaoDaUser/ZhaoDaUser.scss";
import "../ZhaoDaHomeSearch/ZhaoDaHomeSearch.scss";
import "./ZhaoDaZhuanLan.scss";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class ZhaoDaZhuanLan extends React.Component {
  render() {
    return(
      <div className="ZhaoDaZhuanLan ZhaoDaUser ZhaoDaHomeSearch">
        <header>
          <div className="search">
              <span >取消</span>
              <input type="text"
              placeholder="Michael"
              />
              <span>搜索</span>
          </div>
        </header>
        <nav>
          <ul>
            <li>问答</li>
            <li>话题</li>
            <li className="active">专栏</li>
            <li>用户</li>
          </ul>
        </nav>
        <div className="usermain">
          <div className="item">
            <div className="left">
              <span className="circle"></span>
              <p>
                  <span>#麦力达#第一期---考研那些事儿</span><br/>
                  <span>读研？工作？跨专业？选热门？如何选择变成现在最合适的 如何选择编程未来最正确的？</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default ZhaoDaZhuanLan;
