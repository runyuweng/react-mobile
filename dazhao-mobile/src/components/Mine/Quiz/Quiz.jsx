import React from "react";
import "./Quiz.scss";
import ajax from "../../../services/ajax.js";

class Quiz extends React.Component {

    constructor (props) {

        super(props);
        this.state = {

            "questions": [],
            "page": 1,
            "nomore": false,
            "moreMessage": ""
        };
        this.fetchQuestions = this.fetchQuestions.bind(this);
        this.handleScroll = this.handleScroll.bind(this);

    }

    componentDidMount () {

        this.fetchQuestions(this.state.page);
        window.addEventListener("scroll", this.handleScroll);

    }

    componentWillUnmount () {

        window.removeEventListener("scroll", this.handleScroll);

    }


    handleScroll (e) {

        // Console.log("滚动高度：" + document.body.scrollTop);

        const scrollTop = document.body.scrollTop;
        const innerHeight = window.innerHeight;
        const docHeight = document.body.scrollHeight;

        scrollTop === docHeight - innerHeight
        ? (() => {

            this.setState({"moreMessage": this.state.nomore ? "没有更多提问" : "正在加载中"}, () => {

                this.fetchQuestions(this.state.page);

            });

        })() : "";

    }


    fetchQuestions (page) {

        !this.state.nomore

        ? ajax({"url": `/zhaoda/user/userquestion?page=${page}`}).
        then((data) => {

            console.log(data);
            if (data.code === "S01") {

                const questions = data.contents;

                this.setState({
                    "questions": this.state.questions.concat(questions),
                    "page": this.state.page + 1,
                    "moreMessage": ""
                });

            } else if (data.code === "S02") {

                const questions = data.contents;

                this.setState({
                    "questions": this.state.questions.concat(questions),
                    "nomore": true,
                    "moreMessage": "没有更多提问"
                });

            } else if (data.code === "S03") {

                // SO3表示没有任何提问
                this.setState({
                    "questions": [],
                    "nocareQuestion": true,
                    "nomore": true
                });

            } else if (data.code === "E01") {

                this.setState({"questions": []});

            } else if (data.code === "E03") {
               // 未登录

            }

        }) : "";

    }

    render () {

        const {questions} = this.state;
        const questionsList = questions.map((elem, index) =>
            <div key={index} className="question">
                <h3>{elem.qtitle}</h3>
                <span><em>{elem.answer}</em>个回答</span>
            </div>
            );


        return (
            <div id="quiz">
                {questionsList}
                <p className="fetchmore">{this.state.moreMessage}</p>
            </div>
        );

    }
}
export default Quiz;
