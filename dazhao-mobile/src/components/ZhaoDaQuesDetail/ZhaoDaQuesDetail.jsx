import React from 'react';
import "./ZhaoDaQuesDetail.scss";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class ZhaoDaQuesDetail extends React.Component {

  render() {
    return(
      <div className="ZhaoDaQuesDetail">
        <header>
          <div className="search">
              <span >上一步</span>
              <span>问题详情</span>
              <span>下一步</span>
          </div>
        </header>
        <div className="intro">
          <textarea name="introc" rows="3" placeholder="填写问题情景、条件等详细叙述(非必填)"></textarea>
        </div>
        <div className="blank"></div>
      </div>
    )
  }
}
export default ZhaoDaQuesDetail;
