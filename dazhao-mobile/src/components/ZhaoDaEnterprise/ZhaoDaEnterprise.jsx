import React from 'react';
import "./ZhaoDaEnterprise.scss";
import TopBar from "../TopBar/TopBar.jsx";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class ZhaoDaEnterprise extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.showBottom();
  }

  render() {
    return(
      <div className="ZhaoDaEnterprise">
        <header>
          <TopBar title="企业" border="boder"/>
        </header>
        <nav>
          <ul>
            <li>行业分类</li>
            <li className="active">不限</li>
            <li>互联网</li>
            <li>金融</li>
            <li>工业制造</li>
            <li>咨询</li>
          </ul>
        </nav>

        <div className="srMain">
          <div className="sort">
            <ul>
              <li>默认排序<img src="/src/images/Back_down.png"/></li>
              <li>全国<img src="/src/images/Back_down.png"/></li>
              <li>本科<img src="/src/images/Back_down.png"/></li>
            </ul>
          </div>
          <div className="hotjob">

            <div className="jobitems">
              <span className="pics"></span>
              <div className="jobintro">
                <h2>JAVA研发工程师<span>认证</span></h2>
                <h3><span>[<em>8</em>个]推荐算法实习</span>、<span>JAVA研发工程</span>、</h3>
                <span className="address">
                  <em>上海</em>
                </span>
                <span>
                  <em>互联网</em>
                  <b>|</b>
                  <em>外商独资</em>
                  <b>|</b>
                  <em>上市</em>
                  <b>|</b>
                  <em>1000人以上</em>
                </span>
              </div>
            </div>

            <div className="jobitems">
              <span className="pics"></span>
              <div className="jobintro">
                <h2>JAVA研发工程师<span>认证</span></h2>
                <h3><span>[<em>8</em>个]推荐算法实习</span>、<span>JAVA研发工程</span>、</h3>
                <span className="address">
                  <em>上海</em>
                </span>
                <span>
                  <em>互联网</em>
                  <b>|</b>
                  <em>外商独资</em>
                  <b>|</b>
                  <em>上市</em>
                  <b>|</b>
                  <em>1000人以上</em>
                </span>
              </div>
            </div>

            <div className="jobitems">
              <span className="pics"></span>
              <div className="jobintro">
                <h2>JAVA研发工程师<span>认证</span></h2>
                <h3><span>[<em>8</em>个]推荐算法实习</span>、<span>JAVA研发工程</span>、</h3>
                <span className="address">
                  <em>上海</em>
                </span>
                <span>
                  <em>互联网</em>
                  <b>|</b>
                  <em>外商独资</em>
                  <b>|</b>
                  <em>上市</em>
                  <b>|</b>
                  <em>1000人以上</em>
                </span>
              </div>
            </div>

            <div className="jobitems">
              <span className="pics"></span>
              <div className="jobintro">
                <h2>JAVA研发工程师<span>认证</span></h2>
                <h3><span>[<em>8</em>个]推荐算法实习</span>、<span>JAVA研发工程</span>、</h3>
                <span className="address">
                  <em>上海</em>
                </span>
                <span>
                  <em>互联网</em>
                  <b>|</b>
                  <em>外商独资</em>
                  <b>|</b>
                  <em>上市</em>
                  <b>|</b>
                  <em>1000人以上</em>
                </span>
              </div>
            </div>

            <p>加载更多</p>
        </div>

      </div>

    </div>
    )
  }
}
export default ZhaoDaEnterprise;
