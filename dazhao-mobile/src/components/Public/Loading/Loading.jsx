import React from "react";
import "./Loading.scss";
import {Link} from "react-router";

class Loading extends React.Component {

    constructor (props) {

        super(props);
        this.state = {"height": 0};

    }
    componentDidMount () {

        const pageHeight = document.body.clientHeight,
            winHeight = window.screen.height;

        this.setState({"height": pageHeight > winHeight ? pageHeight : winHeight});

    }


    render () {

        const {height} = this.state;


        return (
            <div className="loading" style={{height}}>
                <div className="block">
                    <div className="img">
                        <div />
                    </div>
                    <div className="word">
                        <p />
                        <p />
                        <p />
                    </div>
                </div>
                <div className="block">
                    <div className="img">
                        <div />
                    </div>
                    <div className="word">
                        <p />
                        <p />
                        <p />
                    </div>
                </div>
                <div className="block">
                    <div className="img">
                        <div />
                    </div>
                    <div className="word">
                        <p />
                        <p />
                        <p />
                    </div>
                </div>
                <div className="block">
                    <div className="img">
                        <div />
                    </div>
                    <div className="word">
                        <p />
                        <p />
                        <p />
                    </div>
                </div>
                <div className="block">
                    <div className="img">
                        <div />
                    </div>
                    <div className="word">
                        <p />
                        <p />
                        <p />
                    </div>
                </div>
                <div className="block">
                    <div className="img">
                        <div />
                    </div>
                    <div className="word">
                        <p />
                        <p />
                        <p />
                    </div>
                </div>
                <div className="block">
                    <div className="img">
                        <div />
                    </div>
                    <div className="word">
                        <p />
                        <p />
                        <p />
                    </div>
                </div>
                <div className="block">
                    <div className="img">
                        <div />
                    </div>
                    <div className="word">
                        <p />
                        <p />
                        <p />
                    </div>
                </div>
            </div>
        );

    }
}
export default Loading;
