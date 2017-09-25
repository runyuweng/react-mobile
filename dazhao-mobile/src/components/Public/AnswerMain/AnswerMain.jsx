import React from "react";
import "./AnswerMain.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";
const PropTypes = require("prop-types");

class AnswerMain extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            iszan: this.props.data.iszan || '',
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
            "collect": this.props.data.collect || false,
            "toquestion": this.props.toquestion || "0",
            "showPublisher": this.props.showPublisher || "1"
        };

        this.setLike = this.setLike.bind(this);

    }

    setLike (aid) {

        ajax({"url": `/zhaoda/answer/dianzananswer?aid=${aid}`}).
      then((data) => {

          if (data.code === "S01") {

              this.context.changeMessageContent("成功");
              this.setState({
                  "agree": parseInt(this.state.agree) + 1,
                  iszan: true
                });

          } else if (data.code === "S04") {

                // 点过赞了
              this.context.changeMessageContent("您已点过赞");

          } else if (data.code === "E01") {

                // 出错
              this.context.changeMessageContent("操作失败请重试");

          }

      });

    }

    setSelected (qid) {

        ajax({"url": `/zhaoda/question/subscribequestion?qid=${qid}`}).
      then((data) => {


          if (data.code === "S01") {

              // 收藏状态改变
              this.context.changeMessageContent("操作成功");
              this.setState({"collect": !this.state.collect});

          } else if (data.code === "E01") {

            // 出错
              this.context.changeMessageContent("操作失败请重试");

          }

      });

    }

    render () {

        const {iszan, qid, aid, isTopic, topic, theme, name, job, vip, comment, agree, remark, collect, toquestion, showPublisher} = this.state;

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
                    {
                      showPublisher === "1"
                      ? <div className="publisher">
                          {name}
                          {
                              vip
                                  ? <span className="vip"><img src="/src/images/vip.png" /></span> : ""
                          }
                          {
                              job
                              ? <em>，{job}</em> : ""
                          }
                      </div> : ""
                    }
                    <Link to={`/toquestion/${qid}`}>
                        <div
                            className="comment"
                            dangerouslySetInnerHTML={{"__html": comment}}
                        />
                    </Link>
                    <div className="more">
                        <span>
                            <b><img onClick={this.setLike.bind(this, qid, aid)} src={iszan?'/src/images/icon/赞.png':"/src/images/zan.png"} /></b>
                            赞同{agree}
                        </span>
                        <Link to={toquestion === "0" ? `/coments/${aid}/${theme}` : `/toquestion/${qid}`}>
                            <span><b><img src="/src/images/comment.png" /></b>评论{remark}</span>
                        </Link>
                        {
                            collect
                            ? <span onClick={this.setSelected.bind(this, qid)}><b><img src="/src/images/star.png" /></b>已收藏</span>
                            : <span onClick={this.setSelected.bind(this, qid)}><b><img src="/src/images/cang.png" /></b>收藏</span>
                        }
                    </div>
                </article>

            </div>
        );

    }
}

AnswerMain.contextTypes = {"changeMessageContent": PropTypes.func};

export default AnswerMain;
