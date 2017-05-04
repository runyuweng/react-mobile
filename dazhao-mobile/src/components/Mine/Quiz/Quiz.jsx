import React from "react";
import "./Quiz.scss";

class Quiz extends React.Component {

    constructor (props) {

        super(props);

    }

    render () {

        return (
            <div id="quiz">
                <div className="question">
                    <h3>研究生和本科生在求职过程中真的会有很大影响吗？</h3>
                    <span><em>12</em>个回答</span>
                </div>
                <div className="question">
                    <h3>研究生和本科生在求职过程中真的会有很大影响吗？</h3>
                    <span><em>12</em>个回答</span>
                </div>
                <div className="question">
                    <h3>第一份工作创业公司和大公司要怎么选择呢？</h3>
                    <span><em>12</em>个回答</span>
                </div>
                <div className="question">
                    <h3>研究生和本科生在求职过程中真的会有很大影响吗？</h3>
                    <span><em>12</em>个回答</span>
                </div>
            </div>
        );

    }
}
export default Quiz;
