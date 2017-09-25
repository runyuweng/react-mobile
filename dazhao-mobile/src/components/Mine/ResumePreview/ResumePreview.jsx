import React from "react";
import "./ResumePreview.scss";
import TopBar from "../../Public/TopBar/TopBar.jsx";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";
import { getCookie } from "../../../services/tools.js";
import axios from "axios";
import PDF from "react-pdf-js";
import COPY from "copy-to-clipboard";
import qs from "qs";

class CvCenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "sendboxshow": false,
            "_isMounted": true,
            "fromurl": '',
            "shareurl": "",
            "wxShare": false,
            "browShare": false,
            "toEmail": "",
            "fromEmail": "",
            "emailTheme": "",
            "emailName": "",
            "emailTxt": ` 脚步网络科技有限公司HR，您好！
            
我是应聘贵公司房地产招商专员的求职者招妹。
我曾做过大招世纪广场投资有限公司的招商招商专员，同同时也做过大招企业发展有限公司的销售实习生。我有信心胜任贵公司这份工作，希望能有机会面谈。
下面的链接是我的简历，请打开查看我的详细资料，谢谢。`
        }
        this.SendResume = this.SendResume.bind(this)
        this.getInitData = this.getInitData.bind(this)
        this.shareResume = this.shareResume.bind(this)
        this.hideWXTips = this.hideWXTips.bind(this)
        this.hideBrowTips = this.hideBrowTips.bind(this)
        this.copyLink = this.copyLink.bind(this)
        this.closeEmailBox = this.closeEmailBox.bind(this)
    }

    SendResume () {
        this.setState({"sendboxshow": !this.state.sendboxshow})
    }

    componentDidMount() {
        this.getInitData()
    }

    shareResume () {
        const ua = window.navigator.userAgent.toLowerCase()
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            this.setState({"wxShare": !this.state.wxShare})
        } else {
            this.setState({"browShare": !this.state.browShare})
        }
    }

    hideWXTips() {
        this.setState({"wxShare": !this.state.wxShare})
    }

    hideBrowTips() {
        this.setState({"browShare": !this.state.browShare})
    }

    copyLink() {
        COPY(this.state.shareurl, {
            debug: true,
            message: "确认复制链接？"
        })
        this.setState({"browShare": !this.state.browShare})
    }

    sendEmali () {
        if (!this.state.emailTheme) {
            this.props.changeMessageContent('邮箱主题不能为空！');
            return;
        }
        if( !this.state.emailName) {
            this.props.changeMessageContent('姓名不能为空！');
            return;
        }
        if (!this.state.fromEmail) {
            this.props.changeMessageContent('发送邮箱不能为空！');
            return;
        }
        if (!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(this.state.toEmail) && !/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(this.state.fromEmail)) {
            this.props.changeMessageContent('邮箱格式不对~')
            return;
        }
        if(!this.state.toEmail) {
            this.props.changeMessageContent('HR邮箱不能为空！');
            return;
        }
        if (!this.state.emailTxt) {
            this.props.changeMessageContent('发送内容不能为空！');
            return;
        }

        axios.post("http://www.dazhao100.com/resume/resumeMailing", qs.stringify({
            resumes_id: this.props.params.id,
            uid: getCookie("uid"),
            SendTitle: this.state.emailTheme,
            truename: this.state.emailName,
            sendEmail: this.state.toEmail,
            fromEmail: this.state.fromEmail,
            sendTxt: this.state.emailTxt
        })).then((data) => {
            if (data.data.error == "0") {
                this.setState({"sendboxshow": !this.state.sendboxshow})
                this.props.changeMessageContent('投递成功！');
                this.setState({
                    "SendTitle": '',
                    "truename": '',
                    "sendEmail": '',
                    "fromEmail": '',
                    "sendTxt": ''
                })
            }
        })
    }
    closeEmailBox() {
        this.setState({"sendboxshow": !this.state.sendboxshow})
    }
    getInitData() {
        axios.get(`http://www.dazhao100.com/api.php?u=getResumesBasic&resumes_id=${this.props.params.id}&uid=${getCookie("uid")}`).then((data) => {
            this.setState({
                "fromurl": data.data.listjson.fromurl,
                "emailTheme": data.data.listjson.title,
                "shareurl": data.data.listjson.shareurl
            })
            console.log(data)
        })
    }
    render() {
        return (
            <div className="ResumePreviewBox">
                <div className="ResumePreviewTitle">
                    <header>
                        <TopBar title="简历预览" border="boder"/>
                    </header>
                    <div className="share" onClick={this.shareResume}></div>
                </div>

                <div className="ResumePreview">
                    <div className="iframeContent">
                        {
                            this.state.fromurl?<PDF file={this.state.fromurl} />:''
                        }
                    </div>
                </div>

                <div className="ResumePreviewBottom">
                    <div className="ResumeSendBtn">
                        <Link><span onClick={this.SendResume}>邮件投递</span></Link>
                    </div>
                    <div className="ResumeDownloadBtn">
                        <Link href={this.state.fromurl}><span>简历下载(PDF)</span></Link>
                    </div>
                </div>
                {
                    this.state.sendboxshow ? <div className="sendResumeBox">
                        <div className="container">
                            <div className="content">
                                <h2>简历快速投递</h2>
                                <p className="first">你可以把做好的简历一键投递到心仪公司HR的邮箱</p>
                                <p className="second">备战校招，快人一步！</p>
                                <div className="resumeTitleContent">
                                    <div className="row">
                                        <label htmlFor="">邮件主题：</label>
                                        <div className="input">
                                            <input type="text" value={this.state.emailTheme}
                                                   onChange={(e) => {
                                                       this.setState({"emailTheme": e.target.value});
                                                   }} placeholder={"输入邮件主题"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="resumeTitleContent">
                                    <div className="row">
                                        <label htmlFor="">您的姓名：</label>
                                        <div className="input">
                                            <input type="text" onChange={(e) => {
                                                this.setState({"emailName": e.target.value});
                                            }} placeholder={"输入您的姓名"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="resumeTitleContent">
                                    <div className="row">
                                        <label htmlFor="">收件邮件：</label>
                                        <div className="input">
                                            <input type="text" onChange={(e) => {
                                                this.setState({"toEmail": e.target.value});
                                            }} placeholder={"输入HR收件邮件"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="resumeTitleContent">
                                    <div className="row">
                                        <label htmlFor="">发件邮箱：</label>
                                        <div className="input">
                                            <input type="text" onChange={(e) => {
                                                this.setState({"fromEmail": e.target.value});
                                            }} placeholder={"输入您的发件邮箱"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="textarea">
                                    <textarea value={this.state.emailTxt} onChange={(e) => {
                                        this.setState({"emailTxt": e.target.value});
                                    }}></textarea>
                                </div>
                            </div>
                            <div className="sendBtnBox">
                                <div className="resetBtn" onClick={this.closeEmailBox}>取消</div>
                                <div className="sendBtn" onClick={() => this.sendEmali()}>投递</div>
                            </div>
                        </div>
                    </div>:''
                }
                {
                    this.state.wxShare ? <div className="wxShareTips" onClick={this.hideWXTips}><div className="tipsContent"></div></div>:""
                }
                {
                    this.state.browShare ? <div className="browShareTips">
                        <div className="tipsContent">
                            <p>分享简历</p>
                            <div className="copyIcon">
                                <div className="copyIconBox" onClick={this.copyLink}></div>
                                <p>复制链接</p>
                            </div>
                            <div className="resetBtn" onClick={this.hideBrowTips}>取消</div>
                        </div>
                    </div>:""
                }
            </div>
        );
    }
}

export default CvCenter;
