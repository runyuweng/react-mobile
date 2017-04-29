import React from "react";
import ZhaoDaSearchTop from "../ZhaoDaSearchTop/ZhaoDaSearchTop.jsx";
import "./ZhaoDaTalk.scss";
import {Link} from "react-router";

class ZhaoDaTalk extends React.Component {

    render () {

        return (
            <div className="ZhaoDaTalk ZhaoDaUser">
                <ZhaoDaSearchTop />
                <div className="usermain">
                    <div className="item">
                        <div className="left">
                            <span className="circle" />
                            <p>
                                <span>研究生</span><br />
                                <span>
                                    <em>问题：<b>16</b></em>
                                    <em>关注：<b>101</b></em>
                                </span>
                            </p>
                        </div>
                        <span className="right">+关注</span>
                    </div>

                    <div className="item">
                        <div className="left">
                            <span className="circle" />
                            <p>
                                <span>研究生</span><br />
                                <span>
                                    <em>问题：<b>16</b></em>
                                    <em>关注：<b>101</b></em>
                                </span>
                            </p>
                        </div>
                        <span className="right">+关注</span>
                    </div>

                    <div className="item">
                        <div className="left">
                            <span className="circle" />
                            <p>
                                <span>研究生</span><br />
                                <span>
                                    <em>问题：<b>16</b></em>
                                    <em>关注：<b>101</b></em>
                                </span>
                            </p>
                        </div>
                        <span className="right">+关注</span>
                    </div>

                    <div className="item">
                        <div className="left">
                            <span className="circle" />
                            <p>
                                <span>研究生</span><br />
                                <span>
                                    <em>问题：<b>16</b></em>
                                    <em>关注：<b>101</b></em>
                                </span>
                            </p>
                        </div>
                        <span className="right">+关注</span>
                    </div>
                </div>
            </div>
        );

    }
}
export default ZhaoDaTalk;
