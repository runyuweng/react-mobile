import React from "react";
import "./EduEx.scss";
import {Link} from "react-router";
 

class EduEx extends React.Component {


    render () {

        return (
            <div className="EduEx">
                <div className="TopBar">
                    <span onClick={(e) => {

                        history.back();

                    }}
                    >
                        <img src="/src/images/arrow-left.png" />
                    </span>
                    <span>编辑教育经历</span>
                    <span>保存</span>
                </div>

                <div className="edititems">

                    <div>
                        <em>学校名称</em>
                        <p>
                            <span>互联网产品岗</span>
                        </p>
                    </div>

                    <div>
                        <em>姓名</em>
                        <p>
                            <span>周新城</span>
                        </p>
                    </div>

                    <div>
                        <em>性别</em>
                        <p>
                            <span>男</span>
                        </p>
                    </div>

                    <div>
                        <em>在校时间</em>
                        <p>
                            <span>最高学历</span>
                        </p>
                    </div>

                    <div>
                        <em>备注</em>
                        <p>
                            <span>示例：</span><br />
                            <span>                  1.成绩排名优异、GPA优秀可以展示<br />
                  2.主要课程：在其他经理比较少的情况下可以选择展示3-4门课程</span>
                        </p>
                    </div>

                </div>
            </div>
        );

    }
}
export default EduEx;
