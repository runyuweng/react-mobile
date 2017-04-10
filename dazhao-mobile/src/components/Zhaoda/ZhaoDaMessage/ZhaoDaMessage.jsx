import React from "react";
import "./ZhaoDaMessage.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import {Link} from "react-router";
import QueueAnim from "rc-queue-anim";

class ZhaoDaMessage extends React.Component {
    constructor (props) {

        super(props);

    }

    componentDidMount () {

        this.props.showBottom();

    }

    render () {

        return (
            <div className="ZhaoDaMessage">
                <TopBar title="消息" border="boder" />
                <nav>
                    <ul>
                        <li className="active">通知</li>
                        <li>私信</li>
                        <li>系统</li>
                    </ul>
                </nav>
                <div id="MessageMain">
                    <div className="message">
                        <span className="who">Michael回答了你的问题：</span>
                        <p>研究生和本科学历在求职过程中真的会有很大差别吗？</p>
                    </div>

                    <div className="message">
                        <span className="who">Michael、李刚、Simon3人回答了你的问题：</span>
                        <p>研究生和本科学历在求职过程中真的会有很大差别吗？</p>
                    </div>

                    <div className="message">
                        <span className="who">Michael、李刚、Simon等5人回答了你关注的问题：</span>
                        <p>研究生和本科学历在求职过程中真的会有很大差别吗？</p>
                    </div>

                    <div className="message">
                        <span className="who">Michael回答了你的问题：</span>
                        <p>研究生和本科学历在求职过程中真的会有很大差别吗？</p>
                    </div>

                    <div className="message">
                        <span className="who">Michael回答了你的问题：</span>
                        <p>研究生和本科学历在求职过程中真的会有很大差别吗？</p>
                    </div>
                </div>
            </div>
        );

    }
}
export default ZhaoDaMessage;
