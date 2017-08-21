import React from "react";
import "./ZhaoDaResponse.scss";
import TopBar from "../../Public/TopBar/TopBar.jsx";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";
import Loading from "../../Public/Loading/Loading.jsx";

class ZhaoDaResponse extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "answerId": 1,
            "title": "研究生和本科学历在求职过程中真的会有很大影响吗？",
            "answerdetail": {
                "imgsrc": "/src/images/user.png",
                "vip": true,
                "name": "Michal",
                "position": "骨灰级教练，WIT Advisory Group 总裁",
                "answer": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学历还是本科学历；对于一些管理类的岗位的话，本身不是很需要学历的岗位，只要你的综合能力强，研究生还是本科神差距就不是很大。所以总的来说，还是要看你想去什么样的企业，想从事什么样的工作，然后决定读不读研或者读什么专业的研究生。",
                "time": "2017-1-12",
                "agree": 0,
                "remark": 0,
                "collect": false
            },
            "showLoading": true
        };
        this.fetchAnswer = this.fetchAnswer.bind(this);
        this.setSelected = this.setSelected.bind(this);
        this.setAgree = this.setAgree.bind(this);

    }

    componentDidMount () {

        this.props.changeBottomState(false);


        this.setState({
            "aid": this.props.params.aid,
            "title": this.props.params.qtitle || ""
        }, () => {

            this.fetchAnswer(this.state.aid);

        });

    }

    // 回答收藏
    setSelected (aid) {

        ajax({"url": `/zhaoda/answer/subscribeanswer?aid=${aid}`}).
      then((data) => {


          if (data.code === "S01") {

              this.props.changeMessageContent(data.message);

            // 收藏状态改变
              const answerdetail = JSON.parse(JSON.stringify(this.state)).answerdetail;

              answerdetail.collect = !this.state.answerdetail.collect;
              this.setState({answerdetail});

          } else if (data.code === "E01") {

            // 出错
              this.props.changeMessageContent(data.message);

          }

      });

    }

    // 点赞
    setAgree (aid) {

        ajax({"url": `/zhaoda/answer/dianzananswer?aid=${aid}`}).
        then((data) => {

            // Console.log(data)

            if (data.code === "S01") {

                this.props.changeMessageContent(data.message);

                // 关注状态改变
                const answerdetail = JSON.parse(JSON.stringify(this.state)).answerdetail;

                answerdetail.agree = this.state.answerdetail.agree + 1;
                this.setState({answerdetail});


            } else if (data.code === "S04") {

                // 已经点过赞了

                this.props.changeMessageContent(data.message);

            } else if (data.code === "E01") {

                // 出错

                this.props.changeMessageContent(data.message);

            }

        });

    }

    fetchAnswer (aid) {

        ajax({"url": `/zhaoda/question/answerinfo?aid=${aid}`}).
        then((data) => {

            console.log(data);

            if (data.code === "S01") {

                const answerdetail = {};

                answerdetail.answer = data.contents.content;
                answerdetail.iszan = data.contents.iszan;
                answerdetail.imgsrc = data.contents.user.img;
                answerdetail.vip = data.contents.user.vip;
                answerdetail.name = data.contents.user.nickname;
                answerdetail.position = data.contents.user.position;
                answerdetail.time = data.contents.date;
                answerdetail.agree = data.contents.agree;
                answerdetail.remark = data.contents.remark;
                answerdetail.collect = data.contents.collect;

                this.setState({
                    answerdetail,
                    "showLoading": false
                });

            } else {

                this.props.changeMessageContent(data.message);
                this.setState({"answerdetail": {}});

            }

        });

    }

    render () {

        const {title, answerdetail, showLoading, aid} = this.state;

        return (
            <div className="ZhaoDaResponse">
                <header>
                    <TopBar title="回答" border="boder" />
                </header>
                {showLoading ? <Loading />
                : <div>
                    <div className="question" onClick={() => {

                        history.go(-1);

                    }}
                    >
                        <span className="title">{title}</span>
                        <span className="img"><img src="/src/images/Back_Button.png" /></span>
                    </div>
                    <div className="comment">
                        <div className="author">
                            <span><img src={answerdetail.imgsrc} /></span>
                            <em>{answerdetail.name || "匿名用户"}</em>
                            {
                                answerdetail.vip
                                    ? <span><img src="/src/images/vip.png" /></span> : ""
                            }
                            {
                                answerdetail.position
                                ? <em>，{answerdetail.position}</em> : ""
                            }

                        </div>
                        <div dangerouslySetInnerHTML={{"__html": answerdetail.answer}} />
                        <time>{answerdetail.time}</time>
                    </div>
                    <div className="blank" />
                </div>}

                <div className="responseBottom">
                    <ul>
                        <li onClick={this.setAgree.bind(this, aid)}>
                            <span>
                                {answerdetail.iszan ?<img src="/src/images/icon/赞.png" />:<img src="/src/images/icon/赞1.png" />}
                            </span>
                            <span>赞同({answerdetail.agree})</span>
                        </li>
                        <li>
                            <Link to={`/coments/${aid}/${title}`}>
                                <span>
                                    <img src="/src/images/icon/评论.png" />
                                </span>
                                <span>评论({answerdetail.remark})</span>
                            </Link>
                        </li>
                        <li>
                            <span onClick={this.setSelected.bind(this, aid)}>
                                {/* <object data={answerdetail.collect ? "/src/images/icon/已收藏.svg" : "/src/images/icon/收藏.svg"} type="image/svg+xml"></object>*/}
                                {answerdetail.collect ?<img src="/src/images/star1.png" />:<img src="/src/images/icon/star_empty.png" />}
                                
                            </span>
                            <span>{answerdetail.collect ? "已收藏" : "收藏"}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );

    }
}

export default ZhaoDaResponse;
