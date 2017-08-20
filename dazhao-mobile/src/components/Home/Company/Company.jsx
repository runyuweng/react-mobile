import React from "react";
import "./Company.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax";
import TopBar from "../../Public/TopBar/TopBar.jsx";
import Loading from "../../Public/Loading/Loading.jsx";

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
                "zichantype": "",
                "stage": "",
                "numbers": "",
                "Authentication": false,
                "introduce": "",
                "jobs": []
            },
            "isSelected": false,
            "loading": true
        };
        this.setCare = this.setCare.bind(this);

    }

    componentDidMount () {

        const id = this.props.params.id;

        this.setState({"cid": id}, () => {

            ajax({"url": `/zhaoda/company/companyinfo?cid=${id}`}).
            then((data) => {

                console.log(data);

                if (data.code === "S01") {


                    this.setState({
                        "data": data.contents[0],
                        "loading": false
                    }, () => {

                        const tooLong = data.contents[0].introduce.length > this.refs.companyintro.clientWidth / 14 * 8;

                        this.setState({tooLong});

                    });

                } else if (data.code === "E01") {

                }

            });

        });

    }

    formatDtate = (date) => {

        if (isNaN(Date.parse(date))) {

            return "未知";

        }
        const parseDate = Math.abs((Date.parse(new Date()) - Date.parse(date)) / (24 * 60 * 60 * 1000));

        if (parseDate < 7) {

            return "一周内";

        } else if (parseDate < 14) {

            return "两周内";

        } else if (parseDate < 21) {

            return "三周内";

        } else if (parseDate < 30) {

            return "一月内";

        } else if (parseDate < 60) {

            return "两月内";

        } else if (parseDate < 90) {

            return "三月内";

        } else if (parseDate < 120) {

            return "四月内";

        } else if (parseDate < 150) {

            return "五月内";

        } else if (parseDate < 180) {

            return "六月内";

        } else if (parseDate < 210) {

    return "七月内";

} else if (parseDate < 240) {

    return "八月内";

} else if (parseDate < 270) {

    return "九月内";

} else if (parseDate < 300) {

    return "十月内";

} else if (parseDate < 365) {

    return "一年内";

} else if (parseDate > 365) {

    return "超过一年";

}

    }

    setCare (cid) {

        ajax({"url": `/zhaoda/company/subscribecompany?companyid=${cid}`}).
        then((data) => {


            if (data.code === "S01") {

                this.setState({"isSelected": !this.state.isSelected});
                this.props.changeMessageContent("操作成功");

            } else if (data.code === "E01") {

                this.props.changeMessageContent("操作失败请重试");

            }

        });

    }

    render () {

        const {current, showMore, data, cid, loading} = this.state;

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
                    <span>{this.formatDtate(value.updatetime)}</span>
                </div>
            </div>
        </Link>);

        return (
            <div className="Company">
                <header>
                    {/* <TopBar border="border" title="企业详情" img="/src/images/love.png" />*/}
                    <div className="TopBar">
                        <div className="content" style={{"borderBottom": "1px solid #DBDBDB"}}>
                            <span onClick={(e) => {

                                history.back();

                            }}
                            >
                                <img src="/src/images/arrow-left.png" />
                            </span>
                            <span>企业详情</span>

                            {
                                this.state.isSelected
                                ? <span className="logo">
                                    <object onClick={this.setCare.bind(this, cid)} data="/src/images/isSelected.svg" type="image/svg+xml" />
                                </span>
                                : <span><img onClick={this.setCare.bind(this, cid)} src="/src/images/love.png" /></span>
                            }
                        </div>
                    </div>
                </header>
                {loading ? <Loading /> : <div>

                    <div id="jobTop">
                        <span className="joblog"><img src={data.img} /></span>
                        <h2>{data.name}</h2>
                        <div>
                            <span><img src="/src/images/source58.png" /><em>{data.city}</em></span>
                            {data.Authentication ? <span>认证</span> : ""}
                        </div>
                        <p>
                            <span>{data.industry || "未知"}</span>
                            <em>|</em>
                            <span>{data.zichantype || "未知"}</span>
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
                                <p>企业性质：<span>{data.zichantype || "未知"}</span></p>
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
                </div>}

            </div>
        );

    }
}
export default Company;
