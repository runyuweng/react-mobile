import React from "react";
import "./ConcernTopic.scss";
import ajax from "../../../services/ajax.js";

class ConcernTopic extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "topics": [
                {
                    "id": 1,
                    "topicimg": "/src/images/pople.png",
                    "topicname": "研究生",
                    "questionnum": 16,
                    "care": 10
                }, {
                    "id": 2,
                    "topicimg": "/src/images/pople.png",
                    "topicname": "研究生",
                    "questionnum": 16,
                    "care": 10
                }, {
                    "id": 3,
                    "topicimg": "/src/images/pople.png",
                    "topicname": "研究生",
                    "questionnum": 16,
                    "care": 10
                }
            ],
            "topicPage": 1
        };
        this.fetchConcernTopic = this.fetchConcernTopic.bind(this);

    }

    componentDidMount () {

        this.fetchConcernTopic(this.state.topicPage);

    }

    fetchConcernTopic (page) {

        ajax({"url": `/mycaretopic?page=${page}`}).
        then((data) => {

            if (data.code === "S01") {

                const topics = data.contents;

                this.setState({"topics": this.state.topics.push(topics)});

            } else if (data.code === "S02") {

            } else {

                this.setState({"topics": this.state.topics});

            }

        });

    }

    render () {

        const {topics} = this.state;
        const topicsList = topics.map((elem, index) =>
            <div key={index} className="item">
                <div className="left">
                    <span className="circle">
                        <img src={elem.topicimg} alt={elem.topicname} />
                    </span>
                    <p>
                        <span>{elem.topicname}</span><br />
                        <span>
                            <em>问题：<b>{elem.questionnum}</b></em>
                            <em>关注：<b>{elem.care}</b></em>
                        </span>
                    </p>
                </div>
                <span className="right">+取消关注</span>
            </div>
            );

        return (
            <div id="concernTopic">
                {topicsList}
            </div>
        );

    }
}

export default ConcernTopic;
