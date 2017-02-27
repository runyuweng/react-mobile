import React from 'react';
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

            <div className="Formore1"><Link to="/topic">更多话题</Link></div>


          </div>
        </div>
        <div id="latest">
          <div className="title"><span><img src="/src/images/latest.png"/></span>精品回答
          </div>
          <article>
            <span className="topic">话题：<i>考研</i></span>
            <p className="theme">研究生和本科学历在求职过程中真的会有很大差别吗？</p>
            <div className="publisher">
              Michal
              <span className="vip"><img src="/src/images/vip.png"/></span>，
              <span>骨灰级教练</span>
            </div>
            <div className="comment">
              这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...
            </div>
            <div className="more">
              <span><b><img src="/src/images/zan.png"/></b>赞同9</span>
              <span><b><img src="/src/images/comment.png"/></b>评论14</span>
              <span><b><img src="/src/images/cang.png"/></b>收藏</span>
            </div>
          </article>

          <article>
            <span className="topic">话题：<i>考研</i></span>
            <p className="theme">研究生和本科学历在求职过程中真的会有很大差别吗？</p>
            <div className="publisher">
              Michal
              <span className="vip"><img src="/src/images/vip.png"/></span>，
              <span>骨灰级教练</span>
            </div>
            <div className="comment">
              这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...
            </div>
            <div className="more">
              <span><b><img src="/src/images/zan.png"/></b>赞同9</span>
              <span><b><img src="/src/images/comment.png"/></b>评论14</span>
              <span><b><img src="/src/images/cang.png"/></b>收藏</span>
            </div>
          </article>

          <article>
            <span className="topic">话题：<i>考研</i></span>
            <p className="theme">研究生和本科学历在求职过程中真的会有很大差别吗？</p>
            <div className="publisher">
              Michal
              <span className="vip"><img src="/src/images/vip.png"/></span>，
              <span>骨灰级教练</span>
            </div>
            <div className="comment">
              这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...
            </div>
            <div className="more">
              <span><b><img src="/src/images/zan.png"/></b>赞同9</span>
              <span><b><img src="/src/images/comment.png"/></b>评论14</span>
              <span><b><img src="/src/images/cang.png"/></b>收藏</span>
            </div>
          </article>

          <article>
            <span className="topic">话题：<i>考研</i></span>
            <p className="theme">研究生和本科学历在求职过程中真的会有很大差别吗？</p>
            <div className="publisher">
              Michal
              <span className="vip"><img src="/src/images/vip.png"/></span>，
              <span>骨灰级教练</span>
            </div>
            <div className="comment">
              这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...
            </div>
            <div className="more">
              <span><b><img src="/src/images/zan.png"/></b>赞同9</span>
              <span><b><img src="/src/images/comment.png"/></b>评论14</span>
              <span><b><img src="/src/images/cang.png"/></b>收藏</span>
            </div>
          </article>

        </div>
      </div>
    )
  }
}
export default ZhaoDaDiscover;
