import React from 'react';
import "./ZhaoDaHomeSearch.scss";
import { Link } from 'react-router';
import QueueAnim from 'rc-queue-anim';

class ZhaoDaHomeSearch extends React.Component {

  render() {

    return(
      <div className="ZhaoDaHomeSearch">
        <header>
          <div className="search">
              <span >取消</span>
              <input type="text"
              placeholder="搜索期望中的公司、岗位、地点"
              />
              <span>搜索</span>
          </div>
        </header>
      </div>
    )
  }
}
export default ZhaoDaHomeSearch;
