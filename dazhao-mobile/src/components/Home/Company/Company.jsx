import React from "react";
import "./Company.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";

class Company extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "current": "part1",
            "showMore": true,
            "data": {
                "img": "",
                "name": "",
                "location": "",
                "url": "",
                "type": "",
                "nature": "",
                "stage": "",
                "numbers": "",
                "Authentication": false,
                "introduce": "",
                "jobs": []
            }
        };

    }

    componentDidMount () {

        const id = this.props.params.id;

        ajax({"url": `/zhaoda/company/companyinfo?cid=${id}`}).
        then((data) => {

            const tooLong = data.contents[0].introduce.length > this.refs.companyintro.clientWidth / 14 * 8;


            this.setState({
                "data": data.contents[0],
                tooLong
            });

        });

    }

    render () {

        const {current, showMore, data} = this.state;

        const jobs = (data.jobs || []).map((value, i) => <Link to={`/jobdetail/${value.jobid}`} key={i}>
            <div className="position">
                <div>
                    <span>{value.job_name || "未知"}</span>
                    <span><em>[{value.salary || "未知"}]</em></span>
                </div>
                <div>
                    <span>
                        <em>{value.location || "未知"}</em>
                        <em>{value.education || "未知"}</em>
                    </span>
                    <span>{value.time || "未知"}</span>
                </div>
            </div>
        </Link>);

        return (
            <div className="Company">
                <header>
                    <TopBar border="border" title="企业详情" img="/src/images/love.png" />
                </header>

                <div id="jobTop">
                    <span className="joblog"><img src={data.img} /></span>
                    <h2>{data.name}</h2>
                    <div>
                        <span><img src="/src/images/source58.png" /><em>上海</em></span>
                        {data.Authentication ? <span>认证</span> : ""}
                    </div>
                    <p>
                        <span>{data.industry || "未知"}</span>
                        <em>|</em>
                        <span>{data.nature || "未知"}</span>
                        <em>|</em>
                        <span>{data.stage || "未知"}</span>
                        <em>|</em>
                        <span>{data.numbers || "未知"}</span>
                    </p>
                </div>

                <div className="companyMain">
                    <ul>
                        <li className={current === "part1" ? "active" : ""} onClick={() => {

                            this.setState({"current": "part1"});

                        }}
                        >企业介绍</li>
                        <li className={current === "part2" ? "active" : ""} onClick={() => {

                            this.setState({"current": "part2"});

                        }}
                        >招聘岗位</li>
                        <li className={current === "part3" ? "active" : ""} onClick={() => {

                            this.setState({"current": "part3"});

                        }}
                        >空中宣讲</li>
                    </ul>


                    {current === "part1"
                        ? <div>
                            <div className="careTopic">
                                <span className="caretitle">企业介绍：</span>
                                <div className="caremain">
                                    <span className="carecontent" ref="companyintro" style={{"maxHeight": showMore ? "2rem" : "none"}}>
                                        <div className="detail" dangerouslySetInnerHTML={{"__html": data.introduce}} />
                                        {this.state.tooLong ? showMore ? <span className="shade" /> : "" : ""}
                                    </span>
                                    {
                                        this.state.tooLong
                                        ? showMore ? <span className="strech" onClick={() => {

                                            this.setState({"showMore": false});

                                        }}
                                                     >
                                            展开查看全部<span><img src="/src/images/down.png" /></span>
                                        </span> : ""
                                        : ""
                                    }
                                </div>
                            </div>

                            <div className="compangMsg">
                                <h3>企业基本信息：</h3>
                                <p>企业性质：<span>{data.nature || "未知"}</span></p>
                                <p>发展阶段：<span>{data.stage || "未知"}</span></p>
                                <p>企业领域：<span />{data.type || "未知"}</p>
                                <p>企业规模：<span>{data.numbers || "未知"}</span></p>
                                <p>企业网址：<span>{data.url || "未知"}</span></p>
                                <p>公司地址：<span>{data.location || "未知"}</span></p>
                            </div>
                        </div>
                    : ""}


                    {current === "part2" ? <div className="positions">
                        {jobs}
                    </div>
                    : ""}


                </div>

            </div>
        );

    }
}
export default Company;
