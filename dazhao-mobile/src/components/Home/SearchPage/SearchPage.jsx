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
            "active": "GANGWEI",
            enterprise:[]
        };
        this.fetchJobs = this.fetchJobs.bind(this);

    }

    componentDidMount () {
        this.props.changeBottomState(false);

  	 const searchCon = sessionStorage.getItem("searchCon");

  	 this.setState({"keyword": searchCon}, () => {

       this.fetchJobs();

  	 });

    }

    fetchJobs () {

        if(this.state.active === "GONGSI" ){
            // ajax({"url": `/zhaoda/job/searchjob?keyword=${this.state.keyword}&type=${this.state.active}`}).
            ajax({"url": `/zhaoda/company/searchcompany?keyword=${this.state.keyword}`}).
            then((data) => {
                console.log(data)

                if (data.code === "S01") {

                    const enterprise = data.contents;

                    this.setState({"enterprise": (enterprise)});

                } else if (data.code === "E01") {
                    this.props.changeMessageContent("暂无相关内容");
                    

                    this.setState({"enterprise": []});

                }

            });
        }else{
            ajax({"url": `/zhaoda/job/searchjob?keyword=${this.state.keyword}`}).
            then((data) => {
                console.log(data)
    
    
                if (data.code === "S01") {
    
                    const jobs = data.contents;
    
                    this.setState({"jobs": jobs});
    
                } else if (data.code === "E01") {
    
                    this.props.changeMessageContent("暂无相关内容");
                    this.setState({"jobs": []});
    
                }
    
            });

        }



    }


    render () {

        const {jobs, enterprise, active} = this.state;

        const enterpriseList = enterprise.map((value, i) => <Link to={`/company/${value.companyid}`} key={i}>
            <div className="jobitems">
                <span className="pics">
                    <img src={value.img} />
                </span>
                <div className="jobintro">
                    <h2>{value.name}{value.Authentication ? <span>认证</span> : ""}</h2>
                    <h3><span>[<em>8</em>个]推荐算法实习</span>、<span>JAVA研发工程</span>、<span>JAVAEE研发工程</span>、<span>JAVAEE研发工程</span></h3>
                    <span className="address">
                        <em>{value.city}</em>
                    </span>
                    <span>
                        <em>{value.type}</em>
                        <b>|</b>
                        <em>外商独资</em>
                        <b>|</b>
                        <em>{value.stage}</em>
                        <b>|</b>
                        <em>{value.numbers}</em>
                    </span>
                </div>
            </div>
        </Link>);

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
                "name": "岗位",
                "id": "GANGWEI"
            },{
                "name": "公司",
                "id": "GONGSI"
            },
            
        ];

        const items = words.map((d, i) => <li
            key={d.id}
            className={d.id === active ? "active" : ""}
            onClick={() => {

                this.setState({"active": d.id},()=>{
                this.fetchJobs();

                });

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

                        }} placeholder="搜索期望中的公司、岗位" value={this.state.keyword}
                        />
                        <span onClick={this.fetchJobs}>搜索</span>
                    </div>
                </header>
                <nav>
                    <ul>
                        {items}
                    </ul>
                </nav>
                {this.state.active === 'GANGWEI'? 
                <div className="jobs">
                    {jobList}
                </div>:
                <div className="en">
                    {enterpriseList}
                </div>}

            </div>
        );

    }
}

export default SearchPage;
