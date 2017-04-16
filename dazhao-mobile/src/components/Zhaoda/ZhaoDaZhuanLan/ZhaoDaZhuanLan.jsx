import React from 'react';
import ZhaoDaSearchTop from "../ZhaoDaSearchTop/ZhaoDaSearchTop.jsx";
import "./ZhaoDaZhuanLan.scss";
import { Link } from 'react-router';

class ZhaoDaZhuanLan extends React.Component {
  render() {
    return(
      <div className="ZhaoDaZhuanLan ZhaoDaUser ZhaoDaHomeSearch">
        <ZhaoDaSearchTop />
        <div className="usermain">
          <div className="item">
            <div className="left">
              <span className="circle1"></span>
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
