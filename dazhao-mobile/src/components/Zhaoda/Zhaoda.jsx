import React from 'react';
import "./Zhaoda.scss";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class Zhaoda extends React.Component {
  render() {
    return(
      <div className="container ">
        <header>
          <div className="search">
            <input type="text" placeholder="搜索话题、问题、行家..."/>
            <span>提问</span>
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
                <img src="/src/images/banner2.png" alt="First slide"/>
              </div>
              <div className="item">
                  <img src="/src/images/banner2.png" alt="Second slide"/>
              </div>
              <div className="item">
                  <img src="/src/images/banner2.png" alt="Third slide"/>
              </div>
            </div>

          </div>
        </div>
        <div id="latest">
          <div className="title"><span><img src="/src/images/latest.png"/></span>最新动态
          </div>
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
              这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...
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
          <div className="topic">
            <

          </div>
        </div>
      </div>
    )
  }
}
export default Zhaoda;
