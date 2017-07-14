import React from "react";
import "./ZhaoDaComents.scss";
import TopBar from "../../Public/TopBar/TopBar.jsx";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

class ZhaoDaComents extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "comment_input": "",
            "comment": {
                "nickname": "",
                "vip": false,
                "position": "",
                "content": "",
                "comments": []
            }
        };
        this.fetchCommnets = this.fetchCommnets.bind(this);
        this.deliverComment = this.deliverComment.bind(this);
        this.fetchAnswer = this.fetchAnswer.bind(this);

    }

    componentDidMount () {

        this.props.changeBottomState(false);

        this.setState({"aid": this.props.location.query.aid}, () => {

            this.fetchAnswer(this.state.aid);
            // This.fetchCommnets(this.state.aid);

        });

    }

    // 获取回答详情
    fetchAnswer (aid) {

        ajax({"url": `/zhaoda/question/answerinfo?aid=${aid}`}).
      then((data) => {

          console.log(data);
          if (data.code === "S01") {

              const result = data.contents;
              var comment = {};

              comment.nickname = result.user.nickname;
              comment.vip = result.user.vip;
              comment.position = result.user.position;
              comment.content = result.content;
              comment.comments = [];

              this.setState({comment}, () => {

                  this.fetchCommnets(aid);

              });

          } else if (data.code === "E01") {

              var comment = {};

              comment.nickname = "";
              comment.vip = false;
              comment.position = "";
              comment.content = "";
              comment.comments = [];

              this.setState({comment});

          }

      });

    }

    // 获取回答所属评论
    fetchCommnets (aid) {

        ajax({"url": `/zhaoda/answer/getcomments?aid=${aid}`}).
      then((data) => {

          // Console.log(data);
          if (data.code === "S01") {

              const comment = JSON.parse(JSON.stringify(this.state)).comment;

              comment.comments = this.state.comment.comments.concat(data.contents);

              console.log(comment);

              this.setState({comment});

          } else if (data.code === "E01") {

              //

          }

      });

    }

    deliverComment (aid) {

        // Post请求
        if (this.state.comment_input === "") {

            this.props.changeMessageContent("不能发表空评论");

        } else {

            ajax({
                "url": "/zhaoda/answer/addcomment",
                "method": "POST",
                "data": `aid=${aid}&content=${this.state.comment_input}`
            }).
            then((data) => {

                console.log(data);

                if (data.code === "S01") {

                    this.setState({"comment_input": ""}, () => {

                        this.fetchCommnets(aid);

                    });

                } else if (data.code === "E01") {

                    // This.setState({"comment": []});

                }

            });

        }

    }

    render () {

        const {comment} = this.state;

        const commentList = comment.comments.map((value, index) => {

            console.log(value);

            return (
                <div className="commentItem" key={index}>
                    <div className="name"><span>{ value.user.nickname }</span><span className="userpic"><img src={value.user.img} alt="user" /></span></div>
                    <div className="comment">
                        {value.ccontent}
                    </div>
                </div>
            );

        });

        return (
            <div className="ZhaoDaComents">
                <header>
                    <TopBar title="评论" border="boder" />
                </header>
                <div className="comentsmain">
                    <div className="comenttop">
                        <Link to={{
                            "pathname": "/response",
                            "query": {
                                "aid": this.state.aid,
                                "qtitle": this.props.location.query.qtitle
                            }
                        }}
                        >
                            <div className="left">
                                <div className="publisher">
                                    {comment.nickname}
                                    {
                                        comment.vip
                                            ? <span className="vip"><img src="/src/images/vip.png" /></span> : ""
                                    }
                                    {
                                        comment.position
                                        ? <em>，{comment.position}</em> : ""
                                    }
                                </div>
                                <div className="specialistComment" dangerouslySetInnerHTML={{"__html": comment.content}} />
                            </div>
                            <span><img src="/src/images/Back_Button.png" alt="right" /></span>
                        </Link>
                    </div>
                    <div className="comments">
                        {commentList}
                    </div>
                </div>
                <div className="commentbox">
                    <input value={this.state.comment_input} onChange={(e) => {

                        this.setState({"comment_input": e.target.value});

                    }} type="text" placeholder="非常不错的建议"
                    />
                    <span onClick={this.deliverComment.bind(this, this.state.aid)}>发表评论</span>
                </div>
            </div>
        );

    }
}

export default ZhaoDaComents;
