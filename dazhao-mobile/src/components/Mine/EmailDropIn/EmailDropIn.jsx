import React from "react";
import "./EmailDropIn.scss";

class EmailDropIn extends React.Component {

    render () {

        return (
            <div>

                <div className="alldropin">
                    <div className="dropindetail">
                        <p>
                            <span>Hiven@dazhao100.com</span>
                            <span>被查看</span>
                        </p>
                        <p>使用简历：互联网产品岗</p>
                        <p>
                            <time>2016.12.30</time>
                            <span>
                                <img src="/src/images/Back_down.png" alt="down" />
                            </span>
                        </p>
                    </div>
                    <div className="dropindetail">
                        <p>
                            <span>campus@baidi.com</span>
                            <span>投递成功</span>
                        </p>
                        <p>使用简历：互联网产品岗</p>
                        <p>
                            <time>2016.12.30</time>
                            <span>
                                <img src="/src/images/Back_down.png" alt="down" />
                            </span>
                        </p>
                    </div>
                    <div className="dropindetail">
                        <p>
                            <span>campus@baidi.com</span>
                            <span>被查看</span>
                        </p>
                        <p>使用简历：互联网产品岗</p>
                        <div>
                            <time>2016.12.30</time>
                            <div className="dropinmain">
                                <div className="dropinhead active">
                                    <span>投递简历</span>
                                    <em />
                                    <span>被查看</span>
                                </div>
                                <div className="dropinwrap">
                                    <div className="dropinitem clearfix active">
                                        <div className="progress">
                                            <span />
                                            <em />
                                        </div>
                                        <div className="dropincon">
                                            <p>对方已查看您的简历</p>
                                            <time>
                                        2016.12.30
                                        <em />
                                        10:54:10
                                    </time>
                                        </div>
                                    </div>
                                    <div className="dropinitem clearfix">
                                        <div className="progress">
                                            <span />
                                            <em />
                                        </div>
                                        <div className="dropincon">
                                            <p>企业已接收到您投递的简历</p>
                                            <time>
                                        2016.12.30
                                        <em />
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

export default EmailDropIn;
