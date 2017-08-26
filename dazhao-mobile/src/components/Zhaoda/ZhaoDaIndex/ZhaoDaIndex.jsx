import React, {defaultProps} from "react";
import AnswerMain from "../../Public/AnswerMain/AnswerMain.jsx";
import "./ZhaoDaIndex.scss";
import ajax from "../../../services/ajax.js";
import {Link} from "react-router";
import LoadingMore from "../../Public/Loading/LoadingMore.jsx";
import LoadingBlock from "../../Public/Loading/LoadingBlock.jsx";
// Const PropTypes = require("prop-types");

class ZhaoDaIndex extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "pressDownX": 0, // 鼠标按下的位置
            "nowX": 0, // 鼠标移动后的位置
            "delateX": 0, // 移动的距离
            "currentX": 0,
            "latestDynamic": [],
            "hotTopic": [],
            "popularityPople": [],
            "latestZhuanlan": [],
            "carouselpic": [],
            "nowshow": 0,
            "getmore": false,
            "latestDynamicPage": 1,
            "nomore": false,
            "lock": false,
            "loading1": true,
            "loading2": true,
            "loading3": true

        };

        this.fetchHotTopic = this.fetchHotTopic.bind(this);
        this.fetchLatestZhuanlan = this.fetchLatestZhuanlan.bind(this);
        this.fetchLatestDynamic = this.fetchLatestDynamic.bind(this);
        this.fetchPopularity = this.fetchPopularity.bind(this);
        this.fetchCarouselpic = this.fetchCarouselpic.bind(this);
        this.showMessge = this.showMessge.bind(this);

    }

    componentDidMount () {

        // Console.log(this.context)

        [this.refs.topic1].map((elem) => {

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
        this.fetchPopularity();

    }

    componentWillUnmount () {

        this.setState({"lock": true});

        clearInterval(this.state.autoCarousel);

    }

    // 获取轮播图片
    fetchCarouselpic () {

        ajax({
            "url": "/zhaoda/carouselpic",
            "obj": this
        }).
        then((data) => {

            if (!this.state.lock) {

                if (data.code === "S01") {

                    this.setState({"carouselpic": data.contents});

                } else if (data.code === "E01") {

                    this.setState({"carouselpic": this.state.carouselpic});

                }

            }

        });

    }

    // 最新动态
    fetchLatestDynamic () {

        ajax({
            "url": `/zhaoda/zhaoda/boutiqueanswer?page=${this.state.latestDynamicPage}`,
            "obj": this
        }).
      then((data) => {


          if (!this.state.lock) {

              if (data.contents.length > 0) {

                  const newQ = this.state.latestDynamic;

                  data.contents.map((value) => {

                      newQ.push({
                          'iszan': value.iszan,
                          "qid": value.question.qid,
                          "aid": value.aid,
                          "topic": value.question.topics,
                          "theme": value.question.qtitle,
                          "name": value.user.nickname,
                          "vip": value.user.vip,
                          "remark": value.remark,
                          "agree": value.agree,
                          "comment": value.content,
                          "collect": value.collect,
                          "job": value.user.position
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

        ajax({
            "url": "/zhaoda/topic/hottopics?categoryid=-1",
            "obj": this
        }).
        then((data) => {

            if (!this.state.lock) {

                if (data.code === "S01") {

                // 查询成功
                    const hotTopic = data.contents.slice(0, 5);

                    this.setState({
                        hotTopic,
                        "loading1": false
                    });

                } else if (data.code === "E01") {

                // 如果查询出错，启用备用数据
                    this.setState({"hotTopic": this.state.hotTopic});

                }

            }

        });

    }

    // 人气行家
    fetchPopularity () {

        ajax({
            "url": "/zhaoda/user/hotexpert",
            "obj": this
        }).
        then((data) => {

            if (!this.state.lock) {

                if (data.code === "S01") {

                    // 查询成功
                    const popularityPople = data.contents;

                    this.setState({
                        popularityPople,
                        "loading2": false
                    });

                } else if (data.code === "E01") {

                // 如果查询出错，启用备用数据
                    this.setState({"popularityPople": []});

                }

            }

        });

    }

    // 最新专栏
    fetchLatestZhuanlan () {

        ajax({
            "url": "/zhaoda/zhuanlan/lastestzhuanlan?page=-1",
            "obj": this
        }).
        then((data) => {

            if (!this.state.lock) {

                if (data.code === "S01") {

                    const zhuanlan = data.contents.slice(0, 5);

                    this.setState({
                        "latestZhuanlan": zhuanlan,
                        "loading3": false
                    });

                } else if (data.code === "E01") {

                    // 如果查询出错，启用备用数据
                    this.setState({"latestZhuanlan": this.state.latestZhuanlan});

                }

            }

        });

    }

    // 滑动事件
    _touchEvent (elem) {

            // 触屏开始
        elem.addEventListener("touchstart", (e) => {

            // E.preventDefault();
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

    // 提示信息
    showMessge () {

        // Console.log(this.context.user)
        this.context.myProps.changeMessageContent("功能未开放");

    }

    render () {

        const {latestDynamic, hotTopic, popularityPople, latestZhuanlan, carouselpic, nowshow, getmore, nomore, loading1, loading2, loading3} = this.state;
        console.log(latestDynamic)
        const AnswerMainList = latestDynamic.map((value, i) => <AnswerMain showPublisher="0" key={i} data={value} />);

        const hotTopicList = hotTopic.map((elem, index) =>
            <div className="img" key={index}>
                <Link to={`/totopic/${elem.tid}`}>
                    <span className="span1">
                        <img src={elem.img || "/src/images/topicImg.png"} alt="热门话题" />
                    </span>
                    <span className="span2">{elem.topicname}</span>
                    <span className="care">
                        <span>回答:{elem.questionnum}</span>
                        <span>关注:{elem.care}</span>
                    </span>
                </Link>
            </div>
            );

        const popularityPopleList = popularityPople.map((elem, index) =>
            <div onClick={() => {

                this.showMessge();

            }} className="img" key={index}
            >
                <span className="span1" >
                    <img src={elem.img} alt="人气行家" />
                </span>
                <span className="span2">{elem.nickname}</span>
                <span className="care">
                    {elem.label}
                </span>
            </div>
            );

        const latestZhuanlanList = latestZhuanlan.map((elem, index) =>
            <div className="img" key={index}>
                <Link to={`tofeature?colid=${elem.colid}`}>
                    <img src={"/src/images/zhuanlan.png" || elem.colposter} />
                    <p>{elem.colname}</p>
                </Link>
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
                            <Link to="/Zhaoda/topic">
                                <span className="all">全部话题<b><img src="/src/images/seeMore.png" /></b></span>
                            </Link>
                        </div>
                        <div id="topic1" ref="topic1" className="content">
                            {loading1 ? <LoadingBlock /> : hotTopicList}
                        </div>
                    </div>

                </div>


                <p className="bottom">反馈建议 · 成为行家 · 问答是什么</p>

            </div>
        );

    }
}

ZhaoDaIndex.contextTypes = {"myProps": React.PropTypes.object};

export default ZhaoDaIndex;
