import React from 'react';
import "./Index.scss";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class Index extends React.Component {
  render() {
    return(
      <QueueAnim className="demo-content"
        duration="2000">
        <header className="index" key="index">
          <div className="search">
            <input type="text" placeholder="课程名称"/>
            <button>
              <img src="/src/images/searchico.png"/>
            </button>
          </div>
          <div className="rotation">

          </div>
        </header>
      </QueueAnim>
    )
  }
}
export default Index;
