import React from "react";
import "./Answers.scss";
import ajax from "../../../services/ajax.js";

class Answers extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "answers": [],
            "page": 1,
            "nomore": false,
            "moreMessage": ""
        };
        this.fetchAnswer = this.fetchAnswer.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

    }

    componentDidMount () {

        this.fetchAnswer(this.state.page);

        window.addEventListener("scroll", this.handleScroll);

    }

    componentWillUnmount () {

        window.removeEventListener("scroll", this.handleScroll);

    }


    handleScroll (e) {

        const scrollTop = document.body.scrollTop;
        const innerHeight = window.innerHeight;
        const docHeight = document.body.scrollHeight;

        scrollTop === docHeight - innerHeight
        ? (() => {

            this.setState({"moreMessage": this.state.nomore ? "没有更多回答" : "正在加载中"}, () => {

                this.fetchAnswer(this.state.page);

            });

        })() : "";

    }


    fetchAnswer (page) {

        !this.state.nomore

        ? ajax({"url": `/zhaoda/user/myanswers?page=${page}`}).
        then((data) => {

            console.log(data);

            if (data.code === "S01") {
                
                this.context.changeMessageContent(data.message);
                const answers = data.contents;

                this.setState({
                    "answers": this.state.answers.concat(answers),
                    "page": this.state.page + 1,
                    "moreMessage": ""
                });

            } else if (data.code === "S02") {

                this.context.changeMessageContent(data.message);

                // 没有更多
                const answers = data.contents;

                this.setState({
                    "answers": this.state.answers.concat(answers),
                    "nomore": true,
                    "moreMessage": "没有更多提问"
                });

            } else if (data.code === "S03") {

                this.context.changeMessageContent(data.message);

                // SO3表示没有任何提问
                this.setState({
                    "answers": [],
                    "nocareQuestion": true,
                    "nomore": true
                });

            } else if (data.code === "E01") {

                this.context.changeMessageContent(data.message);

                // 出错
                this.setState({
                    "answers": [],
                    "moreMessage": "暂无回答"
                });


            } else if (data.code === "E03") {
               // 未登录

            }

        }) : "";

    }

    render () {

        const {answers} = this.state;
        const answersList = answers.map((elem, index) =>
            <article key={index}>
                <p className="theme">{elem.question}</p>
                <div className="comment">{elem.answer}</div>
                <div className="more">
                    <span><b><img src="/src/images/zan.png" /></b>赞同{elem.agree}</span>
                    <span><b><img src="/src/images/comment.png" /></b>评论{elem.remark}</span>
                    <span><b><img src="/src/images/cang.png" /></b>收藏</span>
                </div>
            </article>
            );

        return (
            <div id="answers">
                {answersList}
                <p className="fetchmore">{this.state.moreMessage}</p>
            </div>
        );

    }
}

Answers.contextTypes = {
    changeMessageContent : React.PropTypes.func
}

export default Answers;
