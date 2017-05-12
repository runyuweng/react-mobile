import React from "react";
import "./EduEx.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

class EduEx extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            eduexperience:{
              "school_name":"山东大学",
              "major":"机械设计制造及自动化",
              "educatestage":"本科",
              "time":"2013-09至2017-06",
              "more":["成绩排名优异、GPA优秀可以展示","主要课程：在其他经理比较少的情况下可以选择展示3-4门课程"]
            }
        };
        this.fetchEduexperience = this.fetchEduexperience.bind(this)
    }

    componentDidMount() {
        this.fetchEduexperience();
    }

    fetchEduexperience(){
        ajax({"url":`/eduexperience?resumeid=${this.props.location.query.resumeid}&articleid=${this.props.location.query.articleid}`}).
        then((data)=>{
            if (data.code==='S01') {
                const eduexperience = data.contents;
                this.setState({
                    eduexperience:eduexperience
                })
            }else if (data.code==='E01') {
                this.setState({
                    eduexperience:{}
                })
            }
        })
    }

    render () {
        const { eduexperience } = this.state;

        const moreList = eduexperience.more.map((value,i)=>{
            return(
                <em key={i}>{(i+1) + ". " + value}</em>
            )
        })

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
                            <span>{eduexperience.school_name}</span>
                        </p>
                    </div>

                    <div>
                        <em>所学专业</em>
                        <p>
                            <span>{eduexperience.major}</span>
                        </p>
                    </div>

                    <div>
                        <em>学历</em>
                        <p>
                            <span>{eduexperience.educatestage}</span>
                        </p>
                    </div>

                    <div>
                        <em>在校时间</em>
                        <p>
                            <span>{eduexperience.time}</span>
                        </p>
                    </div>

                    <div>
                        <em>备注</em>
                        <p>
                            <span>示例：</span>
                            <span>{moreList}</span>
                        </p>
                    </div>

                </div>
            </div>
        );

    }
}
export default EduEx;
