import React from "react";
import "./PlatformDropIn.scss";
import ajax from "../../../services/ajax.js";
import axios from "axios";
import { getCookie } from "../../../services/tools.js";

class PlatformDropIn extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            "_isMounted": true,
            "categoryId": -1,
            "nowactive": -1,
            "platformDropIns": []
        };
        this.getInitData = this.getInitData.bind(this);
        this.getListData = this.getListData.bind(this)
        this.fetchPlatformDropIn = this.fetchPlatformDropIn.bind(this);
    }

    componentDidMount () {
        this._isMounted = true
        this.getInitData();
    }
    componentWillUnmount() {
        this._isMounted = false
    }
    getInitData() {
        axios.get(`http://www.dazhao100.com/api.php?u=getDelivery&uid=${getCookie("uid")}`).then((data) => {
            if (data.data.error == "0") {
                const platformDropIns = data.data.listjson
                console.log(platformDropIns)

                platformDropIns.map((elem, index) => {
                    Object.assign(elem, {"isShowall": false});
                })
                if (this._isMounted) {
                    this.setState({platformDropIns})
                }
            } else {
                this.setState({platformDropIns: []})
            }
        })
    }
    getListData(args) {
        axios.get(`http://www.dazhao100.com/api.php?u=getDelivery&uid=${getCookie("uid")}&passstate=${args[0]}` + (args[1] ? `&tb_read=${args[1]}`:'')).then((data) => {
            if (data.data.error == "0") {
                const platformDropIns = data.data.listjson
                platformDropIns.map((elem, index) => {
                    Object.assign(elem, {"isShowall": false});
                })
                if (this._isMounted) {
                    this.setState({platformDropIns})
                }
            } else {
                this.setState({platformDropIns:[]})
            }
        })
    }
    changeShowAll (index) {
        const platformDropIns = JSON.parse(JSON.stringify(this.state)).platformDropIns;
        platformDropIns[index].isShowall = !platformDropIns[index].isShowall;
        this.setState({platformDropIns});
    }
    fetchPlatformDropIn (categoryId, args) {
        if (categoryId == "-1") {
            this.getInitData()
        } else {
            this.getListData(args)
        }
    }
    changeCategory (categoryId, args) {
        this.setState({"nowactive": categoryId}, () => {
            this.fetchPlatformDropIn(categoryId, args);
        });
    }
    render () {
        const {platformDropIns} = this.state;
        const platformDropInsList = platformDropIns.map((elem, index) => {
            const detailStageList = elem.trackslist.map((value, i) => {
                const classes = i === 0 ? "dropinitem clearfix active" : "dropinitem clearfix";
                const num = elem.trackslist.length - 1 - i;
                return (
                    <div key={i} className={classes}>
                        <div className="progress">
                            <span />
                            <em />
                        </div>
                        <div className="dropincon">
                            <p>{value.tb_title}</p>
                            <time>{value.tb_time}<em />{value.tb_timetwo}</time>
                        </div>
                    </div>
                );
            });

            return (
                <div key={index} className="dropindetail">
                    <p>
                        <span>{elem.expectwork}</span>
                        <span>{elem.result_state}</span>
                    </p>
                    <p>{elem.companyname}</p>
                    <div className="dropincontent clearfix">
                        <time>{elem.tb_addtime}</time>
                        {
                            elem.isShowall
                                ? <div className="dropinmain">
                                    <div className="dropinhead active">
                                        <span className="active">投递简历</span>
                                        <em className={elem.trackslist.length >= 2 ? elem.trackslist[1].done ? "active" : "" : ""} />
                                        <span className={elem.trackslist.length >= 2 ? elem.trackslist[1].done ? "active" : "" : ""}>被查看</span>
                                        <em className={elem.trackslist.length >= 3 ? elem.trackslist[2].done ? "active" : "" : ""} />
                                        <span className={elem.trackslist.length >= 3 ? elem.trackslist[2].done ? "active" : "" : ""}>通过筛选</span>
                                        <em className={elem.trackslist.length >= 4 ? elem.trackslist[3].done ? "active" : "" : ""} />
                                        <span className={elem.trackslist.length >= 4 ? elem.trackslist[3].done ? "active" : "" : ""}>面试邀请</span>
                                        <em className={elem.trackslist.length >= 5 ? elem.trackslist[4].done ? "active" : "" : ""} />
                                        <span className={elem.trackslist.length >= 5 ? elem.trackslist[4].done ? "active" : "" : ""}>面试结果</span>
                                    </div>
                                    <div className="dropinwrap">
                                        {detailStageList}
                                    </div>
                                </div> : ""
                        }
                        <span>
                            <img onClick={this.changeShowAll.bind(this, index)} src={elem.isShowall ? "/src/images/Back_top.png" : "/src/images/Back_down.png"} alt="updown" />
                        </span>
                    </div>
                </div>
            );
        });

        return (
            <div id="platformDropIn">
                <div className="status">
                    <span onClick={this.changeCategory.bind(this, -1)} className={this.state.nowactive === -1 ? "active" : ""}>全部</span>
                    <span onClick={this.changeCategory.bind(this, 1, [0])} className={this.state.nowactive === 1 ? "active" : ""}>投递成功</span>
                    <span onClick={this.changeCategory.bind(this, 2, [0, 1])} className={this.state.nowactive === 2 ? "active" : ""}>被查看</span>
                    <span onClick={this.changeCategory.bind(this, 3, [1])} className={this.state.nowactive === 3 ? "active" : ""}>通过筛选</span>
                    <span onClick={this.changeCategory.bind(this, 4, [2])} className={this.state.nowactive === 4 ? "active" : ""}>面试邀请</span>
                    <span onClick={this.changeCategory.bind(this, 5, [3])} className={this.state.nowactive === 5 ? "active" : ""}>面试结果</span>
                </div>
                <div className="alldropin">
                    {platformDropInsList}
                </div>
            </div>
        );
    }
}

export default PlatformDropIn;
