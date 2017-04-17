import React, {defaultProps} from "react";
import AnswerMain from "../../MainLayout/AnswerMain/AnswerMain.jsx";
import "./ZhaoDaIndex.scss";
import {Link} from "react-router";

class ZhaoDaIndex extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "pressDownX": 0, // 鼠标按下的位置
            "nowX": 0, // 鼠标移动后的位置
            "delateX": 0, // 移动的距离
            "currentX": 0
        };

    }

    componentDidMount () {

        ["topic1", "topic2", "topic3"].map((elem) => {

            this._touchEvent(elem);

        });

    }

    _touchEvent (elem) {

            // 触屏开始
        document.getElementById(elem).addEventListener("touchstart", (e) => {

            const _this = document.getElementById(elem);
            let isStart = true;
            const event = e || window.event;
            const pressDownX = event.touches[0].pageX;
            const left = parseInt(_this.style.left || _this.offsetLeft);

            this.setState({
                pressDownX,
                "currentX": left
            });

                // 触屏移动
            document.addEventListener("touchmove", (e) => {

                if (isStart) {

                    let left = this.state.currentX;
                    const element = _this;
                    const width = element.clientWidth;
                    const windowWidth = window.innerWidth;
                    const event = e || window.event;

                    this.setState({
                        "nowX": event.touches[0].pageX,
                        "delateX": event.touches[0].pageX - this.state.pressDownX
                    });
                    left += this.state.delateX;

                        // 边界判断
                    if (windowWidth > width) {

                        return;

                    }

                    if (left > windowWidth - width - 10 && left < 0) {

                        element.style.left = `${left}px`;

                    } else if (left < windowWidth - width - 10) {

                        element.style.left = `${windowWidth - width - 10}px`;

                    } else if (left > 0) {

                        element.style.left = "0px";

                    }


                }

            });

                // 触屏结束
            document.addEventListener("touchend", () => {

                if (isStart) {

                    const element = _this;
                    const currentX = parseInt(element.style.left);

                    this.setState({
                        "pressDownX": 0,
                        "nowX": 0,
                        currentX,
                        "delateX": 0
                    });

                }
                isStart = false;

            });

        });

    }

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
            <div className="ZhaoDaIndex">
                <div id="show">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">

                        <ol className="carousel-indicators">
                            <li className="active" />
                            <li />
                            <li />
                        </ol>

                        <div className="carousel-inner">
                            <div className="item active" />
                            <div className="item" />
                            <div className="item" />
                        </div>

                    </div>
                </div>
                <div id="latest">
                    <div className="title"><span><img src="/src/images/latest.png" /></span>最新动态
                </div>

                    {AnswerMainList}

                    <div className="Formore">展开更多</div>
                </div>

                <div id="moreTopic">
                    <div className="topic topic1">
                        <div className="head">
                            <span className="hot"><b><img src="/src/images/hot.png" /></b>热门话题</span>
                            <span className="all">全部话题<b /><img src="/src/images/seeMore.png" /></span>
                        </div>
                        <div id="topic1" ref="topic1" className="content">
                            <div className="img">
                                <span className="span1" />
                                <span className="span2">#考研#</span>
                                <span className="care">
                                    <span>回答:12</span>
                                    <span>关注:101</span>
                                </span>
                            </div>
                            <div className="img">
                                <span className="span1" />
                                <span className="span2">#职场素养#</span>
                                <span className="care">
                                    <span>回答:12</span>
                                    <span>关注:102</span>
                                </span>
                            </div>
                            <div className="img">
                                <span className="span1" />
                                <span className="span2">#职场素养#</span>
                                <span className="care">
                                    <span>回答:12</span>
                                    <span>关注:102</span>
                                </span>
                            </div>
                            <div className="img">
                                <span className="span1" />
                                <span className="span2">#职场素养#</span>
                                <span className="care">
                                    <span>回答:12</span>
                                    <span>关注:102</span>
                                </span>
                            </div>
                            <div className="img">
                                <span className="span1" />
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
                            <span className="hot"><b><img src="/src/images/special.png" /></b>人气行家</span>
                            <span className="all">全部行家<b><img src="/src/images/seeMore.png" /></b></span>
                        </div>
                        <div id="topic2" ref="topic2" className="content">
                            <div className="img">
                                <span className="span1" />
                                <span className="span2">#考研#</span>
                                <span className="care">
                                    <span>回答:12</span>
                                    <span>关注:101</span>
                                </span>
                            </div>
                            <div className="img">
                                <span className="span1" />
                                <span className="span2">#职场素养#</span>
                                <span className="care">
                                    <span>回答:12</span>
                                    <span>关注:101</span>
                                </span>
                            </div>
                            <div className="img">
                                <span className="span1" />
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
                            <span className="hot"><b><img src="/src/images/special.png" /></b>最新专栏</span>
                            <span className="all">全部专栏<b><img src="/src/images/seeMore.png" /></b></span>
                        </div>
                        <div id="topic3" ref="topic3" className="content" >
                            <div className="img">
                                <img src="/src/images/banner2.png" />
                                <p>#麦力克#第23期---考研那些事儿</p>
                            </div>
                            <div className="img">
                                <img src="/src/images/banner2.png" />
                                <p>#麦力克#第一期---考研那些事儿</p>
                            </div>
                            <div className="img">
                                <img src="/src/images/banner2.png" />
                                <p>#麦力克#第一期---考研那些事儿</p>
                            </div>
                        </div>
                    </div>

                </div>

                <p className="bottom">反馈建议.成为行家.问答是什么</p>

            </div>
        );

    }
}

export default ZhaoDaIndex;
