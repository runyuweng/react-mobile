import React from "react";
import "./JobDetail.scss";
import ajax from "../../../services/ajax";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import {Link} from "react-router";

class JobDetail extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "data": {
                "job_name": "name",
                "education": "education",
                "salary": "8K-12K",
                "type": "校招",
                "location": [
                    "上海市",
                    "徐汇区",
                    "淮海中路"
                ],
                "company": {
                    "name": "company.name",
                    "city": "company.city",
                    "type": "company.type",
                    "stage": "company.stage",
                    "img": "",
                    "numbers": "100人",
                    "jobs": []
                },
                "tips": ["扁平化管理", "发展空间大", "带薪休假"],
                "description": "<ol><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li></ol>",
                "require": "<ol><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li></ol>",
                "similarJobs": [
                    {
                        "job_name": "name",
                        "education": "education",
                        "salary": "8K-12K",
                        "type": "校招",
                        "location": [
                            "上海市",
                            "徐汇区",
                            "淮海中路"
                        ],
                        "company": {
                            "name": "company.name",
                            "city": "company.city",
                            "type": "company.type",
                            "stage": "company.stage",
                            "img": "",
                            "numbers": "100人",
                            "jobs": []
                        },
                        "tips": ["扁平化管理", "发展空间大", "带薪休假"],
                        "description": "<ol><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li></ol>",
                        "require": "<ol><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li></ol>"

                    },
                    {
                        "job_name": "name",
                        "education": "education",
                        "salary": "8K-12K",
                        "type": "校招",
                        "location": [
                            "上海市",
                            "徐汇区",
                            "淮海中路"
                        ],
                        "company": {
                            "name": "company.name",
                            "city": "company.city",
                            "type": "company.type",
                            "stage": "company.stage",
                            "img": "",
                            "numbers": "100人",
                            "jobs": []
                        },
                        "tips": ["扁平化管理", "发展空间大", "带薪休假"],
                        "description": "<ol><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li></ol>",
                        "require": "<ol><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li></ol>"

                    },
                    {
                        "job_name": "name",
                        "education": "education",
                        "salary": "8K-12K",
                        "type": "校招",
                        "location": [
                            "上海市",
                            "徐汇区",
                            "淮海中路"
                        ],
                        "company": {
                            "name": "company.name",
                            "city": "company.city",
                            "type": "company.type",
                            "stage": "company.stage",
                            "img": "",
                            "numbers": "100人",
                            "jobs": []
                        },
                        "tips": ["扁平化管理", "发展空间大", "带薪休假"],
                        "description": "<ol><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li></ol>",
                        "require": "<ol><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li><li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li></ol>"

                    }
                ]
            }

        };

    }

    componentWillMount () {
        const id = this.props.params.id;
        ajax({"url": "/zhaoda/jobs/jobinfo?id="+id}).
        then((data) => {
            console.log(data);
            this.setState({data: data.contents[0]});
        });


    }

    componentDidMount () {

        this.props.showBottom();

    }

    render () {

        const {data} = this.state;
        console.log(data.similarJobs);
        const jobs = data.similarJobs.map((value, i) =>
            <Link to={"/jobdetail/"+value.jobid} key={i}>
                <div className="jobitems">
                    <span className="pics"><img src="/src/images/ali.png" /></span>
                    <div className="jobintro">
                        <h2>{value.job_name}</h2>
                        <h3>{value.company.name}</h3>
                        <span>
                            <em>{value.location}</em>
                            <em>{value.education}</em>
                        </span>
                        <span>
                            <em>{value.company.type}</em>
                            <b>|</b>
                            <em>外商独资</em>
                            <b>|</b>
                            <em>{value.company.stage}</em>
                            <b>|</b>
                            <em>{value.company.numbers}</em>
                        </span>
                    </div>
                </div>
            </Link>
            );

        return (
            <div className="JobDetail">
                <header>
                    <TopBar title="职位详情" border="boder" />
                </header>

                <div id="jobTop">
                    <span className="joblog"><img src="/src/images/ali.png" /></span>
                    <h2>{data.job_name}<span>[{data.salary}]</span>
                    </h2>
                    <div>
                        <span><img src="/src/images/source58.png" /><em>{data.location.slice(0,3)}...</em></span>
                        <span><img src="/src/images/source59.png" /><em>{data.education}</em></span>
                        <span><img src="/src/images/source61.png" /><em>{data.type}</em></span>
                    </div>
                    <p>
                        {data.tips}
                        {/*data.tips.map((value, i) =>
                            <span key={i}>{value}</span>
                        )*/}
                    </p>

                </div>

                <Link to="company/compantintro">
                    <div className="job">
                        <div className="jobitems">
                            <div className="jobintro">
                                <h2>{data.company.name}<span>认证</span></h2>
                                <h3><span>[<em>8</em>个]推荐算法实习</span>、<span>JAVA研发工程</span>、</h3>
                                <span>
                                    <em>{data.company.type}</em>
                                    <b>|</b>
                                    <em>外商独资</em>
                                    <b>|</b>
                                    <em>{data.company.stage}</em>
                                    <b>|</b>
                                    <em>{data.company.numbers}</em>
                                </span>
                            </div>
                            <span><img src="/src/images/Back_Button.png" /></span>
                        </div>
                    </div>
                </Link>

                <div className="jobrequire">
                    <h2 className="positionde"><span><img src="/src/images/source55.png" /></span>
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
                    <h2 className="jobAddress"><span><img src="/src/images/source55.png" /></span>工作地址
          </h2>
                    <div className="jobwrap">
                        <div className="address">
                            <p>
                                <span>{data.location}</span>
                            </p>
                        </div>
                        <span className="map">地图</span>
                    </div>

                </div>

                <div id="homeMain">
                    <h2><span><img src="/src/images/latest.png" /></span>相似职位
          </h2>
                    {jobs}

                </div>

                <div className="bottom">
                    <span>发送简历</span>
                    <span>收藏</span>
                </div>
            </div>
        );

    }
}

export default JobDetail;
