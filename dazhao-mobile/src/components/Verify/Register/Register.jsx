import React from "react";
import "./Register.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import {Link} from "react-router";
import {verifyTel} from "../../../services/tools";
import ajax from "../../../services/ajax";

class Register extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "agree": false,
            "tel": "",
            "pwd": "",
            "code": "",
            "time": "",
            "activeTel": ""
        };

    }
    componentDidMount () {

        // This.props.showBottom(false);

    }

    verifyTel () {

        if (!verifyTel(this.state.tel)) {

            // This.props.showMessage("手机号有误，请重新输入");

        } else if (!this.state.time) {

            ajax({
                "url": "/zhaoda/verify",
                "method": "POST",
                "data": `tele=${this.state.tel}`
            }).
        then((data) => {

            if (data.code === "S01") {

                // This.props.showMessage("验证码已发送");
                this.setState({"activeTel": data.contents.tele});

            } else {

                // This.props.showMessage(data.message);

            }

        });
            this.setState({"time": 60}, () => {

                const countDown = setInterval(() => {

                    this.setState({"time": parseInt(this.state.time) - 1});
                    if (this.state.time === 40) {

                        clearInterval(countDown);
                        this.setState({"time": ""});

                    }

                }, 1000);

            });

        }

    }

    handleAgree () {

        this.setState({"agree": !this.state.agree});

    }

    handleRegister () {

        if (!this.state.activeTel) {

            // This.props.showMessage("尚未发送验证码");

        } else if (!this.state.tel || !this.state.code || !this.state.pwd) {

            // This.props.showMessage("请填写完整信息后再试");

        } else if (this.state.tel !== this.state.activeTel) {

            // This.props.showMessage("当前手机号与验证码接收手机号不一致");

        } else if (!this.state.agree) {

            // This.props.showMessage("请同意再试");

        } else {

            ajax({
                "url": "/zhaoda/register",
                "method": "POST",
                "data": `account=${this.state.tel}&pwd=${this.state.pwd}&code=${this.state.code}`
            }).
        then((data) => {

            if (data.code === "S01") {

                // This.props.showMessage("注册成功");

            } else {

                // This.props.showMessage("未知错误，请重试");

            }

        });

        }


    }

    render () {

        const {agree, tel, pwd, code, time} = this.state;

        return (
            <div className="Register">
                <header>
                    <TopBar title="注册" border="boder" link={{
                        "content": "切换到登录",
                        "url": "/tologin"
                    }}
                    />
                </header>
                <div className="container">
                    <p>手机号注册</p>
                    <input value={tel} type="text" placeholder="输入手机号"
                        onChange={(e) => {

                            this.setState({"tel": e.target.value});

                        }}
                    />
                    <p>验证码</p>
                    <input value={code} type="text"
                        onChange={(e) => {

                            this.setState({"code": e.target.value});

                        }}
                    />
                    <p>设置密码</p>
                    <input value={pwd} type="password" placeholder="请输入密码"
                        onChange={(e) => {

                            this.setState({"pwd": e.target.value});

                        }}
                    />
                    <button className="verify" onClick={() => this.verifyTel()}>发送验证码{time ? ` ${time}s` : ""}</button>
                    <p className="agree">
                        <span onClick={this.handleAgree.bind(this)}>
                            {agree ? <img src="/src/images/icon/agree.png" /> : ""}
                        </span>
                        我已阅读并同意
                    </p>
                    <button className="register" onClick={() => this.handleRegister()}>注册</button>
                </div>
            </div>
        );

    }
}
export default Register;
