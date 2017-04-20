import React from "react";
import "./Login.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import {Link} from "react-router";

class Login extends React.Component {
    constructor(props){
        super(props);

    }
    componentDidMount(){
        this.props.showBottom(false);
    }

    render () {

        return (
            <div className="Login">
                <header>
                    <TopBar title="登录" border="boder" link={{content:'注册',url:'/register'}}/>
                </header>
                <div className="container">
                    <object data="/src/images/logo_2.svg" type="image/svg+xml" />
                </div>
                <div className="button-group">
                    <button>邮箱或手机号登录</button>
                    <button>微信快速登录</button>
                </div>
            </div>
        );

    }
}
export default Login;
