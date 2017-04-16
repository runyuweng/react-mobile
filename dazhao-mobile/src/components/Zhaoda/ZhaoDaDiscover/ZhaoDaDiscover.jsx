import React from "react";
import AnswerMain from "../../MainLayout/AnswerMain/AnswerMain.jsx";
import "./ZhaoDaDiscover.scss";
import {Link} from "react-router";


class ZhaoDaDiscover extends React.Component {

    render () {

        const data = [
            {
                "topic": "考研",
                "theme": "研究生和本科学历在求职过程中真的会有很大差别吗？",
                "coach": "Michal",
                "imgsrc": "/src/images/vip.png",
                "remark": 9,
                "agree": 14,
                "comment": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...",
                "collect": false
            },
            {
                "topic": "考研",
                "theme": "研究生和本科学历在求职过程中真的会有很大差别吗？",
                "coach": "Michal",
                "imgsrc": "/src/images/vip.png",
                "remark": 12,
                "agree": 14,
                "comment": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...",
                "collect": false
            },
            {
                "topic": "考研",
                "theme": "研究生和本科学历在求职过程中真的会有很大差别吗？",
                "coach": "Michal",
                "imgsrc": "/src/images/vip.png",
                "remark": 13,
                "agree": 14,
                "comment": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...",
                "collect": false
            }
        ];
        const AnswerMainList = data.map((value, i) => <AnswerMain key={i} data={value} />);

        return (
            <div className="ZhaoDaDiscover">
                <div id="dynamic">
                    <div className="title"><span><img src="/src/images/latest.png" /></span>最新动态
          </div>
                    <div className="content">


                        <div className="Myarticle">
                            <div className="Citems">
                                <Link to="/totopic">
                                    <span className="img" />
                                    <div className="detail">
                                        <span className="span2">#考研#</span>
                                        <span className="care">
                                            <span>回答:12</span>
                                            <span>关注:101</span>
                                        </span>
                                    </div>
                                </Link>
                            </div>

                            <div className="Citems">
                                <span className="img" />
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
                                <span className="img" />
                                <div className="detail">
                                    <span className="span2">#考研#</span>
                                    <span className="care">
                                        <span>回答:12</span>
                                        <span>关注:101</span>
                                    </span>
                                </div>
                            </div>

                            <div className="Citems">
                                <span className="img" />
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
                                <span className="img" />
                                <div className="detail">
                                    <span className="span2">#考研#</span>
                                    <span className="care">
                                        <span>回答:12</span>
                                        <span>关注:101</span>
                                    </span>
                                </div>
                            </div>

                            <div className="Citems">
                                <span className="img" />
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
                                <span className="img" />
                                <div className="detail">
                                    <span className="span2">#考研#</span>
                                    <span className="care">
                                        <span>回答:12</span>
                                        <span>关注:101</span>
                                    </span>
                                </div>
                            </div>

                            <div className="Citems">
                                <span className="img" />
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
                                <span className="img" />
                                <div className="detail">
                                    <span className="span2">#考研#</span>
                                    <span className="care">
                                        <span>回答:12</span>
                                        <span>关注:101</span>
                                    </span>
                                </div>
                            </div>

                            <div className="Citems">
                                <span className="img" />
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
                    <div className="title"><span><img src="/src/images/latest.png" /></span>精品回答
          </div>

                    {AnswerMainList}

                </div>
            </div>
        );

    }
}
export default ZhaoDaDiscover;
