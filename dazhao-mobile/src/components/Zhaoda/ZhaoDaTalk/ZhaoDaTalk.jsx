import React from "react";
import ZhaoDaSearchTop from "../ZhaoDaSearchTop/ZhaoDaSearchTop.jsx";
import "./ZhaoDaTalk.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

class ZhaoDaTalk extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "keyword": this.props.params.keyword || "",
            "topics": [
                {
                    "id": 1,
                    "img": "/src/images/pople.png",
                    "topicname": "研究生",
                    "questionnum": 12,
                    "care": 24,
                    "isguanzhu": false
                }
            ]
        };

        this.fetchTopics = this.fetchTopics.bind(this);
        this.setCare = this.setCare.bind(this);

    }

    componentDidMount () {

        console.log(this.props.location.query.keyword);
        // This.fetchTopics(this.state.keyword);

    }

    fetchTopics (keyword) {

        ajax({"url": `/zhaoda/topic/searchtopic?keyword=${keyword}`}).
        then((data) => {

            console.log(data);

            if (data.code === "S01") {

                this.setState({"topics": data.contents});

            } else if (data.code === "E01") {

                this.setState({"topics": []});

            }

        });

        this.setState({"keyword": ""});

    }

    setCare (topicId, index) {

        ajax({"url": `/zhaoda/topic/subscribetopic?topicid=${topicId}`}).
        then((data) => {

            console.log(data);
            if (data.code === "S01") {

                const topics = JSON.parse(JSON.stringify(this.state)).topics;

                topics[index].isguanzhu = !this.state.topics[index].isguanzhu;

                this.setState({topics});

            } else if (data.code === "E01") {

                // This.setState({"topics": []});

            }

        });

    }

    render () {

        const {keyword, topics} = this.state;
        const topicsList = topics.map((value, index) =>
            <div key={index} className="item">
                <div className="left">
                    <Link to={`/totopic/${value.id}`}>
                        <span className="circle">
                            <img src={value.img} alt="话题" />
                        </span>
                    </Link>
                    <p>
                        <span>{value.topicname}</span><br />
                        <span>
                            <em>问题：<b>{value.questionnum}</b></em>
                            <em>关注：<b>{value.care}</b></em>
                        </span>
                    </p>
                </div>
                <span className="right" onClick={this.setCare.bind(this, value.tid, index)}>{value.isguanzhu ? "取消关注" : "+关注"}</span>
            </div>
            );

        return (
            <div className="ZhaoDaTalk ZhaoDaUser">
                {/* <ZhaoDaSearchTop />*/}
                <div className="ZhaoDaSearchTop">
                    <header>
                        <div className="search">
                            <Link to="/Zhaoda/main">
                                <span >取消</span>
                            </Link>
                            <input type="text" onChange={(e) => {

                                this.setState({"keyword": e.target.value});

                            }} placeholder="输入要搜索关键字" value={this.state.keyword}
                            />
                            <span onClick={this.fetchTopics.bind(this, keyword)}>搜索</span>
                        </div>
                    </header>
                    <nav>
                        <ul>
                            <Link activeClassName="active" to={`/search`}>
                                <li>问答</li>
                            </Link>
                            <Link activeClassName="active" to={`/talk`}>
                                <li>话题</li>
                            </Link>
                            <Link activeClassName="active" to={`/zhuanlan`}>
                                <li>专栏</li>
                            </Link>
                            <Link activeClassName="active" to={`/user`}>
                                <li>用户</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
                <div className="usermain">

                    {topicsList}
                    {/*
                    <div className="item">
                        <div className="left">
                            <span className="circle" />
                            <p>
                                <span>研究生</span><br />
                                <span>
                                    <em>问题：<b>16</b></em>
                                    <em>关注：<b>101</b></em>
                                </span>
                            </p>
                        </div>
                        <span className="right">+关注</span>
                    </div>

                    <div className="item">
                        <div className="left">
                            <span className="circle" />
                            <p>
                                <span>研究生</span><br />
                                <span>
                                    <em>问题：<b>16</b></em>
                                    <em>关注：<b>101</b></em>
                                </span>
                            </p>
                        </div>
                        <span className="right">+关注</span>
                    </div>

                    <div className="item">
                        <div className="left">
                            <span className="circle" />
                            <p>
                                <span>研究生</span><br />
                                <span>
                                    <em>问题：<b>16</b></em>
                                    <em>关注：<b>101</b></em>
                                </span>
                            </p>
                        </div>
                        <span className="right">+关注</span>
                    </div>
                */}
                </div>
            </div>
        );

    }
}
export default ZhaoDaTalk;
