import React from "react";
import ZhaoDaSearchTop from "../ZhaoDaSearchTop/ZhaoDaSearchTop.jsx";
import "./ZhaoDaZhuanLan.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

class ZhaoDaZhuanLan extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "keyword": this.props.params.splat,
            "zhuanlan": [
                // {
                //     "qid": 1,
                //     "colposter": "/src/images/pople.png",
                //     "colname": "#麦力达#第一期---考研那些事儿",
                //     "coldescription": "读研？工作？跨专业？选热门？如何选择变成现在最合适的 如何选择编程未来最正确的？"
                // }
            ]
        };

        this.fetchZhuanlan = this.fetchZhuanlan.bind(this);

    }

    componentDidMount () {

        // This.fetchZhuanlan(this.state.keyword);

    }

    fetchZhuanlan (keyword) {

        ajax({"url": `/zhaoda/zhuanlan/searchzhuanlan?keyword=${keyword}`}).
        then((data) => {


            if (data.code === "S01") {

                this.setState({"zhuanlan": data.contents});
                this.props.changeMessageContent(data.message);

            } else if (data.code === "E01") {

                this.setState({"zhuanlan": []});
                this.props.changeMessageContent(data.message);

            }

        });

    }
    render () {

        const {keyword, zhuanlan} = this.state;
        const zhuanlanList = zhuanlan.map((value, index) =>
            <div key={index} className="item">
                <Link to={`/tofeature?colid=${value.tid}`}>
                    <div className="left">
                        <span className="circle1">
                            <img src={value.colposter} alt="专栏" />
                        </span>
                        <p>
                            <span>{value.colname}</span><br />
                            <span>{value.coldescription}</span>
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
                            <Link to="/Zhaoda">
                                <span >取消</span>
                            </Link>
                            <input type="text" onChange={(e) => {

                                this.setState({"keyword": e.target.value});

                            }} placeholder="输入要搜索的关键字" value={this.state.keyword}
                            />
                            <span onClick={this.fetchZhuanlan.bind(this, keyword)}>搜索</span>
                        </div>
                    </header>
                    <nav>
                        <ul>
                            <Link to={`/search/${this.state.keyword}`}>
                                <li>问答</li>
                            </Link>
                            <Link to={`/talk/${this.state.keyword}`}>
                                <li>话题</li>
                            </Link>
                            <Link className="active" to={`/zhuanlan/${this.state.keyword}`}>
                                <li>专栏</li>
                            </Link>
                            <Link to={`/user/${this.state.keyword}`}>
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
