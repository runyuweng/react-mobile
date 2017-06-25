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
                    "id": 1,
                    "img": "/src/images/pople.png",
                    "user_name": "Michael",
                    "job": "国际教练协会（ICF）认证教练",
                    "isCared": false
                },
                {
                    "id": 2,
                    "img": "/src/images/pople.png",
                    "user_name": "Michael",
                    "job": "国际教练协会（ICF）认证教练",
                    "isCared": false
                },
                {
                    "id": 3,
                    "img": "/src/images/pople.png",
                    "user_name": "Michael",
                    "job": "国际教练协会（ICF）认证教练",
                    "isCared": false
                }
            ]
        };

        this.fetchUsers = this.fetchUsers.bind(this);
        this.setCare = this.setCare.bind(this);

    }

    componentDidMount () {

        this.fetchUsers(this.state.username);

    }

    fetchUsers (username) {

        ajax({"url": `/zhaoda/users?username=${username}`}).
        then((data) => {

            if (data.code === "S01") {

                this.setState({"users": data.contents});

            } else if (data.code === "E01") {

                this.setState({"users": []});

            }

        });

    }

    setCare (userId, index) {

        ajax({"url": `/zhaoda/careUsers?userId=${userId}`}).
        then((data) => {

            if (data.code === "S01") {

                const users = JSON.parse(JSON.stringify(this.state)).users;

                users[index].isCared = !this.state.users[index].isCared;

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
                        <span>{value.user_name}</span><br />
                        <span>{value.job}</span>
                    </p>
                </div>
                <span className="right" onClick={this.setCare.bind(this, value.id, index)}>{value.isCared ? "取消关注" : "+关注"}</span>
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

                            }} placeholder="Michael" value={this.state.username}
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
