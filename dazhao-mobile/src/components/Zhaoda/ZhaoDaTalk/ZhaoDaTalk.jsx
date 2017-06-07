import React from "react";
import ZhaoDaSearchTop from "../ZhaoDaSearchTop/ZhaoDaSearchTop.jsx";
import "./ZhaoDaTalk.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

class ZhaoDaTalk extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "keyword": this.props.location.query.keyword,
            "topics": [
                {
                    "id": 1,
                    "topic_title": "研究生",
                    "question_num": 12,
                    "care":24,
                    "isCared":false
                },
                {
                    "id": 2,
                    "topic_title": "研究生就业",
                    "question_num": 12,
                    "care":24,
                    "isCared":false
                },
                {
                    "id": 3,
                    "topic_title": "考研究生",
                    "question_num": 12,
                    "care":24,
                    "isCared":false
                }
            ]
        };

        this.fetchTopics = this.fetchTopics.bind(this);
    }

    componentDidMount() {
        console.log(this.props.location.query.keyword);
        this.fetchTopics(this.state.keyword);
    }

    fetchTopics(keyword){
        ajax({"url": `/zhaoda/topics?keyword=${keyword}`}).
        then((data) => {

            if (data.code === "S01") {

                this.setState({"topics": data.contents});

            } else if (data.code === "E01") {

                this.setState({"topics": []});

            }

        });
    }

    render () {

        const { topics } = this.state;
        const topicsList = topics.map((value,index)=>{
            return(
                <div key={index} className="item">
                    <div className="left">
                        <span className="circle" />
                        <p>
                            <span>{value.topic_title}</span><br />
                            <span>
                                <em>问题：<b>{value.question_num}</b></em>
                                <em>关注：<b>{value.care}</b></em>
                            </span>
                        </p>
                    </div>
                    <span className="right">{value.isCared?"取消关注":"+关注"}</span>
                </div>
            )
        })

        return (
            <div className="ZhaoDaTalk ZhaoDaUser">
                <ZhaoDaSearchTop />
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
