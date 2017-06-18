import React from "react";
import "./ZhaoDaToTopic.scss";
import {Link} from "react-router";
import AnswerMain from "../../MainLayout/AnswerMain/AnswerMain.jsx";
import ajax from "../../../services/ajax.js";

class ZhaoDaToTopic extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "categoryId": 1,
            "topicId": 1,
            "topicdetail": {
                "topicImg": "/src/images/pople.png",
                "topicTitle": "职业素养",
                "answer": 16,
                "care": 10,
                "isCared": false,
                "questions": [
                ]
            },
            "page": 1,
            "nomore": false,
            "moreMessage": "",
            "first":true
        };
        this.fetchQuestion = this.fetchQuestion.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

    }

    componentDidMount () {

        // this.props.showBottom();
        window.addEventListener("scroll", this.handleScroll);
        this.fetchQuestion(this.state.page);

    }

    componentWillUnmount () {

        window.removeEventListener("scroll", this.handleScroll);

    }


    handleScroll (e) {

        // Console.log("滚动高度：" + document.body.scrollTop);

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

    fetchQuestion (page) {

        !this.state.nomore

        ? ajax({"url": `/zhaoda/topic/topicinfo?tid=${this.props.params.tid}&page=${page}`}).
          then((data) => {
              console.log(data)
              if (data.code==="S01") {
                if(this.state.first){

                  const questions = this.state.topicdetail.questions;
                  var newQ = {};


                  newQ.topicTitle = data.contents.topicname;
                  newQ.answer = data.contents.questionnum;
                  newQ.care = data.contents.care;
                  newQ.topicImg = data.contents.img;
                  //newQ.topicImg = "/src/images/pople.png";
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
                    "first":false
                  },()=>{
                    console.log(this.state.topicdetail)
                  });

                }else{

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
                        "topicdetail": topicdetail,
                        "page": this.state.page + 1,
                        "nomore": false,
                        "moreMessage": ""
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
                      "moreMessage": "没有更多问题"
                  });

              } else if (data.code === "E01") {

                  this.setState({"topicdetail": {}});

              }

          }) : "";

    }

    render () {

        const { topicdetail } = this.state;

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
                    <span className="peopleLog"><img src={topicdetail.topicImg} /></span>
                    <span className="mTitl">{topicdetail.topicTitle}</span>
                    <div className="care">
                        <span>问答：<em>{topicdetail.answer}</em></span>
                        <span>关注：<em>{topicdetail.care}</em></span>
                    </div>
                    <sapn className="attention">+关注</sapn>
                </div>

                <div className="topicM">
                    <ul>
                        <li className="active">全部</li>
                        <li>精华</li>
                    </ul>
                    {questionsList}

                </div>
                <p className="fetchmore">{this.state.moreMessage}</p>
            </div>
        );

    }
}

export default ZhaoDaToTopic;
