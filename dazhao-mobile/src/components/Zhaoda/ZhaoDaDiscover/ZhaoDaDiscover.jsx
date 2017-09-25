import React from "react";
import AnswerMain from "../../Public/AnswerMain/AnswerMain.jsx";
import "./ZhaoDaDiscover.scss";
import Loading from "../../Public/Loading/Loading.jsx";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";
import LoadingMore from "../../Public/Loading/LoadingMore.jsx";

class ZhaoDaDiscover extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "showLoading": true,
            "hotTopics": [],
            "goodAnswer": [],
            "page": 1,
            "nomore": false,
            "getmore": false
        };
        this.fetchHotTopic = this.fetchHotTopic.bind(this);
        this.fetchGoodAnswer = this.fetchGoodAnswer.bind(this);

    }

    componentDidMount () {

        this.fetchHotTopic();
        this.fetchGoodAnswer(this.state.page);

    }

    // 精品回答
    fetchGoodAnswer () {

        ajax({
            "url": `/zhaoda/zhaoda/boutiqueanswer?page=${this.state.page}`,
            "obj": this
        }).
      then((data) => {


          if (data.code === "S01") {

          // Console.log(typeof this.state.page)
              const newQ = this.state.goodAnswer;
              const page = parseInt(this.state.page, 10) + 1;

              data.contents.map((value) => {

                  newQ.push({
                      iszan:value.iszan,
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
                      "goodAnswer": newQ,
                      "getmore": true
                  });

              });

          } else if (data.code === "S02") {

              const newQ = this.state.goodAnswer;

              data.contents.map((value) => {

                  newQ.push({
                      "qid": value.question.qid,
                      "aid": value.aid,
                      "topic": value.question.topics,
                      "theme": value.question.qtitle,
                      "name": value.user.nickname,
                      "vip": value.user.vip,
                      "remark": value.remark,
                      "agree": value.question.agree,
                      "comment": value.content,
                      "collect": value.collect,
                      "job": value.user.position
                  });

              });
              this.setState({
                  "goodAnswer": newQ,
                  "getmore": true,
                  "nomore": true
              });

          } else {

              console.log("E01");

          }

      });

    }

       // 加载更多
    getMore () {

        this.setState({
            "page": parseInt(this.state.page) + 1,
            "getmore": false
        }, () => {

            this.fetchGoodAnswer();

        });

    }


    // 热门话题
    fetchHotTopic () {

        ajax({"url": "/zhaoda/topic/hottopics?categoryid=-1"}).then((data) => {

            if (data.code === "S01") {

                // 查询成功
                const hotTopic = data.contents.slice(0, 10);

                this.setState({
                    "hotTopics": hotTopic,
                    "showLoading": false
                });

            } else if (data.code === "E01") {

                // 如果查询出错，启用备用数据
                this.setState({"hotTopics": this.state.hotTopics});

            }

        });

    }

    render () {

        const {goodAnswer, hotTopics, nomore, getmore, showLoading} = this.state;

        const AnswerMainList = goodAnswer.map((value, i) => <AnswerMain isTopic="0" key={i} data={value} />);

        const LatestDynamicList = hotTopics.map((elem, index) => <div className="Citems" key={index}>
            <Link to={`/totopic/${elem.tid}`}>
                <span className="img">
                    <img src={elem.img || "/src/images/topicImg.png" } alt="热门话题" />
                </span>
                <div className="detail">
                    <span className="span2">{elem.topicname}</span>
                    <span className="care">
                        <span>回答:{elem.questionnum}</span>
                        <span>关注:{elem.care}</span>
                    </span>
                </div>
            </Link>
        </div>);

        return (
            <div>{
            showLoading
                ? <Loading />
                : <div className="ZhaoDaDiscover">

                    <div id="dynamic">
                        <div className="title">
                            <span><img src="/src/images/latest.png" /></span>热门话题</div>
                        <div className="content">
                            <div className="citemswrap">
                                {LatestDynamicList}
                            </div>
                            <div className="Formore1">
                                <Link to="/Zhaoda/topic">更多话题</Link>
                            </div>

                        </div>
                    </div>

                    <div id="latest">
                        <div className="title"><span><img src="/src/images/latest.png" /></span>精品回答</div>

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
                </div>
        }
            </div>);

    }
}
export default ZhaoDaDiscover;
