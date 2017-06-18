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

                    // this.props.showMessage("");

                }, 1000);

            });

        }, 2000);

    }


    render () {

        const {content} = this.props;
        const {hide} = this.state;

        return (
            <div className="publicMessage">
                <div className={hide ? "hide" : ""}>
                    <img src="/src/images/icon/info.png" />
                    <p>{content}</p>
                </div>
            </div>
        );

    }
}
export default Message;
