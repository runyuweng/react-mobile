import React from "react";
import "./Answers.scss";
import ajax from "../../../services/ajax.js";

class Answers extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "answers": [
                {
                    "uid": 1,
                    "question": "研究生和本科学历在求职过程中真的会有很大差别吗？",
                    "answer": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...",
                    "agree": 14,
                    "remark": 9,
                    "collect": false
                },
                {
                    "uid": 2,
                    "question": "研究生和本科学历在求职过程中真的会有很大差别吗？",
                    "answer": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...",
                    "agree": 14,
                    "remark": 9,
                    "collect": false
                },
                {
                    "uid": 3,
                    "question": "研究生和本科学历在求职过程中真的会有很大差别吗？",
                    "answer": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...",
                    "agree": 14,
                    "remark": 9,
                    "collect": false
                }
            ],
            "page": 1
        };
        this.fetchAnswer = this.fetchAnswer.bind(this);

    }

    componentDidMount () {

        this.fetchAnswer(this.state.page);

    }

    fetchAnswer (page) {

        ajax({"url": `/answers?page=${page}`}).
        then((data) => {

            if (data.code === "S01") {

                const answers = data.contents;

                this.setState({"answers": this.state.questions.push(answers)});

            } else if (data.code === "S02") {

            } else {

                this.setState({"answers": this.state.answers});

            }

        });

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
            </div>
        );

    }
}

export default Answers;
