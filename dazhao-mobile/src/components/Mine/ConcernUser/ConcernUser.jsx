import React from 'react';
import './ConcernUser.scss';

class ConcernUser extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="concernUser">
        <div className="item">
            <div className="left">
                <span className="circle" />
                <p>
                    <span>Michael</span><br />
                    <span>国际教练协会（IFC）认证教练国际教练协会（IFC）认证教练</span>
                </p>
            </div>
            <span className="right">+取消关注</span>
        </div>
        <div className="item">
            <div className="left">
                <span className="circle" />
                <p>
                    <span>Michael</span><br />
                    <span>国际教练协会（IFC）认证教练</span>
                </p>
            </div>
            <span className="right">+取消关注</span>
        </div>
      </div>
    );
  }
}

export default ConcernUser;