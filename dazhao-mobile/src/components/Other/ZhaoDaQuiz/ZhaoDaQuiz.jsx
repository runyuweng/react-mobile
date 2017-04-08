import React from 'react';
import "./ZhaoDaQuiz.scss";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class ZhaoDaQuiz extends React.Component {

  render() {
    return(
      <div className="ZhaoDaQuiz">
        <header>
          <div className="search">
              <span >取消</span>
              <span>提问</span>
              <span><Link to = "/consult">下一步</Link></span>
          </div>
        </header>
        <div className="quiztitle">
          <input type="text" placeholder="写下你的问题标题"/>
        </div>
        <div className="blank"></div>
      </div>
    )
  }
}
export default ZhaoDaQuiz;
