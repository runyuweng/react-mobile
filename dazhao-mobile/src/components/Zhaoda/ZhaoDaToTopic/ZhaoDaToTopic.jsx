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
                    // {
                    //     "id": 1,
                    //     "topic": "考研",
                    //     "theme": "研究生和本科学历在求职过程中真的会有很大差别吗？",
                    //     "name": "Michal",
                    //     "job": "骨灰级教练",
                    //     "imgsrc": "/src/images/vip.png",
                    //     "remark": 9,
                    //     "agree": 14,
                    //     "comment": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...",
                    //     "collect": false
                    // },
                    // {
                    //     "id": 2,
                    //     "topic": "考研",
                    //     "theme": "研究生和本科学历在求职过程中真的会有很大差别吗？",
                    //     "name": "Michal",
                    //     "job": "骨灰级教练",
                    //     "imgsrc": "/src/images/vip.png",
                    //     "remark": 12,
                    //     "agree": 14,
                    //     "comment": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...",
                    //     "collect": false
                    // },
                    // {
                    //     "id": 3,
                    //     "topic": "考研",
                    //     "theme": "研究生和本科学历在求职过程中真的会有很大差别吗？",
                    //     "name": "Michal",
                    //     "job": "骨灰级教练",
                    //     "imgsrc": "/src/images/vip.png",
                    //     "remark": 13,
                    //     "agree": 14,
                    //     "comment": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...",
                    //     "collect": false
                    // }
                ]
            }
        };

    }

    componentDidMount () {
        this.props.showBottom();
        this.fetchQuestion();

    }

    fetchQuestion(){
      ajax({url:`/zhaoda/topic/topicinfo?tid=${this.props.params.tid}&page=1`})
      .then((data)=>{
        console.log(data);

        let newQ = {};
        newQ.topicTitle = data.contents.topicname;
        newQ.answer =  data.contents.questionnum;
        newQ.care = data.contents.care;
        // newQ.topicImg = data.contents.img;
        newQ.topicImg = '/src/images/pople.png';
        newQ.questions = [];

        data.contents.questionlist.map((value,i)=>{

          newQ.questions.push({
            uid: value.uid,
            id : value.tid,
            name : value.user.nickname,
            theme : value.qtitle,
            comment : value.qcontent,
            agree : value.agree,
            remark : value.answer,
            collect : value.collect,
            vip : value.user.vip,
          })

        })

        this.setState({topicdetail:newQ})
      })
    }

    render () {

        const {topicdetail} = this.state;
        console.log('questions',topicdetail.questions);

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

            </div>
        );

    }
}

export default ZhaoDaToTopic;
