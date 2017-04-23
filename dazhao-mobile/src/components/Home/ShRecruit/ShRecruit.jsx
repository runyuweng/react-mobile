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
            "industryid": '5',
            "jobs": [],
            "listDisplay": false,
            "data":{
                "province": '110000',
                "sort": 'hot',
                "salary": '2',
                "degree": '0',
                "page":'1'
            }
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
                this.handleLoad(document);

            });

        });

    }

    handleLoad(elem){
        elem.addEventListener("touchstart",(e)=>{
            const height = document.body.scrollHeight;
            const event = e || window.event;
            const startPoint = event.touches[0].pageY;
            elem.addEventListener("touchmove",(e)=>{
                const event = e || window.event;
                const currentY = event.touches[0].pageY;
                const changeY = currentY-startPoint;
                if(((document.body.scrollTop+window.innerHeight)>=document.body.scrollHeight) && changeY<0){
                    document.body.style.height = (document.body.offsetHeight + 5)+'px';
                }
            });
            elem.addEventListener("touchend",(e)=>{
                if(height<document.body.offsetHeight){
                    document.body.style.height = height + 'px';
                    //ajax
                }
            })
        })

    }

    changeCategory (id) {

        this.setState({
            "showLoading": true,
            "industryid": id
        });

        ajax({"url": `/zhaoda/jobs/school?industryid=${id}`}).
        then((data) => {

            this.setState({"jobs": data.contents}, () => {

                this.setState({"showLoading": false});

            });

        });

    }

    loadData(id, type){
        let data = JSON.parse(JSON.stringify(this.state.data))
        data[type] = id;
        console.log(data);
        ajax({"url": "/zhaoda/jobs/condition?province="+data.province+"&salary="+data.salary+"&sort="+data.sort+"&degree="+data.degree+"&faq=1&industryid="+this.state.industryid+"&page="+data.page}).
        then((data) => {
            this.setState({jobs:data.contents||[]})
            console.log(data);
        });
        this.setState({data:data})
    }

    changeSort (id,type) {
        this.loadData(id,type);
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
                    <SortBy sortChange={(id, type) => this.changeSort(id, type)} />
                    {showLoading ? <Loading /> : ""}
                    <div id="homeMain">
                        <div>{jobList}</div>

                        <p>加载更多</p>
                    </div>
                </div>
            </div>
        );

    }
}


export default ShRecruit;
