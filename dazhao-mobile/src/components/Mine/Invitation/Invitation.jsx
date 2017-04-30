import React from 'react';
import './Invitation.scss';
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";

class Invitation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="invitation">
        <header>
            <TopBar title="邀请函" border="boder" />
        </header>
        <div className="alldropin">
            <div className="dropindetail">
                <p>
                    <span>UI设计师</span>
                </p>
                <p>上海脚步网络科技有限公司</p>
                <p>
                    <time>2016.12.30<em></em>17:30</time>
                    <span>
                        <img src="/src/images/Back_down.png" alt="down" />
                    </span>
                </p>
            </div>
            <div className="dropindetail">
                <p>
                    <span>产品经理</span>
                </p>
                <p>上海脚步网络科技有限公司</p>
                <p>
                    <time>2016.12.30</time>
                    <span>
                        <img src="/src/images/Back_down.png" alt="down" />
                    </span>
                </p>
            </div>
            <div className="dropindetail">
                <p>
                    <span>产品部管培生</span>
                </p>
                <p>上海脚步网络科技有限公司</p>
                <div>
                    <time>2016.12.30</time>
                    <div className="dropinmain">
                        <p>你好Simon，欢迎你投递产品部管培生岗位</p>
                    </div>
                    <span>
                        <img src="/src/images/Back_top.png" alt="down" />
                    </span>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Invitation;