import React from 'react';
import "./ShRecruit.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class ShRecruit extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        startPoint : 0,
        currentPoint : 0,
        currentLeft : 0,
        currentWidth : 0,
        titleWidth : 0
    }
  }

  componentDidMount(){
    this.props.showBottom();
    this.setState({
        currentWidth : this.refs.industryList.offsetWidth,
        titleWidth : this.refs.title.offsetWidth,
    })
  }

  startMove(e){
      this.setState({
          startPoint: e.touches[0].pageX
      })
  }
  handleMove(e){
      console.log(document.body.clientWidth,this.state.titleWidth);
      let displacement = e.touches[0].pageX-this.state.startPoint;
      let minLeft = this.state.currentWidth-(document.body.clientWidth-this.state.titleWidth);
      let currentLeft = displacement > 0 ? 0 : (displacement < -minLeft ? -minLeft : displacement);

      this.setState({currentLeft: currentLeft})
      console.log(displacement);
  }

  render() {
    const {currentLeft} = this.state;

    return(
      <div className="ShRecruit">
        <header>
          <TopBar title="校招职位" border="boder"/>
        </header>
        <nav>
          <p ref = "title">行业分类</p>
          <ul
           style = {{"left":currentLeft}}
           ref="industryList"
           onTouchStart={(e)=>{this.startMove(e)}}
           onTouchMove={(e)=>{this.handleMove(e)}}
          >
            <li className="active">不限</li>
            <li>互联网</li>
            <li>金融</li>
            <li>工业制造</li>
            <li>咨询</li>
            <li>咨询</li>
            <li>咨询</li>
          </ul>
        </nav>

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
