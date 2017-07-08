import React from "react";
import "./LoadingBlock.scss";
import {Link} from "react-router";

class LoadingBlock extends React.Component {

    constructor (props) {

        super(props);

    }


    render () {

        return (
            <div>
                <div className="block img">
                    <div className="item" />
                    <div className="item" />
                    <div className="item" />
                    <div className="item" />
                    <div className="item" />
                </div>
                <div className="block img">
                    <div className="item" />
                    <div className="item" />
                    <div className="item" />
                    <div className="item" />
                    <div className="item" />
                </div>
                <div className="block img">
                    <div className="item" />
                    <div className="item" />
                    <div className="item" />
                    <div className="item" />
                    <div className="item" />
                </div>
                <div className="block img">
                    <div className="item" />
                    <div className="item" />
                    <div className="item" />
                    <div className="item" />
                    <div className="item" />
                </div>
                <div className="block img">
                    <div className="item" />
                    <div className="item" />
                    <div className="item" />
                    <div className="item" />
                    <div className="item" />
                </div>
            </div>
        );

    }
}
export default LoadingBlock;
