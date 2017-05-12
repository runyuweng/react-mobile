import React from "react";
import "./EditMg.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

class EditMg extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            basicMessage:{
                "img":"/src/images/pople.png",
                "resumeName":"互联网产品岗",
                "name":"周新城",
                "sex":"男",
                "bestEducation":"本科",
                "birthday":"1955-10-25",
                "phone":"13245679842",
                "email":"joy_joy01@163.com",
                "hopeJob":"互联网产品经理",
                "hopeCity":"上海市"
            }
        };
        this.fetchBasicMessage = this.fetchBasicMessage.bind(this)
    }

    componentDidMount() {
        this.fetchBasicMessage();
        console.log(this.props.location.query)
    }

    fetchBasicMessage(){
        ajax({"url":`/basicmessage?resumeid=${this.props.location.query.resumeid}&articleid=${this.props.location.query.articleid}`}).
        then((data)=>{
            if (data.code==='S01') {
                const basicMessage = data.contents;
                this.setState({
                    basicMessage:basicMessage
                })
            }else if (data.code==='E01') {
                this.setState({
                    basicMessage:{}
                })
            }
        })
    }

    render () {
        const { basicMessage } = this.state;

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
                            <span><img src={basicMessage.img} alt="pic" /></span>
                            <span> <img src="/src/images/Back_Button.png" /></span>
                        </p>
                    </div>

                    <div>
                        <em>简历名称</em>
                        <p>
                            <span>{basicMessage.resumeName}</span>
                        </p>
                    </div>

                    <div>
                        <em>姓名</em>
                        <p>
                            <span>{basicMessage.name}</span>
                        </p>
                    </div>

                    <div>
                        <em>性别</em>
                        <p>
                            <span>{basicMessage.sex}</span>
                        </p>
                    </div>

                    <div>
                        <em>最高学历</em>
                        <p>
                            <span>{basicMessage.bestEducation}</span>
                        </p>
                    </div>

                    <div>
                        <em>出生日期</em>
                        <p>
                            <span>{basicMessage.birthday}</span>
                        </p>
                    </div>

                    <div>
                        <em>联系电话</em>
                        <p>
                            <span>{basicMessage.phone}</span>
                        </p>
                    </div>

                    <div>
                        <em>联系邮箱</em>
                        <p>
                            <span>{basicMessage.email}</span>
                        </p>
                    </div>

                    <div>
                        <em>期望岗位</em>
                        <p>
                            <span>{basicMessage.hopeJob}</span>
                        </p>
                    </div>

                    <div>
                        <em>期望城市</em>
                        <p>
                            <span>{basicMessage.hopeCity}</span>
                        </p>
                    </div>
                </div>
            </div>
        );

    }
}
export default EditMg;
