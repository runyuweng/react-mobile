import React from "react";
import "./EmailDropIn.scss";
import ajax from "../../../services/ajax.js";
import axios from "axios";
import { getCookie } from "../../../services/tools.js";

class EmailDropIn extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            "emailDropIns": []
        };
        this.getInitData = this.getInitData.bind(this)
    }
    getInitData() {
        axios.get("http://www.dazhao100.com/api.php?u=getSendmail").then((data) => {
            if (data.data.error == "0") {
                const emailDropIns = data.data.listjson
                this.setState({emailDropIns})
            }
        })
    }
    componentDidMount () {
        this.getInitData()
    }
    render () {
        const {emailDropIns} = this.state;
        const emailDropInsList = emailDropIns.map((elem, index) => {
            return (
                <div key={index} className="dropindetail">
                    <p>
                        <span>{elem.sendEmail}</span>
                        <span>{elem.latestStatus}</span>
                    </p>
                    <p>使用简历：{elem.SendTitle}</p>
                    <div className="dropincontent clearfix">
                        <time>{elem.sendTime}</time>
                    </div>
                </div>
            );
        });

        return (
            <div id="emailDropIn">

                <div className="alldropin">
                    {emailDropInsList}
                </div>
            </div>
        );
    }
}

export default EmailDropIn;
