import React from 'react';
import './Answers.scss';

class Answers extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="answers">
        <article>
            <p className="theme">研究生和本科学历在求职过程中真的会有很大差别吗？</p>
            <div className="comment">这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...</div>
            <div className="more">
                <span><b><img src="/src/images/zan.png" /></b>赞同9</span>
                <span><b><img src="/src/images/comment.png" /></b>评论14</span>
                <span><b><img src="/src/images/cang.png" /></b>收藏</span>
            </div>
        </article>
        <article>
            <p className="theme">研究生和本科学历在求职过程中真的会有很大差别吗？</p>
            <div className="comment">这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...</div>
            <div className="more">
                <span><b><img src="/src/images/zan.png" /></b>赞同9</span>
                <span><b><img src="/src/images/comment.png" /></b>评论14</span>
                <span><b><img src="/src/images/cang.png" /></b>收藏</span>
            </div>
        </article>
        <article>
            <p className="theme">研究生和本科学历在求职过程中真的会有很大差别吗？</p>
            <div className="comment">这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...</div>
            <div className="more">
                <span><b><img src="/src/images/zan.png" /></b>赞同9</span>
                <span><b><img src="/src/images/comment.png" /></b>评论14</span>
                <span><b><img src="/src/images/cang.png" /></b>收藏</span>
            </div>
        </article>
      </div>
    );
  }
}

export default Answers;