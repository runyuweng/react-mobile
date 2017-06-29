import React from "react";
import "./JobDetail.scss";
import ajax from "../../../services/ajax";
import TopBar from "../../Public/TopBar/TopBar.jsx";
import Loading from "../../Public/Loading/Loading.jsx";
import {Link} from "react-router";

class JobDetail extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "data": {
                "job_name": "",
                "education": "",
                "salary": "",
                "type": "",
                "location": [
                    "", "", ""
                ],
                "company": {
                    "name": "",
                    "city": "",
                    "type": "",
                    "stage": "",
                    "img": "",
                    "numbers": "",
                    "jobs": []
                },
                "tips": [
                    "", "", ""
                ],
                "description": "",
                "require": "",
                "similarJobs": []
            },
            "isSealed": false,
            "showLoading": true

        };

    }

    componentWillMount () {

        const id = this.props.params.id;

        ajax({"url": `/zhaoda/jobs/jobinfo?id=${id}`}).then((data) => {

            if (data.code === "S01") {

                this.setState({
                    "data": data.contents[0],
                    "showLoading": false
                });

            } else if (data.code === "E01") {

                this.setState({"data": {}});

            }

        });

    }

    componentDidMount () {

        this.props.changeBottomState(false);

    }

    careJob (companyid, jobid) {

        ajax({"url": `/zhaoda/job/subscribejob?jobid=1jobid=${jobid}`}).
        then((data) => {

            if (data.code === "S01") {

                this.setState({"isSealed": !this.state.isSealed});

            } else {
                // 出错

            }

        });

    }

    render () {

        const {data, showLoading} = this.state;

        const jobs = data.similarJobs.map((value, i) => <Link to={`/jobdetail/${value.jobid}`} key={i}>
            <div className="jobitems">
                <span className="pics"><img src="/src/images/ali.png" /></span>
                <div className="jobintro">
                    <h2>{value.job_name || "未知"}</h2>
                    <h3>{value.company.name || "未知"}</h3>
                    <span>
                        <em>{value.location || "未知"}</em>
                        <em>{value.education || "未知"}</em>
                    </span>
                    <span>
                        <em>{value.company.type || "未知"}</em>
                        <b>|</b>
                        <em>{value.company.nature || "未知"}</em>
                        <b>|</b>
                        <em>{value.company.stage || "未知"}</em>
                        <b>|</b>
                        <em>{value.company.numbers || "未知"}</em>
                    </span>
                </div>
            </div>
        </Link>);

        return (
            <div className="JobDetail">
                <header>
                    <TopBar title="职位详情" border="boder" />
                </header>
                {showLoading ? <Loading />
                : <div>
                    <div id="jobTop">
                        <span className="joblog"><img src="/src/images/ali.png" /></span>
                        <h2>{data.job_name || "未知"}
                            <span>[{data.salary || "未知"}]</span>
                        </h2>
                        <div>
                            <span><img src="/src/images/source58.png" />
                                <em>{data.location.slice(0, 3) || "未知"}...</em>
                            </span>
                            <span><img src="/src/images/source59.png" />
                                <em>{data.education || "未知"}</em>
                            </span>
                            <span><img src="/src/images/source61.png" />
                                <em>{data.type || "未知"}</em>
                            </span>
                        </div>
                        <p>
                            {data.tips || "暂无"}
                        </p>

                    </div>

                    <Link to={`/company/${data.company.companyid}`}>
                        <div className="job">
                            <div className="jobitems">
                                <div className="jobintro">
                                    <h2>{data.company.name || "未知"}
                                        <span>认证</span>
                                    </h2>
                                    <h3>
                                        <span>[<em>8</em>个]推荐算法实习</span>、<span>JAVA研发工程</span>、</h3>
                                    <span>
                                        <em>{data.company.type || "未知"}</em>
                                        <b>|</b>
                                        <em>{data.company.nature || "未知"}</em>
                                        <b>|</b>
                                        <em>{data.company.stage || "未知"}</em>
                                        <b>|</b>
                                        <em>{data.company.numbers || "未知"}</em>
                                    </span>
                                </div>
                                <span><img src="/src/images/Back_Button.png" /></span>
                            </div>
                        </div>
                    </Link>

                    <div className="jobrequire">
                        <h2 className="positionde">
                            <span><img src="/src/images/source55.png" /></span>
                        职位详情
                    </h2>
                        <div className="jobde">
                            <h3>职位描述</h3>
                            <div className="detail" dangerouslySetInnerHTML={{"__html": data.description}} />
                        </div>
                        <div className="jobde">
                            <h3>任职要求</h3>
                            <div className="detail" dangerouslySetInnerHTML={{"__html": data.require}} />
                        </div>
                    </div>

                    <div className="jobAddDetail">
                        <h2 className="jobAddress">
                            <span><img src="/src/images/source55.png" /></span>工作地址
                    </h2>
                        <div className="jobwrap">
                            <div className="address">
                                <p>
                                    <span>{data.location || "未知"}</span>
                                </p>
                            </div>
                            <span className="map">地图</span>
                        </div>

                    </div>

                    <div id="homeMain">

                        <h2>
                            <span><img src="/src/images/latest.png" /></span>相似职位</h2>
                        <div className="jobWrap">{jobs}</div>

                    </div>

                    <div className="bottom">
                        <span>发送简历</span>
                        <span onClick={this.careJob.bind(this, data.company.companyid, data.jobid)}>收藏</span>
                    </div>
                </div>}
            </div>
        );

    }
}

export default JobDetail;
