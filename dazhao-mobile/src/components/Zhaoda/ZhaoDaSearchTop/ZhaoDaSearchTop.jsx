import React from "react";
import "./ZhaoDaSearchTop.scss";
import {Link} from "react-router";

class ZhaoDaSearchTop extends React.Component {

    constructor (props) {

        super(props);

        this.state = {
            "keyword": this.props.keyword,
            "username": this.props.username
        };

    }

    render () {

        return (
            <div className="ZhaoDaSearchTop">
                <header>
                    <div className="search">
                        <Link to="/Zhaoda">
                            <span >取消</span>
                        </Link>
                        <input type="text" onChange={(e) => {

                            this.setState({"keyword": e.target.value});

                        }} placeholder="请输入关键词搜索" value={this.state.keyword}
                        />
                        <span>搜索</span>
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
                            "query": {"user": this.state.username}
                        }}
                        >
                            <li>用户</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        );

    }
}

export default ZhaoDaSearchTop;
