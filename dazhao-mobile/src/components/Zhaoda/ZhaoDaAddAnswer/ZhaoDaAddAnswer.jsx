import React from 'react';
import './ZhaoDaAddAnswer.scss';
import ajax from "../../../services/ajax.js";

class ZhaoDaAddAnswer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "answerContent":""
    };
    this.submitClick = this.submitClick.bind(this);
  }

  componentDidMount() {
      this.props.showBottom(false);
  }


  submitClick(){

      if (this.refs.answer.value !== "") {
        this.setState({
          "answerContent" : this.refs.answer.value
        },()=>{
            ajax({
                "url": "/zhaoda/addanswer",
                "method": "POST",
                "data": `questionId=${this.props.params.uid}&answer=${this.state.answerContent}`
            }).then((data) => {

                console.log(data);
                if (data.code === "S01") {

                    this.props.showMessage(data.message);

                    //添加成功，2s后页面自动跳转
                    setTimeout(()=>{
                      window.location = `/#/toquestion/${this.props.params.uid}`
                    },2000)
                    

                } else {

                    this.props.showMessage(data.message);

                }
            })
          })
      }else{
        this.props.showMessage("请输入内容后提交")
      }
  }

  render() {
    return (
      <div className="zhaoDaAddAnswer">
        <header>
            <div className="search">
                <span onClick={() => {

                    history.go(-1);

                }}
                >取消</span>
                <span>添加回答</span>
                <span onClick={this.submitClick}>提交</span>
            </div>
        </header>
        <div className="answercontent">
            <input ref="answer" type="text" placeholder="填写回答内容" />
        </div>
      </div>
    );
  }
}

export default ZhaoDaAddAnswer;