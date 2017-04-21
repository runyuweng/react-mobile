import React from "react";
import "./Zhaoda.scss";
import {Link} from "react-router";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Zhaoda extends React.Component {
    constructor (props) {

        super(props);

    }
    componentDidMount () {

        this.props.showBottom(true);

    }
    render () {

        return (
            <div className="container zhaoda">
                <header>
                    <div className="search">
                        <div className="input">
                            <input type="text" placeholder="搜索话题、问题、行家..." />
                            <Link to="/search"><span><img src="/src/images/搜素.png" /></span></Link>
                        </div>
                        <Link to="/consult"><span className="query">提问</span></Link>
                    </div>
                </header>
                <nav>
                    <ul>
                        <Link to="/Zhaoda/main" activeClassName="active">
                            <li>
                首页
              </li>
                        </Link>
                        <Link to="/Zhaoda/discover" activeClassName="active">
                            <li>
                发现
              </li>
                        </Link>
                        <Link to="/Zhaoda/feature" activeClassName="active">
                            <li>
                专栏
              </li>
                        </Link>
                        <Link to="/message"><li>消息</li></Link>
                    </ul>
                </nav>
                <ReactCSSTransitionGroup
                    transitionName="enter"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                >
                    {this.props.children}
                </ReactCSSTransitionGroup>
            </div>
        );

    }
}

export default Zhaoda;
