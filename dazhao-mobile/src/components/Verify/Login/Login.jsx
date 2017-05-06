import React from "react";
import "./Login.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import {Link} from "react-router";

class Login extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
          "account": '',
          "pwd":''
        };

    }
    componentDidMount(){
      this.props.showBottom(false);
    }

    handleLogin(){

    }

    render () {

        const {account, pwd} = this.state;

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
                    <input value={account} type="text" placeholder="输入您注册的手机号码或邮箱号码"
                      onChange={(e)=>{
                        this.setState({account:e.target.value});
                      }}/>

                    <p>设置密码</p>
                    <input value={pwd} type="text" placeholder="请输入您的密码"
                      onChange={(e)=>{
                        this.setState({pwd:e.target.value});
                      }}/>

                    <button className="register" onClick={()=>this.handleLogin()}>登录</button>
                </div>
            </div>
        );

    }
}
export default Login;
