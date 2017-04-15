import React from "react";
import ReactDOM from "react-dom";
import "./Intern.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import SlideBar from "../../MainLayout/SlideBar/SlideBar.jsx";
import SortBy from "../../MainLayout/SortBy/SortBy.jsx";
import Loading from "../../MainLayout/Loading/Loading.jsx";
import fetch from "../../../services/xFetch";
import {Link} from "react-router";


class Intern extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "showLoading": true,
            "industry": [],
            "jobs": [],
            listDisplay : false
        };

    }

    componentDidMount () {
        this.props.showBottom(false);

        fetch("/zhaoda/industry/category", {"method": "GET"}).
        then((response) => response.json()).
        then((data) => {

            this.setState({"industry": data.contents});

        });

        fetch("/zhaoda/jobs/school?industryid=5", {"method": "GET"}).
        then((response) => response.json()).
        then((data) => {

            this.setState({"jobs": data.contents},()=>{
                this.setState({showLoading: false});
            });

        });

    }

    changeCategory (id) {

        this.setState({showLoading: true})

        fetch(`/zhaoda/jobs/school?industryid=${id}`, {"method": "GET"}).
        then((response) => response.json()).
        then((data) => {

            this.setState({"jobs": data.contents},()=>{
                this.setState({showLoading: false});
            });

        });

    }


    changeSort(id){
        console.log(id)
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
                    <TopBar title="实习职位" border="boder" />
                </header>

                <SlideBar industry={industry} change={(id) => this.changeCategory(id)} />

                <div className="srMain">
                    <SortBy count="4" sortChange={(id) => this.changeSort(id)}/>
                    {showLoading?<Loading/>:""}
                    <div id="homeMain">
                        {jobList}
                        <p>加载更多</p>
                    </div>
                </div>
            </div>
        );

    }
}


export default Intern;
