import React from 'react';
import "./ZhaoDaConsult.scss";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class ZhaoDaConsult extends React.Component {
  constructor(props){
    super(props);
    this.state={
      question:'',
      answer:[
        {
          id:1,
          title:'非经融专业的学生想进投行工作需要什么？',
          num:'5'
        },
        {
          id:2,
          title:'非经融专业的学生想进投行工作需要什么？',
          num:'4'
        }
      ]
    }
  }

  render() {
    const { question , answer } = this.state;
    const answerList = answer.map((value)=>{
      return (<p key={value.id}>
        {value.title}<span><b>{value.num}</b>个回答</span>
      </p>)
    })
    console.log(answerList);
    return(
      <div className="ZhaoDaConsult">
        <header>
          <div className="search">
              <span >取消</span>
              <span>提问</span>
              <span><Link to = "/detail">下一步</Link></span>
          </div>
        </header>
        <div className="quiztitle">
          <input type="text"
            value={question}
            placeholder="写下你的问题标题"
            autoFocus="autoFocus"
            onChange={(e)=>{
              this.setState({question:e.target.value});
              //
            }}/>
        </div>
        <div className="havefind">
          {answer.length>0?<div><span><img src="/src/images/power.png"/></span>你的问题可能已经得到解决：</div>:''}
          {answerList}
        </div>
      </div>
    )
  }
}
export default ZhaoDaConsult;
