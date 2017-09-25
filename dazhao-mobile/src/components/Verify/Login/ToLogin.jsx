import React from "react";
import "./ToLogin.scss";
import TopBar from "../../Public/TopBar/TopBar.jsx";
import {Link} from "react-router";

class ToLogin extends React.Component {
    constructor (props) {

        super(props);

    }
    componentDidMount () {

        this.props.changeBottomState(false);

    }

    render () {

        return (
            <div className="ToLogin">
                <header>
                    <TopBar title="登录" border="boder" link={{
                        "content": "注册",
                        "url": "/register"
                    }}
                    />
                </header>
                <div className="container">
                    <object data="/src/images/logo_2.svg" type="image/svg+xml" />
                </div>
                <div className="button-group">
                    <Link to="/login">
                        <button>邮箱或手机号登录</button>
                    </Link>
                    <button>微信快速登录</button>
                </div>
            </div>
        );

    }
}
export default ToLogin;
