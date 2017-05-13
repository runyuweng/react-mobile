import React from "react";
import "./EditMg.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

class EditMg extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            "pressDownY": 0, // 鼠标按下的位置
            "nowY": 0, // 鼠标移动后的位置
            "delateY": 0, // 移动的距离
            "currentY": 0,
            basicMessage:{
                "img":"/src/images/pople.png",
                "resumeName":"互联网产品岗",
                "name":"周新城",
                "sex":"男",
                "bestEducation":"本科",
                "birthday":"1995-10-25",
                "phone":"13245679842",
                "email":"joy_joy01@163.com",
                "hopeJob":"互联网产品经理",
                "hopeCity":"上海市"
            },
            showtopDiv:false,
            showWhich:-1,
            showdate:false
        };
        this.fetchBasicMessage = this.fetchBasicMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setSexAndEdu = this.setSexAndEdu.bind(this);
    }

    componentDidMount() {
        this.props.showBottom(false);
        this.fetchBasicMessage();
        // console.log(this.props.location.query);
        // console.log("top:" + this.refs.year.offsetTop);
        // console.log("left:" + this.refs.year.offsetLeft);

        // [this.refs.year,this.refs.month,this.refs.day].map((elem,i)=>{
        //     this._touchEvent(elem);
        // })
        // 
        this._touchEvent(this.refs.year)

    }

        // 滑动事件
    // _touchEvent (elem) {
    //     const yearNode = this.refs.year;
    //     const monthNode = this.refs.month;
    //     const dayNode = this.refs.day;
    //     const innerThis = this;
    //         // 触屏开始
    //     elem.addEventListener("touchstart", (e) => {
    //         let lastY = 0;
    //         let iSpeedY = 0;
    //         const perObjHeight = 52;

    //         e.preventDefault();
    //         const _this = elem;
    //         let isStart = true;
    //         const event = e || window.event;
    //         const pressDownY = event.touches[0].pageY;
    //         const top = parseInt(_this.style.top || _this.offsetTop);

    //         this.setState({
    //             pressDownY,
    //             "currentY": top
    //         });

    //             // 触屏移动
    //         _this.addEventListener("touchmove", (e) => {
    //             e.preventDefault();
    //             if (isStart) {

    //                 let top = this.state.currentY;
    //                 const element = _this;
    //                 const height = element.clientHeight;
    //                 const event = e || window.event;

    //                 this.setState({
    //                     "nowY": event.touches[0].pageY,
    //                     "delateY": event.touches[0].pageY - this.state.pressDownY
    //                 });

    //                 iSpeedY = this.state.delateY - lastY;
    //                 lastY = this.state.delateY;
    //                 top += this.state.delateY;

    //                 if (top>perObjHeight) {
    //                     top = perObjHeight
    //                     // monthNode.style.top = (1-(new Date().getMonth()))*perObjHeight + 'px';
    //                     // dayNode.style.top = (2-(new Date().getDate()))*perObjHeight + 'px';
    //                 }

    //                 if (top<(2-element.clientHeight/perObjHeight)*perObjHeight){
    //                     top = (2-element.clientHeight/perObjHeight)*perObjHeight;
    //                 }

    //                 element.style.top = `${top}px`;

    //             }

    //         });

    //             // 触屏结束
    //         _this.addEventListener("touchend", () => {

    //             e.preventDefault();
    //             if (isStart) {

    //                 const element = _this;
    //                 const currentY = parseInt(element.style.top);

    //                 this.startMove(iSpeedY,elem,yearNode,monthNode,dayNode,innerThis);
    //                 // console.log(iSpeedY)

    //                 this.setState({
    //                     "pressDownY": 0,
    //                     "nowY": 0,
    //                     currentY,
    //                     "delateY": 0
    //                 });

    //             }
    //             isStart = false;

    //         });

    //     });

    // }

    // startMove(iSpeedY,obj,yearNode,monthNode,dayNode,innerThis) {
    //     const perObjHeight = 52;
    //     let timer = null;
    //     clearInterval(timer);
    //     timer=setInterval(function () {
    //         iSpeedY*=0.95;

    //         var top=obj.offsetTop+iSpeedY;

    //         if (top>perObjHeight) {
    //             top=perObjHeight;
    //             // monthNode.style.top = (1-(new Date().getMonth()))*perObjHeight + 'px';
    //             // dayNode.style.top = (2-(new Date().getDate()))*perObjHeight + 'px';
    //             iSpeedY = 0;
    //         }else if (top<(2-obj.clientHeight/perObjHeight)*perObjHeight) {
    //             top = (2-obj.clientHeight/perObjHeight)*perObjHeight;
    //             iSpeedY = 0;
    //         }

    //         if (Math.abs(iSpeedY)<1){
    //             iSpeedY=0;
    //         }

    //         if (iSpeedY===0) {

    //             const absY = Math.abs(obj.offsetTop%52);
    //             const basicMessage = JSON.parse(JSON.stringify(innerThis.state)).basicMessage;

    //             let year;
    //             let month;
    //             let day;

    //             if (absY >= perObjHeight/2) {
    //                 top = obj.offsetTop<0?perObjHeight*Math.floor(obj.offsetTop/perObjHeight):perObjHeight*Math.ceil(obj.offsetTop/perObjHeight);

    //                 if(obj===yearNode){
    //                     year = 2016-Math.abs(top)/perObjHeight;
    //                     month = Math.abs(monthNode.offsetTop)/perObjHeight + 2;
    //                     day = Math.abs(dayNode.offsetTop)/perObjHeight + 2;
    //                 }else if (obj===monthNode) {
    //                     year = 2016-Math.abs(yearNode.offsetTop)/perObjHeight;
    //                     month = Math.abs(top)/perObjHeight + 2;
    //                     day = Math.abs(dayNode.offsetTop)/perObjHeight +2;
    //                 }else if (obj===dayNode) {
    //                     year = 2016-Math.abs(yearNode.offsetTop)/perObjHeight;
    //                     month = Math.abs(monthNode.offsetTop)/perObjHeight + 2;
    //                     day = Math.abs(top)/perObjHeight + 2;
    //                 }

    //                 month = month<10 ? '0' + month : month;
    //                 day = day<10 ? '0' + day : day;

    //                 Object.assign(basicMessage,{"birthday":year+'-'+month+'-'+day});
    //                 innerThis.setState({
    //                     basicMessage:basicMessage
    //                 })
                    
    //                 console.log(year,month,day)

    //             }else {
    //                 top = obj.offsetTop<0 ? perObjHeight*Math.ceil(obj.offsetTop/perObjHeight) : perObjHeight*Math.floor(obj.offsetTop/perObjHeight);

    //                 if(obj===yearNode){
    //                     year = 2016-Math.abs(top)/perObjHeight;
    //                     month = Math.abs(monthNode.offsetTop)/perObjHeight + 2;
    //                     day = Math.abs(dayNode.offsetTop)/perObjHeight + 2;
    //                 }else if (obj===monthNode) {
    //                     year = 2016-Math.abs(yearNode.offsetTop)/perObjHeight;
    //                     month = Math.abs(top)/perObjHeight + 2;
    //                     day = Math.abs(dayNode.offsetTop)/perObjHeight +2;
    //                 }else if (obj===dayNode) {
    //                     year = 2016-Math.abs(yearNode.offsetTop)/perObjHeight;
    //                     month = Math.abs(monthNode.offsetTop)/perObjHeight + 2;
    //                     day = Math.abs(top)/perObjHeight + 2;
    //                 }

    //                 month = month<10 ? '0' + month : month;
    //                 day = day<10 ? '0' + day : day;

    //                 Object.assign(basicMessage,{"birthday":year+'-'+month+'-'+day});
    //                 innerThis.setState({
    //                     basicMessage:basicMessage
    //                 })

    //                 console.log(year,month,day)

    //             }
    //             clearInterval(timer);

    //             // Object.assign(basicMessage,{"birthday":})
    //         }

    //         obj.style.top= top+'px';

    //     },30)
    // }
    // 
        // 滑动事件
    _touchEvent (elem) {
            // 触屏开始
        elem.addEventListener("touchstart", (e) => {
            let lastY = 0;
            let iSpeedY = 0;
            const perObjHeight = 52;

            e.preventDefault();
            const _this = elem;
            let isStart = true;
            const event = e || window.event;
            const pressDownY = event.touches[0].pageY;
            const top = parseInt(_this.style.top || _this.offsetTop);

            this.setState({
                pressDownY,
                "currentY": top
            });

                // 触屏移动
            _this.addEventListener("touchmove", (e) => {
                e.preventDefault();
                if (isStart) {

                    let top = this.state.currentY;
                    const element = _this;
                    const height = element.clientHeight;
                    const event = e || window.event;

                    this.setState({
                        "nowY": event.touches[0].pageY,
                        "delateY": event.touches[0].pageY - this.state.pressDownY
                    });

                    iSpeedY = this.state.delateY - lastY;
                    lastY = this.state.delateY;
                    top += this.state.delateY;

                    if (top>perObjHeight) {
                        top = perObjHeight
                        // monthNode.style.top = (1-(new Date().getMonth()))*perObjHeight + 'px';
                        // dayNode.style.top = (2-(new Date().getDate()))*perObjHeight + 'px';
                    }

                    if (top<(2-element.clientHeight/perObjHeight)*perObjHeight){
                        top = (2-element.clientHeight/perObjHeight)*perObjHeight;
                    }

                    element.style.top = `${top}px`;

                }

            });

                // 触屏结束
            _this.addEventListener("touchend", () => {

                e.preventDefault();
                if (isStart) {

                    const element = _this;
                    const currentY = parseInt(element.style.top);

                    this.startMove(iSpeedY,elem);
                    // console.log(iSpeedY)

                    this.setState({
                        "pressDownY": 0,
                        "nowY": 0,
                        currentY,
                        "delateY": 0
                    });

                }
                isStart = false;

            });

        });

    }

    startMove(iSpeedY,obj) {
        const perObjHeight = 52;
        let timer = null;
        clearInterval(timer);
        timer=setInterval(function () {
            iSpeedY*=0.95;

            var top=obj.offsetTop+iSpeedY;

            if (top>perObjHeight) {
                top=perObjHeight;
                // monthNode.style.top = (1-(new Date().getMonth()))*perObjHeight + 'px';
                // dayNode.style.top = (2-(new Date().getDate()))*perObjHeight + 'px';
                iSpeedY = 0;
            }else if (top<(2-obj.clientHeight/perObjHeight)*perObjHeight) {
                top = (2-obj.clientHeight/perObjHeight)*perObjHeight;
                iSpeedY = 0;
            }

            if (Math.abs(iSpeedY)<1){
                iSpeedY=0;
            }

            if (iSpeedY===0) {

                const absY = Math.abs(obj.offsetTop%52);

                if (absY >= perObjHeight/2) {
                    top = obj.offsetTop<0?perObjHeight*Math.floor(obj.offsetTop/perObjHeight):perObjHeight*Math.ceil(obj.offsetTop/perObjHeight);

                }else {
                    top = obj.offsetTop<0 ? perObjHeight*Math.ceil(obj.offsetTop/perObjHeight) : perObjHeight*Math.floor(obj.offsetTop/perObjHeight);

                }
                clearInterval(timer);

            }

            obj.style.top= top+'px';

        },30)
    }

    handleChange(e){
        console.log(e.target.name)
        let basicMessage = JSON.parse(JSON.stringify(this.state)).basicMessage;
        if(e.target.name==="resumeName"){
            Object.assign(basicMessage,{"resumeName":e.target.value});
        }else if (e.target.name==="name") {
            Object.assign(basicMessage,{"name":e.target.value});
        }else if (e.target.name==="phone") {
            Object.assign(basicMessage,{"phone":e.target.value});
        }else if (e.target.name==="email") {
            Object.assign(basicMessage,{"email":e.target.value});
        }else if (e.target.name==="hopeJob") {
            Object.assign(basicMessage,{"hopeJob":e.target.value});
        }
        this.setState({
            showtopDiv:!this.state.showtopDiv,
            basicMessage:basicMessage
        })
    }

    setSexAndEdu(e){
        let basicMessage = JSON.parse(JSON.stringify(this.state)).basicMessage;
        if (this.state.showWhich===1) {
            Object.assign(basicMessage,{"sex":e.target.value});
        }else if (this.state.showWhich===2) {
            Object.assign(basicMessage,{"bestEducation":e.target.value});
        }
        this.setState({
            basicMessage:basicMessage,
            showtopDiv:!this.state.showtopDiv
        })
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

        const sexList = ["保密","男","女"].map((value,i)=>{
            return(
                <input key={i} type="button" onClick={this.setSexAndEdu} name="sex" value={value} />
            )
        })

        const eduList = ["大专","本科","硕士","博士","其他"].map((value,i)=>{
            return(
                <input key={i} type="button" onClick={this.setSexAndEdu} name="edu" value={value} />
            )
        })

        const bodyList = this.state.showWhich===1?sexList:this.state.showWhich===2?eduList:""

        const yearList = Array.from(new Array(100)).map((value,i)=>{
            return(<li key={i}>{new Date().getFullYear()-i}</li>)
        })

        const monthList = Array.from(new Array(12)).map((value,i)=>{
            return(
                <li key={i}>{i+1}</li>
            )
        })

        const dayList = Array.from(new Array(30)).map((value,i)=>{
            return(
                <li key={i}>{i+1}</li>
            )
        })

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
                            {/*<span>{basicMessage.resumeName}</span>*/}
                            <input type="text" value={this.state.basicMessage.resumeName} name="resumeName" onChange={this.handleChange}/>
                        </p>
                    </div>

                    <div>
                        <em>姓名</em>
                        <p>
                            {/*<span>{basicMessage.name}</span>*/}
                            <input type="text" value={this.state.basicMessage.name} name="name" onChange={this.handleChange}/>
                        </p>
                    </div>

                    <div>
                        <em>性别</em>
                        <p>
                            <span onClick={()=>{
                                this.setState({
                                    showWhich:1,
                                    showtopDiv:true
                                })
                            }}>{basicMessage.sex}</span>
                        </p>
                    </div>

                    <div>
                        <em>最高学历</em>
                        <p>
                            <span onClick={()=>{
                                this.setState({
                                    showWhich:2,
                                    showtopDiv:true
                                })
                            }}>{basicMessage.bestEducation}</span>
                        </p>
                    </div>

                    <div>
                        <em>出生日期</em>
                        <p>
                            <span onClick={()=>{
                                    this.setState({
                                        showdate:true
                                    })
                                }}>{basicMessage.birthday}</span>
                        </p>
                    </div>

                    <div>
                        <em>联系电话</em>
                        <p>
                            {/*<span>{basicMessage.phone}</span>*/}
                            <input type="text" value={this.state.basicMessage.phone} name="phone" onChange={this.handleChange}/>
                        </p>
                    </div>

                    <div>
                        <em>联系邮箱</em>
                        <p>
                            {/*<span>{basicMessage.email}</span>*/}
                            <input type="text" value={this.state.basicMessage.email} name="email" onChange={this.handleChange}/>
                        </p>
                    </div>

                    <div>
                        <em>期望岗位</em>
                        <p>
                            {/*<span>{basicMessage.hopeJob}</span>*/}
                            <input type="text" value={this.state.basicMessage.hopeJob} name="hopeJob" onChange={this.handleChange}/>
                        </p>
                    </div>

                    <div>
                        <em>期望城市</em>
                        <p>
                            <span>{basicMessage.hopeCity}</span>
                        </p>
                    </div>
                </div>
                {
                    this.state.showtopDiv?
                    <div ref="topDiv" className="topDiv">
                        <div className="centermain">
                            <div className="mainhead">请选择</div>
                            <div className="mainbody">
                                {bodyList}
                            </div>
                            <div className="mainfooter">
                                <span onClick={()=>{
                                    this.setState({
                                        showtopDiv:false
                                    })
                                }}>取消</span>
                            </div>
                        </div>
                    </div>:""
                }
                
                <div className="dateCom">
                    <div className="datemain">
                        <div className="dateheader">
                            <span>{this.state.basicMessage.birthday.split('-')[0]}</span>
                            年
                            <span>{this.state.basicMessage.birthday.split('-')[1]}</span>
                            月
                            <span>{this.state.basicMessage.birthday.split('-')[2]}</span>
                            日
                        </div>
                        <div className="datewrap">
                            <div className="year">
                                <ul ref="year">
                                    {yearList}
                                </ul>
                                <div className="selected"></div>
                            </div>
                            <div className="month">
                                <ul ref="month">
                                    {monthList}
                                </ul>
                                <div className="selected"></div>
                            </div>
                            <div className="day">
                                <ul ref="day">
                                   {dayList}
                                </ul>
                                <div className="selected"></div>
                            </div>
                        </div>
                        <div className="datefooter">
                            <span>确定</span>
                            <span onClick={()=>{
                                this.setState({
                                    showdate:false
                                })
                            }}>取消</span>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
export default EditMg;
