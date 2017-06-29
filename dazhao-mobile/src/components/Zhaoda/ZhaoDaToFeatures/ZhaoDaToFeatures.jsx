import React from "react";
import "./ZhaoDaToFeatures.scss";
import "../../Public/AnswerMain/AnswerMain.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";
import LoadingMore from "../../Public/Loading/LoadingMore.jsx";

class ZhaoDaToFeatures extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "albumNum": 5,
            "loading": false,
            "albumHaveShowAll": false,
            "guestIntroStretch": false,
            "shortIntroStretch": true,
            "data": {
                "video": "http://html5videoformatconverter.com/data/images/happyfit2.ogv",
                "playtimes": 204, // 播放次数
                "concern": true, // 是否关注
                "colname": "#麦力答#第一期----考研那些事儿",
                "coldescription": " 读研？工作？跨专业？选热门？如何让选择变成现在最适合的？如何让选择变成未来组以正确的？请听--麦力答",
                "guest": {// 嘉宾信息
                    "img": "/src/images/pople.png",
                    "nickname": "",
                    "vip": true, // 是否是VIP
                    "position": "国际教练协会（ICF）认证教练、WIT Advisory Group总裁国际教练协会（ICF）认证教练、WIT Advisory Group总裁国际教练协会（ICF）认证教练"
                },
                "uid": ""
            },
            "album": [// 专辑列表
            ],
            "answers": [
                {
                    "id": 1,
                    "author": "Michael",
                    "question": "请问研究生和本科生在求职过程中真的会有很大影响吗？",
                    "replayto": "马军", // 回复对象
                    "answer": "这个问题，还得要看企业的需求，比如说企业的一些技术岗位，这个问题，还得要看企业的需求，比如说企业的一些技术岗位，这些企业在招聘介绍里就会写清楚研究生学历还是本科生学历；对于一些管",
                    "agreenum": 9,
                    "remark": 10,
                    "collect": false, // 是否收藏
                    "time": "2016年11月30日"// 提问时间
                },
                {
                    "id": 2,
                    "author": "Michael",
                    "question": "请问研究生和本科生在求职过程中真的会有很大影响吗？",
                    "replayto": "马军", // 回复对象
                    "answer": "这个问题，还得要看企业的需求，比如说企业的一些技术岗位，这个问题，还得要看企业的需求，比如说企业的一些技术岗位，这些企业在招聘介绍里就会写清楚研究生学历还是本科生学历；对于一些管",
                    "agreenum": 9,
                    "remark": 10,
                    "collect": false, // 是否收藏
                    "time": "2016年11月30日"// 提问时间
                },
                {
                    "id": 3,
                    "author": "Michael",
                    "question": "请问研究生和本科生在求职过程中真的会有很大影响吗？",
                    "replayto": "马军", // 回复对象
                    "answer": "这个问题，还得要看企业的需求，比如说企业的一些技术岗位，这个问题，还得要看企业的需求，比如说企业的一些技术岗位，这些企业在招聘介绍里就会写清楚研究生学历还是本科生学历；对于一些管",
                    "agreenum": 9,
                    "remark": 10,
                    "collect": false, // 是否收藏
                    "time": "2016年11月30日"// 提问时间
                }
            ]
        };
        this.fetchAlbum = this.fetchAlbum.bind(this);
        this.fetchZhuanlanDe = this.fetchZhuanlanDe.bind(this);
        this.setSelect = this.setSelect.bind(this);

    }


    componentDidMount () {

        this.props.changeBottomState(false);


        this.setState({"commentWidth": this.refs.comment.clientWidth},
        () => {

            const answers = JSON.parse(JSON.stringify(this.state)).answers;

            answers.map((value, i) => {

                const isShowall = value.answer.length < this.state.commentWidth / 13 * 2 + (this.state.commentWidth - 101) / 13;

                Object.assign(value, {"showall": isShowall});

            });

            this.setState({answers});

        });

        this.fetchZhuanlanDe();

    }

    fetchZhuanlanDe () {

        ajax({"url": `/zhaoda/zhuanlan/zhuanlaninfo?colid=${this.props.location.query.colid}`}).
        then((data) => {

            const myData = data.contents;

            this.setState({"data": myData}, () => {

                this.fetchAlbum(this.state.albumNum);

            });

        });

    }

    fetchAlbum (albumNum) {

        ajax({"url": `/zhaoda/zhuanlan/album?page=-1&uid=${this.state.data.uid}`}).
        then((data) => {

            if (data.code === "S21") {

                let album = data.contents.slice(0, albumNum);

                if (albumNum === -1) {

                    album = data.contents;

                }
                this.setState({
                    album,
                    "loading": false,
                    "albumHaveShowAll": albumNum === -1
                });

            } else if (data.code === "E01") {

                this.setState({"album": this.state.album});

            }

        });

    }

    showallClick (index) {

        const answers = JSON.parse(JSON.stringify(this.state)).answers;

        answers[index].showall = true;

        this.setState({answers});

    }

    setSelect (colid) {

        ajax({"url": `/zhaoda/zhuanlan/subscribezhuanlan?colid=${colid}`}).
        then((data) => {

            console.log(data);
            if (data.code === "S01") {

                var data = JSON.parse(JSON.stringify(this.state)).data;

                data.collect = !this.state.data.collect;
                this.setState({data});

            } else if (data.code === "E01") {

            }

        });

    }

    render () {

        const {data, album, answers, commentWidth} = this.state;

        const albumList = album.map((value, i) => <div className="albunItems" key={i}>
            <span><img src={"/src/images/zhuanlan.png" || value.colposter} /></span>
            <div className="itemsR">
                <h3>{value.colname}</h3>
                <span><em>{value.playtimes}</em>次播放</span>
            </div>
        </div>);

        const answerList = answers.map((value, i) => {

            const commentlength = value.showall ? -1 : commentWidth / 13 * 2 + (commentWidth - 101) / 13;


            return (
                <div className="answerItems" key={i}>
                    <h3>{value.question}</h3>
                    <div className="vector">
                        <span><img src="/src/images/user.png" /></span>
                        <em>{value.replayto}</em>
                        <time>{value.time}</time>
                    </div>

                    <article>
                        <div className="publisher">
                            <span><img src="/src/images/user.png" /></span>
                            <em>{value.author}</em>
                            <span className="vip"><img src="/src/images/vip.png" /></span>
                        </div>
                        <div className="comment" ref="comment">{value.showall ? value.answer : value.answer.slice(0, commentlength).concat("...")}
                            {value.showall ? "" : <span onClick={this.showallClick.bind(this, i)}>查看全部</span>}
                        </div>
                        <div className="more">
                            <span><b><img src="/src/images/zan.png" /></b>赞同{value.agreenum}</span>
                            <span><b><img src="/src/images/comment.png" /></b>评论{value.remark}</span>
                            <span><b><img src="/src/images/cang.png" /></b>收藏</span>
                        </div>
                    </article>
                    <span className="NO">Q{i + 1}</span>
                </div>
            );

        });

        const myStyle = {
            "width": "100%",
            "display": "block"
        };

        return (
            <div className="ZhaoDaToFeatures">
                <header>
                    <video id="video" controls poster="/src/images/zhuanlan.png" >
                        <source src={data.video} />
                    </video>
                    <div className="TopBar">
                        <span onClick={(e) => {

                            history.back();

                        }}
                        >
                            <img src="/src/images/Back_left.png" />
                        </span>
                    </div>
                    <div className="videoM">
                        <div className="videoL">
                            <span><img src="/src/images/eye.png" /></span>
                            <em><b>{data.playtimes}</b>次播放</em>
                        </div>
                        <div className="videoR">
                            <span><img onClick={this.setSelect.bind(this, data.colid)} src="/src/images/love.png" /></span>
                            <span><img src="/src/images/top.png" /></span>
                        </div>
                    </div>
                    <div id="videoMessage">
                        <div className="zhuanlandescrip">
                            <div className="vTitle">
                                <h3>{data.colname}</h3>
                                <span><em>简介</em><img onClick={() => {

                                    this.setState({"shortIntroStretch": !this.state.shortIntroStretch});

                                }} src={this.state.shortIntroStretch ? "/src/images/Back_top.png" : "/src/images/Back_down.png"}
                                                 /></span>
                            </div>
                            {this.state.shortIntroStretch ? <p>{data.coldescription}</p> : ""}
                        </div>
                        <div className="guestIntro">
                            <h3>嘉宾介绍</h3>
                            <div className="intro">
                                <span className="circle">
                                    <img src={"/src/images/pople.png" || data.guest.img} alt="嘉宾" />
                                </span>
                                <div className="introR">

                                    <span><em>{data.guest.nickname}</em>{data.guest.vip ? <img src="/src/images/vip.png" /> : ""}</span>
                                    <span style={{"display": !this.state.guestIntroStretch ? "WebKitBox" : "inline"}}>{data.guest.position}</span>

                                </div>
                            </div>
                            {
                                !this.state.guestIntroStretch

                                    ? data.guest.position.length > 20
                                    ? <span
                                        onClick={() => {

                                            this.setState({"guestIntroStretch": true});

                                        }}
                                        className="more"
                                      >
                                        <em>展开</em>
                                        <img src="/src/images/Back_down.png" />
                                    </span> : ""


                                 : ""
                            }
                        </div>
                    </div>
                </header>


                <div id="album">
                    <h3>专辑列表</h3>
                    {albumList}

                    {
                        !this.state.albumHaveShowAll
                        ? <div className="Formore" onClick={() => {

                            this.setState({"loading": true}, () => {

                                this.fetchAlbum(-1);

                            });

                        }}
                          >{ this.state.loading ? <LoadingMore /> : "查看全部" }</div> : ""
                    }

                </div>

                <div className="guestAnswer">
                    <header className="ul">
                        <ul>
                            <li className="active">嘉宾解答</li>
                            <li>热问榜单</li>
                        </ul>
                    </header>

                    {answerList}

                </div>
            </div>
        );

    }
}

export default ZhaoDaToFeatures;
