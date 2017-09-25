import React from "react";
import "./Notify.scss";
import TopBar from "../../Public/TopBar/TopBar.jsx";
import {Link} from "react-router";

class Notify extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "noyifymessage": [
                {
                    "id": 1,
                    "img": "/src/images/file.png",
                    "messagetitle": "投递状态更新",
                    "time": "14:30",
                    "message": "企业已接收到您投递的简历。",
                    "job": "企业服务部实习生"
                },
                {
                    "id": 3,
                    "img": "/src/images/file.png",
                    "messagetitle": "投递状态更新",
                    "time": "14:30",
                    "message": "企业已接收到您投递的简历。",
                    "job": "企业服务部实习生"
                },
                {
                    "id": 2,
                    "img": "/src/images/file.png",
                    "messagetitle": "投递状态更新",
                    "time": "14:30",
                    "message": "企业已接收到您投递的简历。",
                    "job": "企业服务部实习生"
                }
            ]
        };

    }

    componentDidMount () {

        this.props.changeBottomState();

    }

    render () {

        const {noyifymessage} = this.state;
        const noyifymessageList = noyifymessage.map((elem, i) =>
            <div key={i} className="notifyItem">
                <div>
                    <span><img src={elem.img} alt="文件" /></span>
                </div>
                <div>
                    <p>
                        <span>{elem.messagetitle}</span>
                        <time>{elem.time}</time>
                    </p>
                    <p>{elem.message}</p>
                    <p><span>岗位：</span><span>{elem.job}</span></p>
                </div>
            </div>
            );

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
                    {noyifymessageList}
                </div>
            </div>
        );

    }
}

export default Notify;
