import React from "react";
import "./ZhaoDaUser.scss";
import ZhaoDaSearchTop from "../ZhaoDaSearchTop/ZhaoDaSearchTop.jsx";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

class ZhaoDaUser extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "username": this.props.location.query.user,
            "users": [
                {
                    "uid": 1,
                    "img": "/src/images/pople.png",
                    "nickname": "Michael",
                    "job": "国际教练协会（ICF）认证教练",
                    "isCared": false
                }
            ]
        };

        this.fetchUsers = this.fetchUsers.bind(this);
        this.setCare = this.setCare.bind(this);

    }

    componentDidMount () {

        // This.fetchUsers(this.state.username);

    }

    fetchUsers (username) {

        ajax({"url": `/zhaoda/user/searchuser?username=${username}`}).
        then((data) => {

            console.log(data);
            if (data.code === "S01") {

                this.setState({"users": data.contents});

            } else if (data.code === "E01") {

                this.setState({"users": []});

            }

        });

        this.setState({"keyword": ""});

    }

    setCare (userId, index) {

        ajax({"url": `/zhaoda/user/subscribeuser?uid=${userId}`}).
        then((data) => {

            console.log(data);
            if (data.code === "S01") {

                const users = JSON.parse(JSON.stringify(this.state)).users;

                users[index].status = this.state.users[index].status === 0 ? 1 : 0;

                this.setState({users});

            } else if (data.code === "E01") {

                // This.setState({"topics": []});

            }

        });

    }

    render () {

        const {username, users} = this.state;
        const usersList = users.map((value, index) =>
            <div key={index} className="item">
                <div className="left">
                    <span className="circle">
                        <img src={value.img} alt="用户" />
                    </span>
                    <p>
                        <span>{value.nickname}</span><br />
                        <span>{value.job}</span>
                    </p>
                </div>
                <span className="right" onClick={this.setCare.bind(this, value.uid, index)}>{value.status === 1 ? "取消关注" : "+关注"}</span>
            </div>
            );

        return (
            <div className="ZhaoDaUser ZhaoDaHomeSearch">
                {/* <ZhaoDaSearchTop user={this.state.username} />*/}
                <div className="ZhaoDaSearchTop">
                    <header>
                        <div className="search">
                            <Link to="/Zhaoda/main">
                                <span >取消</span>
                            </Link>
                            <input type="text" onChange={(e) => {

                                this.setState({"username": e.target.value});

                            }} placeholder="输入要搜索关键字" value={this.state.username}
                            />
                            <span onClick={this.fetchUsers.bind(this, username)}>搜索</span>
                        </div>
                    </header>
                    <nav>
                        <ul>
                            <Link activeClassName="active" to={{
                                "pathname": "/search",
                                "query": {"keyword": ""}
                            }}
                            >
                                <li>问答</li>
                            </Link>
                            <Link activeClassName="active" to={{
                                "pathname": "/talk",
                                "query": {"keyword": ""}
                            }}
                            >
                                <li>话题</li>
                            </Link>
                            <Link activeClassName="active" to={{
                                "pathname": "/zhuanlan",
                                "query": {"keyword": ""}
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
                <div className="usermain">
                    {usersList}
                </div>

            </div>
        );

    }
}
export default ZhaoDaUser;
