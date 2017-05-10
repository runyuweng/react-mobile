import React from "react";
import "./AnswerMain.scss";
import {Link} from "react-router";

class AnswerMain extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "qid":this.props.data.qid||'',
            "isTopic": this.props.isTopic || "1",
            "topic": this.props.data.topic || "",
            "theme": this.props.data.theme || "",
            "name": this.props.data.name || "",
            "job": this.props.data.job || "",
            "imgsrc": this.props.data.imagesrc || "/src/images/vip.png",
            "comment": this.props.data.comment || "",
            "agree": this.props.data.agree || "0",
            "remark": this.props.data.remark || "0",
            "collect": this.props.data.collect || false
        };


    }

    render () {

        const {qid ,isTopic, topic, theme, name, job, imgsrc, comment, agree, remark, collect} = this.state;
        console.log('qid',qid);

        return (
            <div className="AnswerMain">
                <article>
                    {isTopic === "1" ? <span className="topic">话题：<i>{topic}</i></span> : ""}
                    <Link to={`/toquestion/${qid}`}>
                        <p className="theme">{theme}</p>
                    </Link>
                    <div className="publisher">
                        {name}
                        <span className="vip"><img src={imgsrc} /></span>，
                        <span>{job}</span>
                    </div>
                    <Link to={`/toquestion/${qid}`}>
                        <div className="comment">{comment}</div>
                    </Link>
                    <div className="more">
                        <span><b><img src="/src/images/zan.png" /></b>赞同{agree}</span>
                        <Link to="/coments">
                            <span><b><img src="/src/images/comment.png" /></b>评论{remark}</span>
                        </Link>
                        <span><b><img src="/src/images/cang.png" /></b>收藏</span>
                    </div>
                </article>

            </div>
        );

    }
}
export default AnswerMain;
