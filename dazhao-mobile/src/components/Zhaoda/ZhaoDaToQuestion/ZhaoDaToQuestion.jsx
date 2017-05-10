import React from "react";
import "./ZhaoDaToQuestion.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import AnswerMain from "../../MainLayout/AnswerMain/AnswerMain.jsx";
import {Link} from "react-router";

class ZhaoDaToQuestion extends React.Component {


    constructor (props) {

        super(props);
        this.state = {
            "topic": "考研",
            "question": {
                "sid": 1,
                "title": "研究生和本科学历在求职过程中真的会有很大影响吗?",
                "authorAnswer": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学历还是本科学历；对于一些管理类的岗位的话，本身不是很需要学历的岗位，只要你的综合能力强，研究生还是本科神差距就不是很大。所以总的来说，还是要看你想去什么样的企业，想从事什么样的工作，然后决定读不读研或者读什么专业的研究生。",
                "authorName": "马军",
                "time": "2016年11月30日",
                "careNum": 15,
                "isCare": false,
                "authorpic": "/src/images/user.png",
                "otherAnswers": [
                    {
                        "id": 1,
                        "name": "Michal",
                        "job": "骨灰级教练",
                        "imgsrc": "/src/images/vip.png",
                        "remark": 9,
                        "agree": 14,
                        "comment": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...",
                        "collect": false
                    },
                    {
                        "id": 2,
                        "name": "Michal",
                        "job": "骨灰级教练",
                        "imgsrc": "/src/images/vip.png",
                        "remark": 9,
                        "agree": 14,
                        "comment": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...",
                        "collect": false
                    }
                ]
            },
            "stretch": false
        };

        this.stretchClick = this.stretchClick.bind(this);

    }

    stretchClick () {

        this.setState({"stretch": true});

    }

    componentDidMount () {

        this.props.showBottom();

    }

    render () {

        const {topic, question} = this.state;
        const otherAnswersList = question.otherAnswers.map((value, num) =>
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
                    <TopBar title="问题" border="boder" />
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
                        <span className="carecontent" style={{"height": !this.state.stretch ? ".8rem" : "auto"}}>
                            {question.authorAnswer}
                            {!this.state.stretch ? <span className="shade" /> : ""}
                        </span>
                        {
                            !this.state.stretch
                                ? <span className="strech" onClick={this.stretchClick}>展开查看全部<span><img src="/src/images/down.png" /></span></span> : ""
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

                <span className="answers"><em>{ question.otherAnswers.length }</em>个回答</span>

                <div className="AnswerMain">{otherAnswersList}</div>

                <div className="toQuestionFooter">
                    <Link to="/invitetoanswer">
                        <span>邀请回答</span>
                    </Link>
                    <Link to="/addanswer">
                        <span>添加回答</span>
                    </Link>
                </div>

            </div>
        );

    }
}

export default ZhaoDaToQuestion;
