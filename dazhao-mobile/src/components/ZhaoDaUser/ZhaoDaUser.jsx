import React from 'react';
import "../ZhaoDaHomeSearch/ZhaoDaHomeSearch.scss";
import "./ZhaoDaUser.scss";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class ZhaoDaUser extends React.Component {
  render() {
    return(
      <div className="ZhaoDaUser ZhaoDaHomeSearch">
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
            <li>专栏</li>
            <li className="active">用户</li>
          </ul>
        </nav>
        <div className="usermain">
          <div className="item">
            <div className="left">
            <span className="circle"></span>
            <p>
                <span>Michael</span><br/>
                <span>国际教练协会（ICF）认证教练</span>
            </p>
            </div>
            <span className="right">+关注</span>
          </div>
        </div>

      </div>
    )
  }
}
export default ZhaoDaUser;
