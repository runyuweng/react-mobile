import React from "react";
import "./CvCenter.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import {Link} from "react-router";


class CvCenter extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            showdialog : false,
            onlineResume : [
                {
                    jobposition : "互联网产品岗",
                    prodeuctcategory : "互联网产品",
                    add : "上海市"
                },
                {
                    jobposition : "互联网产品岗",
                    prodeuctcategory : "互联网产品",
                    add : "上海市"
                }
            ],
            deleteIndex: null
        };
        this.handleClick = this.handleClick.bind(this);
        this.cancleClick = this.cancleClick.bind(this)
        this.deleteClick = this.deleteClick.bind(this)
    }

    handleClick(args){
        this.setState({
            showdialog : !this.state.showdialog,
            deleteIndex : args
        })
    }

    cancleClick(){
        this.setState({
            showdialog : !this.state.showdialog
        })
    }

    deleteClick(){
        this.state.onlineResume.splice(this.state.deleteIndex, 1);
        this.setState({
            showdialog : !this.state.showdialog,
            onlineResume : this.state.onlineResume
        })
    }

    componentDidMount () {

        this.props.showBottom();

    }

    render () {

        const { onlineResume } = this.state;
        const onlineResumeList = onlineResume.map((elem,index)=>{
            return(
                <div className="cvitems" key={index}>
                    <div className="cvleft">
                        <span>{elem.jobposition}</span>
                        <span>{elem.prodeuctcategory}<em>{elem.add}</em></span>
                    </div>
                    <span className="cvright">
                        <Link to="/cvmessage"><em>编辑</em></Link>
                        <em onClick={this.handleClick.bind(this,`${index}`)}>删除</em>
                    </span>
                </div>
            )
        })
        console.log(onlineResumeList);
        return (
            <div className="CvCenter">
                <header>
                    <TopBar title="简历中心" border="boder" />
                </header>

                <h3>在线简历</h3>
                <div className="main">
                {onlineResumeList}
                {/*
                    <div className="cvitems">
                        <div className="cvleft">
                            <span>互联网产品岗</span>
                            <span>互联网产品<em>上海市</em></span>
                        </div>
                        <span className="cvright">
                            <Link to="/cvmessage"><em>编辑</em></Link>
                            <em onClick={this.handleClick}>删除</em>
                        </span>
                    </div>
                    <div className="cvitems">
                        <div className="cvleft">
                            <span>互联网产品岗</span>
                            <span>互联网产品<em>上海市</em></span>
                        </div>
                        <span className="cvright">
                            <em>编辑</em>
                            <em>删除</em>
                        </span>
                    </div>
                */}
                </div>

                <div className="options">
                    <Link to="dropinbox">
                        <p><em>投递箱<b>5</b></em><span><img src="/src/images/Back_Button.png" /></span></p>
                    </Link>
                    <p><em>邀请函</em><span><img src="/src/images/Back_Button.png" /></span></p>
                    <p><em>收藏夹</em><span><img src="/src/images/Back_Button.png" /></span></p>
                </div>

                {
                    this.state.showdialog?
                    <div id="deleteModal">
                        <div className="dialog">
                            <div className="deleteheader">删除简历</div>
                            <div className="deletemain">
                                <p><span>“互联网产品岗”</span>将被删除</p>
                                <p>此操作不能撤销</p>
                            </div>
                            <div className="deletefooter">
                                <span onClick={this.cancleClick}>取消</span>
                                <span onClick={this.deleteClick}>删除简历</span>
                            </div>
                        </div>
                    </div>:
                    ""
                }

            </div>
        );

    }
}

export default CvCenter;
