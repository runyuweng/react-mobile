import React from 'react';
import "./ZhaoDaHome.scss";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class ZhaoDaHome extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.showBottom(true);
  }
  render() {
    return(
      <div className="ZhaoDaHome">
        <header>
          <span className="log"><img src="/src/images/zhaodalog.png"/></span>
          <div className="input">
            <input type="text" placeholder="搜索期望中的公司、岗位、地点"/>
            <span><img src="/src/images/搜素.png"/></span>
          </div>
        </header>

        <div id="show">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators">
                <li className="active"></li>
                <li></li>
                <li></li>
            </ol>

            <div className="carousel-inner">
              <div className="item active">
              </div>
              <div className="item">
              </div>
              <div className="item">
              </div>
            </div>

          </div>
        </div>

        <div className="experience">
            <div>
              <Link to="/schoolRecruit">
                <span><img src="/src/images/首页icon1.png"/>
                <em>校招</em></span>
              </Link>
            </div>
            <div>
              <Link to = "/schoolRecruit">
                <span><img src="/src/images/首页icon2.png"/>
                <em>实习</em></span>
              </Link>
            </div>

            <div>
              <Link to = "/enterprise">
                <span><img src="/src/images/首页icon3.png"/>
                <em>企业</em></span>
              </Link>
            </div>

            <div>
              <Link to = "/">
                <span><img src="/src/images/首页icon4.png"/>
                <em>空中宣讲</em></span>
              </Link>
            </div>
        </div>

        <div id="homeMain">
          <h2><span><img src="/src/images/latest.png"/></span>推荐职位
          </h2>
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

          <div className="morejob">展开更多</div>

        </div>

        <div className="hotjob">
          <h2><span><img src="/src/images/latest.png"/></span>热门企业
          </h2>

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

          <div className="morejob">展开更多</div>

        </div>

      </div>
    )
  }
}
export default ZhaoDaHome;
