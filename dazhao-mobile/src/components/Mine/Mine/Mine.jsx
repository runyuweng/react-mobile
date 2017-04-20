import React from "react";
import "./Mine.scss";
import {Link} from "react-router";

class Mine extends React.Component {

    constructor (props) {

        super(props);

    }
    componentDidMount () {

        this.props.showBottom(true);

    }

    render () {

        return (
            <div className="Mine">
                <header className="head">
                    <div className="top">
                        <span className="imgone"><img src="/src/images/boy1.png" /></span>
                        <span className="topshadow"><img src="/src/images/personalBg.png" /></span>
                        <div className="circle1">
                            <span className="circle2"><img src="/src/images/boy.png" /></span>
                        </div>
                        <span className="edit">编辑</span>
                    </div>
                    <p><em>周新城</em><span><img src="/src/images/man.png" /></span></p>
                    <div className="intro">
                        <div className="school">
                            <span>山东大学</span><br />
                            <span>机械设计制造及自动化</span>
                        </div>
                        <div className="fans">
                            <span><b>310</b><br />粉丝</span>
                            <em />
                            <span><b>21</b><br />赞同</span>
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
                    <p><em>招答</em><span><img src="/src/images/Back_Button.png" /></span></p>
                    <p><em>职观</em><span><img src="/src/images/Back_Button.png" /></span></p>
                    <p><em>账号设置</em><span><img src="/src/images/Back_Button.png" /></span></p>
                    <p><em>建议反馈</em><span><img src="/src/images/Back_Button.png" /></span></p>
                </div>
            </div>
        );

    }
}

export default Mine;
