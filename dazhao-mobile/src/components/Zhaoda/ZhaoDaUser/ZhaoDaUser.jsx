import React from "react";
import "./ZhaoDaUser.scss";
import ZhaoDaSearchTop from "../ZhaoDaSearchTop/ZhaoDaSearchTop.jsx";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

class ZhaoDaUser extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "username": this.props.params.splat,
            "users": []
        };

        this.fetchUsers = this.fetchUsers.bind(this);
        this.setCare = this.setCare.bind(this);

    }

    componentDidMount () {

        this.fetchUsers(this.state.username);

    }

    fetchUsers (username) {

        ajax({"url": `/zhaoda/user/searchuser?username=${username}`}).
        then((data) => {


            if (data.code === "S01") {

                this.props.changeMessageContent(data.message);
                this.setState({"users": data.contents});

            } else if (data.code === "E01") {

                this.setState({"users": []});
                this.props.changeMessageContent(data.message);

            }

        });


    }

    setCare (userId, index) {

        ajax({"url": `/zhaoda/user/subscribeuser?uid=${userId}`}).
        then((data) => {


            if (data.code === "S01") {

                const users = JSON.parse(JSON.stringify(this.state)).users;

                users[index].status = this.state.users[index].status === 0 ? 1 : 0;

                this.setState({users});
                this.props.changeMessageContent(data.message);

            } else if (data.code === "E01") {

                // This.setState({"topics": []});
                this.props.changeMessageContent(data.message);

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
                        <span>{value.intro}</span>
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
                            <Link to="/Zhaoda">
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
                            <Link to={`/search/${this.state.username}`}>
                                <li>问答</li>
                            </Link>
                            <Link to={`/talk/${this.state.username}`}>
                                <li>话题</li>
                            </Link>
                            <Link className="active" to={`/user/${this.state.username}`}>
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
