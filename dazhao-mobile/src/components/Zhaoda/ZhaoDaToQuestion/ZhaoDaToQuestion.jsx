import React from "react";
import "./ZhaoDaToQuestion.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import AnswerMain from "../../MainLayout/AnswerMain/AnswerMain.jsx";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

class ZhaoDaToQuestion extends React.Component {


    constructor (props) {

        super(props);
        this.state = {
            "topic": "考研",
            "question": {},
            "otherAnswers": [],
            "stretch": false,
            "showshadow":true
        };

        this.stretchClick = this.stretchClick.bind(this);

    }

    stretchClick () {

        this.setState({"stretch": true});

    }

    componentDidMount () {

        this.props.showBottom();
        this.fetchQuestion();

    }

    fetchQuestion () {

        ajax({"url": `/zhaoda/question/questioninfo?qid=${this.props.params.qid}`}).
      then((data) => {

          console.log(data);


          const newQ = {
              "qid": data.contents.qid,
              "title": data.contents.qtitle,
              "authorAnswer": data.contents.qcontent,
              "authorName": data.contents.user.nickname,
              "time": data.contents.date,
              "careNum": data.contents.agree,
              "isCare": data.contents.collect,
              "authorpic": data.contents.user.img || "/src/images/user.png"
          };
          const newOtherAnswers = [];

          data.contents.answers.map((value, i) => {

              newOtherAnswers.push({
                  "aid": value.aid,
                  "name": value.user.nickname,
            // Job:aaa
                  "imgsrc": value.user.img,
                  "remark": value.remark,
                  "agree": value.agree,
                  "collect": value.collect,
                  "comment": value.content
              });

          });
          this.setState({
              "question": newQ,
              "otherAnswers": newOtherAnswers
          },()=>{
              const showshadow = (newQ.authorAnswer.length < this.refs.carecontent.clientWidth/14*2) ? false : true;
              this.setState({
                "showshadow":showshadow
              })
          });

      });

    }

    render () {

        const {topic, question, otherAnswers} = this.state;
        const otherAnswersList = otherAnswers.map((value, num) =>
            <article key={num}>
                <div>
                    <div className="publisher" key={num}>
                        {value.name}
                        <span className="vip"><img src={value.imgsrc} /></span>，
                          <span>{value.job}</span>
                    </div>
                    <Link to="/response">
                        <div className="comment">{value.comment}</div>
                    </Link>
                    <div className="more">
                        <span><b><img src="/src/images/zan.png" /></b>赞同{value.agree}</span>
                        <Link to="/coments">
                            <span><b><img src="/src/images/comment.png" /></b>评论{value.remark}</span>
                        </Link>
                        <span><b><img src="/src/images/cang.png" /></b>收藏</span>
                    </div>
                </div>
            </article>
            );

        return (
            <div className="ZhaoDaToQuestion">
                <header>
                    <TopBar title="问题" border="border" />
                </header>

                <div className="question" onClick={() => {

                    history.go(-1);

                }}
                >
                    <span className="title">父话题：<span className="topTopic">{topic}</span></span>
                    <span className="img"><img src="/src/images/Back_Button.png" /></span>
                </div>

                <div className="careTopic">
                    <span className="caretitle">{question.title}</span>
                    <div className="caremain">
                        <span ref="carecontent" className="carecontent" style={{"height": this.state.showshadow ? (this.state.stretch ? "auto" : ".8rem"):"auto"}}>
                            {question.authorAnswer}
                            {this.state.showshadow?(!this.state.stretch ? <span className="shade" /> : ""):""}
                        </span>
                        {
                            this.state.showshadow?
                            (!this.state.stretch
                                ? <span className="strech" onClick={this.stretchClick}>展开查看全部<span><img src="/src/images/down.png" /></span></span> : ""):""
                        }
                        <div className="bottom clearfix">
                            <div className="left">
                                <span><img src={question.authorpic} /></span>
                                <span>{question.authorName}</span>
                                <span>{question.time}</span>
                            </div>
                            <div className="right">
                                <span><em>{question.careNum}</em>人关注</span>
                                <span>+关注</span>
                            </div>
                        </div>
                    </div>
                </div>

                <span className="answers"><em>{ otherAnswers.length }</em>个回答</span>

                <div className="AnswerMain">{otherAnswersList}</div>

                <div className="toQuestionFooter">
                    <Link to="/invitetoanswer">
                        <span>邀请回答</span>
                    </Link>
                    <Link to={`/addanswer/${this.props.params.qid}`}>
                        <span>添加回答</span>
                    </Link>
                </div>

            </div>
        );

    }
}

export default ZhaoDaToQuestion;
