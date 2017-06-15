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
                    "img":"/src/images/pople.png",
                    "topic_title": "研究生",
                    "question_num": 12,
                    "care":24,
                    "isCared":false
                },
                {
                    "id": 2,
                    "img":"/src/images/pople.png",
                    "topic_title": "研究生就业",
                    "question_num": 12,
                    "care":24,
                    "isCared":false
                },
                {
                    "id": 3,
                    "img":"/src/images/pople.png",
                    "topic_title": "考研究生",
                    "question_num": 12,
                    "care":24,
                    "isCared":false
                }
            ]
        };

        this.fetchTopics = this.fetchTopics.bind(this);
        this.setCare = this.setCare.bind(this);
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

    setCare(topicId,index){
        ajax({"url": `/zhaoda/careTopic?topicId=${topicId}`}).
        then((data) => {

            if (data.code === "S01") {

                let topics = JSON.parse(JSON.stringify(this.state)).topics;

                topics[index].isCared = !this.state.topics[index].isCared;

                this.setState({"topics": topics});

            } else if (data.code === "E01") {

                //this.setState({"topics": []});
                return;
            }

        });
    }

    render () {

        const { keyword, topics } = this.state;
        const topicsList = topics.map((value,index)=>{
            return(
                <div key={index} className="item">
                    <div className="left">
                        <Link to={`/totopic/${value.id}`}>
                            <span className="circle">
                                <img src={value.img} alt="话题" />
                            </span>
                        </Link>
                        <p>
                            <span>{value.topic_title}</span><br />
                            <span>
                                <em>问题：<b>{value.question_num}</b></em>
                                <em>关注：<b>{value.care}</b></em>
                            </span>
                        </p>
                    </div>
                    <span className="right" onClick={this.setCare.bind(this,value.id,index)}>{value.isCared?"取消关注":"+关注"}</span>
                </div>
            )
        })

        return (
            <div className="ZhaoDaTalk ZhaoDaUser">
                {/*<ZhaoDaSearchTop />*/}
                <div className="ZhaoDaSearchTop">
                    <header>
                        <div className="search">
                            <Link to="/Zhaoda/main">
                                <span >取消</span>
                            </Link>
                            <input type="text" onChange={(e)=>{
                                this.setState({
                                    "keyword":e.target.value
                                })
                            }} placeholder="研究生" value={this.state.keyword}/>
                            <span  onClick={this.fetchTopics.bind(this,keyword)}>搜索</span>
                        </div>
                    </header>
                    <nav>
                        <ul>
                            <Link activeClassName="active" to={{
                                "pathname":"/search",
                                "query":{"keyword":this.state.keyword}  
                            }}>
                                <li>问答</li>
                            </Link>
                            <Link activeClassName="active" to={{
                                "pathname":"/talk",
                                "query":{"keyword":this.state.keyword} 
                            }}>
                                <li>话题</li>
                            </Link>
                            <Link activeClassName="active" to={{
                                "pathname":"/zhuanlan",
                                "query":{"keyword":this.state.keyword} 
                            }}>
                                <li>专栏</li>
                            </Link>
                            <Link activeClassName="active" to={{
                                "pathname":"/user",
                                "query":{"user":""}
                            }}>
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
