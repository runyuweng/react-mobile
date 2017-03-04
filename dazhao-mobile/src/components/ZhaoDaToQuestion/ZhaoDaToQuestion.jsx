import React from 'react';
import "./ZhaoDaToQuestion.scss";
import TopBar from "../TopBar/TopBar.jsx";
import ZhaoDaAnswer from '../ZhaoDaAnswer/ZhaoDaAnswer.jsx';
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class ZhaoDaToQuestion extends React.Component {


  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.showBottom();
  }

  render() {

    return(
      <div className="ZhaoDaToQuestion">
        <header>
          <TopBar title="问题" border="boder"/>
        </header>

        <div className="question">
          <span className="title">父话题：<span className="topTopic">考研</span></span>
          <span className="img"><img src="/src/images/Back_Button.png"/></span>
        </div>

        <div className="careTopic">
          <span className="caretitle">研究生和本科学历在求职过程中真的会有很大影响吗?</span>
          <div className="caremain">
            <span className="carecontent">这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学历还是本科学历；对于一些管理类的岗位的话，本身不是很需要学历的岗位，只要你的综合能力强，研究生还是本科神差距就不是很大。所以总的来说，还是要看你想去什么样的企业，想从事什么样的工作，然后决定读不读研或者读什么专业的研究生。
              <span className="shade"></span>
            </span>
            <span className="strech">展开查看全部<span><img src="/src/images/down.png"/></span></span>
            <div className="bottom">
              <div className="left">
                <span><img src="/src/images/user.png"/></span>
                <span>马军</span>
                <span>2016年11月30日</span>
              </div>
              <div className="right">
                <span><em>15</em>人关注</span>
                <span>+关注</span>
              </div>
            </div>
          </div>
        </div>

        <span className="answers"><em>50</em>个回答</span>

        <div className="ZhaoDaAnswer">
          <article>
            <div className="publisher">
              Michal
              <span className="vip"><img src='/src/images/vip.png'/></span>，
              <span>骨灰级教练</span>
            </div>
            <div className="comment">这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...</div>
            <div className="more">
              <span><b><img src="/src/images/zan.png"/></b>赞同9</span>
              <span><b><img src="/src/images/comment.png"/></b>评论14</span>
              <span><b><img src="/src/images/cang.png"/></b>收藏</span>
            </div>
          </article>

          <article>
            <div className="publisher">
              Michal
              <span className="vip"><img src='/src/images/vip.png'/></span>，
              <span>骨灰级教练</span>
            </div>
            <div className="comment">这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...</div>
            <div className="more">
              <span><b><img src="/src/images/zan.png"/></b>赞同9</span>
              <span><b><img src="/src/images/comment.png"/></b>评论14</span>
              <span><b><img src="/src/images/cang.png"/></b>收藏</span>
            </div>
          </article>

          <article>
            <div className="publisher">
              Michal
              <span className="vip"><img src='/src/images/vip.png'/></span>，
              <span>骨灰级教练</span>
            </div>
            <div className="comment">这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...</div>
            <div className="more">
              <span><b><img src="/src/images/zan.png"/></b>赞同9</span>
              <span><b><img src="/src/images/comment.png"/></b>评论14</span>
              <span><b><img src="/src/images/cang.png"/></b>收藏</span>
            </div>
          </article>

          <article>
            <div className="publisher">
              Michal
              <span className="vip"><img src='/src/images/vip.png'/></span>，
              <span>骨灰级教练</span>
            </div>
            <div className="comment">这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...</div>
            <div className="more">
              <span><b><img src="/src/images/zan.png"/></b>赞同9</span>
              <span><b><img src="/src/images/comment.png"/></b>评论14</span>
              <span><b><img src="/src/images/cang.png"/></b>收藏</span>
            </div>
          </article>

          <article>
            <div className="publisher">
              Michal
              <span className="vip"><img src='/src/images/vip.png'/></span>，
              <span>骨灰级教练</span>
            </div>
            <div className="comment">这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...</div>
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
export default ZhaoDaToQuestion;
