import React from "react";
import "./ZhaoDaToTopic.scss";
import {Link} from "react-router";
import QueueAnim from "rc-queue-anim";

class ZhaoDaToTopic extends React.Component {

    constructor (props) {

        super(props);

    }

    componentDidMount () {

        this.props.showBottom();

    }

    render () {

        return (
            <div className="ZhaoDaToTopic">
                <header>
                    <div className="TopBar">
                        <span onClick={(e) => {

                            history.back();

                        }}
                        >
                            <img src="/src/images/arrow-left.png" />
                        </span>
                    </div>
                </header>
                <div className="topM">
                    <span className="peopleLog"><img src="/src/images/pople.png" /></span>
                    <span className="mTitl">#职业素养#</span>
                    <div className="care">
                        <span>问答：<em>16</em></span>
                        <span>关注：<em>101</em></span>
                    </div>
                    <sapn className="attention">+关注</sapn>
                </div>

                <div className="topicM">
                    <ul>
                        <li className="active">全部</li>
                        <li>精华</li>
                    </ul>

                    <article>
                        <div className="publisher">
              Michal
              <span className="vip"><img src="/src/images/vip.png" /></span>，
              <span>骨灰级教练</span>
                        </div>
                        <p className="theme">研究生和本科学历在求职过程中真的会有很大差别吗？</p>
                        <div className="comment">这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...</div>
                        <div className="more">
                            <span><b><img src="/src/images/zan.png" /></b>赞同9</span>
                            <span><b><img src="/src/images/comment.png" /></b>评论14</span>
                            <span><b><img src="/src/images/cang.png" /></b>收藏</span>
                        </div>
                    </article>

                    <article>
                        <div className="publisher">
              Michal
              <span className="vip"><img src="/src/images/vip.png" /></span>，
              <span>骨灰级教练</span>
                        </div>
                        <p className="theme">研究生和本科学历在求职过程中真的会有很大差别吗？</p>
                        <div className="comment">这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...</div>
                        <div className="more">
                            <span><b><img src="/src/images/zan.png" /></b>赞同9</span>
                            <span><b><img src="/src/images/comment.png" /></b>评论14</span>
                            <span><b><img src="/src/images/cang.png" /></b>收藏</span>
                        </div>
                    </article>

                    <article>
                        <div className="publisher">
              Michal
              <span className="vip"><img src="/src/images/vip.png" /></span>，
              <span>骨灰级教练</span>
                        </div>
                        <p className="theme">研究生和本科学历在求职过程中真的会有很大差别吗？</p>
                        <div className="comment">这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...</div>
                        <div className="more">
                            <span><b><img src="/src/images/zan.png" /></b>赞同9</span>
                            <span><b><img src="/src/images/comment.png" /></b>评论14</span>
                            <span><b><img src="/src/images/cang.png" /></b>收藏</span>
                        </div>
                    </article>

                    <article>
                        <div className="publisher">
              Michal
              <span className="vip"><img src="/src/images/vip.png" /></span>，
              <span>骨灰级教练</span>
                        </div>
                        <p className="theme">研究生和本科学历在求职过程中真的会有很大差别吗？</p>
                        <div className="comment">这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...</div>
                        <div className="more">
                            <span><b><img src="/src/images/zan.png" /></b>赞同9</span>
                            <span><b><img src="/src/images/comment.png" /></b>评论14</span>
                            <span><b><img src="/src/images/cang.png" /></b>收藏</span>
                        </div>
                    </article>

                </div>

            </div>
        );

    }
}
export default ZhaoDaToTopic;
