import React from "react";
import "./ConcernQuestion.scss";
import ajax from "../../../services/ajax.js";
import {Link} from "react-router";

class ConcernQuestion extends React.Component {

    constructor (props) {

        super(props);
        this.state = {

            "questions": [],
            "page": 1,
            "nocareQuestion": false,
            "nomore": false,
            "moreMessage": ""
        };
        this.fetchQuestions = this.fetchQuestions.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

    }

    componentDidMount () {

        // This.props.changeBottomState(false);

        window.addEventListener("scroll", this.handleScroll);
        this.fetchQuestions(this.state.page);

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

            this.setState({"moreMessage": this.state.nomore ? "没有更多关注" : "正在加载中"}, () => {

                this.fetchQuestions(this.state.page);

            });

        })() : "";

    }

    fetchQuestions (page) {

        !this.state.nomore
        ? ajax({"url": `/zhaoda/question/mycarequestion?page=${page}`}).
        then((data) => {


            if (data.code === "S01") {

                const questions = data.contents;

                this.setState({
                    "questions": this.state.questions.concat(questions),
                    "page": this.state.page + 1,
                    "moreMessage": ""
                });

            } else if (data.code === "S02") {

                // 已到最后一页
                this.context.changeMessageContent(data.message);
                const questions = data.contents;

                this.setState({
                    "questions": this.state.questions.concat(questions),
                    "nomore": true,
                    "moreMessage": "没有更多关注"
                });

            } else if (data.code === "S03") {

                // SO3表示没有关注的话题
                this.context.changeMessageContent(data.message);
                this.setState({
                    "questions": [],
                    "nocareQuestion": true,
                    "nomore": true
                });

            } else if (data.code === "E01") {

                this.context.changeMessageContent(data.message);

                this.setState({"questions": []});

            } else if (data.code === "E03") {
               // 未登录

            }

        }) : "";

    }

    render () {

        const {questions} = this.state;
        const questionsList = questions.map((elem, index) =>
            <Link key={index} to={`/toquestion/${elem.qid}`}>
                <div key={index} className="question">
                    <h3>{elem.qtitle}</h3>
                    <span><em>{elem.answer}</em>个回答</span>
                </div>
            </Link>
            );

        return (
            <div id="ConcernQuestion">
                {questionsList}
                {
                    this.state.nocareQuestion
                        ? <div className="nocareQuestion">
                            <span />
                            <span>您还没有关注任何问题</span>
                        </div> : ""
                }
                {
                    this.state.nocareQuestion
                    ? ""
                    : <p className="fetchmore">{this.state.moreMessage}</p>
                }
            </div>
        );

    }
}

ConcernQuestion.contextTypes = {"changeMessageContent": React.PropTypes.func};
export default ConcernQuestion;
