import React from "react";
import "./CvCenter.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";


class CvCenter extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "showdialog": false,
            "onlineResume": [
                {
                    "id": 1,
                    "resume_name": "互联网产品岗",
                    "jobcategory": "互联网产品",
                    "city": "上海市"
                },
                {
                    "id": 2,
                    "resume_name": "互联网产品岗",
                    "jobcategory": "互联网产品",
                    "city": "上海市"
                }
            ],
            "deleteid": null
        };
        this.handleClick = this.handleClick.bind(this);
        this.cancleClick = this.cancleClick.bind(this);
        this.fetchOnlineResume = this.fetchOnlineResume.bind(this);
        this.deleteOnlineResume = this.deleteOnlineResume.bind(this);

    }

    handleClick (args) {

        this.setState({
            "showdialog": !this.state.showdialog,
            "deleteid": args
        }, () => {

            this.state.showdialog ? this.refs.deleteModal.addEventListener("touchmove", (e) => {

                e.preventDefault();

            }, true) : "";

        });

    }

    cancleClick () {

        this.setState({"showdialog": !this.state.showdialog});

    }

    componentDidMount () {

        this.props.showBottom();
        this.fetchOnlineResume();

    }

    fetchOnlineResume () {

        ajax({"url": "/onlineresume"}).
        then((data) => {

            if (data.code === "S01") {

                const onlineResume = data.contents;

                this.setState({onlineResume});

            } else if (data.code === "S02") {

            } else {

                this.setState({"onlineResume": this.state.onlineResume});

            }

        });

    }

    deleteOnlineResume (id) {

        ajax({"url": `/deleteOnlineresume?resumeid=${id}`}).
        then((data) => {

            if (data.code === "S01") {

                this.fetchOnlineResume();
                this.setState({"showdialog": !this.state.showdialog});

            } else {

                // this.props.showMessage(data.message);

            }

        });

    }

    render () {

        const {onlineResume} = this.state;
        const onlineResumeList = onlineResume.map((elem, index) =>
            <div className="cvitems" key={index}>
                <div className="cvleft">
                    <span>{elem.resume_name}</span>
                    <span>{elem.jobcategory}<em>{elem.city}</em></span>
                </div>
                <span className="cvright">
                    <Link to={`/cvmessage/${elem.id}`}><em>编辑</em></Link>
                    <em onClick={this.handleClick.bind(this, `${elem.id}`)}>删除</em>
                </span>
            </div>
            );


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
                    <Link to="dropinbox/platformdropin">
                        <p><em>投递箱<b>5</b></em><span><img src="/src/images/Back_Button.png" /></span></p>
                    </Link>
                    <Link to="/invitation">
                        <p><em>邀请函</em><span><img src="/src/images/Back_Button.png" /></span></p>
                    </Link>
                    <Link to="/favoritepage/favoritejobs">
                        <p><em>收藏夹</em><span><img src="/src/images/Back_Button.png" /></span></p>
                    </Link>
                </div>

                {
                    this.state.showdialog
                        ? <div id="deleteModal" ref="deleteModal">
                            <div className="dialog">
                                <div className="deleteheader">删除简历</div>
                                <div className="deletemain">
                                    <p><span>“互联网产品岗”</span>将被删除</p>
                                    <p>此操作不能撤销</p>
                                </div>
                                <div className="deletefooter">
                                    <span onClick={this.cancleClick}>取消</span>
                                    <span onClick={this.deleteOnlineResume.bind(this, this.state.deleteid)}>删除简历</span>
                                </div>
                            </div>
                        </div>
                    : ""
                }

            </div>
        );

    }
}

export default CvCenter;
