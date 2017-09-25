import React from "react";
import "./Invitation.scss";
import TopBar from "../../Public/TopBar/TopBar.jsx";
import ajax from "../../../services/ajax.js";
import axios from "axios";
import { getCookie } from "../../../services/tools.js";

class Invitation extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            "page": 1,
            "invitation": []
        };
        this.getInitData = this.getInitData.bind(this)
    }

    getInitData() {
        axios.get(`http://www.dazhao100.com/api.php?u=getInvitation&uid=${getCookie("uid")}`).then((data) => {
            if (data.data.error == "0") {
                const invitation = data.data.listjson
                this.state.invitation.map((elem, index) => {
                    Object.assign(elem, {"isShowall": false});
                });
                this.setState({invitation})
            } else {
                this.setState({invitation: []})
            }
        })
    }
    componentDidMount () {
        this.getInitData()
    }
    changeShowAll (index) {
        const invitations = JSON.parse(JSON.stringify(this.state)).invitation;
        invitations[index].isShowall = !invitations[index].isShowall;
        this.setState({"invitation": invitations});
    }
    render () {
        const {invitation} = this.state;
        const invitationList = invitation.map((elem, index) =>
            <div key={index} className="dropindetail">
                <p>
                    <span>{elem.tb_name}</span>
                </p>
                <p>{elem.companyname}</p>
                <div className="invitationmain clearfix">
                    <time>{elem.tb_uptime}<em /></time>
                    {
                            elem.isShowall
                                ? <div className="dropinmain" dangerouslySetInnerHTML={{"__html": elem.tb_txt}} /> : ""
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
