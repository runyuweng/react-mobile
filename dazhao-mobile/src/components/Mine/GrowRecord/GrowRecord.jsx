import React from "react";
import "./GrowRecord.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import {Link} from "react-router";
 

class GrowRecord extends React.Component {

    constructor (props) {

        super(props);

    }

    componentDidMount () {

        this.props.showBottom();

    }

    render () {

        return (
            <div className="GrowRecord">
                <header>
                    <TopBar title="成长记录" border="boder" />
                </header>
                <div className="rcontent">

                    <div className="rmain">
                        <span className="oclock"><img src="/src/images/clock.png" /></span>
                        <div className="recorditems">
                            <span className="time">
                                <time>11:30</time>
                                <time>2016-12-25</time>
                            </span>
                            <div className="rtitle">
                                <span><img src="/src/images/cup.png" /></span>
                                <em>添加一条实习经历</em>
                            </div>
                            <div className="Rdetail">
                                <h3>德勤华永会计师事务所企业风险服务部实习生</h3>
                                <p>全程参与某地产公司IT审计项目，独立分析该公司5个商场2000多家店铺及酒店12-13年度租金数据</p>
                            </div>
                        </div>
                    </div>

                    <div className="rmain">
                        <span className="oclock"><img src="/src/images/clock.png" /></span>
                        <div className="recorditems">
                            <span className="time">
                                <time>11:30</time>
                                <time>2016-12-25</time>
                            </span>
                            <div className="rtitle">
                                <span><img src="/src/images/zhiguan-hover.png" /></span>
                                <em>听了一节大招职观课程</em>
                            </div>
                            <div className="Rdetail">
                                <h3>情商低到底有多可怕？  ——李博士</h3>
                                <p><span><img src="/src/images/1481373795l515443385.png" /></span>
                                    <em>大学生情商模型；推荐书籍；身体情绪地图；身体情绪地图...</em>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rmain">
                        <span className="oclock"><img src="/src/images/clock.png" /></span>
                        <div className="recorditems">
                            <span className="time">
                                <time>11:30</time>
                                <time>2016-12-25</time>
                            </span>
                            <div className="rtitle">
                                <span><img src="/src/images/why.png" /></span>
                                <em>提出问题</em>
                            </div>
                            <div className="Rdetail">
                                <h3>研究生和本科生在求职过程中真的会影响很大吗？</h3>
                            </div>
                        </div>
                    </div>

                    <div className="rmain">
                        <span className="oclock"><img src="/src/images/clock.png" /></span>
                        <div className="recorditems">
                            <span className="time">
                                <time>11:30</time>
                                <time>2016-12-25</time>
                            </span>
                            <div className="rtitle">
                                <span><img src="/src/images/newcv.png" /></span>
                                <em>添加一条实习经历</em>
                            </div>
                            <div className="Rdetail">
                                <h3>简历名称：互联网产品岗</h3>
                                <p>
                                    <span>
                                        <em>期望工作：</em>
                                        <em>互联网产品经理</em>
                                    </span>
                                    <span>
                                        <em>工作地点：</em>
                                        <em>上海市</em>
                                    </span>
                                    <span>
                                        <em>简历类型：</em>
                                        <em>中文简历</em>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );

    }
}
export default GrowRecord;
