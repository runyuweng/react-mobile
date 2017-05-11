import React from "react";
import "./PlatformDropIn.scss";

class PlatformDropIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            emailDropIns:[
                {
                    "id":1,
                    "email":"Hiven@dazhao100.com",
                    "latestStatus":"被查看",
                    "resumeName": "互联网产品岗",
                    "date":"2016.12.30",
                    "detailStatus":[
                        {
                            "statusid":1,
                            "statusmessage":"投递简历",
                            "date":"2016.12.30",
                            "time":"10:53:02",
                            "done":true
                        },
                        {
                            "statusid":2,
                            "statusmessage":"被查看",
                            "date":"2016.12.30",
                            "time":"10:53:02",
                            "done":true
                        }
                    ]
                },
                {
                    "id":2,
                    "email":"Hiven@dazhao100.com",
                    "latestStatus":"通过筛选",
                    "resumeName": "互联网产品岗",
                    "date":"2016.12.30",
                    "detailStatus":[
                        {
                            "statusid":1,
                            "statusmessage":"投递简历",
                            "date":"2016.12.30",
                            "time":"10:54:01",
                            "done":true
                        },
                        {
                            "statusid":2,
                            "statusmessage":"被查看",
                            "date":"2016.12.30",
                            "time":"10:54:01",
                            "done":true
                        },
                        {
                            "statusid":3,
                            "statusmessage":"通过筛选",
                            "date":"2016.12.30",
                            "time":"10:54:01",
                            "done":true
                        }
                    ]
                },
                {
                    "id":3,
                    "email":"Hiven@dazhao100.com",
                    "latestStatus":"面试通过",
                    "resumeName": "互联网产品岗",
                    "date":"2016.12.30",
                    "detailStatus":[
                        {
                            "statusid":1,
                            "statusmessage":"投递简历",
                            "date":"2016.12.30",
                            "time":"10:54:01",
                            "done":true
                        },
                        {
                            "statusid":2,
                            "statusmessage":"被查看",
                            "date":"2016.12.30",
                            "time":"10:54:01",
                            "done":true
                        },
                        {
                            "statusid":3,
                            "statusmessage":"通过筛选",
                            "date":"2016.12.30",
                            "time":"10:54:01",
                            "done":true
                        },
                        {
                            "statusid":4,
                            "statusmessage":"面试邀请",
                            "date":"2016.12.30",
                            "time":"10:54:01",
                            "done":true
                        },
                        {
                            "statusid":5,
                            "statusmessage":"面试结果",
                            "date":"2016.12.30",
                            "time":"10:54:08",
                            "done":true
                        }
                    ]
                }
            ]
        };
        this.fetchEmailDropIn = this.fetchEmailDropIn.bind(this);
    }

    componentDidMount() {

        // console.log([{'id':1,"name":"asd"},{'id':2,"name":"argr"},{'id':3,"name":"dbhmt"}].reverse())

        const emailDropIns = JSON.parse(JSON.stringify(this.state)).emailDropIns;
        
        emailDropIns.map((elem,index)=>{
            Object.assign(elem,{"isShowall":false});
        })


        this.setState({emailDropIns:emailDropIns})

        this.fetchEmailDropIn();
    }

    changeShowAll(index){
        const emailDropIns = JSON.parse(JSON.stringify(this.state)).emailDropIns;;

        emailDropIns[index].isShowall = !emailDropIns[index].isShowall;

        this.setState({
            emailDropIns:emailDropIns
        })
    }

    fetchEmailDropIn(){
        ajax({"url":'/zhaoda/emaildropin'}).
        then((data)=>{
            if(data.code==="S01"){
                const emailDropIns = data.contents;
                this.setState({
                    emailDropIns:this.state.emailDropIns.push(emailDropIns)
                })
            }else if (data.code==="S02") {
                
            }else{
                this.setState({
                    emailDropIns:this.state.emailDropIns
                })
            }
        })
    }

    render () {

        return (
            <div>
                <div className="status">
                    <span className="active">全部</span>
                    <span>投递成功</span>
                    <span>被查看</span>
                    <span>通过筛选</span>
                    <span>面试邀请</span>
                    <span>面试结果</span>
                </div>
                <div className="alldropin">
                    <div className="dropindetail">
                        <p>
                            <span>企业服务部实习生</span>
                            <span>不合适</span>
                        </p>
                        <p>上海脚步网络科技有限公司</p>
                        <div className="dropincontent clearfix">
                            <time>2016.12.30</time>
                            <span>
                                <img src="/src/images/Back_down.png" alt="down" />
                            </span>
                        </div>
                    </div>
                    <div className="dropindetail">
                        <p>
                            <span>企业服务部实习生</span>
                            <span>不合适</span>
                        </p>
                        <p>上海脚步网络科技有限公司</p>
                        <div className="dropincontent clearfix">
                            <time>2016.12.30</time>
                            <span>
                                <img src="/src/images/Back_down.png" alt="down" />
                            </span>
                        </div>
                    </div>
                    <div className="dropindetail">
                        <p>
                            <span>企业服务部实习生</span>
                            <span>不合适</span>
                        </p>
                        <p>上海脚步网络科技有限公司</p>
                        <div className="dropincontent clearfix">
                            <time>2016.12.30</time>
                            <div className="dropinmain">
                                <div className="dropinhead">
                                    <span className="active">投递简历<em /></span>
                                    <span>被查看<em /></span>
                                    <span>通过筛选<em /></span>
                                    <span>面试邀请<em /></span>
                                    <span>面试结果</span>
                                </div>
                                <div className="dropinwrap">
                                    <div className="dropinitem clearfix active">
                                        <div className="progress">
                                            <span />
                                            <em />
                                        </div>
                                        <div className="dropincon">
                                            <p>通过查看，您的初选未通过</p>
                                            <time>
                                            2016.12.30
                                            <em />
                                            10:54:10
                                        </time>
                                        </div>
                                    </div>
                                    <div className="dropinitem clearfix">
                                        <div className="progress">
                                            <span />
                                            <em />
                                        </div>
                                        <div className="dropincon">
                                            <p>企业已接收到您投递的简历</p>
                                            <time>
                                            2016.12.30
                                            <em />
                                            10:54:10
                                        </time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span>
                                <img src="/src/images/Back_top.png" alt="down" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default PlatformDropIn;
