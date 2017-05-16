import React, {defaultProps} from "react";
import AnswerMain from "../../MainLayout/AnswerMain/AnswerMain.jsx";
import "./ZhaoDaIndex.scss";
import ajax from "../../../services/ajax.js";
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
            ],
            "hotTopic": [
                {
                    "tid": "1",
                    "img": "/src/images/topicImg.png",
                    "tipic": "考研",
                    "question": 12,
                    "care": 3
                },
                {
                    "tid": "1",
                    "img": "/src/images/topicImg.png",
                    "tipic": "考研",
                    "question": 12,
                    "care": 3
                },
                {
                    "tid": "1",
                    "img": "/src/images/topicImg.png",
                    "tipic": "考研",
                    "question": 12,
                    "care": 3
                }
            ],
            "popularityPople": [
                {
                    "id": 1,
                    "imgsrc": "/src/images/topicImg.png",
                    "name": "Michael",
                    "position": "骨灰级猎头、WIT总裁"
                },
                {
                    "id": 2,
                    "imgsrc": "/src/images/topicImg.png",
                    "name": "Michael",
                    "position": "骨灰级猎头、WIT总裁"
                },
                {
                    "id": 3,
                    "imgsrc": "/src/images/topicImg.png",
                    "name": "Michael",
                    "position": "骨灰级猎头、WIT总裁"
                },
                {
                    "id": 4,
                    "imgsrc": "/src/images/topicImg.png",
                    "name": "Michael",
                    "position": "骨灰级猎头、WIT总裁"
                } // 人气行家
            ],
            "latestZhuanlan": [
                {
                    "tid": "2",
                    "colposter": "/src/images/zhuanlan.png",
                    "colposterbig": "/src/images/zhuanlan.png",
                    "colid": "1",
                    "coldescription": "简历，不简单！该如何写？要注意哪些地方？请听——光爸说",
                    "colname": "#光爸说# 第一期——写简历的正确姿势"
                },
                {
                    "tid": "2",
                    "colposter": "/src/images/zhuanlan.png",
                    "colposterbig": "/src/images/zhuanlan.png",
                    "colid": "1",
                    "coldescription": "简历，不简单！该如何写？要注意哪些地方？请听——光爸说",
                    "colname": "#光爸说# 第一期——写简历的正确姿势"
                },
                {
                    "tid": "2",
                    "colposter": "/src/images/zhuanlan.png",
                    "colposterbig": "/src/images/zhuanlan.png",
                    "colid": "1",
                    "coldescription": "简历，不简单！该如何写？要注意哪些地方？请听——光爸说",
                    "colname": "#光爸说# 第一期——写简历的正确姿势"
                }
            ],
            "carouselpic": [
                {
                    "id": "3",
                    "img": "/src/images/1487917069l108992947.png",
                    "description": "图片一"
                },
                {
                    "id": "3",
                    "img": "/src/images/1481979697l859459990.png",
                    "description": "图片二"
                },
                {
                    "id": "3",
                    "img": "/src/images/1481189424l698185646.png",
                    "description": "图片三"
                }
            ],
            "nowshow": 0,
            "getmore": false,
            "latestDynamicPage": 1,
            "nomore": false

        };
        this.fetchHotTopic = this.fetchHotTopic.bind(this);
        this.fetchLatestZhuanlan = this.fetchLatestZhuanlan.bind(this);
        this.fetchLatestDynamic = this.fetchLatestDynamic.bind(this);
        this.fetchPopularity = this.fetchPopularity.bind(this);
        this.fetchCarouselpic = this.fetchCarouselpic.bind(this);

    }

    componentDidMount () {

        [this.refs.topic1, this.refs.topic2, this.refs.topic3].map((elem) => {

            this._touchEvent(elem);

        });

        // 轮播
        const autoCarousel = setInterval(() => {

            let nowshow = JSON.parse(JSON.stringify(this.state)).nowshow;

            nowshow === this.state.carouselpic.length - 1
            ? nowshow = 0
            : nowshow++;

            this.setState({nowshow});

        }, 4000);

        this.setState({autoCarousel});

        this.fetchHotTopic();
        this.fetchLatestZhuanlan();
        this.fetchLatestDynamic();
        this.fetchCarouselpic();

    }

    componentWillUnmount () {

        clearInterval(this.state.autoCarousel);

    }

    // 获取轮播图片
    fetchCarouselpic () {

        ajax({"url": "/zhaoda/carouselpic"}).
        then((data) => {

            if (data.code === "S01") {

                this.setState({"carouselpic": data.contents});

            } else if (data.code === "E01") {

                this.setState({"carouselpic": this.state.carouselpic});

            }

        });

    }

    // 最新动态
    fetchLatestDynamic () {

        ajax({"url": `/zhaoda/zhaoda/boutiqueanswer?page=${this.state.latestDynamicPage}`}).
      then((data) => {


          if (data.contents.length > 0) {

              const newQ = this.state.latestDynamic;

              data.contents.map((value) => {

                  newQ.push({
                      "qid": value.question.qid,
                      "topic": "",
                      "theme": value.question.qtitle,
                      "name": value.user.nickname,
                      "imgsrc": value.user.img,
                      "remark": value.remark,
                      "agree": value.question.agree,
                      "comment": value.content,
                      "collect": value.collect
                  });
                  this.setState({
                      "latestDynamic": newQ,
                      "getmore": true
                  });

              });

          } else {

              this.setState({
                  "getmore": true,
                  "nomore": true
              });

          }

      });

    }

    // 加载更多
    getMore () {

        this.setState({
            "latestDynamicPage": parseInt(this.state.latestDynamicPage) + 1,
            "getmore": false
        }, () => {

            this.fetchLatestDynamic();

        });

    }

    // 热门话题
    fetchHotTopic () {

        ajax({"url": "/zhaoda/topic/hottopics?categoryid=-1"}).
        then((data) => {

            if (data.code === "S01") {

                // 查询成功
                const hotTopic = data.contents.slice(0, 5);

                this.setState({hotTopic});

            } else if (data.code === "E01") {

                // 如果查询出错，启用备用数据
                this.setState({"hotTopic": this.state.hotTopic});

            }

        });

    }

    // 人气行家
    fetchPopularity () {

    }

    // 最新专栏
    fetchLatestZhuanlan () {

        ajax({"url": "/zhaoda/zhuanlan/lastestzhuanlan?page=-1"}).
        then((data) => {

            if (data.code === "S01") {

                const zhuanlan = data.contents.slice(0, 5);

                this.setState({"latestZhuanlan": zhuanlan});

            } else if (date.code === "E01") {

                // 如果查询出错，启用备用数据
                this.setState({"latestZhuanlan": this.state.latestZhuanlan});

            }

        });

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

        const {latestDynamic, hotTopic, popularityPople, latestZhuanlan, carouselpic, nowshow, getmore, nomore} = this.state;


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
                <img src={"/src/images/zhuanlan.png" || elem.colposter} />
                <p>{elem.colname}</p>
            </div>
            );

        const carouselpicList = carouselpic.map((elem, index) =>
                index === nowshow
                ? <div className="item active" key={index}><img src={"/src/images/1487917069l108992947.png" || elem.img} alt={elem.description} /></div>
                : ""
            );
        const carouselOlList = carouselpic.map((elem, index) =>
                index === nowshow
                ? <li key={index} className="active" />
                : <li onClick={() => {

                    this.setState({"nowshow": index});

                }} key={index}
                  />
            );


        return (
            <div className="ZhaoDaIndex">
                <div id="show">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">

                        <ol className="carousel-indicators">{carouselOlList}</ol>

                        <div className="carousel-inner">{carouselpicList}</div>

                    </div>
                </div>
                <div id="latest">
                    <div className="title"><span><img src="/src/images/latest.png" /></span>最新动态</div>

                    {AnswerMainList}

                    {
                        nomore ? ""
                        : <div className="Formore" onClick={() => {

                            this.getMore();

                        }}
                          >{ !getmore ? <LoadingMore /> : "加载更多" }</div>
                    }
                    {nomore ? <p className="nomore">没有更多了...</p> : ""}
                </div>

                <div id="moreTopic">
                    <div className="topic topic1">
                        <div className="head">
                            <span className="hot"><b><img src="/src/images/hot.png" /></b>热门话题</span>
                            <Link to="/topic">
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
