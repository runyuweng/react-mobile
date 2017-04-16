import React from "react";
import "./TopicMain.scss";
import {Link} from "react-router";
import PropTypes from 'prop-types';

class TopicMain extends React.Component {

    constructor (props) {

        super(props);

    }
    componentDidMount () {

        this.props.showBottom();

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
TopicMain.propTypes = {"showBottom": PropTypes.func.isRequired};

export default TopicMain;
