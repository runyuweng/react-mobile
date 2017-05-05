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
          "tel":'',
          "pwd":'',
          "code":'',
          "time":''
        };

    }
    componentDidMount () {

        this.props.showBottom(false);

    }

    verifyTel(){
      if(!this.state.time&&verifyTel(this.state.tel)){
        this.setState({time:60},()=>{
          let countDown = setInterval(()=>{
            this.setState({time:parseInt(this.state.time)-1});
            if(this.state.time === 40 ){
              clearInterval(countDown);
              this.setState({time:''});
            }
          },1000)
        })
      }

    }

    handleAgree () {

        this.setState({"agree": !this.state.agree});

    }
    render () {

        const {agree,tel,pwd,code,time} = this.state;

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
                      onChange={(e)=>{
                        this.setState({tel:e.target.value})
                      }}/>
                    <p>验证码</p>
                    <input value={code} type="text"
                      onChange={(e)=>{
                        this.setState({code:e.target.value})
                      }}/>
                    <p>设置密码</p>
                    <input value={pwd} type="password" placeholder="请输入密码"
                      onChange={(e)=>{
                        this.setState({pwd:e.target.value})
                      }}/>
                    <button className="verify" onClick={()=>this.verifyTel()}>发送验证码{time?` ${time}s`:''}</button>
                    <p className="agree">
                        <span onClick={this.handleAgree.bind(this)}>
                            {agree ? <img src="/src/images/icon/agree.png" /> : ""}
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
