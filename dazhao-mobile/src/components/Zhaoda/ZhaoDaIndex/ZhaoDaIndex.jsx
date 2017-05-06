import React, {defaultProps} from "react";
import AnswerMain from "../../MainLayout/AnswerMain/AnswerMain.jsx";
import "./ZhaoDaIndex.scss";
import ajax from '../../../services/ajax.js';
import {Link} from "react-router";
import LoadingMore from "../../MainLayout/Loading/LoadingMore.jsx";

class ZhaoDaIndex extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "pressDownX": 0, // 鼠标按下的位置
            "nowX": 0, // 鼠标移动后的位置
            "delateX": 0, // 移动的距离
            "currentX": 0,
            "latestDynamic": [
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
            "hotTopic": [
                {
                    "tid":"1",
                    "img":"/src/images/topicImg.png",
                    "tipic":"考研",
                    "question":12,
                    "care":3
                },
                {
                    "tid":"1",
                    "img":"/src/images/topicImg.png",
                    "tipic":"考研",
                    "question":12,
                    "care":3
                },
                {
                    "tid":"1",
                    "img":"/src/images/topicImg.png",
                    "tipic":"考研",
                    "question":12,
                    "care":3
                }
            ],
            "popularityPople": [
                {
                    "id":1,
                    "imgsrc": "/src/images/topicImg.png",
                    "name": "Michael",
                    "position" : "骨灰级猎头、WIT总裁"
                },
                {
                    "id":2,
                    "imgsrc": "/src/images/topicImg.png",
                    "name": "Michael",
                    "position" : "骨灰级猎头、WIT总裁"
                },
                {
                    "id":3,
                    "imgsrc": "/src/images/topicImg.png",
                    "name": "Michael",
                    "position" : "骨灰级猎头、WIT总裁"
                },
                {
                    "id":4,
                    "imgsrc": "/src/images/topicImg.png",
                    "name": "Michael",
                    "position" : "骨灰级猎头、WIT总裁"
                } // 人气行家
            ],
            "latestZhuanlan": [
                {
                    "tid":"2",
                    "colposter":"/src/images/zhuanlan.png",
                    "colposterbig":"/src/images/zhuanlan.png",
                    "colid":"1",
                    "coldescription":"简历，不简单！该如何写？要注意哪些地方？请听——光爸说",
                    "colname":"#光爸说# 第一期——写简历的正确姿势"
                },
                {
                    "tid":"2",
                    "colposter":"/src/images/zhuanlan.png",
                    "colposterbig":"/src/images/zhuanlan.png",
                    "colid":"1",
                    "coldescription":"简历，不简单！该如何写？要注意哪些地方？请听——光爸说",
                    "colname":"#光爸说# 第一期——写简历的正确姿势"
                },
                {
                    "tid":"2",
                    "colposter":"/src/images/zhuanlan.png",
                    "colposterbig":"/src/images/zhuanlan.png",
                    "colid":"1",
                    "coldescription":"简历，不简单！该如何写？要注意哪些地方？请听——光爸说",
                    "colname":"#光爸说# 第一期——写简历的正确姿势"
                }
            ],
            "carouselpic":[
                {
                    id:1,
                    img:"/src/images/banner1.jpg",
                    picdescription:"图片一"
                },
                {
                    id:2,
                    img:"/src/images/banner2.png",
                    picdescription:"图片二"
                },
                {
                    id:3,
                    img:"/src/images/banner3.png",
                    picdescription:"图片三"
                }
            ],
            "nowshow": 0,
            "getmore": false,
            "latestDynamicPage": 1

        };
        this.fetchHotTopic = this.fetchHotTopic.bind(this);
        this.fetchLatestZhuanlan = this.fetchLatestZhuanlan.bind(this);
        this.fetchLatestDynamic = this.fetchLatestDynamic.bind(this);
        this.fetchPopularity = this.fetchPopularity.bind(this);

    }

    componentDidMount () {

        [this.refs.topic1, this.refs.topic2, this.refs.topic3].map((elem) => {

            this._touchEvent(elem);

        });

        //轮播
        const autoCarousel = setInterval(()=>{
            let nowshow = JSON.parse(JSON.stringify(this.state)).nowshow;

            nowshow===this.state.carouselpic.length-1 ?
            nowshow=0 :
            nowshow++

            this.setState({
                "nowshow": nowshow
            })

        },4000);

        this.setState({autoCarousel});

        this.fetchHotTopic();
        this.fetchLatestZhuanlan();
    }

    componentWillUnmount() {
        clearInterval(this.state.autoCarousel);
    }

    //获取轮播图片
    fetchCarouselpic(){
        ajax({"url":'/zhaoda/carouselpic'})
        .then((data)=>{
            if (data.code === "S01") {

            }
            else if (data.code === "E01"){
                
            }
        })
    }

    // 最新动态
    fetchLatestDynamic () {

    }

    //加载更多
    getMore(){

    }

    // 热门话题
    fetchHotTopic () {
        ajax({"url" : '/zhaoda/topic/hottopics?categoryid=-1'})
        .then((data)=>{
            if (data.code === "S01") {
                //查询成功
                const hotTopic = data.contents.slice(0,5);
                this.setState({
                    "hotTopic": hotTopic
                })
            }
            else if (data.code === "E01"){
                //如果查询出错，启用备用数据
                this.setState({
                    "hotTopic": this.state.hotTopic
                })
            }
        })
    }

    // 人气行家
    fetchPopularity () {

    }

    // 最新专栏
    fetchLatestZhuanlan () {
        ajax({"url" : '/zhaoda/zhuanlan/lastestzhuanlan?page=-1'})
        .then((data)=>{
            if (data.code === "S01") {
                const zhuanlan = data.contents.slice(0,5);
                this.setState({
                    "latestZhuanlan": zhuanlan
                })
            }
            else if (date.code === "E01"){
                //如果查询出错，启用备用数据
                this.setState({
                    "latestZhuanlan": this.state.latestZhuanlan
                })
            }
        })
    }

    // 滑动事件
    _touchEvent (elem) {

            // 触屏开始
        elem.addEventListener("touchstart", (e) => {

            e.preventDefault();
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
            _this.addEventListener("touchmove", (e) => {

                e.preventDefault();
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
            _this.addEventListener("touchend", () => {

                e.preventDefault();
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

        const {latestDynamic, hotTopic, popularityPople, latestZhuanlan, carouselpic, nowshow, getmore} = this.state;


        const AnswerMainList = latestDynamic.map((value, i) => <AnswerMain key={i} data={value} />);

        const hotTopicList = hotTopic.map((elem, index) =>
            <div className="img" key={index}>
                <span className="span1">
                    <img src={"/src/images/topicImg.png" || elem.img} alt="热门话题" />
                </span>
                <span className="span2">{elem.tipic}</span>
                <span className="care">
                    <span>回答:{elem.question}</span>
                    <span>关注:{elem.care}</span>
                </span>
            </div>
            );

        const popularityPopleList = popularityPople.map((elem, index) =>
            <div className="img" key={index}>
                <span className="span1" >
                    <img src={elem.imgsrc} alt="人气行家" />
                </span>
                <span className="span2">{elem.name}</span>
                <span className="care">
                    {elem.position}
                </span>
            </div>
            );

        const latestZhuanlanList = latestZhuanlan.map((elem, index) =>
            <div className="img" key={index}>
                <img src={ "/src/images/zhuanlan.png" || elem.colposter } />
                <p>{elem.colname}</p>
            </div>
            );

        const carouselpicList = carouselpic.map((elem,index)=>{
            return(
                index === nowshow ?
                <div className="item active" key={index}><img src={elem.img} alt={elem.picdescription} /></div>:
                ""
            )
        });
        const carouselOlList = carouselpic.map((elem,index)=>{
            return(
                index === nowshow ?
                <li key={index} className="active" /> : 
                <li onClick={()=>{
                    this.setState({
                        "nowshow":index
                    })
                }} key={index} />
            )
        });
        return (
            <div className="ZhaoDaIndex">
                <div id="show">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">

                        <ol className="carousel-indicators">{carouselOlList}</ol>

                        <div className="carousel-inner">{carouselpicList}</div>

                    </div>
                </div>
                <div id="latest">
                    <div className="title"><span><img src="/src/images/latest.png" /></span>最新动态
                </div>

                    {AnswerMainList}

                    <div className="Formore" onClick={this.getMore}>{ !getmore ? <LoadingMore /> : "加载更多" }</div>
                </div>

                <div id="moreTopic">
                    <div className="topic topic1">
                        <div className="head">
                            <span className="hot"><b><img src="/src/images/hot.png" /></b>热门话题</span>
                            <Link to="/Zhaoda/discover">
                                <span className="all">全部话题<b /><img src="/src/images/seeMore.png" /></span>
                            </Link>
                        </div>
                        <div id="topic1" ref="topic1" className="content">
                            {hotTopicList}
                        </div>
                    </div>

                    <div className="topic topic2">
                        <div className="head">
                            <span className="hot"><b><img src="/src/images/special.png" /></b>人气行家</span>
                            <Link to="">
                                <span className="all">全部行家<b><img src="/src/images/seeMore.png" /></b></span>
                            </Link>
                        </div>
                        <div id="topic2" ref="topic2" className="content">
                            {popularityPopleList}
                        </div>
                    </div>

                    <div className="topic topic3">
                        <div className="head">
                            <span className="hot"><b><img src="/src/images/special.png" /></b>最新专栏</span>
                            <Link to="/Zhaoda/feature">
                                <span className="all">全部专栏<b><img src="/src/images/seeMore.png" /></b></span>
                            </Link>
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
