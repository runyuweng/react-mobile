import React from "react";
import "./Reset.scss";
import TopBar from "../../Public/TopBar/TopBar.jsx";
import {Link} from "react-router";
import {verifyTel} from "../../../services/tools";
import ajax from "../../../services/ajax";
import {hashHistory} from "react-router";

class Reset extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "newPwd1": "",
            "newPwd2": "",
            "pwd": ""
        };

    }
    componentDidMount () {

        this.props.changeBottomState(false);

    }

    handleReset () {

        if (this.state.newPwd1 === this.state.newPwd2) {

            ajax({
                "url": "/zhaoda/user/resetpwd",
                "method": "POST",
                "data": `newpwd=${this.state.newPwd1}&pwd=${this.state.pwd}`
            }).
        then((data) => {

            if (data.code === "S01") {

                this.props.changeMessageContent("密码修改成功");
                hashHistory.push({"pathname": "mine"});

            } else {

                this.props.changeMessageContent(data.message);

            }

        });

        } else {

            this.props.changeMessageContent("输入新密码不一致");

        }

    }

    render () {

        const {newPwd1, newPwd2, pwd} = this.state;

        return (
            <div className="Login">
                <header>
                    <TopBar title="修改密码" border="boder" />
                </header>
                <div className="container">
                    <p>请输入原密码</p>
                    <input value={pwd} type="password" placeholder="请输入密码"
                        onChange={(e) => {

                            this.setState({"pwd": e.target.value});

                        }}
                    />

                    <p>请输入新密码</p>
                    <input value={newPwd1} type="password" placeholder="请输入密码"
                        onChange={(e) => {

                            this.setState({"newPwd1": e.target.value});

                        }}
                    />

                    <p>再次输入新密码</p>
                    <input value={newPwd2} type="password" placeholder="请输入密码"
                        onChange={(e) => {

                            this.setState({"newPwd2": e.target.value});

                        }}
                    />

                    <button className="register" onClick={() => this.handleReset()}>提交</button>
                </div>
            </div>
        );

    }
}
export default Reset;
