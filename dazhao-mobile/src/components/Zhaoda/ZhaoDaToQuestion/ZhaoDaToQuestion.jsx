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
            "showshadow": true
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
                  "position": value.user.position,
                  "vip": value.user.vip,
                  "remark": value.remark,
                  "agree": value.agree,
                  "collect": value.collect,
                  "comment": value.content
              });

          });
          this.setState({
              "question": newQ,
              "otherAnswers": newOtherAnswers
          }, () => {

              const showshadow = !(newQ.authorAnswer.length < this.refs.carecontent.clientWidth / 14 * 2);

              this.setState({showshadow});

          });

      });

    }

    setCare(qid){
      ajax({"url": `/zhaoda/carequestion?qid=${qid}`}).
      then((data) => {
          if (data.code==="S01") {
            //关注状态改变
            var question = JSON.parse(JSON.stringify(this.state)).question;
            question.isCare = !this.state.question.isCare;
            this.setState({
              "question":question
            })


          }else if (data.code==="E01") {
            //出错
          }
      })
    }

    setAgree(qid,aid,index){
      ajax({"url": `/zhaoda/setLike?qid=${qid}&aid=${aid}`}).
      then((data) => {
          if (data.code==="S01") {
            //关注状态改变
            var otherAnswers = JSON.parse(JSON.stringify(this.state)).otherAnswers;
            otherAnswers[index].agree = this.state.otherAnswers[index].agree+1;
            this.setState({
              "otherAnswers":otherAnswers
            })


          }else if (data.code==="E01") {
            //出错
          }
      })
    }

    setSelected(qid,aid,index){
        
      ajax({"url": `/zhaoda/selecteanswer?qid=${qid}&aid=${aid}`}).
      then((data) => {
          if (data.code==="S01") {
            //收藏状态改变
            var otherAnswers = JSON.parse(JSON.stringify(this.state)).otherAnswers;
            otherAnswers[index].collect = !this.state.otherAnswers[index].collect;
            this.setState({
              "otherAnswers":otherAnswers
            })

          }else if (data.code==="E01") {
            //出错
            return;
          }
      })
    }

    render () {

        const {topic, question, otherAnswers} = this.state;
        console.log(otherAnswers)
        const otherAnswersList = otherAnswers.map((value, num) =>
            <article key={num}>
                <div>
                    <div className="publisher" key={num}>
                        {value.name}
                        {
                            value.vip
                                ? <span className="vip"><img src="/src/images/vip.png" /></span> : ""
                        }
                        {
                            value.position
                            ? <em>，{value.position}</em> : ""
                        }
                    </div>
                    <Link to="/response">
                        <div
                            contentEditable
                            className="comment"
                            ref="input"
                            dangerouslySetInnerHTML={{"__html": value.comment}}
                        />

                    </Link>
                    <div className="more">
                        <span><b><img onClick={this.setAgree.bind(this,question.qid,value.aid,num)} src="/src/images/zan.png" /></b>赞同{value.agree}</span>
                        <Link to={{
                          "pathname":"/coments",
                          "query":{
                            "aid":value.aid
                          }
                        }}>
                            <span><b><img src="/src/images/comment.png" /></b>评论{value.remark}</span>
                        </Link>
                        <span onClick={this.setSelected.bind(this,question.qid,value.aid, num)}><b><img src="/src/images/cang.png" /></b>收藏</span>
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
                                <span onClick={this.setCare.bind(this,question.qid)}>+关注</span>
                            </div>
                        </div>
                    </div>
                </div>

                <span className="answers"><em>{ otherAnswers.length }</em>个回答</span>

                <div className="AnswerMain">{otherAnswersList}</div>

                <div className="toQuestionFooter">
                    <Link to={{
                      "pathname":"/invitetoanswer",
                      "query":{"topic":topic}
                    }}>
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
