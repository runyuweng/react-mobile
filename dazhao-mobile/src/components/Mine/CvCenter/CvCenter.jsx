import React from "react";
import "./CvCenter.scss";
import TopBar from "../../Public/TopBar/TopBar.jsx";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";
import axios from "axios";
import { getCookie } from "../../../services/tools.js";

class CvCenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "showdialog": false,
            "hasResume": false,
            "openingsNum": 0,
            "collectNum": 0,
            "invitNum": 0,
            "more": false,
            "onlineResume": [],
            "deleteid": null,
            "deletetitle": ''
        };
        this.getInitData = this.getInitData.bind(this);
        this.getResumeData = this.getResumeData.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.cancleClick = this.cancleClick.bind(this);
        this.showMore = this.showMore.bind(this);
        this.deleteOnlineResume = this.deleteOnlineResume.bind(this);
    }
    handleClick(args) {
        this.setState({
            "showdialog": !this.state.showdialog,
            "deleteid": args[0],
            "deletetitle": args[1]
        }, () => {
            this.state.showdialog ? this.refs.deleteModal.addEventListener("touchmove", (e) => {
                e.preventDefault();
            }, true) : "";
        });
    }
    cancleClick() {
        this.setState({"showdialog": !this.state.showdialog});
    }
    componentDidMount() {
        this.getResumeData()
        this.getInitData()
        this.props.changeBottomState(false)
    }
    getInitData() {
        axios.get(`http://www.dazhao100.com/api.php?u=personCount&uid=${getCookie("uid")}`).then((data) => {
            const {openingsNum, collectNum, invitNum} = data.data.listjson
            this.setState({ openingsNum, collectNum, invitNum })
        })
    }
    getResumeData() {
        axios.get(`http://www.dazhao100.com/api.php?u=getMyResumes&uid=${getCookie("uid")}`).then((data) => {
            const onlineResume = data.data.listjson
            this.setState({onlineResume})
            if (this.state.onlineResume.length > 2) {
                this.setState({
                    "more": true,
                    "moreTxt": true,
                    "height": true
                })
            }
        })
    }
    deleteOnlineResume(id) {
        axios.get(`http://www.dazhao100.com/api.php?u=delMyResumes&resumes_id=${id}&uid=${getCookie("uid")}`).then((data) => {
            if (data.data.error == '0') {
                this.setState({"showdialog": !this.state.showdialog});
                this.getResumeData()
            }
        })
    }
    showMore() {
        this.setState({
            "more": !this.state.more,
            "moreTxt": !this.state.moreTxt,
            "height": !this.state.height
        })
    }
    render() {
        const {onlineResume} = this.state;
        const onlineResumeList = onlineResume.map((elem, index) =>
            <div className="cvitems" key={index}>
                <div className="cvleft">
                    <span><Link to={`/preview/${elem.resumes_id}`}>{elem.title}</Link></span>
                    <span>{elem.expectwork}<em>{elem.expectcity}</em></span>
                </div>
                <span className="cvright">
                    {/*<Link to={`/cvmessage/${elem.resumes_id}`}><em>编辑</em></Link>*/}
                    <Link to={`/edmessage/${elem.resumes_id}`}><em>编辑</em></Link>
                    <em onClick={this.handleClick.bind(this, [`${elem.resumes_id}`, elem.title])}>删除</em>
                </span>
            </div>
        );
        console.log(onlineResumeList)
        return (
            <div className="CvCenter">
                <header>
                    <TopBar title="简历中心" border="boder"/>
                </header>
                <h3>在线简历</h3>
                <div className="resume-list">
                    {
                        this.state.height ?
                            <div className="main height">
                                {onlineResumeList}
                            </div> : <div className="main">
                                {onlineResumeList}
                            </div>
                    }
                    {
                        this.state.onlineResume.length > 2 ? <div className="more">
                            <span onClick={this.showMore}>{this.state.moreTxt?"展开全部简历":"收起更多简历"} {this.state.more ? <img  src="/src/images/more.svg"/>:<img  src="/src/images/more-no.svg"/>}</span>
                        </div> : ''
                    }
                </div>

                <div className="options">
                    <Link to="dropinbox/platformdropin">
                        <p>
                            <em>投递箱
                                {
                                    this.state.openingsNum ? <b>{ this.state.openingsNum }</b> : ''
                                }
                            </em>
                            <span><img src="/src/images/Back_Button.png"/></span>
                        </p>
                    </Link>
                    <Link to="/invitation">
                        <p>
                            <em>邀请函
                                {
                                    this.state.invitNum ? <b>{ this.state.invitNum }</b> : ''
                                }
                            </em>
                            <span><img src="/src/images/Back_Button.png"/></span>
                        </p>
                    </Link>
                    <Link to="/favoritepage/favoritejobs">
                        <p>
                            <em>收藏夹
                                {
                                    this.state.collectNum ? <b>{ this.state.collectNum }</b> : ''
                                }
                            </em>
                            <span><img src="/src/images/Back_Button.png"/></span>
                        </p>
                    </Link>
                </div>

                {
                    this.state.showdialog
                        ? <div id="deleteModal" ref="deleteModal">
                            <div className="dialog">
                                <div className="deleteheader">删除简历</div>
                                <div className="deletemain">
                                    <p><span>“{ this.state.deletetitle }”</span>将被删除</p>
                                    <p>此操作不能撤销</p>
                                </div>
                                <div className="deletefooter">
                                    <span onClick={this.cancleClick}>取消</span>
                                    <span onClick={this.deleteOnlineResume.bind(this, this.state.deleteid)}>删除简历</span>
                                </div>
                            </div>
                        </div>
                        : ""
                }
            </div>
        );
    }
}

export default CvCenter;
