import React from 'react';
import ZhaoDaAnswer from '../ZhaoDaAnswer/ZhaoDaAnswer.jsx';
import "./ZhaoDaIndex.scss";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class ZhaoDaIndex extends React.Component {
  render() {
    return(
      <div className="ZhaoDaIndex">
        <div id="show">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators">
                <li className="active"></li>
                <li></li>
                <li></li>
            </ol>

            <div className="carousel-inner">
              <div className="item active">
              </div>
              <div className="item">
              </div>
              <div className="item">
              </div>
            </div>

          </div>
        </div>
        <div id="latest">
          <div className="title"><span><img src="/src/images/latest.png"/></span>最新动态
          </div>

          <ZhaoDaAnswer />

          <div className="Formore">展开更多</div>
        </div>

        <div id="moreTopic">
          <div className="topic topic1">
            <div className="head">
              <span className="hot"><b><img src="/src/images/hot.png"/></b>热门话题</span>
              <span className="all">全部话题<b></b><img src="/src/images/right.png"/></span>
            </div>
            <div className="content">
              <div className="img">
                <span className="span1"></span>
                <span className="span2">#考研#</span>
                <span className="care">
                  <span>回答:12</span>
                  <span>关注:101</span>
                </span>
              </div>
              <div className="img">
                <span className="span1"></span>
                <span className="span2">#职场素养#</span>
                <span className="care">
                  <span>回答:12</span>
                  <span>关注:102</span>
                </span>
              </div>
              <div className="img">
                <span className="span1"></span>
                <span className="span2">#汽车行业#</span>
                <span className="care">
                  <span>回答:12</span>
                  <span>关注:101</span>
                </span>
              </div>
            </div>
          </div>

          <div className="topic topic2">
            <div className="head">
              <span className="hot"><b><img src="/src/images/special.png"/></b>人气行家</span>
              <span className="all">全部行家<b><img src="/src/images/right.png"/></b></span>
            </div>
            <div className="content">
              <div className="img">
                <span className="span1"></span>
                <span className="span2">#考研#</span>
                <span className="care">
                  <span>回答:12</span>
                  <span>关注:101</span>
                </span>
              </div>
              <div className="img">
                <span className="span1"></span>
                <span className="span2">#职场素养#</span>
                <span className="care">
                  <span>回答:12</span>
                  <span>关注:101</span>
                </span>
              </div>
              <div className="img">
                <span className="span1"></span>
                <span className="span2">#汽车行业#</span>
                <span className="care">
                  <span>回答:12</span>
                  <span>关注:101</span>
                </span>
              </div>
            </div>
          </div>

          <div className="topic topic3">
            <div className="head">
              <span className="hot"><b><img src="/src/images/special.png"/></b>最新专栏</span>
              <span className="all">全部专栏<b><img src="/src/images/right.png"/></b></span>
            </div>
            <div className="content">
              <div className="img">
                <img src="/src/images/banner2.png"/>
                <p>#麦力克#第23期---考研那些事儿</p>
              </div>
              <div className="img">
                <img src="/src/images/banner2.png"/>
                <p>#麦力克#第一期---考研那些事儿</p>
              </div>
              <div className="img">
                <img src="/src/images/banner2.png"/>
                <p>#麦力克#第一期---考研那些事儿</p>
              </div>
            </div>
          </div>

        </div>

        <p className="bottom">反馈建议.成为行家.问答是什么</p>

      </div>
    )
  }
}
export default ZhaoDaIndex;
