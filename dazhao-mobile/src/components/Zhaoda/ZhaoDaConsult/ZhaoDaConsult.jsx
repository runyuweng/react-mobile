import React from "react";
import "./ZhaoDaConsult.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

class ZhaoDaConsult extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "question": sessionStorage.getItem("question") || "",
            "answer": []
        };

    }

    componentDidMount () {

        this.props.changeBottomState(false);

    }

    handleChange (e) {

        this.setState({"question": e.target.value}, () => {

            if (this.state.question) {

                ajax({"url": `/zhaoda/question/similarquestion?qtitle=${this.state.question}`}).
          then((data) => {

              this.setState({"answer": data.contents ? data.contents : []});


          });

            }

        });

    }

    render () {

        const {question, answer} = this.state;

        const answerList = answer.map((value, i) =>
            <Link to={`/toquestion/${value.qid}`} >
                <p key={i}>
                    {value.qtitle}<span><b>{value.answer}</b>个回答</span>
                </p>
            </Link>
        );


        return (
            <div className="ZhaoDaConsult">
                <header>
                    <div className="search">
                        <span onClick={() => {

                            history.go(-1);

                        }}
                        >取消</span>
                        <span>提问-填写标题</span>
                        {question ? <span onClick={() => {

                            sessionStorage.setItem("question", this.state.question);

                        }}
                                    ><Link to="/detail">下一步</Link></span>
                          : <span onClick={() => {

                              this.props.changeMessageContent("请输入后再试");

                          }}
                            >下一步</span>}
                    </div>
                </header>
                <div className="quiztitle">
                    <input type="text"
                        value={question}
                        placeholder="写下你的问题标题"
                        autoFocus="autoFocus"
                        onChange={(e) => this.handleChange(e)}
                    />
                </div>
                <div className="havefind">
                    {answer.length > 0 ? <div><span><img src="/src/images/power.png" /></span>你的问题可能已经得到解决：</div> : ""}
                    {answerList}
                </div>
            </div>
        );

    }
}

export default ZhaoDaConsult;
