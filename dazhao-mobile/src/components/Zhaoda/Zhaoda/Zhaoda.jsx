import React from "react";
import "./Zhaoda.scss";
import {Link} from "react-router";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Zhaoda extends React.Component {
    constructor (props) {

        super(props);
        this.state = {"keyword": ""};

    }

    getChildContext () {

        return {"myProps": this.props};

    }


    componentDidMount () {

        // This.props.changeMessageContent("该功能完善中...");

        this.props.changeBottomState(true);

    }

    render () {

        console.log();

        return (
            <div className="container zhaoda">
                <header>
                    <div className="search">
                        <div className="input">
                            <input onChange={(e) => {

                                this.setState({"keyword": e.target.value});

                            }} type="text" placeholder="搜索话题、问题、行家..."
                            />
                            <Link to={`/search/${this.state.keyword}`}><span><img src="/src/images/搜素.png" /></span></Link>
                        </div>
                        <Link to="/consult"><span className="query">提问</span></Link>
                    </div>
                </header>
                <nav>
                    <ul>
                        <Link to="/Zhaoda" activeClassName={this.props.router.location.pathname === "/Zhaoda" ? "active" : ""}>
                            <li>
                                首页
                            </li>
                        </Link>
                        <Link to="/Zhaoda/discover" activeClassName="active">
                            <li>
                                发现
                            </li>
                        </Link>
                        <Link to="/Zhaoda/feature" style={{"display": "none"}} activeClassName="active">
                            <li>
                                专栏
                            </li>
                        </Link>
                        <Link to="/minezhaoda/concern/concernquestion"><li>我的</li></Link>
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

Zhaoda.childContextTypes = {"myProps": React.PropTypes.object};

export default Zhaoda;
