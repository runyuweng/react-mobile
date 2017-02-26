import React from 'react';
import "./Index.scss";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class Index extends React.Component {
  render() {
    return(
      <div className="index">
        <header>
          <img src="/src/images/banner1.jpg"/>
          <div className="search">
            <input type="text"/>
            <button>
              <img src="/src/images/searchico.png"/>
            </button>
          </div>
          <div className="rotation">
            <div>.</div>
            <div>.</div>
            <div>.</div>
          </div>
        </header>
        <div className="container">
          <section>
            <div className="title"><span>课程预告</span></div>
            <div className="content-large">
              <img src="/src/images/1487917069l108992947.png"/>
            </div>
          </section>
          <section>
            <div className="title"><span>课程推荐</span></div>
            <div className="content-two">
              <div className="content">
                <img src="/src/images/1487917069l108992947.png"/>
                <div className="info">基于大数据的人工...</div>
              </div>
              <div className="content">
                <img src="/src/images/1481979697l859459990.png"/>
                <div className="info">读MBTI，如何更好...</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
export default Index;
