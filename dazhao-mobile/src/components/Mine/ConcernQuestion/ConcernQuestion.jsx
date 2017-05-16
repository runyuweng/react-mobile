import React from "react";
import "./ConcernQuestion.scss";
import ajax from "../../../services/ajax.js";

class ConcernQuestion extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "questions": [
                {
                    "id": 1,
                    "qtitle": "研究生和本科生在求职过程中真的会有很大影响吗？",
                    "answernum": 12
                },
                {
                    "id": 2,
                    "qtitle": "研究生和本科生在求职过程中真的会有很大影响吗？",
                    "answernum": 12
                },
                {
                    "id": 3,
                    "qtitle": "研究生和本科生在求职过程中真的会有很大影响吗？",
                    "answernum": 12
                }
            ],
            "questionPage": 1
        };
        this.fetchQuestions = this.fetchQuestions.bind(this);

    }

    componentDidMount () {

        this.fetchQuestions(this.state.questionPage);

    }

    fetchQuestions (page) {

        ajax({"url": `/mycarequestion?page=${page}`}).
        then((data) => {

            if (data.code === "S01") {

                const questions = data.contents;

                this.setState({"questions": this.state.questions.push(questions)});

            } else if (data.code === "S02") {

            } else {

                this.setState({"questions": this.state.questions});

            }

        });

    }

    render () {

        const {questions} = this.state;
        const questionsList = questions.map((elem, index) =>
            <div key={index} className="question">
                <h3>{elem.qtitle}</h3>
                <span><em>{elem.answernum}</em>个回答</span>
            </div>
            );

        return (
            <div id="ConcernQuestion">
                {questionsList}
            </div>
        );

    }
}
export default ConcernQuestion;
