import React from "react";
import "./Invitation.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import ajax from "../../../services/ajax.js";

class Invitation extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "page": 1,
            "invitation": [
                {
                    "id": 1,
                    "job_name": "UI设计师",
                    "company_name": "上海脚步网络科技有限公司",
                    "data": "2016.12.30",
                    "time": "17:30",
                    "invitationContent": "<p>你好Simon，欢迎你投递产品部管培生岗位</p>"
                },
                {
                    "id": 2,
                    "job_name": "UI设计师",
                    "company_name": "上海脚步网络科技有限公司",
                    "data": "2016.12.30",
                    "time": "17:30",
                    "invitationContent": "<p>你好Simon，欢迎你投递产品部管培生岗位</p>"
                },
                {
                    "id": 3,
                    "job_name": "UI设计师",
                    "company_name": "上海脚步网络科技有限公司",
                    "data": "2016.12.30",
                    "time": "17:30",
                    "invitationContent": "<p>你好Simon，欢迎你投递产品部管培生岗位</p>"
                }
            ]
        };

    }
    componentDidMount () {

        const invitations = JSON.parse(JSON.stringify(this.state)).invitation;

        invitations.map((elem, index) => {

            Object.assign(elem, {"isShowall": false});

        });
        this.setState({"invitation": invitations});

        this.fetchInvitation(this.state.page);

    }

    changeShowAll (index) {

        const invitations = JSON.parse(JSON.stringify(this.state)).invitation;

        invitations[index].isShowall = !invitations[index].isShowall;

        this.setState({"invitation": invitations});

    }

    fetchInvitation (page) {

        ajax({"url": `/invitation?page=${page}`}).
        then((data) => {

            if (data.code === "S01") {

                const invitation = data.contents;

                this.setState({"invitation": this.state.invitation.push(invitation)});

            } else if (data.code === "S02") {

            } else {

                this.setState({"invitation": this.state.invitation});

            }

        });

    }


    render () {

        const {invitation} = this.state;
        const invitationList = invitation.map((elem, index) =>
            <div key={index} className="dropindetail">
                <p>
                    <span>{elem.job_name}</span>
                </p>
                <p>{elem.company_name}</p>
                <div className="invitationmain clearfix">
                    <time>{elem.data}<em />{elem.time}</time>
                    {
                            elem.isShowall
                                ? <div className="dropinmain" dangerouslySetInnerHTML={{"__html": elem.invitationContent}} /> : ""
                        }
                    <span>
                        <img onClick={this.changeShowAll.bind(this, index)} src={elem.isShowall ? "/src/images/Back_top.png" : "/src/images/Back_down.png"} alt="down" />
                    </span>
                </div>
            </div>
            );

        return (
            <div id="invitation">
                <header>
                    <TopBar title="邀请函" border="boder" />
                </header>
                <div className="alldropin">
                    {invitationList}
                </div>
            </div>
        );

    }
}

export default Invitation;
