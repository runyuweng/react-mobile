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
                "id": 1,
                "name": "Michael",
                "vip": true,
                "job": "骨灰级教练",
                "answer_content": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学",
                "comments": [
                    {
                        "sid": 1,
                        "commentator_name": "李华",
                        "img": "/src/images/pople.png",
                        "comment_content": "谢谢老师的指点。谢谢老师的指点。谢谢老师的指点。谢谢老师的指点。谢谢老师的指点。"
                    },
                    {
                        "sid": 1,
                        "commentator_name": "李华",
                        "img": "/src/images/pople.png",
                        "comment_content": "谢谢老师的指点。谢谢老师的指点。谢谢老师的指点。谢谢老师的指点。谢谢老师的指点。"
                    },
                    {
                        "sid": 1,
                        "commentator_name": "李华",
                        "img": "/src/images/pople.png",
                        "comment_content": "谢谢老师的指点。谢谢老师的指点。谢谢老师的指点。谢谢老师的指点。谢谢老师的指点。"
                    }
                ]
            }
        };
        this.fetchCommnets = this.fetchCommnets.bind(this);
        this.deliverComment = this.deliverComment.bind(this);

    }

    componentDidMount () {

        this.props.changeBottomState(false);

        this.setState({"aid": this.props.location.query.aid}, () => {

            this.fetchCommnets(this.state.aid);

        });

    }

    fetchCommnets (aid) {

        ajax({"url": `/zhaoda/answer/getcomments?aid=1${aid}`}).
      then((data) => {
            console.log(data)
          if (data.code === "S01") {

              const comment = data.contents;

              this.setState({comment});

          } else if (data.code === "E01") {

            this.setState({
                "comment": {
                    "comments":[]
                }
            });

          }

      });

    }

    deliverComment (aid) {

        // Post请求
        if (this.state.comment_input === "") {

            this.props.changeMessageContent("不能发表空评论");

        } else {

            ajax({
                "url": "/zhaoda/delivercomment",
                "method": "POST",
                "data": `aid=${aid}&data=${this.state.comment_input}`
            }).
            then((data) => {

                if (data.code === "S01") {

                    const comment = data.contents;

                    this.setState({comment});

                } else if (data.code === "E01") {

                    this.setState({"comment": {}});

                }

            });

        }

    }

    render () {

        const {comment} = this.state;

        const commentList = comment.comments.map((value, index) =>
            <div className="commentItem" key={index}>
                <div className="name"><span>{value.commentator_name}</span><span className="userpic"><img src={value.img} alt="user" /></span></div>
                <div className="comment">
                    {value.comment_content}
                </div>
            </div>
            );

        return (
            <div className="ZhaoDaComents">
                <header>
                    <TopBar title="评论" border="boder" />
                </header>
                <div className="comentsmain">
                    <div className="comenttop">
                        <Link to="/response">
                            <div className="left">
                                <div className="publisher">
                                    {comment.name}
                                    {
                                    comment.vip
                                        ? <span className="vip"><img src="/src/images/vip.png" /></span> : ""
                                }
                                ，
                                <span>{comment.job}</span>
                                </div>
                                <div className="specialistComment">
                                    {comment.answer_content}
                                </div>
                            </div>
                            <span><img src="/src/images/Back_Button.png" alt="right" /></span>
                        </Link>
                    </div>
                    <div className="comments">
                        {commentList}
                    </div>
                </div>
                <div className="commentbox">
                    <input onChange={(e) => {

                        this.setState({"comment_input": e.target.value});

                    }} type="text" placeholder="非常不错的建议"
                    />
                    <span onClick={this.deliverComment.bind(this,this.state.aid)}>发表评论</span>
                </div>
            </div>
        );

    }
}

export default ZhaoDaComents;
