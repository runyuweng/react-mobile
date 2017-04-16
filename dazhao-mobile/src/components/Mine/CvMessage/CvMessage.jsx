import React from "react";
import "./CvMessage.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import {Link} from "react-router";
import PropTypes from 'prop-types';

class CvMessage extends React.Component {

    constructor (props) {

        super(props);

    }

    componentDidMount () {

        this.props.showBottom();

    }

    render () {

        return (
            <div className="CvMessage">
                <header>
                    <TopBar title="简历信息" border="boder" />
                </header>

                <div className="cvmain">

                    <div className="cvitems">
                        <div className="cvhead">
                            <span>基本信息</span>
                            <span><Link to="/edmessage">编辑</Link></span>
                        </div>
                        <div className="cvbody">
                            <span className="personal" />
                            <span>
                                <em>简历名称：</em>
                                <em>互联网产品岗</em>
                            </span>
                            <span>
                                <em>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</em>
                                <em>周新城</em>
                            </span>
                            <span>
                                <em>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</em>
                                <em>男</em>
                            </span>
                            <span>
                                <em>最高学历：</em>
                                <em>本科</em>
                            </span>
                            <span>
                                <em>出生日期：</em>
                                <em>1994-5-29</em>
                            </span>
                            <span>
                                <em>联系电话：</em>
                                <em>15606352265</em>
                            </span>
                            <span>
                                <em>联系邮箱：</em>
                                <em>joy_joy01@163.com</em>
                            </span>
                            <span>
                                <em>期望岗位：</em>
                                <em>互联网产品经理</em>
                            </span>
                            <span>
                                <em>期望城市：</em>
                                <em>上海市</em>
                            </span>
                        </div>
                    </div>

                    <div className="cvitems">
                        <div className="cvhead">
                            <span>教育经历</span>
                            <span><Link to="/edupexp">编辑</Link></span>
                        </div>
                        <div className="cvbody">
                            <span>
                                <em>学校名称：</em>
                                <em>山东大学</em>
                            </span>
                            <span>
                                <em>所在专业：</em>
                                <em>机械设计制造及自动化</em>
                            </span>
                            <span>
                                <em>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历：</em>
                                <em>本科</em>
                            </span>
                            <span>
                                <em>在校时间：</em>
                                <em>2013-09至2017-06</em>
                            </span>
                            <span>
                                <em className="lastpre">备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：</em>
                                <em className="lastEm">
                  1.成绩排名优异、GPA优秀可以展示<br />
                  2.主要课程：在其他经理比较少的情况下可以选择展示3-4门课程
                </em>
                            </span>

                        </div>
                    </div>

                    <div className="cvedu cvitems">
                        <div className="cvhead">
                            <span>实习经历</span>
                            <span><Link to="/practice">编辑</Link></span>
                        </div>

                        <div className="cvbody">
                            <p className="edutop">
                                <span><em />></span>
                                <time>2014.07--2014-09</time>
                            </p>
                            <div className="locate">
                                <span>德勤华永会计师事务所<br />企业风险服务部实习生</span>
                                <span>上海</span>
                            </div>

                            <p className="cvtext">·&nbsp;&nbsp;全程参与某地产公司IT审计项目，独立分析该公司5个商场2000多家店铺及酒店12-13年度租金数据。</p>
                            <p className="cvtext">·&nbsp;&nbsp;参与某汽车零件部公司的咨询项目，独立独立更新、绘制项目管理流程及相关文档，成果直接提交给客户，同时协助其他两个项目经理翻译、整理PPT，获得项目经理的肯定;</p>
                        </div>

                        <div className="cvbody">
                            <p className="edutop">
                                <span><em />></span>
                                <time>2014.07--2014-09</time>
                            </p>
                            <div className="locate">
                                <span>科尔尼(上海)企业咨询有限公司<br />咨询师助理</span>
                                <span>上海</span>
                            </div>

                            <p className="cvtext">·&nbsp;&nbsp;全程参与某汽车制造商有关企业用车的市场调研，工作10个星期：给北京、上海、广州数百家名企，国企，外企打cold call，并独自去深圳分别于36名受访者进行深度面对面访谈;</p>
                            <p className="cvtext">·&nbsp;&nbsp;参与某汽车品牌的项目调查问卷数据进行整理分析，两天完成统计分析568分问卷信息;</p>
                        </div>

                    </div>

                    <div className="cvedu cvitems">
                        <div className="cvhead">
                            <span>项目经历</span>
                            <span>编辑</span>
                        </div>

                        <div className="cvbody">
                            <p className="edutop">
                                <span><em />></span>
                                <time>2014.07--2014-09</time>
                            </p>
                            <div className="locate">
                                <span>联想Yoga”创意营销大赛<br />队长</span>
                                <span>上海</span>
                            </div>

                            <p className="cvtext">·&nbsp;&nbsp;带领团队完成历史一个月的比赛，期间主要负责统筹协调，合理分工，组织队员沟通讨论，协作共同完成。</p>
                            <p className="cvtext">·&nbsp;&nbsp;自行学习营销知识，并在比赛中取得第二名的好成绩。</p>
                        </div>
                    </div>

                    <div className="cvitems cvsch">
                        <div className="cvhead">
                            <span>在校经历</span>
                            <span>编辑</span>
                        </div>

                        <div className="cvbody">
                            <p>
                                <span><img src="/src/images/add.png" /></span>
                                <em>添加</em>
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        );

    }
}
CvMessage.propTypes = {"showBottom": PropTypes.func.isRequired};

export default CvMessage;
