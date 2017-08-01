import React from "react";
import "./Home.scss";
import ajax from "../../../services/ajax";
import LoadingMore from "../../Public/Loading/LoadingMore.jsx";
import {Link, browserHistory} from "react-router";


class Home extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "search": "",
            "lock": false,
            "jobs": [],
            "enterprise": [],
            "jobsLoading": false,
            "enterpriseLoading": false,
            "jobsPage": 1,
            "enterprisePage": 1,
            "searchPage": true,
            "currentNum": 0
        };

    }

    componentDidMount () {

        this.props.changeBottomState(true);

        this.setState({
            "jobsLoading": true,
            "enterpriseLoading": true
        });

        ajax({
            "url": "/zhaoda/getjobs?page=1",
            "obj": this
        }).
        then((data) => {

            if (!this.state.lock) {

                this.setState({
                    "jobs": data.contents,
                    "jobsPage": this.state.jobsPage + 1
                }, () => {

                    this.setState({"jobsLoading": false});

                });

            }

        });

        ajax({
            "url": "/zhaoda/jobs/enterprise?industryid=-1&page=1",
            "obj": this
        }).
        then((data) => {

            if (!this.state.lock) {

                this.setState({
                    "enterprise": data.contents,
                    "enterprisePage": this.state.jobsPage + 1
                }, () => {

                    this.setState({"enterpriseLoading": false});

                });

            }

        });

        const bannerChange = setInterval(() => {

            if (this.state.currentNum < 2) {

                this.setState({"currentNum": Number(this.state.currentNum) + 1});

            } else {

                this.setState({"currentNum": 0});

            }

        }, 4000);

        this.setState({bannerChange});

    }

    componentWillUnmount () {

        this.setState({"lock": true});
        clearInterval(this.state.bannerChange);

    }

    searchDetail () {

        // Ajax
        if (this.state.search === "") {

            // This.props.changeMessageContent("搜索不能为空");

        } else {

            sessionStorage.setItem("searchCon", this.state.search);
            this.setState({"searchPage": true});

        }

    }

    getMore (type) {

        let newState = {};

        newState[`${type}Loading`] = true;
        this.setState(newState);
        newState = {};

        ajax({
            "url": type === "jobs" ? `/zhaoda/getjobs?page=${this.state.jobsPage}` : `/zhaoda/jobs/enterprise?industryid=-1&page=${this.state.enterprisePage}`,
            "obj": this
        }).
        then((data) => {

            if (!this.state.lock) {

                if (data.code === "S01") {

                    if (type === "jobs") {

                        this.setState({"jobs": this.state.jobs.concat(data.contents)}, () => {

                            let newState = {};

                            newState[`${type}Loading`] = false;
                            newState[`${type}Page`] = this.state[`${type}Page`] + 1;

                            this.setState(newState);
                            newState = {};

                        });

                    } else if (type === "enterprise") {

                        this.setState({"enterprise": this.state.enterprise.concat(data.contents)}, () => {

                            let newState = {};

                            newState[`${type}Loading`] = false;
                            newState[`${type}Page`] = this.state[`${type}Page`] + 1;

                            this.setState(newState);
                            newState = {};

                        });

                    }


                } else if (data.code === "S02") {

                    let newState = {};

                    newState[`${type}Loading`] = false;

                    this.props.changeMessageContent("已加载完全部");

                    this.setState(newState);
                    newState = {};

                } else if (date.code === "E01") {

                    let newState = {};

                    newState[`${type}Loading`] = false;

                    this.props.changeMessageContent("请求错误，请稍后重试");

                    this.setState(newState);
                    newState = {};

                }

            }

        });


    }

    render () {


        const {search, jobs, jobsLoading, enterprise, enterpriseLoading, currentNum} = this.state;
        const images = ["/src/images/banner1.jpg", "/src/images/banner2.png", "/src/images/banner3.png"];
        const activeList = ["active0", "active1", "active2"];
        const dotList = images.map((value, i) =>
            <div key={i} onClick={() => {

                this.setState({"currentNum": i});

            }}
            >.</div>
      );
        const currentImage = images[currentNum];
        const activeStyle = activeList[currentNum];
        const jobList = jobs.map((value, i) => <Link to={`/jobdetail/${value.jobid}`} key={i}>

            <div className="jobitems" key={i}>
                <span className="pics"><img src={value.company.img} /></span>
                <div className="jobintro">
                    <h2>{value.job_name}</h2>
                    <h3>{value.company.name}</h3>
                    <span>
                        <em>{value.company.city}</em>
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
        </Link>);
        const enterpriseList = enterprise.map((value, i) => <Link to={`/company/${value.companyid}`} key={i}>
            <div className="jobitems">
                <span className="pics">
                    <img src={value.img} />
                </span>
                <div className="jobintro">
                    <h2>{value.name}{value.Authentication ? <span>认证</span> : ""}</h2>
                    <h3><span>[<em>8</em>个]推荐算法实习</span>、<span>JAVA研发工程</span>、<span>JAVAEE研发工程</span>、<span>JAVAEE研发工程</span></h3>
                    <span className="address">
                        <em>{value.city}</em>
                    </span>
                    <span>
                        <em>{value.type}</em>
                        <b>|</b>
                        <em>外商独资</em>
                        <b>|</b>
                        <em>{value.stage}</em>
                        <b>|</b>
                        <em>{value.numbers}</em>
                    </span>
                </div>
            </div>
        </Link>);


        return (
            <div className="Home">
                <header>
                    <span className="logo">
                        <object data="/src/images/logo.svg" type="image/svg+xml" />
                    </span>
                    <div className="input">
                        <input onChange={(e) => {

                            this.setState({"search": e.target.value});

                        }} value={search} type="text" placeholder="搜索期望中的公司、岗位、地点"
                        />
                        {
                            this.state.searchPage
                            ? <Link to="/searchPage">
                                <span onClick={() => this.searchDetail()}><img src="/src/images/搜素.png" /></span>
                            </Link>
                            : <span onClick={() => this.searchDetail()}><img src="/src/images/搜素.png" /></span>
                        }

                    </div>
                </header>

                <div id="show">
                    <img src={currentImage} />
                    <div className={`rotation ${activeStyle}`}>
                        {dotList}
                    </div>
                </div>


                <div className="experience">
                    <div>
                        <Link to="/schoolRecruit">
                            <span><img src="/src/images/homeIcon1.png" />
                                <em>校招</em>
                            </span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/intern">
                            <span><img src="/src/images/homeIcon2.png" />
                                <em>实习</em>
                            </span>
                        </Link>
                    </div>

                    <div>
                        <Link to="/enterprise">
                            <span><img src="/src/images/homeIcon3.png" />
                                <em>企业</em>
                            </span>
                        </Link>
                    </div>
                </div>

                <div id="homeMain">
                    <h2><span><img src="/src/images/latest.png" /></span>推荐职位
              </h2>

                    <div className="jobWrap">{jobList}</div>

                    <div className="morejob" onClick={jobsLoading ? "" : () => this.getMore("jobs")}>
                        {jobsLoading ? <LoadingMore /> : "展开更多"}
                    </div>

                </div>

                <div className="hotjob">
                    <h2><span><img src="/src/images/latest.png" /></span>热门企业
              </h2>

                    <div className="enterprisewrap">
                        {enterpriseList}
                    </div>

                    <div className="morejob" onClick={enterpriseLoading ? "" : () => this.getMore("enterprise")}>
                        {enterpriseLoading ? <LoadingMore /> : "展开更多"}
                    </div>

                </div>

            </div>
        );

    }
}

export default Home;
