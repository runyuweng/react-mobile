import React from "react";
import "./Message.scss";
import {Link} from "react-router";

class Message extends React.Component {

    constructor (props) {

        super(props);

        this.state = {"hide": false};

    }

    componentDidMount () {

        setTimeout(() => {

            this.setState({"hide": true}, () => {

                setTimeout(() => {

                    this.props.changeMessageContent("");

                }, 1000);

            });

        }, 2000);

    }


    render () {

        return (
            <div className="publicMessage">
                <div className={this.state.hide ? "hide" : ""}>
                    <img src="/src/images/icon/info.png" />
                    <p>{this.props.content}</p>
                </div>
            </div>
        );

    }
}
export default Message;
