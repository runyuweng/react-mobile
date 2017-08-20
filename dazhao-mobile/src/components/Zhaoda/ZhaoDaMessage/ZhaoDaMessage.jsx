import React from "react";
import "./ZhaoDaMessage.scss";
import TopBar from "../../Public/TopBar/TopBar.jsx";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";
import Loading from "../../Public/Loading/Loading.jsx";

class ZhaoDaMessage extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "showLoading": false,
            "limit": 3,
            "informs": [],
            "page": 1,
            "current": 1
        };
        this.fetchInform = this.fetchInform.bind(this);

    }

    componentDidMount () {

        this.props.changeBottomState(false);

        this.fetchInform(this.state.page);

    }

    // 获取通知
    fetchInform (page) {

        ajax({"url": `/zhaoda/message/information?page=${page}`}).
        then((data) => {

            console.log(data);
            if (data.code === "E01") {

                this.props.changeMessageContent(data.message);
                // This.setState({"informs": []});

            } else if (data.code === "S01") {

                // 查询成功，消息提示
                this.props.changeMessageContent(data.message);
                this.setState({"informs": data.contents});

            }

        });

    }

    render () {

        const {informs, limit, showLoading, current} = this.state;

        const InformsList = informs.map((elem, index) => {

            const FromList = elem.answerers.map((elem1, index1) => {

                if (elem.answerers.length - 1 >= limit) {

                    if (index1 <= limit - 1) {

                        return index1 === limit - 1 ? elem1 : `${elem1}、`;

                    }

                    return "";


                }


                return index1 === elem.answerers.length - 1 ? elem1 : `${elem1}、`;


            });

            return (
                <Link to={`/toquestion/${elem.qid}`}>
                    <div className="zhaodamessage" key={index}>
                        <span className="who">
                            {FromList}
                            {elem.answerers.length > limit ? ` 等${elem.answerers.length}人`
                        : elem.answerers.length === 1 ? " " : ` ${elem.answerers.length}人`}
                        回答了你的问题：</span>
                        <p>{elem.qtitle}</p>
                    </div>
                </Link>
            );

        });


        return (
            <div className="ZhaoDaMessage">
                <TopBar title="消息" border="boder" />
                <nav>
                    <ul>
                        <li onClick={() => {

                            this.setState({"current": 1}, () => {

                                this.fetchInform(this.state.page);

                            });

                        }} className={current === 1 ? "active" : ""}
                        >通知</li>
                        <li onClick={() => {

                            this.setState({"current": 2});

                        }} className={current === 2 ? "active" : ""}
                        >私信</li>
                        <li onClick={() => {

                            this.setState({"current": 3});

                        }} className={current === 3 ? "active" : ""}
                        >系统</li>
                    </ul>
                </nav>
                {showLoading ? <Loading />

                : <div id="MessageMain">

                    {current === 1 ? InformsList : current === 2 ? <p className="noFunc">此功能尚未开通...</p> : current === 3 ? <p className="noFunc">此功能尚未开通...</p> : ""}

                    {current === 1 ? InformsList : current === 2 ? "" : current === 3 ? "" : ""}

                </div>
                }
            </div>
        );

    }
}

export default ZhaoDaMessage;
