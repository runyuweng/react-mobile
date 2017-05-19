import React from "react";
import "./ConcernQuestion.scss";
import ajax from "../../../services/ajax.js";

class ConcernQuestion extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            questions:[],
            page:1,
            nocareQuestion:false,
            nomore:false,
            moreMessage:""
        }
        this.fetchQuestions = this.fetchQuestions.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll);
        this.fetchQuestions(this.state.page);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll',this.handleScroll);
    }


    handleScroll(e){
        // console.log("滚动高度：" + document.body.scrollTop);
        
        let scrollTop = document.body.scrollTop;
        let innerHeight = window.innerHeight;
        let docHeight = document.body.scrollHeight;

        scrollTop === docHeight-innerHeight ?
        (()=>{
          this.setState({
            moreMessage:this.state.nomore?"没有更多关注":"正在加载中"
          },()=>{
            this.fetchQuestions(this.state.page);
          })
        })():""

    }

    fetchQuestions(page){
        !this.state.nomore?
        ajax({"url":`/zhaoda/question/mycarequestion?page=${page}`}).
        then((data)=>{
            console.log(data)
            if(data.code==="S01"){

                const questions = data.contents;
                this.setState({
                    questions:this.state.questions.concat(questions),
                    page:this.state.page+1,
                    moreMessage:""
                })

            }else if (data.code==="S02") {
                //已到最后一页
                const questions = data.contents;
                
                this.setState({
                  questions:this.state.questions.concat(questions),
                  nomore:true,
                  moreMessage:"没有更多关注"
                })

            }else if (data.code==="S03") {
                //SO3表示没有关注的话题
                this.setState({
                    questions:[],
                    nocareQuestion:true,
                    nomore:true
                })

            }else if (data.code==="E01"){

                this.setState({
                    questions:[]
                })

            }else if (data.code === "E03") {
               //未登录
               
            }

        }):""
    }

    render () {

        const { questions } = this.state;
        const questionsList = questions.map((elem,index)=>{
            return(
                <div key={index} className="question">
                    <h3>{elem.qtitle}</h3>
                    <span><em>{elem.answernum}</em>个回答</span>
                </div>
            )
        })

        return (
            <div id="ConcernQuestion">
                {questionsList}
                {
                    this.state.nocareQuestion?
                    <div className="nocareQuestion">
                        <span></span>
                        <span>您还没有关注任何问题</span>
                    </div>:""
                }
                {
                    this.state.nocareQuestion ?
                    "" :
                    <p className="fetchmore">{this.state.moreMessage}</p>
                }
            </div>
        );

    }
}
export default ConcernQuestion;
