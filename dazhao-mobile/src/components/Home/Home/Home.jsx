import React from 'react';
import "./Home.scss";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            position:[]
        }
    }

    componentDidMount(){
        this.props.showBottom(true);
        var request = new Request('http://115.159.159.79/wenda/getjobs', {
            method: 'GET',
            mode: 'cors'
        });
        fetch(request)
        .then(function(response) { return response.json(); })
        .then((data)=>{
            this.setState({
                position:data.contents
            })
        })
    }

    render() {
        const { position } = this.state;
        const posList = position.map((value,i)=>{
            return (<div className="jobitems" key={i}>
              <span className="pics"><img src="/src/images/ali.png"/></span>
              <div className="jobintro">
                <h2>{value.job_name}</h2>
                <h3>{value.company.name}</h3>
                <span>
                  <em>{value.company.city}</em>
                  <em>学历</em>
                </span>
                <span>
                  <em>{value.company.type}</em>
                  <b>|</b>
                  <em>外商独资</em>
                  <b>|</b>
                  <em>{value.company.stage}</em>
                  <b>|</b>
                  <em>100人以上</em>
                </span>
              </div>
            </div>)
        })
        return(
          <div className="Home">
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
                  <Link to="/">
                    <span><img src="/src/images/首页icon1.png"/>
                    <em>校招</em></span>
                  </Link>
                </div>
                <div>
                  <Link to = "/">
                    <span><img src="/src/images/首页icon2.png"/>
                    <em>实习</em></span>
                  </Link>
                </div>

                <div>
                  <Link to = "/">
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


             {posList}

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
                    <em>100人以上</em>
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
export default Home;
