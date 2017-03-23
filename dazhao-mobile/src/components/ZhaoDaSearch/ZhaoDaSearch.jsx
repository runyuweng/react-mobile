import React from 'react';
import "./ZhaoDaSearch.scss";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class ZhaoDaSearch extends React.Component {
  constructor(props){
    super(props);
    this.state={
      Keyword:'',
      response:[
        {
          id:1,
          title:'研究生和本科学历在求职过程中真的会有很大影响吗？',
          answer:'这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...',
          agree:9,
          remark:14
        },
        {
          id:2,
          title:'研究生和本科学历在求职过程中真的会有很大差别吗？',
          answer:'这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...',
          agree:9,
          remark:14
        },
        {
          id:3,
          title:'研究生和本科学历在求职过程中真的会有很大影响吗？',
          answer:'这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学...',
          agree:9,
          remark:14
        }
      ]
    }
  }

  render() {

    const {Keyword,response}=this.state;
    const responseList = response.map(function(item) {
      return (
          <div className="items" key={item.id}>
            <Link to = "/toquestion"><span>{item.title}</span></Link>
            <Link to = "/response"><p>{item.answer}</p></Link>

            <div className="more">
              <span><b><img src="/src/images/zan.png"/></b>赞同{item.agree}</span>
              <span><b><img src="/src/images/comment.png"/></b>评论{item.remark}</span>
              <span><b><img src="/src/images/cang.png"/></b>收藏</span>
            </div>
          </div>
        );
    })
    console.log(responseList);
    return(
      <div className="ZhaoDaSearch">
        <header>
          <div className="search">
              <span >取消</span>
              <input type="text"
              placeholder="研究生"
              value={Keyword}
              onChange={function(e){
                return(
                  this.setState({
                    Keyword:e.target.value
                  })
                )
              }}/>
              <span>搜索</span>
          </div>
        </header>
        <nav>
          <ul>
              <li className="active">问答</li>
              <Link to = "/huati">
                <li>话题</li>
              </Link>
              <Link to = "/zhuanlan">
                <li>专栏</li>
              </Link>
              <Link to = "/user">
                <li>用户</li>
              </Link>
          </ul>
        </nav>
        <div className="getting">
        {/*
          <div className="items">
            <Link to = "/response"><span><b>研究生</b>和本科学历在求职过程中真的会有很大差别吗？</span></Link>
            <p>这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚<b>研究生</b>学...</p>
          </div>

          <div className="items">
            <span><b>研究生</b>和本科学历在求职过程中真的会有很大差别吗？</span>
            <p>这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚<b>研究生学</b>...</p>
          </div>

          <div className="items">
            <span><b>研究生</b>和本科学历在求职过程中真的会有很大差别吗？</span>
            <p>这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚<b>研究生学</b>...</p>
          </div>

          <div className="items">
            <span><b>研究生</b>和本科学历在求职过程中真的会有很大差别吗？</span>
            <p>这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚<b>研究生学</b>...</p>
          </div>
            */}
           {responseList}
        </div>
      </div>
    )
  }
}
export default ZhaoDaSearch;
