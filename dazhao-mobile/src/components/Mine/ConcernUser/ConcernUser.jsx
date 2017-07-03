import React from "react";
import "./ConcernUser.scss";
import ajax from "../../../services/ajax.js";

class ConcernUser extends React.Component {

    constructor (props) {

        super(props);
        this.state = {

            "caredUsers": [
                // {
                //     Id:1,
                //     Userimg:"src/images/pople.png",
                //     Name:"Michael",
                //     Position:'国际教练协会（IFC）认证教练国际教练协会（IFC）认证教练'
                // },
                // {
                //     Id:2,
                //     Userimg:"src/images/pople.png",
                //     Name:"Michael",
                //     Position:'国际教练协会（IFC）认证教练国际教练协会（IFC）认证教练'
                // },
                // {
                //     Id:3,
                //     Userimg:"src/images/pople.png",
                //     Name:"Michael",
                //     Position:'国际教练协会（IFC）认证教练国际教练协会（IFC）认证教练'
                // }
            ],
            "page": 1,
            "nocareQuestion": false,
            "nomore": false,
            "moreMessage": ""
        };
        this.fetchUsers = this.fetchUsers.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

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

            this.setState({"moreMessage": this.state.nomore ? "没有更多提问" : "正在加载中"}, () => {

                this.fetchUsers(this.state.page);

            });

        })() : "";


    }


    fetchUsers (page) {

        !this.state.nomore

        ? ajax({"url": `/zhaoda/user/mysubscribeuser?page=${page}`}).
        then((data) => {
            console.log(data)
            if (data.code === "S01") {

                const caredUsers = data.contents;

                this.setState({
                    "caredUsers": this.state.caredUsers.concat(caredUsers),
                    "page": this.state.page + 1,
                    "moreMessage": ""
                });

            } else if (data.code === "S02") {

                // 没有更多
                const caredUsers = data.contents;

                this.setState({
                    "caredUsers": this.state.caredUsers.concat(caredUsers),
                    "nomore": true,
                    "moreMessage": "没有更多提问"
                });

            } else if (data.code === "S03") {

                // SO3表示没有关注的话题
                this.setState({
                    "caredUsers": [],
                    "nocareQuestion": true,
                    "nomore": true
                });

            } else if (data.code === "E01") {

                this.setState({"caredUsers": this.state.caredUsers});

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
                <span className="right">+取消关注</span>
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

export default ConcernUser;
