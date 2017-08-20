import React from "react";
import "./ZhaoDaSearch.scss";
import ZhaoDaSearchTop from "../ZhaoDaSearchTop/ZhaoDaSearchTop.jsx";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

class ZhaoDaSearch extends React.Component {
    constructor (props) {

        super(props);
        console.log("params", this.props.params.splat);
        this.state = {
            "keyword": this.props.params.splat || "",
            "response": []
        };
        this.fetchQuestions = this.fetchQuestions.bind(this);

    }

    componentDidMount () {

        // Console.log(this.props.location.query.keyword);
        // This.fetchQuestions(this.state.keyword);
        this.fetchQuestions(this.state.keyword);
        this.props.changeBottomState(false);

    }

    fetchQuestions (keyword) {

        ajax({"url": `/zhaoda/question/searchquestion?keyword=${keyword}`}).
        then((data) => {


            if (data.code === "S01") {

                this.setState({"response": data.contents});
                this.props.changeMessageContent(data.message);

            } else if (data.code === "E01") {

                this.setState({"response": []});
                this.props.changeMessageContent(data.message);

            }

        });


    }

    render () {

        const {keyword, response} = this.state;

        console.log(response);
        const responseList = response.map((item) =>
            <div className="items" key={item.qid}>
                <Link to={`/toquestion/${item.qid}`}><span>{item.qtitle}</span></Link>
                <Link to={{
                    "pathname": "/response",
                    "query": {
                        "aid": item.answers.length > 0 ? item.answers[0].aid : 1,
                        "qtitle": item.qtitle
                    }
                }}
                ><p dangerouslySetInnerHTML={{"__html": item.answers.length > 0 ? item.answers[0].content : "未知"}} /></Link>
            </div>

      );


        return (
            <div className="ZhaoDaSearch">
                {/* <ZhaoDaSearchTop keyword={this.state.keyword} />*/}
                <div className="ZhaoDaSearchTop">
                    <header>
                        <div className="search">
                            <Link to="/Zhaoda">
                                <span >取消</span>
                            </Link>
                            <input type="text" onChange={(e) => {

                                this.setState({"keyword": e.target.value});

                            }} placeholder="输入要搜索关键字" value={this.state.keyword}
                            />
                            <span onClick={this.fetchQuestions.bind(this, keyword)}>搜索</span>
                        </div>
                    </header>
                    <nav>
                        <ul>
                            <Link className="active" to={`/search/${this.state.keyword}`}>
                                <li>问答</li>
                            </Link>
                            <Link to={`/talk/${this.state.keyword}`}>
                                <li>话题</li>
                            </Link>
                            <Link to={`/user/${this.state.keyword}`}>
                                <li>用户</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
                <div className="getting">
                    {responseList}
                </div>
            </div>
        );

    }
}

export default ZhaoDaSearch;
