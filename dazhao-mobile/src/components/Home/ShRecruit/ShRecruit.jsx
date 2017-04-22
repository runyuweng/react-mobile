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
            "jobs": [],
            "listDisplay": false
        };

    }

    componentDidMount () {

        this.props.showBottom(false);

        ajax({"url": "/zhaoda/industry/category"}).
        then((data) => {

            this.setState({"industry": data.contents});

        });

        ajax({"url": "/zhaoda/jobs/school?industryid=5"}).
        then((data) => {

            this.setState({"jobs": data.contents}, () => {

                this.setState({"showLoading": false});

            });

        });

    }

    changeCategory (id) {

        this.setState({"showLoading": true});

        ajax({"url": `/zhaoda/jobs/school?industryid=${id}`}).
        then((data) => {

            this.setState({"jobs": data.contents}, () => {

                this.setState({"showLoading": false});

            });

        });

    }

    changeSort (id) {

        // Console.log(id);

    }

    render () {

        const {industry, jobs, showLoading} = this.state;
        const jobList = jobs.map((value, i) =>
            <Link to="jobdetail" key={i}>
                <div className="jobitems">
                    <span className="pics"><img src="/src/images/ali.png" /></span>
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
                    <SortBy sortChange={(id) => this.changeSort(id)} />
                    {showLoading ? <Loading /> : ""}
                    <div id="homeMain">
                        {jobList}

                        <p>加载更多</p>
                    </div>
                </div>
            </div>
        );

    }
}


export default ShRecruit;
