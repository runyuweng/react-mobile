import React from "react";
import "./ZhaoDaSearch.scss";
import ZhaoDaSearchTop from "../ZhaoDaSearchTop/ZhaoDaSearchTop.jsx";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

class ZhaoDaSearch extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "keyword": this.props.location.query.keyword,
            "response": [
                {
                    "id": 1,
                    "answer_id":1,
                    "title": "研究生和本科学历在求职过程中真的会有很大影响吗？",
                    "answer": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学..."
                },
                {
                    "id": 2,
                    "answer_id":2,
                    "title": "研究生和本科学历在求职过程中真的会有很大差别吗？",
                    "answer": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学..."
                },
                {
                    "id": 3,
                    "answer_id":3,
                    "title": "研究生和本科学历在求职过程中真的会有很大影响吗？",
                    "answer": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学..."
                }
            ]
        };
        this.fetchQuestions = this.fetchQuestions.bind(this);
    }

    componentDidMount() {
        console.log(this.props.location.query.keyword);
        this.fetchQuestions(this.state.keyword);
    }

    fetchQuestions(keyword){
        ajax({"url": `/zhaoda/questions?keyword=${keyword}`}).
        then((data) => {

            if (data.code === "S01") {

                this.setState({"response": data.contents});

            } else if (data.code === "E01") {

                this.setState({"response": []});

            }

        });
    }

    render () {

        const {keyword, response} = this.state;
        const responseList = response.map((item) =>
            <div className="items" key={item.id}>
                <Link to={`/toquestion/${item.id}`}><span>{item.title}</span></Link>
                <Link to={{"pathname":"/response","query":{"aid":item.answer_id,"qtitle":item.title}}}><p>{item.answer}</p></Link>
            </div>
      );


        return (
            <div className="ZhaoDaSearch">
                    {/*<ZhaoDaSearchTop keyword={this.state.keyword} />*/}
                <div className="ZhaoDaSearchTop">
                    <header>
                        <div className="search">
                            <Link to="/Zhaoda/main">
                                <span >取消</span>
                            </Link>
                            <input type="text" onChange={(e)=>{
                                this.setState({
                                    "keyword":e.target.value
                                })
                            }} placeholder="研究生" value={this.state.keyword}/>
                            <span onClick={this.fetchQuestions.bind(this,keyword)}>搜索</span>
                        </div>
                    </header>
                    <nav>
                        <ul>
                            <Link activeClassName="active" to={{
                                "pathname":"/search",
                                "query":{"keyword":this.state.keyword}  
                            }}>
                                <li>问答</li>
                            </Link>
                            <Link activeClassName="active" to={{
                                "pathname":"/talk",
                                "query":{"keyword":this.state.keyword} 
                            }}>
                                <li>话题</li>
                            </Link>
                            <Link activeClassName="active" to={{
                                "pathname":"/zhuanlan",
                                "query":{"keyword":this.state.keyword} 
                            }}>
                                <li>专栏</li>
                            </Link>
                            <Link activeClassName="active" to={{
                                "pathname":"/user",
                                "query":{"user":""}
                            }}>
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
