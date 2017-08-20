import React from "react";
import "./Mine.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";
import Loading from "../../Public/Loading/Loading.jsx";
import {
    delCookie
  } from "../../../services/tools.js";

class Mine extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "personalMsg": {},
            "showLoading": true
        };

        this.fetchUserMsg = this.fetchUserMsg.bind(this);

    }

    getChildContext () {

        return {"changeMessageContent": this.props.changeMessageContent};

    }
    componentDidMount () {

        // This.props.changeMessageContent("1")

        this.props.changeBottomState(true);
        this.fetchUserMsg();

    }

    fetchUserMsg () {

        ajax({"url": "/zhaoda/user/userdetail"}).
        then((data) => {

            if (data.code === "S01") {

                this.setState({
                    "personalMsg": data.contents,
                    "showLoading": false
                });

            }

        });

    }

    logout = () => {

        ajax({
            "url": "/zhaoda/user/userdetail",
            "method": "POST"
        }).
        then((data) => {

            if (data.code === "S01") {

                delCookie("token");
                hashHistory.push({"pathname": "login"});
                this.context.changeMessageContent("退出成功");

            } else {

                this.context.changeMessageContent(data.message);

            }

        });

    }

    render () {

        const {personalMsg, showLoading} = this.state;

        return (
            <div>
                {showLoading ? <Loading />
            : <div className="Mine">

                <header className="head">
                    <div className="top">
                        <span className="imgone">{true ? <img src={personalMsg.img || "/src/images/boy.png"} className="blur" /> : ""}</span>
                        <div className="circle1">
                            <span className="circle2"><img src={personalMsg.img || "/src/images/boy.png"} /></span>
                        </div>
                        <Link to="/edit"><span className="edit" >编辑</span></Link>
                    </div>
                    {true ? <p><em>{ personalMsg.nickname || "待完善" }</em><span>{ personalMsg.sex === "女" ? <img src="/src/images/girl.png" /> : <img src="/src/images/man.png" />}</span></p> : <Link to="/tologin"><p>点击登录</p></Link>}
                    <div className="intro">
                        {/* <div className="school">
                            <span>{true ? personalMsg.school||"学校未知" : "学校未知"}</span><br />
                            <span>{true ? personalMsg.major||"专业未知" : "专业未知"}</span>
                        </div> */}
                        <div className="fans">
                            <span><b>{personalMsg.delivered || 0}</b><br />已投递</span>
                            <em />
                            <span><b>{personalMsg.need_interview || 0}</b><br />待面试</span>
                            <em />
                            <span><b>{personalMsg.need_interview || 0}</b><br />被邀约</span>
                        </div>
                    </div>
                </header>
                <div className="experience">
                    <div>
                        <Link to="/growrecord">
                            <span><img src="/src/images/grow.png" />
                                <em>成长记录</em></span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/cvcenter">
                            <span><img src="/src/images/cv.png" />
                                <em>简历/求职</em></span>
                        </Link>
                    </div>

                    <div>
                        <Link to="/notify">
                            <span><img src="/src/images/message.png" />
                                <em>消息通知</em></span>
                        </Link>
                    </div>
                </div>

                <div className="options">
                    <Link to="minezhaoda/concern/concernquestion">
                        <p><em>我的招答</em><span><img src="/src/images/Back_Button.png" /></span></p>
                    </Link>
                    <Link to="reset">
                        <p><em>修改密码</em><span><img src="/src/images/Back_Button.png" /></span></p>
                    </Link>
                    <Link to="feedback">
                        <p><em>建议反馈</em><span><img src="/src/images/Back_Button.png" /></span></p>
                    </Link>
                    <p onClick={this.logout}><em>退出登录</em><span><img src="/src/images/Back_Button.png" /></span></p>
                </div>
            </div>}
            </div>
        );

    }
}

Mine.childContextTypes = {"changeMessageContent": React.PropTypes.func};

export default Mine;
