import React from "react";
import "./CompanyIntro.scss";

class CompanyIntro extends React.Component {

    render () {

        return (
            <div>
                <div className="careTopic">
                    <span className="caretitle">企业介绍：</span>
                    <div className="caremain">
                        <span className="carecontent">这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学历还是本科学历；对于一些管理类的岗位的话，本身不是很需要学历的岗位，只要你的综合能力强，研究生还是本科神差距就不是很大。所以总的来说，还是要看你想去什么样的企业，想从事什么样的工作，然后决定读不读研或者读什么专业的研究生。<br />
                    所以总的来说，还是要看你想去什么样的企业，想从事什么样的工作，然后决定读不读研或者读什么专业的研究生。<span className="shade" />
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
        );

    }
}

export default CompanyIntro;
