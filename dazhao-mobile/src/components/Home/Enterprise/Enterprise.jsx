import React from "react";
import "./Enterprise.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import SlideBar from "../../MainLayout/SlideBar/SlideBar.jsx";
import SortBy from "../../MainLayout/SortBy/SortBy.jsx";
import Loading from "../../MainLayout/Loading/Loading.jsx";
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

    }

    componentDidMount () {

        this.props.changeBottomState(false);

        ajax({"url": "/zhaoda/industry/category"}).
        then((data) => {

            this.setState({"industry": data.contents});

        });

        this.loadData(() => {

            this.handleLoad(document);

        });

    }

    loadData (id, type) {

        // 通过arguments来判断是不是加载更多
        const data = JSON.parse(JSON.stringify(this.state.data));

        this.setState({"tips": "加载中..."});


        if (id && type) {

            data[type] = id;

        }
        ajax({"url": `/zhaoda/company/condition?province=${data.province}&sort=${data.sort}&degree=${data.degree}&industryid=${this.state.industryid}&page=${data.page}`}).
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
        this.setState({data});

    }

    handleLoad (elem) {

        const that = this;

        elem.addEventListener("touchstart", (e) => {

            const height = document.body.scrollHeight;
            const event = e || window.event;
            const startPoint = event.touches[0].pageY;

            elem.addEventListener("touchmove", (e) => {

                const event = e || window.event;
                const currentY = event.touches[0].pageY;
                const changeY = currentY - startPoint;

                if (document.body.scrollHeight >= height && document.body.scrollHeight <= height + 25 && changeY < 0 && this.state.tips === "加载更多") {

                    document.body.style.height = `${document.body.offsetHeight + 1}px`;

                }

            });
            elem.addEventListener("touchend", (e) => {

                if (height < document.body.offsetHeight && this.state.tips === "加载更多") {

                    document.body.style.height = "auto";
                    const data = JSON.parse(JSON.stringify(this.state.data));

                    data.page = parseInt(data.page) + 1;
                    this.setState({data});
                    that.loadData("loadMore");

                }

            });

        });

    }

    changeCategory (id) {

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
        const enterpriseList = enterprise.map((value, i) =>
            <Link to={`/company/${value.companyid}`} key={i}>
                <div className="jobitems" key={i}>

                    <div className="pics">
                        <img src={value.img} />
                    </div>
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

            </div>
        );

    }
}
export default Enterprise;
