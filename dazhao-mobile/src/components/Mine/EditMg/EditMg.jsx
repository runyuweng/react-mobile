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
                "name": "周新城",
                "sex": "男",
                "bestEducation": "",
                "phone": "",
                "email": "",
                "political_status": "",
                "current_add": {
                    "province": "",
                    "city": ""
                }
            },
            "showtopDiv": false,
            "showWhich": -1
        };
        this.fetchBasicMessage = this.fetchBasicMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setSexAndEdu = this.setSexAndEdu.bind(this);

    }

    componentDidMount () {

        this.props.changeBottomState(false);
        this.fetchBasicMessage();

    }


    handleChange (e) {

        const basicMessage = JSON.parse(JSON.stringify(this.state)).basicMessage;

        if (e.target.name === "name") {

            Object.assign(basicMessage, {"name": e.target.value});

        } else if (e.target.name === "phone") {

            Object.assign(basicMessage, {"phone": e.target.value});

        } else if (e.target.name === "email") {

            Object.assign(basicMessage, {"email": e.target.value});

        } else if (e.target.name === "political_status") {

            Object.assign(basicMessage, {"political_status": e.target.value});

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

                    <div className="name">
                        <em>姓名</em>
                        <p>
                            {/* <span>{basicMessage.name}</span>*/}
                            <input type="text" value={this.state.basicMessage.name} name="name" onChange={this.handleChange} />
                        </p>
                    </div>

                    <div className="setSex">
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
                        <em>手机号</em>
                        <p>
                            {/* <span>{basicMessage.phone}</span>*/}
                            <input type="text" value={this.state.basicMessage.phone} placeholder="输入手机号" name="phone" onChange={this.handleChange} />
                        </p>

                    </div>

                    <div>
                        <em>邮箱号</em>
                        <p>
                            {/* <span>{basicMessage.email}</span>*/}
                            <input type="text" value={this.state.basicMessage.email} placeholder="输入邮箱地址" name="email" onChange={this.handleChange} />
                        </p>
                    </div>

                    <div>
                        <em>最高学历</em>
                        <p onClick={() => {

                            this.setState({
                                "showWhich": 2,
                                "showtopDiv": true
                            });

                        }}
                        >
                            <span>{this.state.basicMessage.bestEducation === "" ? "选择最高学历" : this.state.basicMessage.bestEducation}</span>
                            <span> <img src="/src/images/Back_Button.png" /></span>
                        </p>
                    </div>


                    <div>
                        <em>现居地</em>
                        <p>
                            <span><em>省份</em><img src="/src/images/Back_Button.png" /></span>
                            <span><em>城市</em><img src="/src/images/Back_Button.png" /></span>
                        </p>
                    </div>

                    <div>
                        <em>政治面貌</em>
                        <p>
                            {/* <span>{basicMessage.hopeCity}</span>*/}
                            <span>选择政治面貌</span>
                            <span> <img src="/src/images/Back_Button.png" /></span>
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
