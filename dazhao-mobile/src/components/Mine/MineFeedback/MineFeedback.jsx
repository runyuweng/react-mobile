import React from "react";
import "./MineFeedback.scss";
import ajax from "../../../services/ajax.js";
import {hashHistory} from "react-router";

class Feedback extends React.PureComponent {

    constructor (props) {

        super(props);
        this.state = {"text": ""};

    }

    componentDidMount () {

        this.props.changeBottomState(false);

    }

    submitClick =() => {

        if (this.state.text) {

            ajax({
                "url": "/zhaoda/feedback ",
                "method": "POST",
                "data": `text=${this.state.text}`
            }).
        then((data) => {

            if (data.code === "S01") {

                this.props.changeMessageContent("反馈成功");
                hashHistory.push({"pathname": "mine"});

            } else {

                this.props.changeMessageContent(data.message);

            }

        });

        } else {

            this.props.changeMessageContent("请输入内容后提交");

        }

    }


    render () {

        return (
            <div className="Feedback">
                <header>
                    <div className="search">
                        <span onClick={() => {

                            history.go(-1);

                        }}
                        ><img src="/src/images/arrow-left.png" /></span>
                        <span>建议反馈</span>
                        <span onClick={this.submitClick}>提交</span>
                    </div>
                </header>

                <textarea
                    value={this.state.text}
                    onChange={(e) => {

                        this.setState({"text": e.target.value});

                    }}
                    placeholder="填写问题场景、条件等详细描述（非必填）"
                />
            </div>
        );

    }
}

export default Feedback;
