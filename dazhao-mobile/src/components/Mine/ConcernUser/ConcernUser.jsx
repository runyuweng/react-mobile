import React from "react";
import "./ConcernUser.scss";
import ajax from "../../../services/ajax.js";

class ConcernUser extends React.Component {

    constructor (props) {

        super(props);
        this.state = {

            "caredUsers": [],
            "page": 1,
            "nocareQuestion": false,
            "nomore": false,
            "moreMessage": ""
        };
        this.fetchUsers = this.fetchUsers.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.setCaredState = this.setCaredState.bind(this);

    }

    componentDidMount () {

        window.addEventListener("scroll", this.handleScroll);
        this.fetchUsers(this.state.page);

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

            this.setState({"moreMessage": this.state.nomore ? "没有更多关注" : "正在加载中..."}, () => {

                this.fetchUsers(this.state.page);

            });

        })() : "";


    }

    setCaredState (uid) {

        ajax({"url": `/zhaoda/topic/subscribetopic?topicid=${uid}`}).
        then((data) => {


            if (data.code === "S01") {

                this.context.changeMessageContent(data.message);

                this.setState({
                    "nomore": false,
                    "caredUsers": []
                }, () => {

                    this.fetchUsers(this.state.page);

                });

            }

        });

    }


    fetchUsers (page) {

        !this.state.nomore

        ? ajax({"url": `/zhaoda/user/mysubscribeuser?page=${page}`}).
        then((data) => {


            if (data.code === "S01") {

                this.context.changeMessageContent(data.message);
                const caredUsers = data.contents;

                this.setState({
                    "caredUsers": this.state.caredUsers.concat(caredUsers),
                    "page": this.state.page + 1,
                    "moreMessage": ""
                });

            } else if (data.code === "S02") {

                this.context.changeMessageContent(data.message);

                // 没有更多
                const caredUsers = data.contents;

                this.setState({
                    "caredUsers": this.state.caredUsers.concat(caredUsers),
                    "nomore": true,
                    "moreMessage": "没有更多关注"
                });

            } else if (data.code === "S03") {

                this.context.changeMessageContent(data.message);

                // SO3表示没有关注的话题
                this.setState({
                    "caredUsers": [],
                    "nocareQuestion": true,
                    "nomore": true
                });

            } else if (data.code === "E01") {

                this.context.changeMessageContent(data.message);

                this.setState({"caredUsers": []});

            } else if (data.code === "E03") {
               // 未登录

            }

        }) : "";

    }

    render () {

        const {caredUsers} = this.state;
        const caredUsersList = caredUsers.map((elem, index) =>
            <div key={index} className="item">
                <div className="left">
                    <span className="circle">
                        <img src={elem.img} alt="头像" />
                    </span>
                    <p>
                        <span>{elem.nickname}</span><br />
                        <span>{elem.position}</span>
                    </p>
                </div>
                <span onClick={this.setCaredState.bind(this, elem.uid)} className="right">+取消关注</span>
            </div>
            );

        return (
            <div id="concernUser">
                {caredUsersList}
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

ConcernUser.contextTypes = {"changeMessageContent": React.PropTypes.func};

export default ConcernUser;
