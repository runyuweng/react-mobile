import React from "react";
import "./EditMg.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";
import Select from "./Select.jsx";
import axios from 'axios';
import {getCookie} from "../../../services/tools";
import qs from "qs";

class EditMg extends React.Component {
    handleSubmit = () => {
        axios.post(`http://www.dazhao100.com/api.php?u=editResumesBasic&resumes_id=${this.props.params.id}&uid=${getCookie("uid")}`, qs.stringify({
                img: this.state.img,
                title: this.state.title,
                truename: this.state.truename,
                mobile: this.state.mobile,
                email: this.state.email,
                expectwork: this.state.expectwork,
            })
        ).then((data) => {
            this.props.changeMessageContent(data.data.errortip);
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            "files": [],
            "multiple": true,
            "basicMessage": {},
            "showChoose": false,
            "bus": [],
            "posi": [],
            "staff": '',
            "showUploadBox": false
        };
        this.getInitData = this.getInitData.bind(this)
        this.showWorkWillChoose = this.showWorkWillChoose.bind(this)
        this.closeChoose = this.closeChoose.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleChangePost = this.handleChangePost.bind(this)
        this.selectChoose = this.selectChoose.bind(this)
        this.showUploadImgBox = this.showUploadImgBox.bind(this)
        this.cancleClick = this.cancleClick.bind(this)
        this.handleUploadChange = this.handleUploadChange.bind(this)
    }

    getInitData() {
        axios.get(`http://www.dazhao100.com/api.php?u=getResumesBasic&resumes_id=${this.props.params.id}&uid=${getCookie("uid")}`).then((data) => {
            const {title, truename, mobile, email, img, expectwork} = data.data.listjson
            this.setState({title, truename, mobile, email, img, expectwork})
        })
    }

    showWorkWillChoose() {
        this.setState({"showChoose": !this.state.showChoose})
        axios.get("http://www.dazhao100.com/api.php?u=getIndBase").then((data) => {
            const bus = data.data.listjson
            bus.unshift(
                {parameter: "", tilte: "请选择"}
            )
            this.setState({bus})
        })
    }

    componentDidMount() {
        this.getInitData()
    }

    closeChoose() {
        this.setState({"showChoose": !this.state.showChoose})
    }

    selectChoose() {
        if(this.state.staff  == "请选择") {
            this.props.changeMessageContent("请选择正确的意向！");
        } else {
            this.setState({
                "expectwork": this.state.staff
            })
            this.setState({"showChoose": !this.state.showChoose})
            this.setState({"posi":[]})
        }
    }
    showUploadImgBox() {
        this.setState({"showUploadBox": !this.state.showUploadBox})
    }
    cancleClick() {
        this.setState({"showUploadBox": !this.state.showUploadBox})
    }
    handleUploadChange(e) {
        e.preventDefault()
        let file = e.target.files[0];
        if (!/image/.test(file.type)) {
            this.props.changeMessageContent('文件格式出错！');
            return;
        }
        let formData = new FormData();
        formData.append('image', file);
        axios({
            method: 'post',
            url: 'http://www.dazhao100.com/api.php?u=upimg',
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'}
        }).then((data) => {
            console.log(data)
            if(data.data.error == "0") {
                this.props.changeMessageContent('头像上传成功！');
                this.setState({"showUploadBox": !this.state.showUploadBox})
                this.setState({
                    "img": `http://www.dazhao100.com/${data.data.links}`
                })
            }
        })
    }

    handleChange(e) {
        axios.get(`http://www.dazhao100.com/api.php?u=getExampleSection&module=Internship&parameter=${e.target.value}`).then((data) => {
            const posi = data.data.listjson
            console.log(posi)
            posi.unshift(
                {section_id: "", section: "请选择"}
            )
            this.setState({posi})
        })
    }

    handleChangePost(e) {
        console.log(e)
        this.setState({"staff": e.target.value})
    }

    fetchBasicMessage() {
        ajax({"url": "/zhaoda/user/myuserinfo"}).then((data) => {
            console.log(data);
            if (data.code === "S01") {
                const basicMessage = {
                    "img": data.contents.img,
                    "name": data.contents.nickname,
                    "sex": data.contents.sex,
                    "bestEducation": data.contents.edu,
                    "phone": data.contents.phone,
                    "email": data.contents.email
                };
                this.setState({
                    basicMessage,
                    "city": {
                        "id": data.contents.city,
                        "name": data.contents.city
                    },
                    "province": {
                        "id": data.contents.province,
                        "name": data.contents.province
                    },
                    "politics": {
                        "id": data.contents.politics,
                        "name": data.contents.politics
                    },
                    "edu": {
                        "id": data.contents.edu,
                        "name": data.contents.edu
                    }
                });
            }
        });
    }

    render() {
        const {basicMessage} = this.state;
        const {bus} = this.state;
        const {posi} = this.state;
        const busHtml = bus.map((e, i) =>
            <option key={i} value={e.parameter}>{e.tilte}</option>
        )
        const posiHtml = posi.map((e, i) =>
            <option key={i}>{e.section}</option>
        )

        return (
            <div className="EditMg">
                <div className="TopBar">
                    <span onClick={(e) => {
                        history.back();
                    }}
                    >
                        <img src="/src/images/arrow-left.png"/>
                    </span>
                    <span>编辑基本信息</span>
                    <span onClick={this.handleSubmit}>保存</span>
                </div>

                <div className="edititems">
                    <form action="">
                        <div className="row">
                            <em>简历照片</em>
                            <p onClick={this.showUploadImgBox}>
                                <span><img src={this.state.img}/></span>
                                <span> <img src="/src/images/Back_Button.png" /></span>
                                {/*<input type="file" className="fileUpload"/>*/}
                            </p>
                        </div>
                        <div className="name row">
                            <em>简历名称</em>
                            <p>
                                <input type="text" value={this.state.title} onChange={(e) => {
                                    this.setState({"title": e.target.value});
                                }}/>
                            </p>
                        </div>
                        <div className="name row">
                            <em>姓名</em>
                            <p>
                                <input type="text" value={this.state.truename} onChange={(e) => {
                                    this.setState({"truename": e.target.value});
                                }}/>
                            </p>
                        </div>

                        <div className="row">
                            <em>联系电话</em>
                            <p>
                                <input type="text" value={this.state.mobile} placeholder={"请填写联系电话"} onChange={(e) => {
                                    this.setState({"mobile": e.target.value});
                                }}/>
                            </p>
                        </div>

                        <div className="row">
                            <em>联系邮箱</em>
                            <p>
                                <input type="text" value={this.state.email} placeholder={"请填写联系邮箱"} onChange={(e) => {
                                    this.setState({"email": e.target.email});
                                }}/>
                            </p>
                        </div>
                        <div className="row">
                            <em>求职意向</em>
                            <p>
                                <span>{this.state.expectwork}</span>
                                <em className="workWill" onClick={this.showWorkWillChoose}>求职意向</em>
                            </p>
                        </div>
                    </form>
                </div>

                {
                    this.state.showChoose ? <div className="chooseBox">
                        <div className="chooseContent">
                            <p>选择求职意向</p>
                            <form action="">
                                <div className="selectBtn">
                                    <select onChange={this.handleChange}>
                                        {busHtml}
                                    </select>
                                </div>
                                <div className="selectBtn">
                                    <select onChange={this.handleChangePost}>
                                        {posiHtml}
                                    </select>
                                </div>
                                <div className="btnBox">
                                    <div onClick={this.closeChoose}>取消</div>
                                    <div onClick={this.selectChoose}>添加</div>
                                </div>
                            </form>
                        </div>
                    </div> : ''
                }

                {
                    this.state.showUploadBox ? <div id="deleteModal">
                        <div className="dialog">
                            <div className="deleteheader">上传照片</div>
                            <div className="deletemain">
                                <p>手机上传图像不支持裁剪和编辑</p>
                                <p>建议电脑登录大招网操作</p>
                                <p>www.dazhao100.com</p>
                            </div>
                            <div className="deletefooter">
                                <span onClick={this.cancleClick}>取消</span>
                                <span>
                                    仍要上传
                                    <input type="file" onChange={this.handleUploadChange} />
                                </span>
                            </div>
                        </div>
                    </div> : ''
                }
            </div>
        );
    }
}

export default EditMg;
