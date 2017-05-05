import React from "react";
import "./Login.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import {Link} from "react-router";

class Login extends React.Component {
    constructor (props) {

        super(props);
        this.state = {"agree": false};

    }
    componentDidMount(){
      this.props.showBottom(false);
    }

    handleAgree () {

        this.setState({"agree": !this.state.agree});

    }
    render () {

        const {agree} = this.state;

        return (
            <div className="Login">
                <header>
                    <TopBar title="登录" border="boder" link={{
                        "content": "切换到注册",
                        "url": "/register"
                    }}
                    />
                </header>
                <div className="container">
                    <p>用户账号</p>
                    <input type="text" placeholder="输入您注册的手机号码或邮箱号码" />

                    <p>设置密码</p>
                    <input type="text" placeholder="请输入您的密码" />

                    <button className="register">登录</button>
                </div>
            </div>
        );

    }
}
export default Login;
