import React from 'react';
import "./Enterprise.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import SlideBar from "../../MainLayout/SlideBar/SlideBar.jsx";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class Enterprise extends React.Component {

  constructor(props){
    super(props);
    this.state={
        industry : []
    }
  }

  componentDidMount(){
    this.props.showBottom();
    this.setState({
        industry:[
            {industry_name : '不限', industry_id : '0'},
            {industry_name : '互联网', industry_id : '1'},
            {industry_name : '金融', industry_id : '2'},
            {industry_name : '工业制造', industry_id : '3'},
            {industry_name : '咨询', industry_id : '4'},
            {industry_name : '教育', industry_id : '5'},
            {industry_name : '科技', industry_id : '6'},
        ]
    })
  }

  render() {
    const {industry} = this.state;

    return(
      <div className="Enterprise">
        <header>
          <TopBar title="企业" border="boder"/>
        </header>

        <SlideBar industry={industry}/>

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
export default Enterprise;
