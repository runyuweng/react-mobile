import React from "react";
import "./EditMg.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";
import Select from './Select.jsx';



class EditMg extends React.Component {
    constructor (props) {

        super(props);
        this.state = {

            "basicMessage": {
                "img": "/src/images/pople.png",
                "name": "",
                "sex": "",
                "phone": "",
                "email": "",
                "political_status": "",
                "current_add": {
                    "province": "",
                    "city": ""
                }
            },
            "showtopDiv": false,
            "showWhich": -1,
            "showSelect":false,
            "type":'',
            "city":{},
            "province":{},
            "politics":{},
            edu:{}
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

        ajax({"url": `/zhaoda/user/myuserinfo`}).
        then((data) => {
            console.log(data)

            if (data.code === "S01") {

                const basicMessage = {
                    "img": data.contents.img,
                    "name": data.contents.nickname,
                    "sex": data.contents.sex,
                    "bestEducation": data.contents.edu,
                    "phone": data.contents.phone,
                    "email": data.contents.email,
                };

                this.setState({basicMessage,
                    city: {
                        id: data.contents.city,
                        name: data.contents.city,
                    },
                    province: {
                        id: data.contents.province,
                        name: data.contents.province,
                    },
                    politics:{
                        id: data.contents.politics,
                        name: data.contents.politics,
                    },
                    edu: {
                        id: data.contents.edu,
                        name: data.contents.edu,
                    }
                });

            }

        });

    }

    handleSubmit = () => {
        const data = {
            city: this.state.city.name || null,
            province: this.state.province.name || null,
            politics: this.state.politics.name || null,
            name: this.state.basicMessage.name || null,
            sex: this.state.basicMessage.sex|| null,
            edu: this.state.edu.id|| null
        }

        ajax({"url":`/zhaoda/user/edituserinfo?city=${data.city}&province=${data.province}&politics=${data.politics}&name=${data.name}&sex=${data.sex}&edu=${data.edu}`})
        .then((data)=>{
            if(data.code === 'S01'){
              this.props.changeMessageContent("保存成功");
            }else{
              this.props.changeMessageContent("保存失败，请重试");
            }
        })
    }

    render () {

        const {basicMessage} = this.state;

        const sexList = ["保密", "男", "女"].map((value, i) =>
            <input key={i} type="button" onClick={this.setSexAndEdu} name="sex" value={value} />
            );

        const bodyList = this.state.showWhich === 1 ? sexList : this.state.showWhich === 2 ? eduList : "";

        const yearList = Array.from(new Array(100)).map((value, i) => <li key={i}>{new Date().getFullYear() - i}</li>);

        const monthList = Array.from(new Array(12)).map((value, i) =>
            <li key={i}>{i + 1}</li>
            );

        const dayList = Array.from(new Array(30)).map((value, i) =>
            <li key={i}>{i + 1}</li>
            );

        const eduList = {
            '3':'大专',
            '4':'本科',
            '5':'硕士',
            '6':'博士',
            '7':'学士'
        }


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
                    <span onClick = {this.handleSubmit}>保存</span>
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
                            <input style={{color: '#999'}} type="text" value={this.state.basicMessage.name} name="name" onChange={this.handleChange} />
                        </p>
                    </div>

                    <div className="setSex">
                        <em>性别</em>
                        <p onClick={() => {

                                this.setState({
                                    "showWhich": 1,
                                    "showtopDiv": true
                                });

                            }}>
                            <span style={{color: '#999'}}>{basicMessage.sex}</span>
                        </p>
                    </div>

                    <div>
                        <em>手机号</em>
                        <p>
                            <input disabled type="text" value={this.state.basicMessage.phone} placeholder="手机号" name="phone" onChange={this.handleChange} />
                        </p>

                    </div>

                    <div>
                        <em>邮箱号</em>
                        <p>
                            <input disabled type="text" value={this.state.basicMessage.email} placeholder="邮箱" name="email" onChange={this.handleChange} />
                        </p>
                    </div>

                    <div>
                        <em>最高学历</em>
                        <p onClick={() => {

                            this.setState({showSelect: true, type: 'edu'})

                        }}
                        >
                            <span>{eduList[String(this.state.edu.id)] || "选择最高学历" }</span>
                            <span> <img src="/src/images/Back_Button.png" /></span>
                        </p>
                    </div>


                    <div>
                        <em>现居地</em>
                        <p className="place">
                            <span onClick={()=>{
                                this.setState({showSelect: true, type: 'province'})
                                }}><em>{this.state.province.name||'省份'}</em><img src="/src/images/Back_Button.png" /></span>
                            <span onClick={()=>{
                                if(this.state.province.id &&  this.state.province.name !== this.state.province.id ){
                                    this.setState({showSelect:true, type: 'city'})
                                }else{
                                    this.props.changeMessageContent("请选择省份");
                                }
                                }}><em>{this.state.city.name ? this.state.city.name :'城市'}</em><img src="/src/images/Back_Button.png" /></span>
                        </p>
                    </div>

                    <div>
                        <em>政治面貌</em>
                        <p onClick={()=>{this.setState({showSelect:true, type: 'politics'})}}>
                            {/* <span>{basicMessage.hopeCity}</span>*/}
                            <span>{this.state.politics.name||'选择政治面貌'}</span>
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
                {this.state.showSelect ? <Select
                    type = {this.state.type}
                    province = {this.state.province.id}
                    handleChange={(type, id, name)=>{
                        if(type === "province" && id !== this.state.province.id){
                            this.setState({
                                city: {}
                            })
                        }
                        this.setState({
                            [type]:{id, name}
                        },()=>{
                            console.log(this.state);
                            this.setState({showSelect: false, type: ''})
                        })
                    }}
                    handleClose={()=>{
                    this.setState({showSelect: false, type: ''})
                    }}/>
                 : ''}


            </div>
        );

    }
}
export default EditMg;
