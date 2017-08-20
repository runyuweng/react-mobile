import React from "react";
import "./Enterprise.scss";
import TopBar from "../../Public/TopBar/TopBar.jsx";
import SlideBar from "../../Public/SlideBar/SlideBar.jsx";
import SortBy from "../../Public/SortBy/SortBy.jsx";
import Loading from "../../Public/Loading/Loading.jsx";
import ajax from "../../../services/ajax";
import {Link} from "react-router";
import QueueAnim from "rc-queue-anim";

class Enterprise extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "showLoading": true,
            "industry": [],
            "industryid": "5",
            "enterprise": [],
            "listDisplay": false,
            "data": {
                "province": "unlimited",
                "sort": "default",
                "salary": "unlimited",
                "degree": "unlimited",
                "page": 1
            },
            "reset": false,
            "tips": "加载更多"
        };

        this.handleScroll = this.handleScroll.bind(this);

    }

    componentDidMount () {

        this.props.changeBottomState(false);

        ajax({"url": "/zhaoda/industry/category"}).
        then((data) => {

            console.log(data);
            this.setState({"industry": data.contents});

        });

        this.loadData();

        window.addEventListener("scroll", this.handleScroll);

    }

    componentWillUnmount () {

        window.removeEventListener("scroll", this.handleScroll);

    }

    handleScroll (e) {

        const scrollTop = document.body.scrollTop;
        const innerHeight = window.innerHeight;
        const docHeight = document.body.scrollHeight;


        scrollTop >= docHeight - innerHeight
        ? (() => {

            this.loadData("loadMore");

        })() : "";

    }

    loadData (id, type) {


        this.setState({"tips": "加载中..."});

        // 通过arguments来判断是不是加载更多
        const data = JSON.parse(JSON.stringify(this.state.data));

        if (id && type) {

            data[type] = id;

        }
        ajax({"url": `/zhaoda/jobs/enterprise?province=${data.province}&sort=${data.sort}&degree=${data.degree}&industryid=${this.state.industryid}&page=${data.page}`}).
        then((data) => {

            const enterprise = (arguments.length === 1 ? this.state.enterprise.concat(data.contents || []) : data.contents) || [];

            this.setState({
                enterprise,
                "reset": false
            }, () => {

                this.setState({
                    "showLoading": false,
                    "tips": data.code === "S02" ? "已加载全部" : "加载更多"
                });
                if (arguments.length === 1 && typeof arguments[0] === "function") {

                    arguments[0]();

                }

            });

        });

        Object.assign(data, {"page": data.page + 1});
        this.setState({data});

    }

    changeCategory (id) {

        alert(id);

        this.setState({
            "showLoading": true,
            "industryid": id,
            "data": {
                "province": "unlimited",
                "sort": "default",
                "salary": "unlimited",
                "degree": "unlimited",
                "page": "1"
            },
            "reset": true
        }, () => {

            this.loadData();

        });

    }


    changeSort (id, type) {

        const data = JSON.parse(JSON.stringify(this.state.data));

        data.page = 1;
        this.setState({data}, () => {

            this.loadData(id, type);

        });

    }

    render () {

        const {industry, enterprise, showLoading, reset, tips} = this.state;

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

        return (
            <div className="Enterprise">
                <header>
                    <TopBar title="企业" border="boder" />
                </header>

                <SlideBar industry={industry} change={(id) => this.changeCategory(id)} />

                <div className="srMain">
                    <SortBy count="3" reset={reset} sortChange={(id, type) => this.changeSort(id, type)} sortChange={(id, type) => this.changeSort(id, type)} />
                    {showLoading ? <Loading /> : ""}

                    <div className="hotjob">
                        {enterpriseList}
                        <p>{tips}</p>
                    </div>

                </div>

                <p className="fetchmore">{this.state.tips}</p>

            </div>
        );

    }
}
export default Enterprise;
