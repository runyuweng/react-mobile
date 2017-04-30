import React from "react";
import "./Notify.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import {Link} from "react-router";

class Notify extends React.Component {

    constructor (props) {

        super(props);

    }

    componentDidMount () {

        this.props.showBottom();

    }

    render () {

        return (
            <div className="Notify">
                <header>
                    <TopBar title="消息通知" border="boder" />
                </header>

                <div className="experience">
                    <div>
                        <span><img src="/src/images/state.png" />
                            <em>投递状态</em></span>
                    </div>
                    <div>
                        <span><img src="/src/images/invite.png" />
                            <em>校招邀约</em></span>
                    </div>
                    <Link to="/activity">
                        <div>
                            <span><img src="/src/images/zdmessage.png" />
                                <em>大招活动</em></span>
                        </div>
                    </Link>
                </div>

                <div className="notifyContent">
                    <div className="notifyItem">
                        <div>
                            <span><img src="/src/images/file.png" alt="文件" /></span>
                        </div>
                        <div>
                            <p>
                                <span>投递进度更新</span>
                                <time>14:30</time>
                            </p>
                            <p>企业已接收到您投递的简历。</p>
                            <p><span>岗位：</span><span>企业服务部实习生</span></p>
                        </div>
                    </div>
                    <div className="notifyItem">
                        <div>
                            <span><img src="/src/images/zlbh.png" alt="文件" /></span>
                        </div>
                        <div>
                            <p>
                                <span>投递进度更新</span>
                                <time>14:30</time>
                            </p>
                            <p>企业已接收到您投递的简历。</p>
                            <p><span>岗位：</span><span>企业服务部实习生</span></p>
                        </div>
                    </div>
                    <div className="notifyItem">
                        <div>
                            <span><img src="/src/images/file.png" alt="文件" /></span>
                        </div>
                        <div>
                            <p>
                                <span>投递进度更新</span>
                                <time>14:30</time>
                            </p>
                            <p>企业已接收到您投递的简历。</p>
                            <p><span>岗位：</span><span>企业服务部实习生</span></p>
                        </div>
                    </div>
                    <div className="notifyItem">
                        <div>
                            <span><img src="/src/images/file.png" alt="文件" /></span>
                        </div>
                        <div>
                            <p>
                                <span>投递进度更新</span>
                                <time>14:30</time>
                            </p>
                            <p>企业已接收到您投递的简历。</p>
                            <p><span>岗位：</span><span>企业服务部实习生</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default Notify;
