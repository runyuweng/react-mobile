import React from "react";
import AnswerMain from "../../MainLayout/AnswerMain/AnswerMain.jsx";
import "./ZhaoDaDiscover.scss";
import {Link} from "react-router";

class ZhaoDaDiscover extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "hotTopics": [
                {
                    "imgsrc": "/src/images/topicImg.png",
                    "topic": "职业素养",
                    "answer": 12,
                    "care": 101
                },
                {
                    "imgsrc": "/src/images/topicImg.png",
                    "topic": "职业素养",
                    "answer": 12,
                    "care": 101
                },
                {
                    "imgsrc": "/src/images/topicImg.png",
                    "topic": "职业素养",
                    "answer": 12,
                    "care": 101
                },
                {
                    "imgsrc": "/src/images/topicImg.png",
                    "topic": "职业素养",
                    "answer": 12,
                    "care": 101
                },
                {
                    "imgsrc": "/src/images/topicImg.png",
                    "topic": "职业素养",
                    "answer": 12,
                    "care": 101
                },
                {
                    "imgsrc": "/src/images/topicImg.png",
                    "topic": "职业素养",
                    "answer": 12,
                    "care": 101
                }
            ],
            "goodAnswer": [
                {
                    "topic": "考研",
                    "theme": "研究生和本科学历在求职过程中真的会有很大差别吗？",
                    "name": "Michal",
                    "job": "骨灰级教练",
                    "imgsrc": "/src/images/vip.png",
                    "remark": 9,
                    "agree": 14,
                    "comment": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...",
                    "collect": false
                },
                {
                    "topic": "考研",
                    "theme": "研究生和本科学历在求职过程中真的会有很大差别吗？",
                    "name": "Michal",
                    "job": "骨灰级教练",
                    "imgsrc": "/src/images/vip.png",
                    "remark": 12,
                    "agree": 14,
                    "comment": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...",
                    "collect": false
                },
                {
                    "topic": "考研",
                    "theme": "研究生和本科学历在求职过程中真的会有很大差别吗？",
                    "name": "Michal",
                    "job": "骨灰级教练",
                    "imgsrc": "/src/images/vip.png",
                    "remark": 13,
                    "agree": 14,
                    "comment": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...",
                    "collect": false
                }
            ]
        };

    }

    // 精品回答
    fetchGoodAnswer () {

    }

    // 最新动态
    fetchLatestDynamic () {

    }

    render () {

        const {goodAnswer, hotTopics} = this.state;

        const AnswerMainList = goodAnswer.map((value, i) => <AnswerMain isTopic='0' key={i} data={value} />);

        const LatestDynamicList = hotTopics.map((elem, index) =>
            <div className="Citems" key={index}>
                <Link to="/totopic">
                    <span className="img">
                        <img src={elem.imgsrc} alt="最新动态" />
                    </span>
                    <div className="detail">
                        <span className="span2">{elem.topic}</span>
                        <span className="care">
                            <span>回答:{elem.answer}</span>
                            <span>关注:{elem.care}</span>
                        </span>
                    </div>
                </Link>
            </div>
            );


        return (
            <div className="ZhaoDaDiscover">
                <div id="dynamic">
                    <div className="title"><span><img src="/src/images/latest.png" /></span>热门话题</div>
                    <div className="content">
                        <div className="citemswrap">
                            {LatestDynamicList}
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
