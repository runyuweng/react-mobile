import React from 'react';
import "./ZhaoDaSearch.scss";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class ZhaoDaSearch extends React.Component {

  render() {
    return(
      <div className="ZhaoDaSearch">
        <header>
          <div className="search">
              <span >取消</span>
              <input type="text" placeholder="研究生"/>
              <span>搜索</span>
          </div>
        </header>
        <nav>
          <ul>
              <li className="active">问答</li>
              <li>话题</li>
              <li>专栏</li>
              <li>用户</li>
          </ul>
        </nav>
        <div className="getting">
          <div className="items">
            <Link to = "/response"><span><b>研究生</b>和本科学历在求职过程中真的会有很大差别吗？</span></Link>
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

          <div className="items">
            <span><b>研究生</b>和本科学历在求职过程中真的会有很大差别吗？</span>
            <p>这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚<b>研究生学</b>...</p>
          </div>

        </div>
      </div>
    )
  }
}
export default ZhaoDaSearch;
