import React from "react";
import "./TopicMain.scss";
import {Link} from "react-router";
import QueueAnim from "rc-queue-anim";

class TopicMain extends React.Component {

    constructor (props) {

        super(props);
        props.showBottom();

    }

    render () {

        return (
            <div className="container TopicMain">
                <header>
                    <div className="back" />
                    <div className="img" />
                    <p className="title" />
                    <div className="info">
                        <span />
                        <span />
                    </div>
                    <button />
                </header>
                <div className="content">
                    <div className="title">
                        <span />
                        <span />
                    </div>
                </div>
            </div>
        );

    }
}
export default TopicMain;