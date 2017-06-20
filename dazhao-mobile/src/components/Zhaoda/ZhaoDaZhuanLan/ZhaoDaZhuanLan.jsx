import React from "react";
import ZhaoDaSearchTop from "../ZhaoDaSearchTop/ZhaoDaSearchTop.jsx";
import "./ZhaoDaZhuanLan.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

class ZhaoDaZhuanLan extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "keyword": this.props.location.query.keyword,
            "zhuanlan": [
                {
                    "id": 1,
                    "img": "/src/images/pople.png",
                    "zhuanlan_title": "#麦力达#第一期---考研那些事儿",
                    "zhuanlan_intro": "读研？工作？跨专业？选热门？如何选择变成现在最合适的 如何选择编程未来最正确的？"
                },
                {
                    "id": 2,
                    "img": "/src/images/pople.png",
                    "zhuanlan_title": "#麦力达#第一期---考研那些事儿",
                    "zhuanlan_intro": "读研？工作？跨专业？选热门？如何选择变成现在最合适的 如何选择编程未来最正确的？"
                },
                {
                    "id": 3,
                    "img": "/src/images/pople.png",
                    "zhuanlan_title": "#麦力达#第一期---考研那些事儿",
                    "zhuanlan_intro": "读研？工作？跨专业？选热门？如何选择变成现在最合适的 如何选择编程未来最正确的？"
                }
            ]
        };

        this.fetchZhuanlan = this.fetchZhuanlan.bind(this);

    }

    componentDidMount () {

        console.log(this.props.location.query.keyword);
        this.fetchZhuanlan(this.state.keyword);

    }

    fetchZhuanlan (keyword) {

        ajax({"url": `/zhaoda/zhuanlan?keyword=${keyword}`}).
        then((data) => {

            if (data.code === "S01") {

                this.setState({"zhuanlan": data.contents});

            } else if (data.code === "E01") {

                this.setState({"zhuanlan": []});

            }

        });

    }
    render () {

        const {keyword, zhuanlan} = this.state;
        const zhuanlanList = zhuanlan.map((value, index) =>
            <div key={index} className="item">
                <Link to={`/tofeature?colid=${value.id}`}>
                    <div className="left">
                        <span className="circle1">
                            <img src={value.img} alt="专栏" />
                        </span>
                        <p>
                            <span>{value.zhuanlan_title}</span><br />
                            <span>{value.zhuanlan_intro}</span>
                        </p>
                    </div>
                </Link>
            </div>
            );

        return (
            <div className="ZhaoDaZhuanLan ZhaoDaUser ZhaoDaHomeSearch">
                {/* <ZhaoDaSearchTop />*/}
                <div className="ZhaoDaSearchTop">
                    <header>
                        <div className="search">
                            <Link to="/Zhaoda/main">
                                <span >取消</span>
                            </Link>
                            <input type="text" onChange={(e) => {

                                this.setState({"keyword": e.target.value});

                            }} placeholder="研究生" value={this.state.keyword}
                            />
                            <span onClick={this.fetchZhuanlan.bind(this, keyword)}>搜索</span>
                        </div>
                    </header>
                    <nav>
                        <ul>
                            <Link activeClassName="active" to={{
                                "pathname": "/search",
                                "query": {"keyword": this.state.keyword}
                            }}
                            >
                                <li>问答</li>
                            </Link>
                            <Link activeClassName="active" to={{
                                "pathname": "/talk",
                                "query": {"keyword": this.state.keyword}
                            }}
                            >
                                <li>话题</li>
                            </Link>
                            <Link activeClassName="active" to={{
                                "pathname": "/zhuanlan",
                                "query": {"keyword": this.state.keyword}
                            }}
                            >
                                <li>专栏</li>
                            </Link>
                            <Link activeClassName="active" to={{
                                "pathname": "/user",
                                "query": {"user": ""}
                            }}
                            >
                                <li>用户</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
                <div className="usermain">
                    {zhuanlanList}
                </div>

            </div>
        );

    }
}
export default ZhaoDaZhuanLan;
