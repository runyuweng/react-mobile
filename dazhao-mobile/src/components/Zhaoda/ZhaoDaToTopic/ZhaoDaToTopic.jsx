import React from "react";
import "./ZhaoDaToTopic.scss";
import {Link} from "react-router";
import AnswerMain from "../../Public/AnswerMain/AnswerMain.jsx";
import ajax from "../../../services/ajax.js";
import Loading from "../../Public/Loading/Loading.jsx";
const PropTypes = require("prop-types");

class ZhaoDaToTopic extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "categoryId": 1,
            "topicId": 1,
            "topicdetail": {
                "topicImg": "",
                "topicTitle": "",
                "answer": "",
                "care": "",
                "isCared": false,
                "questions": []
            },
            "page": 1,
            "nomore": false,
            "moreMessage": "",
            "first": true,
            "showLoading": true
        };
        this.fetchQuestion = this.fetchQuestion.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

    }

    componentDidMount () {

        this.props.changeBottomState(false);

        window.addEventListener("scroll", this.handleScroll);
        this.fetchQuestion(this.state.page);

    }

    componentWillUnmount () {

        window.removeEventListener("scroll", this.handleScroll);

    }


    handleScroll (e) {

        const scrollTop = document.body.scrollTop;
        const innerHeight = window.innerHeight;
        const docHeight = document.body.scrollHeight;

        scrollTop === docHeight - innerHeight
        ? (() => {

            this.setState({"moreMessage": this.state.nomore ? "没有更多回答" : "正在加载中"}, () => {

                this.fetchQuestion(this.state.page);

            });

        })() : "";

    }

    setCare (tid) {

        ajax({"url": `/zhaoda/topic/subscribetopic?topicid=${tid}`}).
      then((data) => {

          if (data.code === "S01") {

              const topicdetail = JSON.parse(JSON.stringify(this.state)).topicdetail;

              topicdetail.isCared = !this.state.topicdetail.isCared;

              this.setState({topicdetail}, () => {

                  this.context.changeMessageContent("操作成功");

              });

          } else {

              this.context.changeMessageContent("操作失败请重试");

          }

      });

    }

    fetchQuestion (page) {

        !this.state.nomore

        ? ajax({"url": `/zhaoda/topic/topicinfo?tid=${this.props.params.tid}&page=${page}`}).
          then((data) => {

              console.log(data);

              if (data.code === "S01") {

                  if (this.state.first) {

                      const questions = this.state.topicdetail.questions;
                      const newQ = {};


                      newQ.topicTitle = data.contents.topicname;
                      newQ.answer = data.contents.questionnum;
                      newQ.care = data.contents.care;
                      newQ.isCared = data.contents.isguanzhu;
                      newQ.topicImg = data.contents.img;
                  // NewQ.topicImg = "/src/images/pople.png";
                      newQ.questions = [];

                      newQ.questions.concat(questions);

                      data.contents.questionlist.map((value, i) => {

                          newQ.questions.push({
                              "qid": value.qid,
                              "id": value.tid,
                              "name": value.user.nickname,
                              "theme": value.qtitle,
                              "comment": value.qcontent,
                              "agree": value.agree,
                              "remark": value.answer,
                              "collect": value.collect,
                              "vip": value.user.vip
                          });

                      });

                      this.setState({
                          "topicdetail": newQ,
                          "page": this.state.page + 1,
                          "moreMessage": "",
                          "first": false,
                          "showLoading": false
                      });

                  } else {

                      const topicdetail = JSON.parse(JSON.stringify(this.state)).topicdetail;

                      data.contents.questionlist.map((value, i) => {

                          topicdetail.questions.push({
                              "qid": value.qid,
                              "id": value.tid,
                              "name": value.user.nickname,
                              "theme": value.qtitle,
                              "comment": value.qcontent,
                              "agree": value.agree,
                              "remark": value.answer,
                              "collect": value.collect,
                              "vip": value.user.vip
                          });

                      });


                      this.setState({
                          topicdetail,
                          "page": this.state.page + 1,
                          "nomore": false,
                          "moreMessage": "",
                          "showLoading": false
                      });

                  }

              } else if (data.code === "S02") {

                // 没有更多
                  const topicdetail = JSON.parse(JSON.stringify(this.state)).topicdetail;

                  data.contents.questionlist.map((value, i) => {

                      topicdetail.questions.push({
                          "qid": value.qid,
                          "id": value.tid,
                          "name": value.user.nickname,
                          "theme": value.qtitle,
                          "comment": value.qcontent,
                          "agree": value.agree,
                          "remark": value.answer,
                          "collect": value.collect,
                          "vip": value.user.vip
                      });

                  });


                  this.setState({
                      topicdetail,
                      "nomore": true,
                      "moreMessage": "没有更多问题",
                      "showLoading": false
                  });

              } else if (data.code === "E01") {

                  this.setState({"topicdetail": {}});

              }

          }) : "";

    }

    render () {

        const {topicdetail, showLoading} = this.state;

        const questionsList = topicdetail.questions.map((value, i) =>
            <AnswerMain isTopic="0" key={i} data={value} />
        );


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
                    <span className="peopleLog">{showLoading ? "" : <img src={topicdetail.topicImg} />}</span>
                    <span className="mTitl">{showLoading ? <div className="block" /> : topicdetail.topicTitle}</span>
                    <div className="care">
                        {showLoading ? <div className="block" /> : <div>
                            <span>问答：<em>{topicdetail.answer || 0}</em></span>
                            <span>关注：<em>{topicdetail.care || 0}</em></span>
                        </div>}
                    </div>
                    <sapn onClick={this.setCare.bind(this, this.props.params.tid)} className="attention">{topicdetail.isCared ? "已关注" : "+关注"}</sapn>
                </div>

                <div className="topicM">
                    <ul>
                        <li className="active">全部</li>
                        <li>精华</li>
                    </ul>
                    {showLoading ? <Loading /> : questionsList}

                </div>
                <p className="fetchmore">{this.state.moreMessage}</p>
            </div>
        );

    }
}

ZhaoDaToTopic.contextTypes = {"changeMessageContent": PropTypes.object};
export default ZhaoDaToTopic;
