import React from "react";
import "./Zhaoda.scss";
import {Link} from "react-router";

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
                            <Link to="/search"><span><img src="/src/images/search.png" /></span></Link>
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
                {this.props.children}

            </div>
        );

    }
}

export default Zhaoda;
