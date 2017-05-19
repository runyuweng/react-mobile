import React from "react";
import "./EditMg.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

class EditMg extends React.Component {
    constructor (props) {

        super(props);
        this.state = {

            "basicMessage": {
                "img": "/src/images/pople.png",
                "resumeName": "互联网产品岗",
                "name": "周新城",
                "sex": "男",
                "bestEducation": "本科",
                "birthday": "1995-10-25",
                "phone": "13245679842",
                "email": "joy_joy01@163.com",
                "hopeJob": "互联网产品经理",
                "hopeCity": "上海市"
            },
            "showtopDiv": false,
            "showWhich": -1
        };
        this.fetchBasicMessage = this.fetchBasicMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setSexAndEdu = this.setSexAndEdu.bind(this);

    }

    componentDidMount () {

        this.props.showBottom(false);
        this.fetchBasicMessage();
        // Console.log(this.props.location.query);
        // Console.log("top:" + this.refs.year.offsetTop);
        // Console.log("left:" + this.refs.year.offsetLeft);

        // [this.refs.year,this.refs.month,this.refs.day].map((elem,i)=>{
        //     This._touchEvent(elem);
        // })


    }


    handleChange (e) {

        console.log(e.target.name);
        const basicMessage = JSON.parse(JSON.stringify(this.state)).basicMessage;

        if (e.target.name === "resumeName") {

            Object.assign(basicMessage, {"resumeName": e.target.value});

        } else if (e.target.name === "name") {

            Object.assign(basicMessage, {"name": e.target.value});

        } else if (e.target.name === "phone") {

            Object.assign(basicMessage, {"phone": e.target.value});

        } else if (e.target.name === "email") {

            Object.assign(basicMessage, {"email": e.target.value});

        } else if (e.target.name === "hopeJob") {

            Object.assign(basicMessage, {"hopeJob": e.target.value});

        } else if (e.target.name === "hopeCity") {

            Object.assign(basicMessage, {"hopeCity": e.target.value});

        } else if (e.target.name === "birthday") {

            Object.assign(basicMessage, {"birthday": e.target.value});

        }
        this.setState({basicMessage});

    }

    setSexAndEdu (e) {

        const basicMessage = JSON.parse(JSON.stringify(this.state)).basicMessage;

        if (this.state.showWhich === 1) {

            Object.assign(basicMessage, {"sex": e.target.value});

        } else if (this.state.showWhich === 2) {

            Object.assign(basicMessage, {"bestEducation": e.target.value});

        }
        this.setState({
            basicMessage,
            "showtopDiv": !this.state.showtopDiv
        });

    }


    fetchBasicMessage () {

        ajax({"url": `/basicmessage?resumeid=${this.props.location.query.resumeid}`}).
        then((data) => {

            if (data.code === "S01") {

                const basicMessage = data.contents;

                this.setState({basicMessage});

            } else if (data.code === "E01") {

                this.setState({"basicMessage": {}});

            }

        });

    }

    render () {

        const {basicMessage} = this.state;

        const sexList = ["保密", "男", "女"].map((value, i) =>
            <input key={i} type="button" onClick={this.setSexAndEdu} name="sex" value={value} />
            );

        const eduList = ["大专", "本科", "硕士", "博士", "其他"].map((value, i) =>
            <input key={i} type="button" onClick={this.setSexAndEdu} name="edu" value={value} />
            );

        const bodyList = this.state.showWhich === 1 ? sexList : this.state.showWhich === 2 ? eduList : "";

        const yearList = Array.from(new Array(100)).map((value, i) => <li key={i}>{new Date().getFullYear() - i}</li>);

        const monthList = Array.from(new Array(12)).map((value, i) =>
            <li key={i}>{i + 1}</li>
            );

        const dayList = Array.from(new Array(30)).map((value, i) =>
            <li key={i}>{i + 1}</li>
            );

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
                            {/* <span>{basicMessage.resumeName}</span>*/}
                            <input type="text" value={this.state.basicMessage.resumeName} name="resumeName" onChange={this.handleChange} />
                        </p>
                    </div>

                    <div>
                        <em>姓名</em>
                        <p>
                            {/* <span>{basicMessage.name}</span>*/}
                            <input type="text" value={this.state.basicMessage.name} name="name" onChange={this.handleChange} />
                        </p>
                    </div>

                    <div>
                        <em>性别</em>
                        <p>
                            <span onClick={() => {

                                this.setState({
                                    "showWhich": 1,
                                    "showtopDiv": true
                                });

                            }}
                            >{basicMessage.sex}</span>
                        </p>
                    </div>

                    <div>
                        <em>最高学历</em>
                        <p>
                            <span onClick={() => {

                                this.setState({
                                    "showWhich": 2,
                                    "showtopDiv": true
                                });

                            }}
                            >{basicMessage.bestEducation}</span>
                        </p>
                    </div>

                    <div>
                        <em>出生日期</em>
                        <p>

                            {/*
                            <span onClick={()=>{
                                    this.setState({
                                        showdate:true
                                    })
                                }}>{basicMessage.birthday}</span>*/}
                            <input type="text" value={this.state.basicMessage.birthday} placeholder="格式：1999-12-21" name="birthday" onChange={this.handleChange} />
                        </p>
                    </div>

                    <div>
                        <em>联系电话</em>
                        <p>
                            {/* <span>{basicMessage.phone}</span>*/}
                            <input type="text" value={this.state.basicMessage.phone} name="phone" onChange={this.handleChange} />
                        </p>
                    </div>

                    <div>
                        <em>联系邮箱</em>
                        <p>
                            {/* <span>{basicMessage.email}</span>*/}
                            <input type="text" value={this.state.basicMessage.email} name="email" onChange={this.handleChange} />
                        </p>
                    </div>

                    <div>
                        <em>期望岗位</em>
                        <p>
                            {/* <span>{basicMessage.hopeJob}</span>*/}
                            <input type="text" value={this.state.basicMessage.hopeJob} name="hopeJob" onChange={this.handleChange} />
                        </p>
                    </div>

                    <div>
                        <em>期望城市</em>
                        <p>
                            {/* <span>{basicMessage.hopeCity}</span>*/}
                            <input type="text" value={this.state.basicMessage.hopeCity} name="hopeCity" onChange={this.handleChange} />
                        </p>
                    </div>
                </div>
                {
                    this.state.showtopDiv
                        ? <div ref="topDiv" className="topDiv">
                            <div className="centermain">
                                <div className="mainhead">请选择</div>
                                <div className="mainbody">
                                    {bodyList}
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
export default EditMg;
