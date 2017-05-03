import React from "react";
import "./ShRecruit.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import SlideBar from "../../MainLayout/SlideBar/SlideBar.jsx";
import Loading from "../../MainLayout/Loading/Loading.jsx";
import SortBy from "../../MainLayout/SortBy/SortBy.jsx";
import ajax from "../../../services/ajax";
import {Link} from "react-router";
import ReactDOM from "react-dom";


class ShRecruit extends React.Component {

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

    }

    componentDidMount () {

        this.props.showBottom(false);

        ajax({"url": "/zhaoda/industry/category"}).
        then((data) => {

            this.setState({"industry": data.contents});

        });

        this.loadData(() => {

            this.handleLoad(document);

        });

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
        this.setState({data});

    }

    handleLoad (elem) {

        const that = this;

        elem.addEventListener("touchstart", (e) => {

            const height = document.body.scrollHeight;
            const event = e || window.event;
            const startPoint = event.touches[0].pageY;

            elem.addEventListener("touchmove", (e) => {

                const event = e || window.event;
                const currentY = event.touches[0].pageY;
                const changeY = currentY - startPoint;

                if (document.body.scrollTop + window.innerHeight >= document.body.scrollHeight && document.body.scrollHeight <= height + 25 && changeY < 0 && this.state.tips === "加载更多") {

                    document.body.style.height = `${document.body.offsetHeight + 1}px`;

                }

            });
            elem.addEventListener("touchend", (e) => {

                if (height < document.body.offsetHeight && this.state.tips === "加载更多") {

                    document.body.style.height = "auto";
                    const data = JSON.parse(JSON.stringify(this.state.data));

                    data.page = parseInt(data.page) + 1;
                    this.setState({data});
                    that.loadData("loadMore");

                }

            });

        });

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
            <Link to={"/jobdetail/"+value.jobid} key={i}>
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
                    <TopBar title="校招职位" border="boder" />
                </header>

                <SlideBar industry={industry} change={(id) => this.changeCategory(id)} />

                <div className="srMain">
                    <SortBy reset={reset} sortChange={(id, type) => this.changeSort(id, type)} />
                    {showLoading ? <Loading /> : ""}
                    <div id="homeMain">
                        <div>{jobList}</div>

                        <p>{tips}</p>
                    </div>
                </div>
            </div>
        );

    }
}


export default ShRecruit;
