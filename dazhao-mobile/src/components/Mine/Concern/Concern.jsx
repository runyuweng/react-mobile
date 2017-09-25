import React from "react";
import "./Concern.scss";
import {Link} from "react-router";

class Concern extends React.Component {

    constructor (props) {

        super(props);

    }

    render () {

        return (
            <div id="concern">
                <div className="concernOptions">
                    <Link to="minezhaoda/concern/concernquestion" activeClassName="active">
                        <span>关注的问题</span>
                    </Link>
                    <Link to="minezhaoda/concern/concerntopic" activeClassName="active">
                        <span>关注的话题</span>
                    </Link>
                    <Link to="minezhaoda/concern/concernuser" activeClassName="active">
                        <span>关注的用户</span>
                    </Link>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );

    }
}

export default Concern;
