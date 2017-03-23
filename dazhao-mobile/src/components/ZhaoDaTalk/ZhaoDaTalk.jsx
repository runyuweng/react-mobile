import React from 'react';
import "../ZhaoDaUser/ZhaoDaUser.scss";
import "../ZhaoDaHomeSearch/ZhaoDaHomeSearch.scss";
import "./ZhaoDaTalk.scss";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class ZhaoDaTalk extends React.Component {

  render() {

    return(
      <div className="ZhaoDaTalk ZhaoDaUser ZhaoDaHomeSearch">
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
            <li className="active">话题</li>
            <li>专栏</li>
            <li>用户</li>
          </ul>
        </nav>
        <div className="usermain">
            <div className="item">
              <div className="left">
                <span className="circle"></span>
                <p>
                    <span>研究生</span><br/>
                    <span>
                        <em>问题：<b>16</b></em>
                        <em>关注：<b>101</b></em>
                    </span>
                </p>
              </div>
              <span className="right">+关注</span>
            </div>

            <div className="item">
              <div className="left">
                <span className="circle"></span>
                <p>
                    <span>研究生</span><br/>
                    <span>
                        <em>问题：<b>16</b></em>
                        <em>关注：<b>101</b></em>
                    </span>
                </p>
              </div>
              <span className="right">+关注</span>
            </div>

            <div className="item">
              <div className="left">
                <span className="circle"></span>
                <p>
                    <span>研究生</span><br/>
                    <span>
                        <em>问题：<b>16</b></em>
                        <em>关注：<b>101</b></em>
                    </span>
                </p>
              </div>
              <span className="right">+关注</span>
            </div>

            <div className="item">
              <div className="left">
                <span className="circle"></span>
                <p>
                    <span>研究生</span><br/>
                    <span>
                        <em>问题：<b>16</b></em>
                        <em>关注：<b>101</b></em>
                    </span>
                </p>
              </div>
              <span className="right">+关注</span>
            </div>
        </div>
      </div>
    )
  }
}
export default ZhaoDaTalk;
