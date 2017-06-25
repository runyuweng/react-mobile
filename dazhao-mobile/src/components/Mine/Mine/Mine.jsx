import React from "react";
import "./Mine.scss";
import {Link} from "react-router";

class Mine extends React.Component {

    constructor (props) {

        super(props);
        this.state = {"login": false};

    }
    componentDidMount () {

        this.props.changeBottomState(true);
        // Ajax get personal data

    }

    render () {

        return (
            <div className="Mine">
                <header className="head">
                    <div className="top">
                        <span className="imgone">{this.state.login ? <img src="/src/images/boy1.png" className="blur" /> : ""}</span>
                        <div className="circle1">
                            <span className="circle2"><img src="/src/images/boy.png" /></span>
                        </div>
                        <span className="edit">编辑</span>
                    </div>
                    {this.state.login ? <p><em>周新城</em><span><img src="/src/images/man.png" /></span></p> : <Link to="/tologin"><p>点击登录</p></Link>}
                    <div className="intro">
                        <div className="school">
                            <span>{this.state.login ? "山东大学" : "大招一百"}</span><br />
                            <span>{this.state.login ? "机械设计制造及自动化" : "专注于职业教育和校园招聘"}</span>
                        </div>
                        <div className="fans">
                            <span><b>0</b><br />已投递</span>
                            <em />
                            <span><b>0</b><br />待面试</span>
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
                    <p><em>听课记录</em><span><img src="/src/images/Back_Button.png" /></span></p>
                    <p><em>账号设置</em><span><img src="/src/images/Back_Button.png" /></span></p>
                    <p><em>建议反馈</em><span><img src="/src/images/Back_Button.png" /></span></p>
                </div>
            </div>
        );

    }
}

export default Mine;
