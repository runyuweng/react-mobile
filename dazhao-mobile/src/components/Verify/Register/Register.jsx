import React from "react";
import "./Register.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import {Link} from "react-router";

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            agree : false
        }
    }
    componentDidMount(){
        this.props.showBottom(false);
    }

    handleAgree(){
        this.setState({
            agree: !this.state.agree
        })
    }
    render () {
        const {agree} = this.state;

        return (
            <div className="Register">
                <header>
                    <TopBar title="注册" border="boder" link={{content:'切换到登录',url:'/login'}}/>
                </header>
                <div className="container">
                    <p>手机号注册</p>
                    <input type="text" placeholder="输入手机号"/>
                    <p>验证码</p>
                    <input type="text" />
                    <p>设置密码</p>
                    <input type="text" placeholder="请输入密码"/>
                    <button className="verify">发送验证码</button>
                    <p className="agree">
                        <span onClick={this.handleAgree.bind(this)}>
                            {agree?<img src="/src/images/icon/agree.png" />:''}
                        </span>
                        我已阅读并同意
                    </p>
                    <button className="register">注册</button>
                </div>
            </div>
        );

    }
}
export default Register;
