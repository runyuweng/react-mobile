import React from "react";
import "./Practice.scss";
import {Link} from "react-router";
 

class Practice extends React.Component {


    render () {

        return (
            <div className="Practice">
                <div className="TopBar">
                    <span onClick={(e) => {

                        history.back();

                    }}
                    >
                        <img src="/src/images/arrow-left.png" />
                    </span>
                    <span>编辑实习信息</span>
                    <span>保存</span>
                </div>

                <div className="edititems">

                    <div>
                        <em>实习单位</em>
                        <p>
                            <span>德勤华永会计师事务所</span>
                        </p>
                    </div>

                    <div>
                        <em>实习职位</em>
                        <p>
                            <span>企业风险服务部实习生</span>
                        </p>
                    </div>

                    <div>
                        <em>实习城市</em>
                        <p>
                            <span>上海</span>
                        </p>
                    </div>

                    <div>
                        <em>入职时间</em>
                        <p>
                            <span>选择入职时间</span>
                        </p>
                    </div>

                    <div>
                        <em>离职时间</em>
                        <p>
                            <span>选择离职时间</span>
                        </p>
                    </div>

                    <div>
                        <em>工作内容</em>
                        <p>
                            <span>TIPS：</span><br />
                            <span>
                  1、简明扼要，尽可能用专业化的词语写出工作职责，但不要将其夸大<br />
                  2、要用点句，以形动词开始，三到五句为佳，避免大段文字<br />
                  3、突出重点，工作成就宜精确化、数字化，切勿写在公司感受<br />
                  4、根据目标职位需要的能力，有针对性的挑选内容
                  </span>
                        </p>
                    </div>

                </div>

                <div className="pracBot">
                    <p><span><img src="/src/images/add.png" /></span>
                        <b>继续添加</b></p>
                </div>

            </div>
        );

    }
}
export default Practice;
