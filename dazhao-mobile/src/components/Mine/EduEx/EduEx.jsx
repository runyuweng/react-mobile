import React from "react";
import "./EduEx.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

class EduEx extends React.Component {
    constructor (props) {

        super(props);
        this.state = {

            "eduexperience": {
                "school_name": "山东大学",
                "major": "机械设计制造及自动化",
                "educatestage": "本科",
                "time": "2013-09至2017-06",
                "more": ""
            },
            "showtopDiv": false
        };
        this.fetchEduexperience = this.fetchEduexperience.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount () {

        this.fetchEduexperience();

        this.setSexAndEdu = this.setSexAndEdu.bind(this);

    }

    fetchEduexperience () {

        ajax({"url": `/eduexperience?resumeid=${this.props.location.query.resumeid}`}).
        then((data) => {

            if (data.code === "S01") {

                const eduexperience = data.contents;

                this.setState({eduexperience});

            } else if (data.code === "E01") {

                this.setState({"eduexperience": {}});

            }

        });

    }


    setSexAndEdu (e) {

        const eduexperience = JSON.parse(JSON.stringify(this.state)).eduexperience;

        Object.assign(eduexperience, {"educatestage": e.target.value});
        this.setState({
            eduexperience,
            "showtopDiv": !this.state.showtopDiv
        });

    }

    handleChange (e) {

        const eduexperience = JSON.parse(JSON.stringify(this.state)).eduexperience;

        if (e.target.name === "school_name") {

            Object.assign(eduexperience, {"school_name": e.target.value});

        } else if (e.target.name === "major") {

            Object.assign(eduexperience, {"major": e.target.value});

        } else if (e.target.name === "time") {

            Object.assign(eduexperience, {"time": e.target.value});

        }
        this.setState({eduexperience});

    }

    render () {


        const eduList = ["大专", "本科", "硕士", "博士", "其他"].map((value, i) =>
            <input key={i} type="button" onClick={this.setSexAndEdu} name="edu" value={value} />
            );

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
                            {/* <span>{eduexperience.school_name}</span>*/}
                            <input type="text" value={this.state.eduexperience.school_name} name="school_name" onChange={this.handleChange} />

                        </p>
                    </div>

                    <div>
                        <em>所学专业</em>
                        <p>
                            {/* <span>{eduexperience.major}</span>*/}
                            <input type="text" value={this.state.eduexperience.major} name="major" onChange={this.handleChange} />
                        </p>
                    </div>

                    <div>
                        <em>学历</em>
                        <p>
                            <span onClick={() => {

                                this.setState({"showtopDiv": true});

                            }}
                            >{eduexperience.educatestage}</span>
                        </p>
                    </div>

                    <div>
                        <em>在校时间</em>
                        <p>
                            {/* <span>{eduexperience.time}</span>*/}
                            <input type="text" value={this.state.eduexperience.time} placeholder="1955-10至1999-12" name="time" onChange={this.handleChange} />
                        </p>
                    </div>

                    <div>
                        <em>备注</em>
                        <p>
                            <textarea
                                value={this.state.eduexperience.more}
                                placeholder={"示例：\n1. 成绩排名优异、GPA优秀可以展示\n2. 主要课程：在其他经理比较少的情况下可以选择展示3-4门课程"}
                                ref="more"
                                onChange={(e) => {

                                    const eduexperience = JSON.parse(JSON.stringify(this.state)).eduexperience;

                                    Object.assign(eduexperience, {"more": e.target.value});
                                    this.setState({eduexperience});

                                }}
                            />
                        </p>
                    </div>


                </div>

                {
                    this.state.showtopDiv
                        ? <div ref="topDiv" className="topDiv">
                            <div className="centermain">
                                <div className="mainhead">请选择</div>
                                <div className="mainbody">
                                    {eduList}
                                </div>
                                <div className="mainfooter">
                                    <span onClick={() => {

                                        this.setState({"showtopDiv": false});

                                    }}
                                    >取消</span>
                                </div>
                            </div>
                        </div> : ""
                }
            </div>
        );

    }
}
export default EduEx;
