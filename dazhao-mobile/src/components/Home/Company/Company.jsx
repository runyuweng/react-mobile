import React from "react";
import "./Company.scss";
import {Link} from "react-router";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";

class Company extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current: 'part1',
            data : {
                img:'',
                name:'阿里巴巴网络技术有限公司',
                type:'互联网',
                stage:'上市',
                numbers:'1000人以上'
            }
        }
    }

    componentDidMount(){
        //ajax
    }

    render () {
        const { current, data } = this.state;

        return (
            <div className="Company">
                <header>
                    <TopBar border="border" title="企业详情" img="/src/images/love.png" />
                </header>

                <div id="jobTop">
                    <span className="joblog"><img src="/src/images/ali.png" /></span>
                    <h2>{data.name}</h2>
                    <div>
                        <span><img src="/src/images/source58.png" /><em>上海</em></span>
                        <span>认证</span>
                    </div>
                    <p>
                        <span>{data.type}</span>
                        <em>|</em>
                        <span>外商独资</span>
                        <em>|</em>
                        <span>{data.stage}</span>
                        <em>|</em>
                        <span>{data.numbers}</span>
                    </p>
                </div>

                <div className="companyMain">
                    <ul>
                        <li className='active' onClick={()=>{
                                this.setState({current:"part1"})
                            }}>企业介绍</li>
                        <li onClick={()=>{
                                this.setState({current:"part2"})
                            }}>招聘岗位</li>
                        <li onClick={()=>{
                                this.setState({current:"part3"})
                            }}>空中宣讲</li>
                    </ul>




                    {current === "part1"?
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
                    :''}






                    {current === "part2"?<div className="positions">
                        <div className="position">
                            <div>
                                <span>JAVA研发工程师</span>
                                <span><em>[8k-12k]</em></span>
                            </div>
                            <div>
                                <span>
                                    <em>上海</em>
                                    <em>本科</em>
                                </span>
                                <span>一周内</span>
                            </div>
                        </div>
                        <div className="position">
                            <div>
                                <span>推荐算法实习生</span>
                                <span><em>保密</em></span>
                            </div>
                            <div>
                                <span>
                                    <em>上海</em>
                                    <em>本科</em>
                                </span>
                                <span>一周内</span>
                            </div>
                        </div>
                        <div className="position">
                            <div>
                                <span>JAVA研发工程师</span>
                                <span><em>[8k-12k]</em></span>
                            </div>
                            <div>
                                <span>
                                    <em>上海</em>
                                    <em>本科</em>
                                </span>
                                <span>一周内</span>
                            </div>
                        </div>
                        <div className="position">
                            <div>
                                <span>推荐算法实习生</span>
                                <span><em>保密</em></span>
                            </div>
                            <div>
                                <span>
                                    <em>上海</em>
                                    <em>本科</em>
                                </span>
                                <span>一周内</span>
                            </div>
                        </div>
                    </div>
                    :''}








                </div>

            </div>
        );

    }
}
export default Company;
