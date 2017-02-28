import React from 'react';
import "./ZhaoDaConsult.scss";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class ZhaoDaConsult extends React.Component {

  render() {
    return(
      <div className="ZhaoDaConsult">
        <header>
          <div className="search">
              <span >取消</span>
              <span>提问</span>
              <span><Link to = "/detail">下一步</Link></span>
          </div>
        </header>
        <div className="quiztitle">
          <input type="text" value="金融专业" placeholder="金融专业" autoFocus="autoFocus"/>
        </div>
        <div className="havefind">
          <div><span><img src="/src/images/power.png"/></span>你的问题可能已经得到解决：</div>
          <p>非经融专业的学生想进投行工作需要什么？<span><b>5</b>个回答</span></p>
          <p>经融专业的学生求指点未来就业方向？<span><b>5</b>个回答</span></p>
          <p>经融专业大学生如何进行职业生涯规划？<span><b>5</b>个回答</span></p>
          <p>经融专业大学生如何进行职业生涯规划？<span><b>5</b>个回答</span></p>
        </div>
      </div>
    )
  }
}
export default ZhaoDaConsult;
