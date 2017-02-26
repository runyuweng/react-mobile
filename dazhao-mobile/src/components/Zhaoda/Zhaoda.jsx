import React from 'react';
import "./Zhaoda.scss";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class Zhaoda extends React.Component {
  render() {
    return(
      <div className="container zhaoda">
        <header>
          <div className="search">
            <div className="input">
              <input type="text" placeholder="搜索话题、问题、行家..."/>
              <span><img src="/src/images/search.png"/></span>
            </div>
            <span className="query">提问</span>
          </div>
        </header>
        <nav>
          <ul>
            <li className="active">首页</li>
            <li>发现</li>
            <li>专栏</li>
            <li>消息</li>
            <li className="bg"></li>
          </ul>
        </nav>
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
          <article>
            <span className="topic">话题：<i>考研</i></span>
            <p className="theme">研究生和本科学历在求职过程中真的会有很大差别吗？</p>
            <div className="publisher">
              Michal
              <span className="vip"><img src="/src/images/vip.png"/></span>,
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
            <p className="theme"><strong>研究生和本科学历在求职过程中真的会有很大差别吗？</strong></p>
            <div className="publisher">
              Michal
              <span className="vip"><img src="/src/images/vip.png"/></span>,
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
            <p className="theme"><strong>研究生和本科学历在求职过程中真的会有很大差别吗？</strong></p>
            <div className="publisher">
              Michal
              <span className="vip"><img src="/src/images/vip.png"/></span>,
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
            <p className="theme"><strong>研究生和本科学历在求职过程中真的会有很大差别吗？</strong></p>
            <div className="publisher">
              Michal
              <span className="vip"><img src="/src/images/vip.png"/></span>,
              <span>骨灰级教练</span>
            </div>
            <div className="comment">
            <span><img src="/src/images/music.png"/><span className="start"><img src="/src/images/start.png"/></span><b>1'57''</b></span>
            </div>
            <div className="more">
              <span><b><img src="/src/images/zan.png"/></b>赞同9</span>
              <span><b><img src="/src/images/comment.png"/></b>评论14</span>
              <span><b><img src="/src/images/cang.png"/></b>收藏</span>
            </div>
          </article>

          <div className="Formore">展开更多</div>
        </div>

        <div id="moreTopic">
          <div className="topic topic1">
            <div className="head">
              <span className="hot"><b><img src="/src/images/hot.png"/></b>热门话题</span>
              <span className="all">全部话题<b>></b></span>
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
              <span className="all">全部行家<b>></b></span>
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
              <span className="all">全部专栏<b>></b></span>
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
export default Zhaoda;
