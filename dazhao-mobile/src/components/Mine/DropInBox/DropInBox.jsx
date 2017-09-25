import React from "react";
import "./DropInBox.scss";
import {Link} from "react-router";
import TopBar from "../../Public/TopBar/TopBar.jsx";

class DropInBox extends React.Component {
    constructor (props) {

        super(props);

    }

    render () {

        return (
            <div id="DropInBox">
                <header>
                    <TopBar title="投递箱" border="noboder" />
                </header>
                <nav className="boxNav">
                    <ul>
                        <Link activeClassName="active" to="/dropinbox/platformdropin">
                            <li>平台投递</li>
                        </Link>
                        <Link activeClassName="active" to="/dropinbox/emaildropin">
                            <li>邮箱投递</li>
                        </Link>
                    </ul>
                </nav>
                <div>
                    {this.props.children}
                </div>
            </div>
        );

    }
}

export default DropInBox;
