import React from "react";
import "./ZhaoDaToFeatures.scss";
import "../../MainLayout/AnswerMain/AnswerMain.scss";
import {Link} from "react-router";

class ZhaoDaToFeatures extends React.Component {

    constructor (props) {

        super(props);

    }

    componentDidMount () {

        this.props.showBottom();

    }

    render () {

        return (
            <div className="ZhaoDaToFeatures">
                <header>
                    <video id="video" controls poster="/src/images/zhuanlan.png" >
                        <source src="http://html5videoformatconverter.com/data/images/happyfit2.ogv" />
                        <source src="http://www.100sucai.com/img/video/happyfit2.mp4" />
                    </video>
                    <div className="TopBar">
                        <span onClick={(e) => {

                            history.back();

                        }}
                        >
                            <img src="/src/images/Back_left.png" />
                        </span>
                    </div>
                    <div className="videoM">
                        <div className="videoL">
                            <span><img src="/src/images/eye.png" /></span>
                            <em><b>243</b>次播放</em>
                        </div>
                        <div className="videoR">
                            <span><img src="/src/images/love.png" /></span>
                            <span><img src="/src/images/top.png" /></span>
                        </div>
                    </div>
                    <div id="videoMessage">
                        <div className="vTitle">
                            <h3>#麦力答#第一期----考研那些事儿</h3>
                            <span><em>简介</em><img src="/src/images/Back_top.png" /></span>
                        </div>
                        <p>读研？工作？跨专业？选热门？如何让选择变成现在最适合的？如何让选择变成未来组以正确的？请听--麦力答</p>
                        <div className="guestIntro">
                            <h3>嘉宾介绍</h3>
                            <div className="intro">
                                <span className="circle" />
                                <div className="introR">
                                    <span><em>Michile</em><img src="/src/images/vip.png" /></span>
                                    <span>国际教练协会（ICF）认证教练<br />
                    WIT Advisory Group总裁...
                  </span>
                                </div>
                            </div>
                            <span className="more"><em>展开</em><img src="/src/images/Back_down.png" /></span>
                        </div>
                    </div>
                </header>

                <div id="album">
                    <h3>专辑列表</h3>
                    <div className="albunItems">
                        <span><img src="/src/images/zhuanlan.png" /></span>
                        <div className="itemsR">
                            <h3>#麦力答#第二期----三年国考  成就万里挑一</h3>
                            <span><em>243</em>次播放</span>
                        </div>
                    </div>

                    <div className="albunItems">
                        <span><img src="/src/images/zhuanlan.png" /></span>
                        <div className="itemsR">
                            <h3>#麦力答#第二期----三年国考  成就万里挑一</h3>
                            <span><em>243</em>次播放</span>
                        </div>
                    </div>

                    <div className="albunItems">
                        <span><img src="/src/images/zhuanlan.png" /></span>
                        <div className="itemsR">
                            <h3>#麦力答#第二期----三年国考  成就万里挑一</h3>
                            <span><em>243</em>次播放</span>
                        </div>
                    </div>

                    <div className="albunItems">
                        <span><img src="/src/images/zhuanlan.png" /></span>
                        <div className="itemsR">
                            <h3>#麦力答#第二期----三年国考  成就万里挑一</h3>
                            <span><em>243</em>次播放</span>
                        </div>
                    </div>

                    <p><input type="button" value="查看全部" /></p>
                </div>

                <div className="guestAnswer">
                    <header className="ul">
                        <ul>
                            <li className="active">嘉宾解答</li>
                            <li>热问榜单</li>
                        </ul>
                    </header>

                    <div className="answerItems">
                        <h3>请问研究生和本科生在求职过程中真的会有很大影响吗？</h3>
                        <div className="vector">
                            <span><img src="/src/images/user.png" /></span>
                            <em>马军</em>
                            <time>2016年11月30日</time>
                        </div>

                        <article>
                            <div className="publisher">
                                <span><img src="/src/images/user.png" /></span>
                                <em>Michile</em>
                                <span className="vip"><img src="/src/images/vip.png" /></span>
                            </div>
                            <div className="comment">这个问题，还得要看企业的需求，比如说企业的一些技术岗位，这些企业在招聘介绍里就会写清楚研究生学历还是本科生学历；对于一些管...<span>查看全部</span></div>
                            <div className="more">
                                <span><b><img src="/src/images/zan.png" /></b>赞同9</span>
                                <span><b><img src="/src/images/comment.png" /></b>评论14</span>
                                <span><b><img src="/src/images/cang.png" /></b>收藏</span>
                            </div>
                        </article>
                        <span className="NO">Q1</span>
                    </div>

                    <div className="answerItems">
                        <h3>请问研究生和本科生在求职过程中真的会有很大影响吗？</h3>
                        <div className="vector">
                            <span><img src="/src/images/user.png" /></span>
                            <em>马军</em>
                            <time>2016年11月30日</time>
                        </div>

                        <article>
                            <div className="publisher">
                                <span><img src="/src/images/user.png" /></span>
                                <em>Michile</em>
                                <span className="vip"><img src="/src/images/vip.png" /></span>
                            </div>
                            <div className="comment">这个问题，还得要看企业的需求，比如说企业的一些技术岗位，这些企业在招聘介绍里就会写清楚研究生学历还是本科生学历；对于一些管...<span>查看全部</span></div>
                            <div className="more">
                                <span><b><img src="/src/images/zan.png" /></b>赞同9</span>
                                <span><b><img src="/src/images/comment.png" /></b>评论14</span>
                                <span><b><img src="/src/images/cang.png" /></b>收藏</span>
                            </div>
                        </article>
                        <span className="NO">Q2</span>
                    </div>

                    <div className="answerItems">
                        <h3>请问研究生和本科生在求职过程中真的会有很大影响吗？</h3>
                        <div className="vector">
                            <span><img src="/src/images/user.png" /></span>
                            <em>马军</em>
                            <time>2016年11月30日</time>
                        </div>

                        <article>
                            <div className="publisher">
                                <span><img src="/src/images/user.png" /></span>
                                <em>Michile</em>
                                <span className="vip"><img src="/src/images/vip.png" /></span>
                            </div>
                            <div className="comment">这个问题，还得要看企业的需求，比如说企业的一些技术岗位，这些企业在招聘介绍里就会写清楚研究生学历还是本科生学历；对于一些管...<span>查看全部</span></div>
                            <div className="more">
                                <span><b><img src="/src/images/zan.png" /></b>赞同9</span>
                                <span><b><img src="/src/images/comment.png" /></b>评论14</span>
                                <span><b><img src="/src/images/cang.png" /></b>收藏</span>
                            </div>
                        </article>
                        <span className="NO">Q3</span>
                    </div>

                    <div className="answerItems">
                        <h3>请问研究生和本科生在求职过程中真的会有很大影响吗？</h3>
                        <div className="vector">
                            <span><img src="/src/images/user.png" /></span>
                            <em>马军</em>
                            <time>2016年11月30日</time>
                        </div>

                        <article>
                            <div className="publisher">
                                <span><img src="/src/images/user.png" /></span>
                                <em>Michile</em>
                                <span className="vip"><img src="/src/images/vip.png" /></span>
                            </div>
                            <div className="comment">这个问题，还得要看企业的需求，比如说企业的一些技术岗位，这些企业在招聘介绍里就会写清楚研究生学历还是本科生学历；对于一些管...<span>查看全部</span></div>
                            <div className="more">
                                <span><b><img src="/src/images/zan.png" /></b>赞同9</span>
                                <span><b><img src="/src/images/comment.png" /></b>评论14</span>
                                <span><b><img src="/src/images/cang.png" /></b>收藏</span>
                            </div>
                        </article>
                        <span className="NO">Q4</span>
                    </div>

                </div>
            </div>
        );

    }
}

export default ZhaoDaToFeatures;
