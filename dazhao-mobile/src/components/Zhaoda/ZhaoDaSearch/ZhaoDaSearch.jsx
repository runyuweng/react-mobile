import React from "react";
import "./ZhaoDaSearch.scss";
import ZhaoDaSearchTop from "../ZhaoDaSearchTop/ZhaoDaSearchTop.jsx";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";
const PropTypes = require("prop-types");

class ZhaoDaSearch extends React.Component {
    constructor (props) {

        super(props);
        console.log("params", this.props.params.splat);
        this.state = {
            "keyword": this.props.params.splat || "",
            "response": []
        };
        this.fetchQuestions = this.fetchQuestions.bind(this);
        this.setLike = this.setLike.bind(this);
        
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

    setLike (aid) {
        
                ajax({"url": `/zhaoda/answer/dianzananswer?aid=${aid}`}).
              then((data) => {
        
                  if (data.code === "S01") {
                        this.state.response.map(d => {
                            if(d.aid === aid){
                                d.agree = d.agree + 1;
                            }
                        })
        
                      this.context.changeMessageContent("成功");
                      this.setState({
                          "response": response
                        });
        
                  } else if (data.code === "S04") {
        
                        // 点过赞了
                      this.context.changeMessageContent("您已点过赞");
        
                  } else if (data.code === "E01") {
        
                        // 出错
                      this.context.changeMessageContent("操作失败请重试");
        
                  }
        
              });
        
            }
        
            setSelected (qid) {
        
                ajax({"url": `/zhaoda/question/subscribequestion?qid=${qid}`}).
              then((data) => {
        
        
                  if (data.code === "S01") {
        
                      // 收藏状态改变
                      this.state.response.map(d => {
                          if(d.qid === qid){
                              d.collect = !d.collect;
                          }
                      })
                      this.context.changeMessageContent("操作成功");
                      this.setState({"response": this.state.response});
        
                  } else if (data.code === "E01") {
        
                    // 出错
                      this.context.changeMessageContent("操作失败请重试");
        
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

                <div className="more">
                    <span>
                        <b><img onClick={this.setLike.bind(this, item.qid, item.aid)} src={item.iszan?'/src/images/icon/赞.png':"/src/images/zan.png"} /></b>
                        赞同{item.agree}
                    </span>
                    <Link to={item.toquestion === "0" ? `/coments/${item.aid}/${item.theme}` : `/toquestion/${item.qid}`}>
                        <span><b><img src="/src/images/comment.png" /></b>评论{item.remark}</span>
                    </Link>
                    {
                        item.collect
                        ? <span onClick={this.setSelected.bind(this, item.qid)}><b><img src="/src/images/star.png" /></b>已收藏</span>
                        : <span onClick={this.setSelected.bind(this, item.qid)}><b><img src="/src/images/cang.png" /></b>收藏</span>
                    }
                </div>
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

ZhaoDaSearch.contextTypes = {"changeMessageContent": PropTypes.func};

export default ZhaoDaSearch;
