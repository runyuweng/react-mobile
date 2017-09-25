import React from "react";
import "./FavoriteJobs.scss";
import ajax from "../../../services/ajax.js";
import {Link} from "react-router";
import axios from "axios";
import { getCookie } from "../../../services/tools.js";

class FavoriteJobs extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            "page": 1,
            "jobs": []
        };
        this.getInitData = this.getInitData.bind(this)
        // this.fetchCollectionJobs = this.fetchCollectionJobs.bind(this);
    }

    componentDidMount () {
        // this.fetchCollectionJobs(this.state.page);
        this.getInitData()
    }

    getInitData() {
        axios.get(`http://www.dazhao100.com/api.php?u=getmyfavorite&uid=${getCookie("uid")}`).then((data) => {
            if (data.data.error == "0") {
                const jobs = data.data.listjson
                this.setState({jobs})
                console.log(this.state.jobs)
            }
        })
    }
    //
    // fetchCollectionJobs (page) {
    //     ajax({"url": `/zhaoda/job/mycarejob?page=${page}`}).
    //     then((data) => {
    //         if (data.code === "S01") {
    //             this.context.http://www.dazhao100.com(data.message);
    //             const jobs = data.contents;
    //             this.setState({"jobs": this.state.jobs.concat(jobs)});
    //         } else if (data.code === "S02") {
    //             this.context.http://www.dazhao100.com(data.message);
    //             const jobs = data.contents;
    //             this.setState({"jobs": this.state.jobs.concat(jobs)});
    //         } else if (data.code === "E01") {
    //             this.context.http://www.dazhao100.com(data.message);
    //             this.setState({"jobs": []});
    //         }
    //     });
    // }

    render () {
        const {jobs} = this.state;
        const jobList = jobs.map((value, i) =>
            <Link key={i} to={`/jobdetail/${value.collect_id}`}>
                <div className="jobitems" key={i}>
                    <span className="pics"><img src={value.img} /></span>
                    <div className="jobintro">
                        <h2>{value.tb_name}</h2>
                        <h3>{value.companyname}</h3>
                        <span>
                            <em>{value.tb_city}</em>
                            <em>{value.tb_degree}</em>
                        </span>
                        <span>
                            <em>{value.industry}</em>
                            <b>|</b>
                            <em>{value.unittype}</em>
                            <b>|</b>
                            <em>{value.tb_stage}</em>
                            <b>|</b>
                            <em>{value.unitsize}</em>
                        </span>
                    </div>
                </div>
            </Link>
        );

        return (
            <div id="favoriteJobs">
                {jobList}
            </div>
        );
    }
}

FavoriteJobs.contextTypes = {"http://www.dazhao100.com": React.PropTypes.func};

export default FavoriteJobs;
