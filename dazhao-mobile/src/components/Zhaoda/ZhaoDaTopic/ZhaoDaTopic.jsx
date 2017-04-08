import React from 'react';
import "./ZhaoDaTopic.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class ZhaoDaTopic extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.showBottom();
  }

  render() {
    return(
      <div className="container ZhaoDaTopic">
        <header>
          <TopBar title="话题广场" border="noboder"/>
          <div className="select">
            <ul>
              <li className="active">全部</li>
              <li>行业</li>
              <li>专栏</li>
              <li>求职</li>
              <li>技能</li>
              <li>名企</li>
            </ul>
          </div>
        </header>
        <div className="content">

          <div className="itemGroup">
            <div className="item">
              <span><img src="/src/images/topicImg.png"/></span>
              <p>#职业素养#</p>
              <p>24个问题</p>
            </div>
            <div className="item">
              <span><img src="/src/images/topicImg.png"/></span>
              <p>#汽车行业#</p>
              <p>24个问题</p>
            </div>
            <div className="item">
              <span><img src="/src/images/topicImg.png"/></span>
              <p>#PK985/211#</p>
              <p>24个问题</p>
            </div>

            <div className="item">
              <span><img src="/src/images/topicImg.png"/></span>
              <p>#职业素养#</p>
              <p>24个问题</p>
            </div>
            <div className="item">
              <span><img src="/src/images/topicImg.png"/></span>
              <p>#汽车行业#</p>
              <p>24个问题</p>
            </div>
            <div className="item">
              <span><img src="/src/images/topicImg.png"/></span>
              <p>#PK985/211#</p>
              <p>24个问题</p>
            </div>

            <div className="item">
              <span><img src="/src/images/topicImg.png"/></span>
              <p>#职业素养#</p>
              <p>24个问题</p>
            </div>
            <div className="item">
              <span><img src="/src/images/topicImg.png"/></span>
              <p>#汽车行业#</p>
              <p>24个问题</p>
            </div>
            <div className="item">
              <span><img src="/src/images/topicImg.png"/></span>
              <p>#PK985/211#</p>
              <p>24个问题</p>
            </div>

            <div className="item">
              <span><img src="/src/images/topicImg.png"/></span>
              <p>#职业素养#</p>
              <p>24个问题</p>
            </div>
            <div className="item">
              <span><img src="/src/images/topicImg.png"/></span>
              <p>#汽车行业#</p>
              <p>24个问题</p>
            </div>
            <div className="item">
              <span><img src="/src/images/topicImg.png"/></span>
              <p>#PK985/211#</p>
              <p>24个问题</p>
            </div>

            <div className="item">
              <span><img src="/src/images/topicImg.png"/></span>
              <p>#职业素养#</p>
              <p>24个问题</p>
            </div>
            <div className="item">
              <span><img src="/src/images/topicImg.png"/></span>
              <p>#汽车行业#</p>
              <p>24个问题</p>
            </div>
            <div className="item">
              <span><img src="/src/images/topicImg.png"/></span>
              <p>#PK985/211#</p>
              <p>24个问题</p>
            </div>


          </div>
        </div>
      </div>
    )
  }
}
export default ZhaoDaTopic;
