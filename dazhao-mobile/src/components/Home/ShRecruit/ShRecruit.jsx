import React from 'react';
import "./ShRecruit.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import SlideBar from "../../MainLayout/SlideBar/SlideBar.jsx";
import { Link } from 'react-router';

class ShRecruit extends React.Component {

  constructor(props){
    super(props);
    this.state={
        industry : []
    }
  }

  componentDidMount(){
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
      <div className="ShRecruit">
        <header>
          <TopBar title="校招职位" border="boder"/>
        </header>

        <SlideBar industry={industry}/>

        <div className="srMain">
          <div className="sort">
            <ul>
              <li>默认排序<img src="/src/images/Back_down.png"/></li>
              <li>全国<img src="/src/images/Back_down.png"/></li>
              <li>5k-8k<img src="/src/images/Back_down.png"/></li>
              <li>本科<img src="/src/images/Back_down.png"/></li>
            </ul>
          </div>

          <div id="homeMain">
            <Link to = "jobdetail">
              <div className="jobitems">
                <span className="pics"><img src="/src/images/ali.png"/></span>
                <div className="jobintro">
                  <h2>JAVA研发工程师</h2>
                  <h3>阿里巴巴网络技术有限公司</h3>
                  <span>
                    <em>上海</em>
                    <em>本科</em>
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
            </Link>

            <div className="jobitems">
              <span className="pics"><img src="/src/images/ali.png"/></span>
              <div className="jobintro">
                <h2>JAVA研发工程师</h2>
                <h3>阿里巴巴网络技术有限公司</h3>
                <span>
                  <em>上海</em>
                  <em>本科</em>
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
              <span className="pics"><img src="/src/images/ali.png"/></span>
              <div className="jobintro">
                <h2>JAVA研发工程师</h2>
                <h3>阿里巴巴网络技术有限公司</h3>
                <span>
                  <em>上海</em>
                  <em>本科</em>
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
              <span className="pics"><img src="/src/images/ali.png"/></span>
              <div className="jobintro">
                <h2>JAVA研发工程师</h2>
                <h3>阿里巴巴网络技术有限公司</h3>
                <span>
                  <em>上海</em>
                  <em>本科</em>
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
                <h2>JAVA研发工程师</h2>
                <h3>阿里巴巴网络技术有限公司</h3>
                <span>
                  <em>上海</em>
                  <em>本科</em>
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
export default ShRecruit;
