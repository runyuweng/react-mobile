import React from "react";
import "./ShRecruit.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import SlideBar from "../../MainLayout/SlideBar/SlideBar.jsx";
import fetch from "../../../services/xFetch";
import {Link} from "react-router";

class ShRecruit extends React.Component {

    constructor (props) {

        super(props);
        this.state = {"industry": []};

    }

    componentDidMount () {

        fetch("/zhaoda/industry/category", {"method": "GET"}).
        then((response) => response.json()).
        then((data) => {

            console.log(data);
            this.setState({"industry": data.contents});

        });

    }

    render () {

        const {industry} = this.state;

        return (
            <div className="ShRecruit">
                <header>
                    <TopBar title="校招职位" border="boder" />
                </header>

                <SlideBar industry={industry} />

                <div className="srMain">
                    <div className="sort">
                        <ul>
                            <li>默认排序<img src="/src/images/Back_down.png" /></li>
                            <li>全国<img src="/src/images/Back_down.png" /></li>
                            <li>5k-8k<img src="/src/images/Back_down.png" /></li>
                            <li>本科<img src="/src/images/Back_down.png" /></li>
                        </ul>
                    </div>

                    <div id="homeMain">
                        <Link to="jobdetail">
                            <div className="jobitems">
                                <span className="pics"><img src="/src/images/ali.png" /></span>
                                <div className="jobintro">
                                    <h2>JAVA研发工程师</h2>
                                    <h3>阿里巴巴网络技术有限公司</h3>
                                    <span>
                                        <em>上海</em>
                                        <em>本科</em>
                                    </span>
                                    <span>
                                        <em>互联网</em>
                                        <b>|</b>
                                        <em>外商独资</em>
                                        <b>|</b>
                                        <em>上市</em>
                                        <b>|</b>
                                        <em>1000人以上</em>
                                    </span>
                                </div>
                            </div>
                        </Link>

                        <div className="jobitems">
                            <span className="pics"><img src="/src/images/ali.png" /></span>
                            <div className="jobintro">
                                <h2>JAVA研发工程师</h2>
                                <h3>阿里巴巴网络技术有限公司</h3>
                                <span>
                                    <em>上海</em>
                                    <em>本科</em>
                                </span>
                                <span>
                                    <em>互联网</em>
                                    <b>|</b>
                                    <em>外商独资</em>
                                    <b>|</b>
                                    <em>上市</em>
                                    <b>|</b>
                                    <em>1000人以上</em>
                                </span>
                            </div>
                        </div>

                        <div className="jobitems">
                            <span className="pics"><img src="/src/images/ali.png" /></span>
                            <div className="jobintro">
                                <h2>JAVA研发工程师</h2>
                                <h3>阿里巴巴网络技术有限公司</h3>
                                <span>
                                    <em>上海</em>
                                    <em>本科</em>
                                </span>
                                <span>
                                    <em>互联网</em>
                                    <b>|</b>
                                    <em>外商独资</em>
                                    <b>|</b>
                                    <em>上市</em>
                                    <b>|</b>
                                    <em>1000人以上</em>
                                </span>
                            </div>
                        </div>

                        <div className="jobitems">
                            <span className="pics"><img src="/src/images/ali.png" /></span>
                            <div className="jobintro">
                                <h2>JAVA研发工程师</h2>
                                <h3>阿里巴巴网络技术有限公司</h3>
                                <span>
                                    <em>上海</em>
                                    <em>本科</em>
                                </span>
                                <span>
                                    <em>互联网</em>
                                    <b>|</b>
                                    <em>外商独资</em>
                                    <b>|</b>
                                    <em>上市</em>
                                    <b>|</b>
                                    <em>1000人以上</em>
                                </span>
                            </div>
                        </div>

                        <div className="jobitems">
                            <span className="pics" />
                            <div className="jobintro">
                                <h2>JAVA研发工程师</h2>
                                <h3>阿里巴巴网络技术有限公司</h3>
                                <span>
                                    <em>上海</em>
                                    <em>本科</em>
                                </span>
                                <span>
                                    <em>互联网</em>
                                    <b>|</b>
                                    <em>外商独资</em>
                                    <b>|</b>
                                    <em>上市</em>
                                    <b>|</b>
                                    <em>1000人以上</em>
                                </span>
                            </div>
                        </div>
                        <p>加载更多</p>
                    </div>
                </div>
            </div>
        );

    }
}
export default ShRecruit;
