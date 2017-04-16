import React from "react";
import "./AnswerMain.scss";
import {Link} from "react-router";


class AnswerMain extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "topic": this.props.data.topic || "",
            "theme": this.props.data.theme || "",
            "coach": this.props.data.coach || "",
            "imgsrc": this.props.data.imagesrc || "/src/images/vip.png",
            "comment": this.props.data.comment || "",
            "agree": this.props.data.agree || "0",
            "remark": this.props.data.remark || "0",
            "collect": this.props.data.collect || false
        };

    }
    render () {

        const {topic, theme, coach, imgsrc, comment, agree, remark, collect} = this.state;


        return (
            <div className="AnswerMain">
                <article>
                    <span className="topic">话题：<i>{topic}</i></span>
                    <p className="theme">{theme}</p>
                    <div className="publisher">
                        {coach}
                        <span className="vip"><img src={imgsrc} /></span>，
              <span>骨灰级教练</span>
                    </div>
                    <div className="comment">{comment}</div>
                    <div className="more">
                        <span><b><img src="/src/images/zan.png" /></b>赞同{agree}</span>
                        <span><b><img src="/src/images/comment.png" /></b>评论{remark}</span>
                        <span><b><img src="/src/images/cang.png" /></b>收藏</span>
                    </div>
                </article>

            </div>
        );

    }
}
export default AnswerMain;
