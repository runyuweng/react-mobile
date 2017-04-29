import React from 'react';
import './ConcernTopic.scss';

class ConcernTopic extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="concernTopic">
        <div className="item">
            <div className="left">
                <span className="circle" />
                <p>
                    <span>研究生</span><br />
                    <span>
                        <em>问题：<b>16</b></em>
                        <em>关注：<b>101</b></em>
                    </span>
                </p>
            </div>
            <span className="right">+取消关注</span>
        </div>
        <div className="item">
            <div className="left">
                <span className="circle" />
                <p>
                    <span>研究生就业</span><br />
                    <span>
                        <em>问题：<b>16</b></em>
                        <em>关注：<b>101</b></em>
                    </span>
                </p>
            </div>
            <span className="right">+取消关注</span>
        </div>
        <div className="item">
            <div className="left">
                <span className="circle" />
                <p>
                    <span>考研究生</span><br />
                    <span>
                        <em>问题：<b>16</b></em>
                        <em>关注：<b>101</b></em>
                    </span>
                </p>
            </div>
            <span className="right">+取消关注</span>
        </div>
        <div className="item">
            <div className="left">
                <span className="circle" />
                <p>
                    <span>在职研究生</span><br />
                    <span>
                        <em>问题：<b>16</b></em>
                        <em>关注：<b>101</b></em>
                    </span>
                </p>
            </div>
            <span className="right">+取消关注</span>
        </div>
        <div className="item">
            <div className="left">
                <span className="circle" />
                <p>
                    <span>医学研究生</span><br />
                    <span>
                        <em>问题：<b>16</b></em>
                        <em>关注：<b>101</b></em>
                    </span>
                </p>
            </div>
            <span className="right">+取消关注</span>
        </div>
      </div>
    );
  }
}

export default ConcernTopic;
