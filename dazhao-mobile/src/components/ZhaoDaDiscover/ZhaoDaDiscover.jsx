import React from 'react';
import ZhaoDaAnswer from '../ZhaoDaAnswer/ZhaoDaAnswer.jsx';
import "./ZhaoDaDiscover.scss";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class ZhaoDaDiscover extends React.Component {
  render() {
    return(
      <div className="ZhaoDaDiscover">
        <div id="dynamic">
          <div className="title"><span><img src="/src/images/latest.png"/></span>最新动态
          </div>
          <div className="content">

            <div className="Myarticle">
              <div className="Citems">
                <span className="img"></span>
                <div className="detail">
                    <span className="span2">#考研#</span>
                    <span className="care">
                      <span>回答:12</span>
                      <span>关注:101</span>
                    </span>
                </div>
              </div>

              <div className="Citems">
                <span className="img"></span>
                <div className="detail">
                    <span className="span2">#考研#</span>
                    <span className="care">
                      <span>回答:12</span>
                      <span>关注:101</span>
                    </span>
                </div>
              </div>
            </div>

            <div className="Myarticle">
              <div className="Citems">
                <span className="img"></span>
                <div className="detail">
                    <span className="span2">#考研#</span>
                    <span className="care">
                      <span>回答:12</span>
                      <span>关注:101</span>
                    </span>
                </div>
              </div>

              <div className="Citems">
                <span className="img"></span>
                <div className="detail">
                    <span className="span2">#考研#</span>
                    <span className="care">
                      <span>回答:12</span>
                      <span>关注:101</span>
                    </span>
                </div>
              </div>
            </div>

            <div className="Myarticle">
              <div className="Citems">
                <span className="img"></span>
                <div className="detail">
                    <span className="span2">#考研#</span>
                    <span className="care">
                      <span>回答:12</span>
                      <span>关注:101</span>
                    </span>
                </div>
              </div>

              <div className="Citems">
                <span className="img"></span>
                <div className="detail">
                    <span className="span2">#考研#</span>
                    <span className="care">
                      <span>回答:12</span>
                      <span>关注:101</span>
                    </span>
                </div>
              </div>
            </div>

            <div className="Myarticle">
              <div className="Citems">
                <span className="img"></span>
                <div className="detail">
                    <span className="span2">#考研#</span>
                    <span className="care">
                      <span>回答:12</span>
                      <span>关注:101</span>
                    </span>
                </div>
              </div>

              <div className="Citems">
                <span className="img"></span>
                <div className="detail">
                    <span className="span2">#考研#</span>
                    <span className="care">
                      <span>回答:12</span>
                      <span>关注:101</span>
                    </span>
                </div>
              </div>
            </div>

            <div className="Myarticle">
              <div className="Citems">
                <span className="img"></span>
                <div className="detail">
                    <span className="span2">#考研#</span>
                    <span className="care">
                      <span>回答:12</span>
                      <span>关注:101</span>
                    </span>
                </div>
              </div>

              <div className="Citems">
                <span className="img"></span>
                <div className="detail">
                    <span className="span2">#考研#</span>
                    <span className="care">
                      <span>回答:12</span>
                      <span>关注:101</span>
                    </span>
                </div>
              </div>
            </div>

            <div className="Formore1">更多话题</div>


          </div>
        </div>
        <div id="latest">
          <div className="title"><span><img src="/src/images/latest.png"/></span>精品回答
          </div>

          <ZhaoDaAnswer />

        </div>
      </div>
    )
  }
}
export default ZhaoDaDiscover;
