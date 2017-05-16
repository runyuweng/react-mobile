import React from "react";
import "./PlatformDropIn.scss";
import ajax from "../../../services/ajax.js";

class PlatformDropIn extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "categoryId": -1,
            "nowactive": -1,
            "platformDropIns": [
                {
                    "id": 1,
                    "email": "企业服务部实习生",
                    "latestStatus": "被查看",
                    "company_name": "上海脚步网络科技有限公司",
                    "date": "2016.12.30",
                    "detailStatus": [
                        {
                            "statusid": 1,
                            "statusmessage": "投递简历",
                            "date": "2016.12.30",
                            "time": "10:53:02",
                            "done": true
                        },
                        {
                            "statusid": 2,
                            "statusmessage": "被查看",
                            "date": "2016.12.30",
                            "time": "10:53:02",
                            "done": true
                        }
                    ]
                },
                {
                    "id": 2,
                    "email": "企业服务部实习生",
                    "latestStatus": "不合格",
                    "company_name": "上海脚步网络科技有限公司",
                    "date": "2016.12.30",
                    "detailStatus": [
                        {
                            "statusid": 1,
                            "statusmessage": "投递简历",
                            "date": "2016.12.30",
                            "time": "10:54:01",
                            "done": true
                        },
                        {
                            "statusid": 2,
                            "statusmessage": "被查看",
                            "date": "2016.12.30",
                            "time": "10:54:01",
                            "done": true
                        },
                        {
                            "statusid": 3,
                            "statusmessage": "通过筛选",
                            "date": "2016.12.30",
                            "time": "10:54:01",
                            "done": false
                        }
                    ]
                },
                {
                    "id": 3,
                    "email": "企业服务部实习生",
                    "latestStatus": "不合格",
                    "company_name": "上海脚步网络科技有限公司",
                    "date": "2016.12.30",
                    "detailStatus": [
                        {
                            "statusid": 1,
                            "statusmessage": "投递简历",
                            "date": "2016.12.30",
                            "time": "10:54:01",
                            "done": true
                        },
                        {
                            "statusid": 2,
                            "statusmessage": "被查看",
                            "date": "2016.12.30",
                            "time": "10:54:01",
                            "done": true
                        },
                        {
                            "statusid": 3,
                            "statusmessage": "通过筛选",
                            "date": "2016.12.30",
                            "time": "10:54:01",
                            "done": true
                        },
                        {
                            "statusid": 4,
                            "statusmessage": "面试邀请",
                            "date": "2016.12.30",
                            "time": "10:54:01",
                            "done": true
                        },
                        {
                            "statusid": 5,
                            "statusmessage": "面试结果",
                            "date": "2016.12.30",
                            "time": "10:54:08",
                            "done": false
                        }
                    ]
                }
            ]
        };
        this.fetchPlatformDropIn = this.fetchPlatformDropIn.bind(this);

    }

    componentDidMount () {

        // Console.log([{'id':1,"name":"asd"},{'id':2,"name":"argr"},{'id':3,"name":"dbhmt"}].reverse())

        const platformDropIns = JSON.parse(JSON.stringify(this.state)).platformDropIns;

        platformDropIns.map((elem, index) => {

            Object.assign(elem, {"isShowall": false});

        });


        this.setState({platformDropIns});

        this.fetchPlatformDropIn(this.state.categoryId);

    }

    changeShowAll (index) {

        const platformDropIns = JSON.parse(JSON.stringify(this.state)).platformDropIns;

        platformDropIns[index].isShowall = !platformDropIns[index].isShowall;

        this.setState({platformDropIns});

    }

    fetchPlatformDropIn (categoryId) {

        ajax({"url": `/platformdropin?category=${categoryId}`}).
        then((data) => {

            if (data.code === "S01") {

                const platformDropIns = data.contents;

                this.setState({"platformDropIns": this.state.platformDropIns.push(platformDropIns)});

            } else if (data.code === "S02") {

            } else {

                this.setState({"platformDropIns": this.state.platformDropIns});

            }

        });

    }

    changeCategory (categoryId) {

        this.setState({"nowactive": categoryId}, () => {

            this.fetchPlatformDropIn(categoryId);

        });

    }

    render () {

        // Const lineWidth = window.innerWidth

        const {platformDropIns} = this.state;
        const platformDropInsList = platformDropIns.map((elem, index) => {

            const detailStageList = elem.detailStatus.map((value, i) => {

                const classes = i === 0 ? "dropinitem clearfix active" : "dropinitem clearfix";
                const num = elem.detailStatus.length - 1 - i;


                return (
                    <div key={i} className={classes}>
                        <div className="progress">
                            <span />
                            <em />
                        </div>
                        <div className="dropincon">
                            <p>{num === 0 ? "企业已接收到您投递的简历" : num === 1 ? "对方已查看您的简历" : num === 2 ? !value.done ? "您已通过初步筛选" : "您的初选未通过" : num === 3 ? "已发送面试邀请" : num === 4 ? !value.done ? "您已通过面试，注意接收下一步通知" : "面试不合格" : ""}</p>
                            <time>{value.date}<em />{value.time}</time>
                        </div>
                    </div>
                );

            });


            return (
                <div key={index} className="dropindetail">
                    <p>
                        <span>{elem.email}</span>
                        <span>{elem.latestStatus}</span>
                    </p>
                    <p>{elem.company_name}</p>
                    <div className="dropincontent clearfix">
                        <time>{elem.date}</time>
                        {
                            elem.isShowall
                                ? <div className="dropinmain">
                                    <div className="dropinhead active">
                                        <span className="active">投递简历</span>
                                        <em className={elem.detailStatus.length >= 2 ? elem.detailStatus[1].done ? "active" : "" : ""} />
                                        <span className={elem.detailStatus.length >= 2 ? elem.detailStatus[1].done ? "active" : "" : ""}>被查看</span>
                                        <em className={elem.detailStatus.length >= 3 ? elem.detailStatus[2].done ? "active" : "" : ""} />
                                        <span className={elem.detailStatus.length >= 3 ? elem.detailStatus[2].done ? "active" : "" : ""}>通过筛选</span>
                                        <em className={elem.detailStatus.length >= 4 ? elem.detailStatus[3].done ? "active" : "" : ""} />
                                        <span className={elem.detailStatus.length >= 4 ? elem.detailStatus[3].done ? "active" : "" : ""}>面试邀请</span>
                                        <em className={elem.detailStatus.length >= 5 ? elem.detailStatus[4].done ? "active" : "" : ""} />
                                        <span className={elem.detailStatus.length >= 5 ? elem.detailStatus[4].done ? "active" : "" : ""}>面试结果</span>
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
                    <span onClick={this.changeCategory.bind(this, 1)} className={this.state.nowactive === 1 ? "active" : ""}>投递成功</span>
                    <span onClick={this.changeCategory.bind(this, 2)} className={this.state.nowactive === 2 ? "active" : ""}>被查看</span>
                    <span onClick={this.changeCategory.bind(this, 3)} className={this.state.nowactive === 3 ? "active" : ""}>通过筛选</span>
                    <span onClick={this.changeCategory.bind(this, 4)} className={this.state.nowactive === 4 ? "active" : ""}>面试邀请</span>
                    <span onClick={this.changeCategory.bind(this, 5)} className={this.state.nowactive === 5 ? "active" : ""}>面试结果</span>
                </div>
                <div className="alldropin">
                    {platformDropInsList}
                </div>
            </div>
        );

    }
}

export default PlatformDropIn;
