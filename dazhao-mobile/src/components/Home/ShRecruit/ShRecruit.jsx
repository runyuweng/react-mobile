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

        this.handleLoad(document);

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

    handleLoad(elem){
        elem.addEventListener("touchstart",(e)=>{
            const height = document.body.scrollHeight;
            const event = e || window.event;
            const startPoint = event.touches[0].pageY;
            elem.addEventListener("touchmove",(e)=>{
                const event = e || window.event;
                const currentY = event.touches[0].pageY;
                const changeY = currentY-startPoint;
                // console.log(startPoint,currentY,currentY-startPoint);
                // console.log(document.body.scrollTop,window.innerHeight,document.body.scrollHeight);
                if(((document.body.scrollTop+window.innerHeight)>=document.body.scrollHeight) && changeY<0){
                    console.log('true');
                    document.body.style.height = (document.body.offsetHeight + 5)+'px';
                }
            });
            elem.addEventListener("touchend",(e)=>{
                if(height<document.body.offsetHeight){
                    console.log(height);
                    document.body.style.height = height + 'px';
                    console.log('height',height + 'px');
                    console.log('end',document.body.offsetHeight);
                    //ajax
                }
            })
        })

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

    changeSort (id, type) {
        ajax({"url": "/zhaoda/jobs/condition?province=320000&salary=3&sort=default&degree=3&faq=1"}).
        then((data) => {
            console.log(data);

        });

        console.log(id, type);

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
