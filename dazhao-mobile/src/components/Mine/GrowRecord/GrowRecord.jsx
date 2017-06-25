import React from "react";
import "./GrowRecord.scss";
import TopBar from "../../Public/TopBar/TopBar.jsx";
import {Link} from "react-router";

class GrowRecord extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "growrecord": [
                {
                    "id": 1,
                    "typeId": 1,
                    "time": "11:30",
                    "date": "2016-12-25",
                    "record": "添加一条实习经历",
                    "job": "德勤华永会计师事务所企业风险服务部实习生",
                    "jobexperience": "全程参与某地产公司IT审计项目，独立分析该公司5个商场2000多家店铺及酒店12-13年度租金数据"
                },
                {
                    "id": 2,
                    "typeId": 2,
                    "time": "11:30",
                    "date": "2016-12-25",
                    "record": "听了一节大招职观课程",
                    "course_name": "情商低到底有多可怕？",
                    "lector": "李博士",
                    "course_poster": "/src/images/zhuanlan.png",
                    "main": "大学生情商模型；推荐书籍；身体情绪地图；身体情绪地图"
                },
                {
                    "id": 3,
                    "typeId": 3,
                    "time": "11:30",
                    "date": "2016-12-25",
                    "record": "提出问题",
                    "qtitle": "研究生和本科生在求职过程中真的会影响很大吗？"
                },
                {
                    "id": 4,
                    "typeId": 4,
                    "time": "11:30",
                    "date": "2016-12-25",
                    "record": "创建了一个新简历",
                    "resume_name": "互联网产品岗",
                    "resume_content": {
                        "expected_work": "互联网产品经理",
                        "expected_add": "上海市",
                        "resume_type": "zh"
                    }
                }
            ]
        };

    }

    componentDidMount () {

        this.props.changeBottomState();

    }

    render () {

        const {growrecord} = this.state;
        const growrecordList = growrecord.map((value, i) => {

            if (value.typeId === 1) {

                return (
                    <div className="rmain" key={i}>
                        <span className="oclock"><img src="/src/images/clock.png" /></span>
                        <div className="recorditems">
                            <span className="time">
                                <time>{value.time}</time>
                                <time>{value.date}</time>
                            </span>
                            <div className="rtitle">
                                <span><img src="/src/images/cup.png" /></span>
                                <em>{value.record}</em>
                            </div>
                            <div className="Rdetail">
                                <h3>{value.job}</h3>
                                <p>{value.jobexperience}</p>
                            </div>
                        </div>
                    </div>
                );

            } else if (value.typeId === 2) {

                return (
                    <div className="rmain watchcourse" key={i}>
                        <span className="oclock"><img src="/src/images/clock.png" /></span>
                        <div className="recorditems">
                            <span className="time">
                                <time>{value.time}</time>
                                <time>{value.date}</time>
                            </span>
                            <div className="rtitle">
                                <span><img src="/src/images/zhiguan-hover.png" /></span>
                                <em>{value.record}</em>
                            </div>
                            <div className="Rdetail">
                                <h3>{value.course_name}  ——{value.lector}</h3>
                                <p>
                                    <span><img src={value.course_poster} /></span>
                                    <em>{value.main}</em>
                                </p>
                            </div>
                        </div>
                    </div>
                );

            } else if (value.typeId === 3) {

                return (
                    <div className="rmain newquestion" key={i}>
                        <span className="oclock"><img src="/src/images/clock.png" /></span>
                        <div className="recorditems">
                            <span className="time">
                                <time>{value.time}</time>
                                <time>{value.date}</time>
                            </span>
                            <div className="rtitle">
                                <span><img src="/src/images/why.png" /></span>
                                <em>{value.record}</em>
                            </div>
                            <div className="Rdetail">
                                <h3>{value.qtitle}</h3>
                            </div>
                        </div>
                    </div>
                );

            } else if (value.typeId === 4) {

                return (
                    <div className="rmain newresume" key={i}>
                        <span className="oclock"><img src="/src/images/clock.png" /></span>
                        <div className="recorditems">
                            <span className="time">
                                <time>{value.time}</time>
                                <time>{value.date}</time>
                            </span>
                            <div className="rtitle">
                                <span><img src="/src/images/newcv.png" /></span>
                                <em>{value.record}</em>
                            </div>
                            <div className="Rdetail">
                                <h3>简历名称：{value.resume_name}</h3>
                                <p>
                                    <span>
                                        <em>期望工作：</em>
                                        <em>{value.resume_content.expected_work}</em>
                                    </span>
                                    <span>
                                        <em>工作地点：</em>
                                        <em>{value.resume_content.expected_add}</em>
                                    </span>
                                    <span>
                                        <em>简历类型：</em>
                                        <em>{value.resume_content.resume_type === "zh" ? "中文简历" : "英文简历"}</em>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                );

            }

        });

        return (
            <div className="GrowRecord">
                <header>
                    <TopBar title="成长记录" border="boder" />
                </header>
                <div className="rcontent">
                    {growrecordList}
                </div>

            </div>
        );

    }
}

export default GrowRecord;
