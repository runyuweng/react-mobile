import React from "react";
import "./MineZhaoDa.scss";
import {Link} from "react-router";
import TopBar from "../../Public/TopBar/TopBar.jsx";

class MineZhaoDa extends React.Component {

    constructor (props) {

        super(props);

    }

    componentDidMount () {

        this.props.changeBottomState(false);

    }

    render () {

        return (
            <div id="mineZhaoDa">
                <header>
                    <TopBar title="我的招答" border="noboder" />
                </header>
                <nav className="minezdnav">
                    <ul>
                        <Link to="minezhaoda/concern" activeClassName="active">
                            <li>关注</li>
                        </Link>
                        <Link to="minezhaoda/quiz" activeClassName="active">
                            <li>提问</li>
                        </Link>
                        <Link to="minezhaoda/answer" activeClassName="active">
                            <li>回答</li>
                        </Link>
                        <Link to="/message">
                            <li>消息</li>
                        </Link>
                    </ul>
                </nav>
                <div>{this.props.children}</div>
            </div>
        );

    }
}

export default MineZhaoDa;
