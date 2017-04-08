import React from 'react';
import "./TopicMain.scss";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class TopicMain extends React.Component {

  constructor(props){
    super(props);
    props.showBottom();
  }

  render() {
    return(
      <div className="container TopicMain">
        <header>
          <div classname="back"><</div>
          <div className="img"></div>
          <p className="title"></p>
          <div className="info">
            <span></span>
            <span></span>
          </div>
          <button></button>
        </header>
        <div className="content">
          <div className="title">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    )
  }
}
export default TopicMain;
