import React from "react";
import "./ZhaoDaToQuestion.scss";
import TopBar from "../../Public/TopBar/TopBar.jsx";
import AnswerMain from "../../Public/AnswerMain/AnswerMain.jsx";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";
import Loading from "../../Public/Loading/Loading.jsx";
const PropTypes = require("prop-types");

class ZhaoDaToQuestion extends React.Component {


    constructor (props) {

        super(props);
        this.state = {
            "topic": [],
            "question": {},
            "otherAnswers": [],
            "stretch": false,
            "showshadow": true,
            "showLoading": true
        };

        this.stretchClick = this.stretchClick.bind(this);
        this.setCare = this.setCare.bind(this);
        this.setAgree = this.setAgree.bind(this);
        this.setSelected = this.setSelected.bind(this);

    }

    stretchClick () {

        this.setState({"stretch": true});

    }

    componentDidMount () {

        this.props.changeBottomState(false);

        this.fetchQuestion();

    }

    // 获取问题相关
    fetchQuestion () {

        ajax({"url": `/zhaoda/question/questioninfo?qid=${this.props.params.qid}`}).
      then((data) => {


          if (data.code === "S01") {

              const newQ = {
                  "qid": data.contents.qid,
                  "title": data.contents.qtitle,
                  "authorAnswer": data.contents.qcontent,
                  "authorName": data.contents.user.nickname,
                  "time": data.contents.date,
                  "careNum": data.contents.care || 0,
                  "isCare": data.contents.collect,
                  "authorpic": data.contents.user.img || "/src/images/user.png"
              };
              const newOtherAnswers = [];

              data.contents.answers.map((value, i) => {

                  newOtherAnswers.push({
                      "aid": value.aid,
                      "name": value.user.nickname,
                      "position": value.user.position,
                      "vip": value.user.vip,
                      "remark": value.remark,
                      "agree": value.agree,
                      "collect": value.collect,
                      "comment": value.content
                  });

              });

              const topic = [];

              data.contents.topics.map((elem) => {

                  topic.push(elem);

              });

              this.setState({
                  "question": newQ,
                  "otherAnswers": newOtherAnswers,
                  "showLoading": false,
                  topic
              }, () => {

                  const showshadow = !(newQ.authorAnswer.length < this.refs.carecontent.clientWidth / 14 * 2);

                  this.setState({showshadow});

              });

          } else if (data.code === "E01") {

          }

      });

    }

    // 问题关注
    setCare (qid) {

        ajax({"url": `/zhaoda/question/subscribequestion?qid=${qid}`}).
        then((data) => {

            if (data.code === "S01") {

            // 关注状态改变
                const question = JSON.parse(JSON.stringify(this.state)).question;

                const num = this.state.question.isCare === true ? -1 : 1;

                question.isCare = !this.state.question.isCare;
                question.careNum = this.state.question.careNum + num >= 0 ? this.state.question.careNum + num : 0;
                this.setState({question}, () => {

                    this.context.changeMessageContent("操作成功");

                });


            } else if (data.code === "E01") {

            // 出错
                this.context.changeMessageContent("操作失败请重试");

            }

        });

    }

    // 点赞
    setAgree (qid, aid, index) {

        ajax({"url": `/zhaoda/answer/dianzananswer?aid=${aid}`}).
      then((data) => {


          if (data.code === "S01") {

            // 关注状态改变
              const otherAnswers = JSON.parse(JSON.stringify(this.state)).otherAnswers;

              otherAnswers[index].agree = this.state.otherAnswers[index].agree + 1;
              this.setState({otherAnswers});


          } else if (data.code === "S04") {

            // 已经点过赞了

              this.context.changeMessageContent(data.message);

          } else if (data.code === "E01") {

            // 出错

              this.context.changeMessageContent(data.message);

          }

      });

    }

