import React from "react";
import "./FavoriteJobs.scss";
import ajax from "../../../services/ajax.js";
import {Link} from "react-router";

class FavoriteJobs extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "page": 1,
            "jobs": []
        };
        this.fetchCollectionJobs = this.fetchCollectionJobs.bind(this);

    }

    componentDidMount () {

        this.fetchCollectionJobs(this.state.page);

    }

    fetchCollectionJobs (page) {

        ajax({"url": `/zhaoda/job/mycarejob?page=${page}`}).
        then((data) => {


            if (data.code === "S01") {

                this.context.changeMessageContent(data.message);
                const jobs = data.contents;

                this.setState({"jobs": this.state.jobs.concat(jobs)});

            } else if (data.code === "S02") {

                this.context.changeMessageContent(data.message);

                const jobs = data.contents;

                this.setState({"jobs": this.state.jobs.concat(jobs)});

            } else if (data.code === "E01") {

                this.context.changeMessageContent(data.message);
                this.setState({"jobs": []});

            }

        });

    }


    render () {

        const {jobs} = this.state;
        const jobList = jobs.map((value, i) =>
            <Link key={i} to={`/jobdetail/${value.jobid}`}>
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
            </Link>
        );

        return (
            <div id="favoriteJobs">
                {jobList}
            </div>
        );

    }
}

FavoriteJobs.contextTypes = {"changeMessageContent": React.PropTypes.func};

export default FavoriteJobs;
