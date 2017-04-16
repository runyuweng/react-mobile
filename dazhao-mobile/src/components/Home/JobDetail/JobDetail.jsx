import React from "react";
import "./JobDetail.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import {Link} from "react-router";
 

class JobDetail extends React.Component {

    constructor (props) {

        super(props);

    }

    componentDidMount () {

        this.props.showBottom();

    }

    render () {

        return (
            <div className="JobDetail">
                <header>
                    <TopBar title="职位详情" border="boder" />
                </header>

                <div id="jobTop">
                    <span className="joblog"><img src="/src/images/ali.png" /></span>
                    <h2>JAVA研发工程师<span>[<em>8</em>K-<em>12</em>K]</span>
                    </h2>
                    <div>
                        <span><img src="/src/images/资源 58.png" /><em>上海</em></span>
                        <span><img src="/src/images/资源 59.png" /><em>本科</em></span>
                        <span><img src="/src/images/资源 61.png" /><em>校招</em></span>
                    </div>
                    <p>
                        <span>扁平管理</span>
                        <span>发展空间大</span>
                        <span>带薪年假</span>
                    </p>

                </div>

                <Link to="company">
                    <div className="job">
                        <div className="jobitems">
                            <div className="jobintro">
                                <h2>阿里巴巴网络技术有限公司<span>认证</span></h2>
                                <h3><span>[<em>8</em>个]推荐算法实习</span>、<span>JAVA研发工程</span>、</h3>
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
                            <span><img src="/src/images/Back_Button.png" /></span>
                        </div>
                    </div>
                </Link>

                <div className="jobrequire">
                    <h2 className="positionde"><span><img src="/src/images/资源 55.png" /></span>
            职位详情
          </h2>
                    <div className="jobde">
                        <h3>职位描述</h3>
                        <ol>
                            <li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li>
                            <li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li>
                            <li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li>
                            <li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li>
                        </ol>
                    </div>
                    <div className="jobde">
                        <h3>任职要求</h3>
                        <ol>
                            <li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li>
                            <li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li>
                            <li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li>
                            <li>负责UC头条产品的日志处理和分析，为业务发展提供数据报表支持；</li>
                        </ol>
                    </div>
                </div>


                <div className="jobAddDetail">
                    <h2 className="jobAddress"><span><img src="/src/images/资源 55.png" /></span>工作地址
          </h2>
                    <div className="jobwrap">
                        <div className="address">
                            <p>
                                <span>上海市</span>
                                <span>徐汇区</span>
                            </p>
                            <p>淮海中路1010号嘉华中心1606</p>
                        </div>
                        <span className="map">地图</span>
                    </div>

                </div>

                <div id="homeMain">
                    <h2><span><img src="/src/images/latest.png" /></span>相似职位
          </h2>
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

                </div>

                <div className="bottom">
                    <span>发送简历</span>
                    <span>收藏</span>
                </div>
            </div>
        );

    }
}
export default JobDetail;
