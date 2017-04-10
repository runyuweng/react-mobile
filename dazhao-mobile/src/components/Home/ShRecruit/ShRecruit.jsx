import React from "react";
import "./ShRecruit.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import SlideBar from "../../MainLayout/SlideBar/SlideBar.jsx";
import fetch from "../../../services/xFetch";
import {Link} from "react-router";

class ShRecruit extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "industry": [],
            "jobs": []
        };

    }

    componentDidMount () {

        fetch("/zhaoda/industry/category", {"method": "GET"}).
        then((response) => response.json()).
        then((data) => {

            this.setState({"industry": data.contents});

        });

        fetch("/zhaoda/jobs/school?industryid=5", {"method": "GET"}).
        then((response) => response.json()).
        then((data) => {

            this.setState({"jobs": data.contents});

        });

    }

    changeCategory (id) {

        fetch(`/zhaoda/jobs/school?industryid=${id}`, {"method": "GET"}).
        then((response) => response.json()).
        then((data) => {

            this.setState({"jobs": data.contents});

        });

    }

    render () {

        const {industry, jobs} = this.state;
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
                    <div className="sort">
                        <ul>
                            <li>默认排序<img src="/src/images/Back_down.png" /></li>
                            <li>全国<img src="/src/images/Back_down.png" /></li>
                            <li>5k-8k<img src="/src/images/Back_down.png" /></li>
                            <li>本科<img src="/src/images/Back_down.png" /></li>
                        </ul>
                    </div>

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
