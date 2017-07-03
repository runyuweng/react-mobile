import React from "react";
import "./AnswerMain.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

class AnswerMain extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "qid": this.props.data.qid || "",
            "aid": this.props.data.aid || "",
            "isTopic": this.props.isTopic || "1",
            "topic": this.props.data.topic || [],
            "theme": this.props.data.theme || "",
            "name": this.props.data.name || "",
            "job": this.props.data.job || "",
            "vip": this.props.data.vip || false,
            "comment": this.props.data.comment || "",
            "agree": this.props.data.agree || "0",
            "remark": this.props.data.remark || "0",
            "collect": this.props.data.collect || false
        };

        this.setLike = this.setLike.bind(this);

    }

    setLike (qid, aid) {

        ajax({"url": `/zhaoda/answer/dianzananswer?aid=${aid}`}).
      then((data) => {

          if (data.code === "S01") {

              this.setState({"agree": this.state.agree + 1});

          } else if (data.code === "S04") {
                // 点过赞了
          } else if (data.code === "E01") {
                // 出错
          }

      });

    }

    render () {

        const {qid, aid, isTopic, topic, theme, name, job, vip, comment, agree, remark, collect} = this.state;

        const topicsList = topic.map((value, i) =>
                i === 0 ? value.topicname : `，${value.topicname}`
            );

        return (
            <div className="AnswerMain">
                <article>
                    {isTopic === "1" ? <span className="topic">话题：<i>{topicsList}</i></span> : ""}
                    <Link to={`/toquestion/${qid}`}>
                        <p className="theme">{theme}</p>
                    </Link>
                    <div className="publisher">
                        {name}
                        {
                            vip
                                ? <span className="vip"><img src="/src/images/vip.png" /></span> : ""
                        }
                        {
                            job
                            ? <em>，{job}</em> : ""
                        }
                    </div>
                    <Link to={`/toquestion/${qid}`}>
                        <div className="comment">{comment}</div>
                    </Link>
                    <div className="more">
                        <span><b><img onClick={this.setLike.bind(this, qid, aid)} src="/src/images/zan.png" /></b>赞同{agree}</span>
                        <Link to={{
                                "pathname": "/coments",
                                "query": {"aid": aid}
                            }}
                            >
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
