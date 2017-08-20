import React from "react";
import "./SearchPage.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax";

class SearchPage extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
          	"keyword": "",
        	 	"jobs": [],
          	"page": 1,
            "nomore": false,
            "moreMessage": "",
            "active": "GONGSI"
        };
        this.fetchJobs = this.fetchJobs.bind(this);

    }

    componentDidMount () {

  	 const searchCon = sessionStorage.getItem("searchCon");

  	 this.setState({"keyword": searchCon}, () => {

       this.fetchJobs();

  	 });

    }

    fetchJobs () {

        ajax({"url": `/zhaoda/job/searchjob?keyword=${this.state.keyword}`}).
        then((data) => {


            if (data.code === "S01") {

                const jobs = data.contents;

                this.setState({"jobs": this.state.jobs.concat(jobs)});

            } else if (data.code === "E01") {

                this.setState({"jobs": []});

            }

        });

    }

    render () {

        const {jobs, active} = this.state;

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

        const words = [
            {
                "name": "公司",
                "id": "GONGSI"
            },
            {
                "name": "岗位",
                "id": "GANGWEI"
            },
            {
                "name": "地点",
                "id": "DIDIAN"
            }
        ];

        const items = words.map((d, i) => <li
            key={d.id}
            className={d.id === active ? "active" : ""}
            onClick={() => {

                this.setState({"active": d.id});

            }}
                                          >{d.name}</li>);

        return (
            <div id="searchPage">
                <header>
                    <div className="search">
                        <Link to="/">
                            <span >取消</span>
                        </Link>
                        <input type="text" onChange={(e) => {

                            this.setState({"keyword": e.target.value});

                        }} placeholder="搜索期望中的公司、岗位、地点" value={this.state.keyword}
                        />
                        <span onClick={this.fetchJobs}>搜索</span>
                    </div>
                </header>
                <nav>
                    <ul>
                        {items}
                    </ul>
                </nav>

                {/* <div className="jobWrap">{jobList}</div>*/}
                <div className="tips">
                  此功能正在完善中...
                </div>

            </div>
        );

    }
}

export default SearchPage;