    // 回答收藏
    setSelected (aid, index) {

        ajax({"url": `/zhaoda/answer/subscribeanswer?aid=${aid}`}).
      then((data) => {


          if (data.code === "S01") {

            // 收藏状态改变
              const otherAnswers = JSON.parse(JSON.stringify(this.state)).otherAnswers;

              otherAnswers[index].collect = !this.state.otherAnswers[index].collect;
              this.setState({otherAnswers});

          } else if (data.code === "E01") {
            // 出错

          }

      });

    }

    render () {

        const {topic, question, otherAnswers, showLoading} = this.state;

        const topicList = topic.map((elem, index) =><Link to={`/totopic/${elem.tid}`}><span key={index} className="topTopic">{elem.topicname}</span></Link>
          );

        const otherAnswersList = otherAnswers.map((value, num) =>
            <article key={num}>
                <div>
                    <div className="publisher" key={num}>
                        {value.name || "匿名用户"}
                        {
                            value.vip
                                ? <span className="vip"><img src="/src/images/vip.png" /></span> : ""
                        }
                        {
                            value.position
                            ? <em>，{value.position}</em> : ""
                        }
                    </div>
                    <Link to={`response/${value.aid}/${question.title}`}>
                        <div
                            className="comment"
                            ref="input"
                            dangerouslySetInnerHTML={{"__html": value.comment}}
                        />

                    </Link>
                    <div className="more">
                        <span><b><img onClick={this.setAgree.bind(this, question.qid, value.aid, num)} src="/src/images/zan.png" /></b>赞同{value.agree}</span>
                        <Link to={`/coments/${value.aid}/${question.title}`}>
                            <span><b><img src="/src/images/comment.png" /></b>评论{value.remark}</span>
                        </Link>
                        <span onClick={this.setSelected.bind(this, value.aid, num)}><b><img src="/src/images/cang.png" /></b>{value.collect ? "已收藏" : "收藏"}</span>
                    </div>
                </div>
            </article>
            );

        return (
            <div className="ZhaoDaToQuestion">
                <header>
                    <TopBar title="问题" border="border" />
                </header>
                {showLoading ? <Loading />
                : <div>

                    <div className="question" onClick={() => {

                        { /* History.go(-1); */ }

                    }}
                    >
                        <span className="title">父话题：{topicList}</span>
                        <span className="img"><img src="/src/images/Back_Button.png" /></span>
                    </div>

                    <div className="careTopic">
                        <span className="caretitle">{question.title}</span>
                        <div className="caremain">
                            <span ref="carecontent" className="carecontent" style={{"height": this.state.showshadow ? this.state.stretch ? "auto" : ".8rem" : "auto"}}>
                                {question.authorAnswer}
                                {this.state.showshadow ? !this.state.stretch ? <span className="shade" /> : "" : ""}
                            </span>
                            {
                                this.state.showshadow
                                ? !this.state.stretch
                                    ? <span className="strech" onClick={this.stretchClick}>展开查看全部<span><img src="/src/images/down.png" /></span></span> : "" : ""
                            }
                            <div className="bottom clearfix">
                                <div className="left">
                                    <span><img src={question.authorpic} /></span>
                                    <span>{question.authorName}</span>
                                    <span>{question.time}</span>
                                </div>
                                <div className="right">
                                    <span><em>{question.careNum}</em>人关注</span>
                                    <span onClick={this.setCare.bind(this, question.qid)}>{question.isCare ? "取消关注" : "+关注"}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <span className="answers"><em>{ otherAnswers.length }</em>个回答</span>

                    <div className="AnswerMain">{otherAnswersList}</div>

                    <div className="toQuestionFooter">
                        <Link to={`/invitetoanswer/${this.props.params.qid}`} >
                            <span>邀请回答</span>
                        </Link>
                        <Link to={`/addanswer/${this.props.params.qid}`}>
                            <span>添加回答</span>
                        </Link>
                    </div>
                </div>}

            </div>
        );

    }
}
ZhaoDaToQuestion.contextTypes = {"changeMessageContent": PropTypes.func};
export default ZhaoDaToQuestion;
