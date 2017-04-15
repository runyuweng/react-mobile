import React from "react";
import "./Home.scss";
import fetch from "../../../services/xFetch";
import LoadingMore from "../../MainLayout/Loading/LoadingMore.jsx";
import {Link} from "react-router";

class Home extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "job": [],
            "enterprise": [],
            "jobsMore": false,
            "enterpriseMore": false,
            "jobPage": 1,
            "enterprisePage": 1
        };

    }

    componentDidMount () {

        this.props.showBottom(true);
        fetch("/zhaoda/getjobs", {"method": "GET"}).
        then((response) => response.json()).
        then((data) => {

            this.setState({"job": data.contents});

        });

    }

    getMore (type) {

        let newState = {};

        newState[`${type}More`] = true;
        this.setState(newState);
        newState = {};
        fetch(`/zhaoda/get${type}?page=${this.state.jobPage}`, {"method": "GET"}).
        then((response) => response.json()).
        then((data) => {

            if (data.code === "S01") {

                this.setState({"job": this.state.job.concat(data.contents)}, () => {

                    let newState = {};

                    newState[`${type}More`] = false;
                    this.setState(newState);
                    newState = {};

                });

            } else {

                let newState = {};

                newState[`${type}More`] = false;
                this.setState(newState);
                newState = {};

            }

        });

    }

    render () {

        const {job, jobsMore, enterprise, enterpriseMore} = this.state;
        const posList = job.map((value, i) => <div className="jobitems" key={i}>
            <span className="pics"><img src="/src/images/ali.png" /></span>
            <div className="jobintro">
                <h2>{value.job_name}</h2>
                <h3>{value.company.name}</h3>
                <span>
                    <em>{value.company.city}</em>
                    <em>学历</em>
                </span>
                <span>
                    <em>{value.company.type}</em>
                    <b>|</b>
                    <em>外商独资</em>
                    <b>|</b>
                    <em>{value.company.stage}</em>
                    <b>|</b>
                    <em>100人以上</em>
                </span>
            </div>
        </div>);


        return (
            <div className="Home">
                <header>
                    <span className="log"><img src="/src/images/zhaodalog.png" /></span>
                    <div className="input">
                        <input type="text" placeholder="搜索期望中的公司、岗位、地点" />
                        <span><img src="/src/images/搜素.png" /></span>
                    </div>
                </header>

                <div id="show">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">

                        <ol className="carousel-indicators">
                            <li className="active" />
                            <li />
                            <li />
                        </ol>

                        <div className="carousel-inner">
                            <div className="item active" />
                            <div className="item" />
                            <div className="item" />
                        </div>

                    </div>
                </div>

                <div className="experience">
                    <div>
                        <Link to="/schoolRecruit">
                            <span><img src="/src/images/首页icon1.png" />
                                <em>校招</em></span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/intern">
                            <span><img src="/src/images/首页icon2.png" />
                                <em>实习</em></span>
                        </Link>
                    </div>

                    <div>
                        <Link to="/enterprise">
                            <span><img src="/src/images/首页icon3.png" />
                                <em>企业</em></span>
                        </Link>
                    </div>

                    <div>
                        <Link to="/">
                            <span><img src="/src/images/首页icon4.png" />
                                <em>空中宣讲</em></span>
                        </Link>
                    </div>
                </div>

                <div id="homeMain">
                    <h2><span><img src="/src/images/latest.png" /></span>推荐职位
              </h2>


                    {posList}

                    <div className="morejob" onClick={() => this.getMore("jobs")}>
                        {jobsMore ? <LoadingMore /> : "展开更多"}
                    </div>

                </div>

                <div className="hotjob">
                    <h2><span><img src="/src/images/latest.png" /></span>热门企业
              </h2>

                    <div className="jobitems">
                        <span className="pics" />
                        <div className="jobintro">
                            <h2>JAVA研发工程师<span>认证</span></h2>
                            <h3><span>[<em>8</em>个]推荐算法实习</span>、<span>JAVA研发工程</span>、</h3>
                            <span className="address">
                                <em>上海</em>
                            </span>
                            <span>
                                <em>互联网</em>
                                <b>|</b>
                                <em>外商独资</em>
                                <b>|</b>
                                <em>上市</em>
                                <b>|</b>
                                <em>100人以上</em>
                            </span>
                        </div>
                    </div>

                    <div className="jobitems">
                        <span className="pics" />
                        <div className="jobintro">
                            <h2>JAVA研发工程师<span>认证</span></h2>
                            <h3><span>[<em>8</em>个]推荐算法实习</span>、<span>JAVA研发工程</span>、</h3>
                            <span className="address">
                                <em>上海</em>
                            </span>
                            <span>
                                <em>互联网</em>
                                <b>|</b>
                                <em>外商独资</em>
                                <b>|</b>
                                <em>上市</em>
                                <b>|</b>
                                <em>1000人以上</em>
                            </span>
                        </div>
                    </div>

                    <div className="jobitems">
                        <span className="pics" />
                        <div className="jobintro">
                            <h2>JAVA研发工程师<span>认证</span></h2>
                            <h3><span>[<em>8</em>个]推荐算法实习</span>、<span>JAVA研发工程</span>、</h3>
                            <span className="address">
                                <em>上海</em>
                            </span>
                            <span>
                                <em>互联网</em>
                                <b>|</b>
                                <em>外商独资</em>
                                <b>|</b>
                                <em>上市</em>
                                <b>|</b>
                                <em>1000人以上</em>
                            </span>
                        </div>
                    </div>

                    <div className="jobitems">
                        <span className="pics" />
                        <div className="jobintro">
                            <h2>JAVA研发工程师<span>认证</span></h2>
                            <h3><span>[<em>8</em>个]推荐算法实习</span>、<span>JAVA研发工程</span>、</h3>
                            <span className="address">
                                <em>上海</em>
                            </span>
                            <span>
                                <em>互联网</em>
                                <b>|</b>
                                <em>外商独资</em>
                                <b>|</b>
                                <em>上市</em>
                                <b>|</b>
                                <em>1000人以上</em>
                            </span>
                        </div>
                    </div>

                    <div className="morejob" onClick={() => this.getMore("enterprise")}>
                        {enterpriseMore ? <LoadingMore /> : "展开更多"}
                    </div>

                </div>

            </div>
        );

    }
}
export default Home;
