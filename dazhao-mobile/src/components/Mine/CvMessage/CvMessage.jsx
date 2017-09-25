import React from "react";
import "./CvMessage.scss";
import TopBar from "../../Public/TopBar/TopBar.jsx";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

import axios from 'axios';

class CvMessage extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "basicMessage": {
                "id": 1,
                "title": "基本信息",
                "experience": {
                    "img": "/src/images/pople.png",
                    "resumeName": "互联网产品岗",
                    "name": "周新城",
                    "sex": "男",
                    "bestEducation": "本科",
                    "birthday": "1955-10-25",
                    "phone": "13245679842",
                    "email": "joy_joy01@163.com",
                    "hopeJob": "互联网产品经理",
                    "hopeCity": "上海市"
                }
            },
            "eduexperience": {
                "id": 2,
                "title": "教育经历",
                "experience": {
                    "school_name": "山东大学",
                    "major": "机械设计制造及自动化",
                    "educatestage": "本科",
                    "time": "2013-09至2017-06",
                    "more": ["成绩排名优异、GPA优秀可以展示", "主要课程：在其他经理比较少的情况下可以选择展示3-4门课程"]
                }
            },
            "practiceExpre": {
                "id": 3,
                "title": "实习经历",
                "experience": [
                    {
                        "uid": 1,
                        "time": "2014.07--2014-09",
                        "company_name": "德勤华永会计师事务所",
                        "job": "企业风险服务部实习生",
                        "city": "上海",
                        "practiceDetail": ["全程参与某地产公司IT审计项目，独立分析该公司5个商场2000多家店铺及酒店12-13年度租金数据。", "参与某汽车零件部公司的咨询项目，独立独立更新、绘制项目管理流程及相关文档，成果直接提交给客户，同时协助其他两个项目经理翻译、整理PPT，获得项目经理的肯定"]
                    },
                    {
                        "uid": 2,
                        "time": "2014.07--2014-09",
                        "company_name": "科尔尼(上海)企业咨询有限公司",
                        "job": "咨询师助理",
                        "city": "上海",
                        "practiceDetail": ["全程参与某汽车制造商有关企业用车的市场调研，工作10个星期：给北京、上海、广州数百家名企，国企，外企打cold call，并独自去深圳分别于36名受访者进行深度面对面访谈", "参与某汽车品牌的项目调查问卷数据进行整理分析，两天完成统计分析568分问卷信息"]
                    }
                ]
            },
            "projectExpre": {
                "id": 4,
                "title": "项目经历",
                "experience": [
                    {
                        "id": 1,
                        "time": "2014.07--2014-09",
                        "project_name": "联想Yoga”创意营销大赛",
                        "role": "队长",
                        "city": "上海",
                        "more": ["带领团队完成历史一个月的比赛，期间主要负责统筹协调，合理分工，组织队员沟通讨论，协作共同完成。", "自行学习营销知识，并在比赛中取得第二名的好成绩。"]
                    },
                    {
                        "id": 2,
                        "time": "2014.07--2014-09",
                        "project_name": "联想Yoga”创意营销大赛",
                        "role": "队长",
                        "city": "上海",
                        "more": ["带领团队完成历史一个月的比赛，期间主要负责统筹协调，合理分工，组织队员沟通讨论，协作共同完成。", "自行学习营销知识，并在比赛中取得第二名的好成绩。"]
                    }
                ]
            },
            "schoolExpre": {
                "id": 5,
                "title": "项目经历",
                "experience": []
            }

        };
        // this.fetchResume = this.fetchResume.bind(this);
        this.getInitData = this.getInitData.bind(this);
    }

    componentDidMount () {
        this.getInitData()
        this.props.changeBottomState(false);
        // this.fetchResume();
    }

    getInitData() {
        axios.get(`http://www.dzdz.com/api.php?u=getResumesBasic&resumes_id=${this.props.params.uid}`).then((data)=>{
            console.log(data)
            const basicMessage = data.data.listjson
        })
    }

    // 获取基本信息
    // fetchResume () {

    //     ajax({"url": `/getresume?resumeid=${this.props.params.uid}`}).
    //     then((data) => {
    //         if (data.code === "S01") {
    //             const basicMessage = data.contents.basicMessage;
    //             const eduexperience = data.contents.eduexperience;
    //             const practiceExpre = data.contents.practiceExpre;
    //             const projectExpre = data.contents.projectExpre;
    //             this.setState({
    //                 basicMessage,
    //                 eduexperience,
    //                 practiceExpre,
    //                 projectExpre
    //             });
    //         } else if (data.code === "E01") {
    //             this.setState({
    //                 "basicMessage": {},
    //                 "eduexperience": {},
    //                 "practiceExpre": {},
    //                 "projectExpre": {}
    //             });
    //         }
    //     });
    // }

    render () {
        const {basicMessage, eduexperience, practiceExpre, projectExpre, schoolExpre} = this.state;

        const eduMore = eduexperience.experience.more ? eduexperience.experience.more : [];
        const eduMoreList = eduMore.map((value, i) =>
            <em key={i}>{`${i + 1}.${value}`}</em>
            );

        const practiceList = practiceExpre.experience.map((elem, index) => {

        const practiceDetailList = elem.practiceDetail.map((value, i) =>
                <p key={i} className="cvtext">·&nbsp;&nbsp;{value}</p>
            );


            return (
                <div key={index} className="cvbody">
                    <p className="edutop">
                        <span><em />></span>
                        <time>{elem.time}</time>
                    </p>
                    <div className="locate">
                        <span>{elem.company_name}<br />{elem.job}</span>
                        <span>{elem.city}</span>
                    </div>

                    {practiceDetailList}
                </div>
            );

        });

        const projectList = projectExpre.experience.map((elem, index) => {

            const moreList = elem.more.map((value, i) =>
                <p key={i} className="cvtext">·&nbsp;&nbsp;{value}</p>
                );


            return (
                <div key={index} className="cvbody">
                    <p className="edutop">
                        <span><em />></span>
                        <time>{elem.time}</time>
                    </p>
                    <div className="locate">
                        <span>{elem.project_name}<br />{elem.role}</span>
                        <span>{elem.city}</span>
                    </div>

                    {moreList}
                </div>
            );

        });

        return (
            <div className="CvMessage">
                <header>
                    <TopBar title="简历信息" border="boder" />
                </header>

                <div className="cvmain">

                    <div className="cvitems">
                        <div className="cvhead">
                            <span>基本信息</span>

                            <span><Link to={{
                                "pathname": "/edmessage",
                                "query": {"resumeid": this.props.params.uid}
                            }}
                                  >编辑</Link></span>

                        </div>
                        {
                            JSON.stringify(basicMessage.experience) === "{}"
                                ? <div className="cvbody">
                                    <p className="none">
                                        <span><img src="/src/images/add.png" /></span>
                                        <em>添加</em>
                                    </p>
                                </div>
                            : <div className="cvbody">
                                <span className="personal">
                                    <img src={basicMessage.experience.img} alt="pic" />
                                </span>
                                <span>
                                    <em>简历名称：</em>
                                    <em>{basicMessage.experience.resumeName}</em>
                                </span>
                                <span>
                                    <em>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</em>
                                    <em>{basicMessage.experience.name}</em>
                                </span>
                                <span>
                                    <em>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</em>
                                    <em>{basicMessage.experience.sex}</em>
                                </span>
                                <span>
                                    <em>最高学历：</em>
                                    <em>{basicMessage.experience.bestEducation}</em>
                                </span>
                                <span>
                                    <em>出生日期：</em>
                                    <em>{basicMessage.experience.birthday}</em>
                                </span>
                                <span>
                                    <em>联系电话：</em>
                                    <em>{basicMessage.experience.phone}</em>
                                </span>
                                <span>
                                    <em>联系邮箱：</em>
                                    <em>{basicMessage.experience.email}</em>
                                </span>
                                <span>
                                    <em>期望岗位：</em>
                                    <em>{basicMessage.experience.hopeJob}</em>
                                </span>
                                <span>
                                    <em>期望城市：</em>
                                    <em>{basicMessage.experience.hopeCity}</em>
                                </span>
                            </div>
                        }
                    </div>

                    <div className="cvitems">
                        <div className="cvhead">
                            <span>教育经历</span>

                            <span><Link to={{
                                "pathname": "/edupexp",
                                "query": {"resumeid": this.props.params.uid}
                            }}
                                  >编辑</Link></span>

                        </div>


                        {
                            JSON.stringify(eduexperience.experience) === "{}"
                                ? <div className="cvbody">
                                    <p className="none">
                                        <span><img src="/src/images/add.png" /></span>
                                        <em>添加</em>
                                    </p>
                                </div>
                            : <div className="cvbody">
                                <span>
                                    <em>学校名称：</em>
                                    <em>{eduexperience.experience.school_name}</em>
                                </span>
                                <span>
                                    <em>所在专业：</em>
                                    <em>{eduexperience.experience.major}</em>
                                </span>
                                <span>
                                    <em>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历：</em>
                                    <em>{eduexperience.experience.educatestage}</em>
                                </span>
                                <span>
                                    <em>在校时间：</em>
                                    <em>{eduexperience.experience.time}</em>
                                </span>
                                <span className="clearfix">
                                    <em className="lastpre">备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：</em>
                                    <span className="lastEm">{eduMoreList}</span>
                                </span>
                            </div>
                        }
                    </div>

                    <div className="cvedu cvitems">
                        <div className="cvhead">
                            <span>实习经历</span>

                            <span><Link to={{
                                "pathname": "/practice",
                                "query": {"resumeid": this.props.params.uid}
                            }}
                                  >编辑</Link></span>

                        </div>

                        {
                            practiceExpre.experience.length === 0
                                ? <div className="cvbody">
                                    <p className="none">
                                        <span><img src="/src/images/add.png" /></span>
                                        <em>添加</em>
                                    </p>
                                </div> : practiceList
                        }

                    </div>

                    <div className="cvedu cvitems">
                        <div className="cvhead">
                            <span>项目经历</span>
                            <span>编辑</span>
                        </div>
                        {
                            projectExpre.experience.length === 0
                                ? <div className="cvbody">
                                    <p className="none">
                                        <span><img src="/src/images/add.png" /></span>
                                        <em>添加</em>
                                    </p>
                                </div> : projectList
                        }
                    </div>

                    <div className="cvitems cvsch">
                        <div className="cvhead">
                            <span>在校经历</span>
                            <span>编辑</span>
                        </div>


                        {
                            schoolExpre.experience.length === 0
                                ? <div className="cvbody">
                                    <p className="none">
                                        <span><img src="/src/images/add.png" /></span>
                                        <em>添加</em>
                                    </p>
                                </div> : "项目内容"
                        }
                    </div>

                </div>

            </div>
        );

    }
}

export default CvMessage;
