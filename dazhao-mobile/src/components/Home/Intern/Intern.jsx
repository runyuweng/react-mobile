import React from "react";
import ReactDOM from "react-dom";
import TopBar from "../../Public/TopBar/TopBar.jsx";
import SlideBar from "../../Public/SlideBar/SlideBar.jsx";
import SortBy from "../../Public/SortBy/SortBy.jsx";
import Loading from "../../Public/Loading/Loading.jsx";
import ajax from "../../../services/ajax";
import {Link} from "react-router";


class Intern extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "showLoading": true,
            "industry": [],
            "industryid": "5",
            "jobs": [],
            "listDisplay": false,
            "data": {
                "province": "unlimited",
                "sort": "default",
                "salary": "unlimited",
                "degree": "unlimited",
                "page": 1
            },
            "reset": false,
            "tips": "加载更多"
        };
        this.handleScroll = this.handleScroll.bind(this);

    }

    componentDidMount () {

        this.props.changeBottomState(false);

        ajax({"url": "/zhaoda/industry/category"}).
        then((data) => {

            this.setState({"industry": data.contents});

        });

        this.loadData();

        window.addEventListener("scroll", this.handleScroll);

    }

    componentWillUnmount () {

        window.removeEventListener("scroll", this.handleScroll);

    }


    handleScroll (e) {

        const scrollTop = document.body.scrollTop;
        const innerHeight = window.innerHeight;
        const docHeight = document.body.scrollHeight;

        scrollTop >= docHeight - innerHeight
        ? (() => {

            this.loadData("loadMore");

        })() : "";

    }

    loadData (id, type) {

        this.setState({"tips": "加载中..."});

        // 通过arguments来判断是不是加载更多
        const data = JSON.parse(JSON.stringify(this.state.data));

        if (id && type) {

            data[type] = id;

        }
        ajax({"url": `/zhaoda/jobs/condition?faq=1&province=${data.province}&salary=${data.salary}&sort=${data.sort}&degree=${data.degree}&industryid=${this.state.industryid}&page=${data.page}`}).
        then((data) => {


            const jobs = (arguments.length === 1 ? this.state.jobs.concat(data.contents || []) : data.contents) || [];

            this.setState({
                jobs,
                "reset": false
            }, () => {

                this.setState({
                    "showLoading": false,
                    "tips": data.code === "S02" ? "已加载全部" : "加载更多"
                });
                if (arguments.length === 1 && typeof arguments[0] === "function") {

                    arguments[0]();

                }

            });

        });

        Object.assign(data, {"page": data.page + 1});
        this.setState({data});

    }


    changeCategory (id) {

        this.setState({
            "showLoading": true,
            "industryid": id,
            "data": {
                "province": "unlimited",
                "sort": "default",
                "salary": "unlimited",
                "degree": "unlimited",
                "page": "1"
            },
            "reset": true
        }, () => {

            this.loadData();

        });

    }


    changeSort (id, type) {

        const data = JSON.parse(JSON.stringify(this.state.data));

        data.page = 1;
        this.setState({data}, () => {

            this.loadData(id, type);

        });

    }


    render () {

        const {industry, jobs, showLoading, reset, tips} = this.state;
        const jobList = jobs.map((value, i) =>
            <Link to={`/jobdetail/${value.jobid}`} key={i}>
                <div className="jobitems">
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
                            <em>外商独资(暂无)</em>
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
            <div className="ShRecruit">
                <header>
                    <TopBar title="实习职位" border="boder" />
                </header>

                <SlideBar industry={industry} change={(id) => this.changeCategory(id)} />

                <div className="srMain">
                    <SortBy reset={reset} sortChange={(id, type) => this.changeSort(id, type)} />
                    {showLoading ? <Loading /> : ""}
                    <div id="homeMain">
                        {jobList}
                    </div>
                </div>
                <p className="fetchmore">{this.state.tips}</p>
            </div>
        );

    }
}


export default Intern;
