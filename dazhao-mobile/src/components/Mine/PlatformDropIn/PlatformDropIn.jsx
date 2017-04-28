import React from 'react';
import './PlatformDropIn.scss';

class PlatformDropIn extends React.Component {

  render() {
    return (
      <div>
            <div className="status">
                <span className="active">全部</span>
                <span>投递成功</span>
                <span>被查看</span>
                <span>通过筛选</span>
                <span>面试邀请</span>
                <span>面试结果</span>
            </div>
            <div className="alldropin">
                <div className="dropindetail">
                    <p>
                        <span>企业服务部实习生</span>
                        <span>不合适</span>
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
                        <span>企业服务部实习生</span>
                        <span>不合适</span>
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
                        <span>企业服务部实习生</span>
                        <span>不合适</span>
                    </p>
                    <p>上海脚步网络科技有限公司</p>
                    <div>
                        <time>2016.12.30</time>
                        <div className="dropinmain">
                            <div className="dropinhead">
                                <span className="active">投递简历</span>
                                <em className="active"></em>
                                <span>被查看</span>
                                <em></em>
                                <span>通过筛选</span>
                                <em></em>
                                <span>面试邀请</span>
                                <em></em>
                                <span>面试结果</span>
                            </div>
                            <div className="dropinwrap">
                                <div className="dropinitem clearfix active">
                                    <div className="progress">
                                        <span></span>
                                        <em></em>
                                    </div>
                                    <div className="dropincon">
                                        <p>通过查看，您的初选未通过</p>
                                        <time>
                                            2016.12.30
                                            <em></em>
                                            10:54:10
                                        </time>
                                    </div>
                                </div>
                                <div className="dropinitem clearfix">
                                    <div className="progress">
                                        <span></span>
                                        <em></em>
                                    </div>
                                    <div className="dropincon">
                                        <p>企业已接收到您投递的简历</p>
                                        <time>
                                            2016.12.30
                                            <em></em>
                                            10:54:10
                                        </time>
                                    </div>
                                </div>
                            </div>
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

export default PlatformDropIn;
