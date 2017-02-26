import React from 'react';
import "./Index.scss";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class Index extends React.Component {
  render() {
    return(
      <header className="index">
        <img src="/src/images/banner1.jpg"/>
        <div className="search">
          <input type="text"/>
          <button>
            <img src="/src/images/searchico.png"/>
          </button>
        </div>
        <div className="rotation">
          <ul>
            <li>.</li>
            <li>.</li>
            <li>.</li>
          </ul>
        </div>
      </header>
    )
  }
}
export default Index;
