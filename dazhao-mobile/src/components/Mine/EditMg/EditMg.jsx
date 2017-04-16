import React from "react";
import "./EditMg.scss";
import {Link} from "react-router";
 

class EditMg extends React.Component {


    render () {

        return (
            <div className="EditMg">
                <div className="TopBar">
                    <span onClick={(e) => {

                        history.back();

                    }}
                    >
                        <img src="/src/images/arrow-left.png" />
                    </span>
                    <span>编辑基本信息</span>
                    <span>保存</span>
                </div>

                <div className="edititems">
                    <div>
                        <em>简历照片</em>
                        <p>
                            <span />
                            <span> <img src="/src/images/Back_Button.png" /></span>
                        </p>
                    </div>

                    <div>
                        <em>简历名称</em>
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
                        <em>最高学历</em>
                        <p>
                            <span>最高学历</span>
                        </p>
                    </div>

                    <div>
                        <em>出生日期</em>
                        <p>
                            <span>出生日期</span>
                        </p>
                    </div>

                    <div>
                        <em>联系电话</em>
                        <p>
                            <span>联系电话</span>
                        </p>
                    </div>

                    <div>
                        <em>联系邮箱</em>
                        <p>
                            <span>联系邮箱</span>
                        </p>
                    </div>

                    <div>
                        <em>期望岗位</em>
                        <p>
                            <span>期望岗位</span>
                        </p>
                    </div>

                    <div>
                        <em>期望城市</em>
                        <p>
                            <span>期望城市</span>
                        </p>
                    </div>
                </div>
            </div>
        );

    }
}
export default EditMg;
