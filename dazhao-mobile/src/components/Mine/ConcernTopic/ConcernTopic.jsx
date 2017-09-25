import React from "react";
import "./ConcernTopic.scss";
import ajax from "../../../services/ajax.js";
import {Link} from "react-router";

class ConcernTopic extends React.Component {

    constructor (props) {

        super(props);
        this.state = {

            "topics": [],
            "page": 1,
            "nocareQuestion": false,
            "nomore": false,
            "moreMessage": ""
        };
        this.fetchConcernTopic = this.fetchConcernTopic.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.setCaredState = this.setCaredState.bind(this);

    }

    componentDidMount () {

        window.addEventListener("scroll", this.handleScroll);
        this.fetchConcernTopic(this.state.page);

    }

    componentWillUnmount () {

        window.removeEventListener("scroll", this.handleScroll);

    }


    handleScroll (e) {

        const scrollTop = document.body.scrollTop;
        const innerHeight = window.innerHeight;
        const docHeight = document.body.scrollHeight;

        scrollTop === docHeight - innerHeight
        ? (() => {

            this.setState({"moreMessage": this.state.nomore ? "没有更多关注" : "正在加载中"}, () => {

                this.fetchConcernTopic(this.state.page);

            });

        })() : "";


    }

    setCaredState (topicid) {

        ajax({"url": `/zhaoda/topic/subscribetopic?topicid=${topicid}`}).
        then((data) => {

            if (data.code === "S01") {

                this.setState({
                    "nomore": false,
                    "topics": []
                }, () => {

                    this.fetchConcernTopic(this.state.page);

                });

            }

        });

    }


    fetchConcernTopic (page) {

        !this.state.nomore

        ? ajax({"url": `/zhaoda/topic/mycaretopic?page=${page}`}).
        then((data) => {


            if (data.code === "S01") {

                const topics = data.contents;

                this.setState({
                    "topics": this.state.topics.concat(topics),
                    "page": this.state.page + 1,
                    "moreMessage": ""
                }, () => {

                    this.context.changeMessageContent(data.message);

                });

            } else if (data.code === "S02") {

                // 没有更多
                const topics = data.contents;

                this.setState({
                    "topics": this.state.topics.concat(topics),
                    "nomore": true,
                    "moreMessage": "没有更多关注"
                }, () => {

                    this.context.changeMessageContent(data.message);

                });

            } else if (data.code === "S03") {

                // SO3表示没有关注的话题
                this.setState({
                    "topics": [],
                    "nocareQuestion": true,
                    "nomore": true
                }, () => {

                    this.context.changeMessageContent(data.message);

                });

            } else if (data.code === "E01") {

                this.setState({"topics": []}, () => {

                    this.context.changeMessageContent(data.message);

                });

            } else if (data.code === "E03") {
               // 未登录

            }

        }) : "";

    }

    render () {

        const {topics} = this.state;
        const topicsList = topics.map((elem, index) =>

            <div className="item">
                <Link key={index} to={`/totopic/${elem.tid}`}>
                    <div className="left">
                        <span className="circle">
                            <img src={elem.img} alt={elem.topicname} />
                        </span>
                        <p>
                            <span>{elem.topicname}</span><br />
                            <span>
                                <em>问题：<b>{elem.questionnum}</b></em>
                                <em>关注：<b>{elem.care}</b></em>
                            </span>
                        </p>
                    </div>
                </Link>
                <span onClick={this.setCaredState.bind(this, elem.tid)} className="right">取消关注</span>
            </div>
            );

        return (
            <div id="concernTopic">
                {topicsList}
                {
                    this.state.nocareQuestion
                        ? <div className="nocareQuestion">
                            <span />
                            <span>您还没有关注任何问题</span>
                        </div> : ""
                }
                {
                    this.state.nocareQuestion
                    ? ""
                    : <p className="fetchmore">{this.state.moreMessage}</p>
                }
            </div>
        );

    }
}

ConcernTopic.contextTypes = {"changeMessageContent": React.PropTypes.func};

export default ConcernTopic;
