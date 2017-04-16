import React from 'react';
import "./ZhaoDaUser.scss";
import ZhaoDaSearchTop from "../ZhaoDaSearchTop/ZhaoDaSearchTop.jsx";
import { Link } from 'react-router';

class ZhaoDaUser extends React.Component {
  render() {
    return(
      <div className="ZhaoDaUser ZhaoDaHomeSearch">
        <ZhaoDaSearchTop />
        <div className="usermain">
          <div className="item">
            <div className="left">
            <span className="circle"></span>
            <p>
                <span>Michael</span><br/>
                <span>国际教练协会（ICF）认证教练</span>
            </p>
            </div>
            <span className="right">+关注</span>
          </div>
        </div>

      </div>
    )
  }
}
export default ZhaoDaUser;
