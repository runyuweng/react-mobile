import React from "react";
import "./ZhaoDaMessage.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

class ZhaoDaMessage extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "limit": 3,
            "informs": [
                {
                    "questionId": 1,
                    "answerers": ["Michael", "李刚", "Simon", "Michael", "李刚"],
                    "topic": "研究生和本科学历在求职过程中真的会有很大差别吗？"
                },
                {
                    "questionId": 2,
                    "answerers": ["Kangkang", "李刚", "Jane", "李刚"],
                    "topic": "研究生和本科学历在求职过程中真的会有很大差别吗？"
                },
                {
                    "questionId": 3,
                    "answerers": ["Simon", "Michael", "李刚", "Simon"],
                    "topic": "研究生和本科学历在求职过程中真的会有很大差别吗？"
                },
                {
                    "questionId": 4,
                    "answerers": ["Michael", "李刚", "Simon"],
                    "topic": "研究生和本科学历在求职过程中真的会有很大差别吗？"
                },
                {
                    "questionId": 5,
                    "answerers": ["Michael"],
                    "topic": "研究生和本科学历在求职过程中真的会有很大差别吗？"
                }
            ],
            "page":1,
        };
        this.fetchInform = this.fetchInform.bind(this);
    }

    componentDidMount () {

        //this.props.showBottom();
        this.fetchInform(this.state.page);

    }

    // 获取通知
    fetchInform (page) {

        ajax({"url": `/zhaoda/message/information?page=${page}`}).
        then((data) => {
            console.log(data)

            if (data.code === "E01") {

                this.setState({"informs": []});

            } else if (data.code === "S01") {

                this.setState({"informs": data.contents});

            }

        });

    }

    render () {

        const {informs, limit} = this.state;

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
                <div className="zhaodamessage" key={index}>
                    <span className="who">
                        {FromList}
                        {elem.answerers.length > limit ? ` 等${elem.answerers.length}人`
                    : elem.answerers.length === 1 ? " " : ` ${elem.answerers.length}人`}
                    回答了你的问题：</span>
                    <p>{elem.topic}</p>
                </div>
            );

        });


        return (
            <div className="ZhaoDaMessage">
                <TopBar title="消息" border="boder" />
                <nav>
                    <ul>
                        <li className="active">通知</li>
                        <li>私信</li>
                        <li>系统</li>
                    </ul>
                </nav>
                <div id="MessageMain">

                    {InformsList}

                </div>
            </div>
        );

    }
}

export default ZhaoDaMessage;
