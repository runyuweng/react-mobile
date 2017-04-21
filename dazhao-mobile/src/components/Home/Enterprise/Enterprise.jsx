import React from "react";
import "./Enterprise.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import SlideBar from "../../MainLayout/SlideBar/SlideBar.jsx";
import Loading from "../../MainLayout/Loading/Loading.jsx";
import ajax from "../../../services/ajax";
import {Link} from "react-router";

class Enterprise extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "showLoading": true,
            "industry": [],
            "enterprise": []
        };

    }

    componentDidMount () {

        this.props.showBottom(false);

        ajax({url: "/zhaoda/industry/category"}).
        then((data) => {

            this.setState({"industry": data.contents});

        });
        ajax({url: "/zhaoda/jobs/enterprise?industryid=5"}).
        then((data) => {

            this.setState({"enterprise": data.contents}, () => {

                this.setState({"showLoading": false});

            });

        });

    }
    changeCategory (id) {

        this.setState({"showLoading": true});

        ajax({url: `/zhaoda/jobs/enterprise?industryid=${id}`}).
        then((data) => {

            this.setState({"enterprise": data.contents}, () => {

                this.setState({"showLoading": false});

            });

        });

    }

    render () {

        const {industry, enterprise, showLoading} = this.state;
        const enterpriseList = enterprise.map((value, i) =>
            <div className="jobitems" key={i}>
                <span className="pics" />
                <div className="jobintro">
                    <h2>{value.name}<span>认证</span></h2>
                    <h3>
                        <span>[<em>{value.jobs.length}</em>个]</span>
                        {value.jobs.length > 0 ? value.jobs.map((value, i) =>
                            <span key={i}>{value.job_name}、</span>
                            ) : "暂无"}
                    </h3>
                    <span className="address">
                        <em>{value.city}</em>
                    </span>
                    <span>
                        <em>互联网(暂无)</em>
                        <b>|</b>
                        <em>外商独资(暂无)</em>
                        <b>|</b>
                        <em>{value.stage}</em>
                        <b>|</b>
                        <em>{value.numbers}</em>
                    </span>
                </div>
            </div>
            );

        return (
            <div className="Enterprise">
                <header>
                    <TopBar title="企业" border="boder" />
                </header>

                <SlideBar industry={industry} change={(id) => this.changeCategory(id)} />

                <div className="srMain">
                    <div className="sort">
                        <ul>
                            <li>默认排序<img src="/src/images/Back_down.png" /></li>
                            <li>全国<img src="/src/images/Back_down.png" /></li>
                            <li>本科<img src="/src/images/Back_down.png" /></li>
                        </ul>
                    </div>
                    {showLoading ? <Loading /> : ""}
                    <div className="hotjob">
                        {enterpriseList}
                        <p>加载更多</p>
                    </div>

                </div>

            </div>
        );

    }
}

export default Enterprise;
