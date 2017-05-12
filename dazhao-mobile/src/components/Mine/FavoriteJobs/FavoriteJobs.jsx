import React from "react";
import "./FavoriteJobs.scss";
import ajax from "../../../services/ajax.js";

class FavoriteJobs extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            page:1,
            "jobs": [
                {
                  "job_id":"0",
                  "job_name":"JAVA研发工程师",
                  "education":"本科",
                  "company":{
                    "name":"阿里巴巴网络技术有限公司",
                    "img": "http://www.dazhao100.com/update/1491443750l009127445.png",
                    "city":"上海",
                    "type":"互联网",
                    "stage":"上市",
                    "numbers":"100人以上"
                  }   
                },
                {
                  "job_id":"1",
                  "job_name":"JAVA研发工程师",
                  "education":"本科",
                  "company":{
                    "name":"阿里巴巴网络技术有限公司",
                    "img": "http://www.dazhao100.com/update/1491443750l009127445.png",
                    "city":"上海",
                    "type":"互联网",
                    "stage":"上市",
                    "numbers":"100人以上"
                  }     
                }
            ]
        };
        this.fetchCollectionJobs = this.fetchCollectionJobs.bind(this);
    }

    componentDidMount() {
        this.fetchCollectionJobs(this.state.page);
    }

    fetchCollectionJobs(page){
        ajax({"url":`/collectionposts?page=${page}`}).
        then((data)=>{
            if(data.code==="S01"){
                const jobs = data.contents;
                this.setState({
                    jobs:this.state.jobs.push(jobs)
                })
            }else if (data.code==="S02") {
                
            }else{
                this.setState({
                    jobs:this.state.jobs
                })
            }
        })
    }

    render () {

        const {jobs} = this.state;
        const jobList = jobs.map((value, i) => <div className="jobitems" key={i}>
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
        </div>);

        return (
            <div id="favoriteJobs">
                {jobList}
            </div>
        );

    }
}

export default FavoriteJobs;
