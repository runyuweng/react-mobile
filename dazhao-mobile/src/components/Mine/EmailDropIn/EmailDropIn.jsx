import React from "react";
import "./EmailDropIn.scss";
import ajax from "../../../services/ajax.js";

class EmailDropIn extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "emailDropIns": [
                {
                    "id": 1,
                    "email": "Hiven@dazhao100.com",
                    "latestStatus": "被查看",
                    "resumeName": "互联网产品岗",
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
                    "email": "Hiven@dazhao100.com",
                    "latestStatus": "不合格",
                    "resumeName": "互联网产品岗",
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
                            "statusmessage": "初步筛选未通过",
                            "date": "2016.12.30",
                            "time": "10:54:01",
                            "done": false
                        }
                    ]
                },
                {
                    "id": 3,
                    "email": "Hiven@dazhao100.com",
                    "latestStatus": "不合格",
                    "resumeName": "互联网产品岗",
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
                            "statusmessage": "面试通过",
                            "date": "2016.12.30",
                            "time": "10:54:08",
                            "done": false
                        }
                    ]
                }
            ]
        };
        this.fetchEmailDropIn = this.fetchEmailDropIn.bind(this);

    }

    componentDidMount () {

        // Console.log([{'id':1,"name":"asd"},{'id':2,"name":"argr"},{'id':3,"name":"dbhmt"}].reverse())

        const emailDropIns = JSON.parse(JSON.stringify(this.state)).emailDropIns;

        emailDropIns.map((elem, index) => {

            Object.assign(elem, {"isShowall": false});

        });


        this.setState({emailDropIns});

        this.fetchEmailDropIn();

    }

    changeShowAll (index) {

        const emailDropIns = JSON.parse(JSON.stringify(this.state)).emailDropIns;

        emailDropIns[index].isShowall = !emailDropIns[index].isShowall;

        this.setState({emailDropIns});

    }

    fetchEmailDropIn () {

        ajax({"url": "/emaildropin"}).
        then((data) => {

            if (data.code === "S01") {

                const emailDropIns = data.contents;

                this.setState({"emailDropIns": this.state.emailDropIns.push(emailDropIns)});

            } else if (data.code === "S02") {

            } else {

                this.setState({"emailDropIns": this.state.emailDropIns});

            }

        });

    }

    render () {

        const {emailDropIns} = this.state;
        const emailDropInsList = emailDropIns.map((elem, index) => {

            const stageList = elem.detailStatus.map((value, i) =>
                    value.done
                    ? i === 0
                        ? <span key={i} className="active">{value.statusmessage}</span>
                    : <span key={i} className="active"><em />{value.statusmessage}</span> : ""
                );
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
                    <p>使用简历：{elem.resumeName}</p>
                    <div className="dropincontent clearfix">
                        <time>{elem.date}</time>
                        {
                            elem.isShowall
                                ? <div className="dropinmain">
                                    <div className="dropinhead">
                                        {stageList}
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
            <div id="emailDropIn">

                <div className="alldropin">
                    {emailDropInsList}
                </div>
            </div>
        );

    }
}

export default EmailDropIn;
