import React from "react";
import "./ZhaoDaResponse.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import {Link} from "react-router";

class ZhaoDaResponse extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "questionId" : 1,
            "answerId" : 1,
            "title" : "研究生和本科学历在求职过程中真的会有很大影响吗？",
            "answerdetail":{
                "imgsrc" : "/src/images/user.png",
                "viplog" : "/src/images/vip.png",
                "name": "Michal",
                "position" : "骨灰级教练，WIT Advisory Group 总裁",
                "answer": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学历还是本科学历；对于一些管理类的岗位的话，本身不是很需要学历的岗位，只要你的综合能力强，研究生还是本科神差距就不是很大。所以总的来说，还是要看你想去什么样的企业，想从事什么样的工作，然后决定读不读研或者读什么专业的研究生。",
                "time": "2017-1-12"
            }
        }

    }

    componentDidMount () {

        this.props.showBottom();

    }

    render () {

        const { title, answerdetail } = this.state;

        return (
            <div className="ZhaoDaResponse">
                <header>
                    <TopBar title="回答" border="boder" />
                </header>
                <div className="question">
                    <span className="title">{title}</span>
                    <Link to="/toquestion">
                        <span className="img"><img src="/src/images/Back_Button.png" /></span>
                    </Link>
                </div>
                <div className="comment">
                    <div className="author">
                        <span><img src={answerdetail.imgsrc} /></span>
                        <em>{answerdetail.name}</em>
                        <span><img src={answerdetail.viplog} /></span>
                        <em>，{answerdetail.position}</em>
                    </div>
                    <p>{answerdetail.answer}</p>
                    <time>{answerdetail.time}</time>
                </div>
                <div className="blank" />

            </div>
        );

    }
}

export default ZhaoDaResponse;
