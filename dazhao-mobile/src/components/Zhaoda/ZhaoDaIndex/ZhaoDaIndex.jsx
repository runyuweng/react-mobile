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
            "currentX": 0,
            "latestDynamic":[
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
            ],
            "hotTopic":[
                {
                    "imgsrc" : "/src/images/topicImg.png",
                    "topic" : "#考研#",
                    "answer" : 12,
                    "care" : 101
                },
                {
                    "imgsrc" : "/src/images/topicImg.png",
                    "topic" : "#考研#",
                    "answer" : 12,
                    "care" : 101
                },
                {
                    "imgsrc" : "/src/images/topicImg.png",
                    "topic" : "#考研#",
                    "answer" : 12,
                    "care" : 101
                },
                {
                    "imgsrc" : "/src/images/topicImg.png",
                    "topic" : "#考研#",
                    "answer" : 12,
                    "care" : 101
                },
                {
                    "imgsrc" : "/src/images/topicImg.png",
                    "topic" : "#考研#",
                    "answer" : 12,
                    "care" : 101
                } //热门话题
            ],
            "popularityPople" : [
                {
                    "imgsrc" : "/src/images/topicImg.png",
                    "topic" : "#考研#",
                    "answer" : 12,
                    "care" : 101
                },
                {
                    "imgsrc" : "/src/images/topicImg.png",
                    "topic" : "#考研#",
                    "answer" : 12,
                    "care" : 101
                },
                {
                    "imgsrc" : "/src/images/topicImg.png",
                    "topic" : "#考研#",
                    "answer" : 12,
                    "care" : 101
                },
                {
                    "imgsrc" : "/src/images/topicImg.png",
                    "topic" : "#考研#",
                    "answer" : 12,
                    "care" : 101
                } //人气行家
            ],
            "latestZhuanlan" : [
                {
                    "imgsrc" : "/src/images/banner2.png",
                    "topic" : "#麦力克#第一期---考研那些事儿"
                },
                {
                    "imgsrc" : "/src/images/banner2.png",
                    "topic" : "#麦力克#第一期---考研那些事儿"
                },
                {
                    "imgsrc" : "/src/images/banner2.png",
                    "topic" : "#麦力克#第一期---考研那些事儿"
                } //最新专栏
            ]
        };

    }

    componentDidMount () {

        [this.refs.topic1, this.refs.topic2, this.refs.topic3].map((elem) => {

            this._touchEvent(elem);

        });

    }

    //最新动态
    fetchLatestDynamic(){

    }


    //热门话题
    fetchHotTopic(args){

    }

    //人气行家
    fetchPopularity(args){

    }

    //最新专栏
    fetchLatestZhuanlan(args){

    }

    //滑动事件
    _touchEvent (elem) {

            // 触屏开始
        elem.addEventListener("touchstart", (e) => {

            const _this = elem;
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

        const {latestDynamic , hotTopic , popularityPople , latestZhuanlan} = this.state;

        const AnswerMainList = latestDynamic.map((value, i) => <AnswerMain key={i} data={value} />);

        const hotTopicList = hotTopic.map((elem,index)=>{
            return(
                    <div className="img" key={index}>
                        <span className="span1">
                            <img src={elem.imgsrc} alt="热门话题" />
                        </span>
                        <span className="span2">{elem.topic}</span>
                        <span className="care">
                            <span>回答:{elem.answer}</span>
                            <span>关注:{elem.care}</span>
                        </span>
                    </div>
            )
        })

        const popularityPopleList = popularityPople.map((elem,index) => {
            return(
                <div className="img" key={index}>
                    <span className="span1" >
                        <img src={elem.imgsrc} alt="人气行家" />
                    </span>
                    <span className="span2">{elem.topic}</span>
                    <span className="care">
                        <span>回答:{elem.answer}</span>
                        <span>关注:{elem.care}</span>
                    </span>
                </div>
            )
        })

        const latestZhuanlanList = latestZhuanlan.map((elem,index) => {
            return(
                <div className="img" key={index}>
                    <img src={elem.imgsrc} />
                    <p>{elem.topic}</p>
                </div>
            )
        })

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
                            {hotTopicList}
                        </div>
                    </div>

                    <div className="topic topic2">
                        <div className="head">
                            <span className="hot"><b><img src="/src/images/special.png" /></b>人气行家</span>
                            <span className="all">全部行家<b><img src="/src/images/seeMore.png" /></b></span>
                        </div>
                        <div id="topic2" ref="topic2" className="content">
                            {popularityPopleList}
                        </div>
                    </div>

                    <div className="topic topic3">
                        <div className="head">
                            <span className="hot"><b><img src="/src/images/special.png" /></b>最新专栏</span>
                            <span className="all">全部专栏<b><img src="/src/images/seeMore.png" /></b></span>
                        </div>
                        <div id="topic3" ref="topic3" className="content" >
                            {latestZhuanlanList}
                        </div>
                    </div>

                </div>


                <p className="bottom">反馈建议 · 成为行家 · 问答是什么</p>

            </div>
        );

    }
}

export default ZhaoDaIndex;
