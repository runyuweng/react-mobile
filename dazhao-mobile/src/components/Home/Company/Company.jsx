import React from "react";
import "./Company.scss";
import {Link} from "react-router";
 

class Company extends React.Component {


    render () {

        return (
            <div className="Company">
                <header>
                    <div className="search">
                        <span ><img src="/src/images/arrow-left.png" /></span>
                        <span>企业详情</span>
                        <span><img src="/src/images/love.png" /></span>
                    </div>
                </header>

                <div id="jobTop">
                    <span className="joblog"><img src="/src/images/ali.png" /></span>
                    <h2>阿里巴巴网络技术有限公司</h2>
                    <div>
                        <span><img src="/src/images/资源 58.png" /><em>上海</em></span>
                        <span>认证</span>
                    </div>
                    <p>
                        <span>互联网</span>
                        <em>|</em>
                        <span>外商独资</span>
                        <em>|</em>
                        <span>上市</span>
                        <em>|</em>
                        <span>1000人以上</span>
                    </p>
                </div>

                <div className="companyMain">
                    <ul>
                        <li className="active">企业介绍</li>
                        <li>招聘岗位</li>
                        <li>空中宣讲</li>
                    </ul>

                    <div className="careTopic">
                        <span className="caretitle">企业介绍：</span>
                        <div className="caremain">
                            <span className="carecontent">这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学历还是本科学历；对于一些管理类的岗位的话，本身不是很需要学历的岗位，只要你的综合能力强，研究生还是本科神差距就不是很大。所以总的来说，还是要看你想去什么样的企业，想从事什么样的工作，然后决定读不读研或者读什么专业的研究生。<br />
              所以总的来说，还是要看你想去什么样的企业，想从事什么样的工作，然后决定读不读研或者读什么专业的研究生。
                <span className="shade" />
                            </span>
                            <span className="strech">展开查看全部
                <span><img src="/src/images/down.png" /></span>
                            </span>
                        </div>
                    </div>

                    <div className="compangMsg">
                        <h3>企业基本信息：</h3>
                        <p>企业性质：<span>外商独资</span></p>
                        <p>发展阶段：<span>上市</span></p>
                        <p>企业领域：<span /></p>
                        <p>企业规模：<span>1000以上</span></p>
                        <p>企业网址：<span>http://www.alibaba.com</span></p>
                        <p>公司地址：<span>广州</span></p>
                    </div>
                </div>

            </div>
        );

    }
}
export default Company;
