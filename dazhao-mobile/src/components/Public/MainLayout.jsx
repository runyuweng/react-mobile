import React from "react";
import "./MainLayout.scss";
import Message from "./Message/Message.jsx";
import {IndexLink, Link} from "react-router";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {observer} from "mobx-react";
import AppState from "../../store/AppState";
const appState = new AppState();
const PropTypes = require("prop-types");

@observer
class MainLayout extends React.Component {

    constructor (props) {

        super(props);

    }

    componentDidMount () {

        scrollTo(0, 0);

    }

    componentWillReceiveProps () {

        scrollTo(0, 0);

    }

    getChildContext () {

        return {
            "changeMessageContent": appState.changeMessageContent,
            "changeBottomState": appState.changeBottomState
        };

    }

    render () {

        const enterList = ["/", "/Zhaoda/main", "/mine", "/zhiGuan", "/notify", "/cvcenter", "/growrecord", "/schoolRecruit", "/intern", "/enterprise", "/tologin", "/login", "/register", "/response", "/toquestion", "/searchPage"],
            pathname = this.props.location.pathname;
        let animate = false;

        enterList.map((value) => {

            if (value === pathname) {

                animate = true;

            }

        });

        const childrenWithProps = React.Children.map(this.props.children,
         (child) => React.cloneElement(child, {
             "key": this.props.location.pathname,
             "changeBottomState": appState.changeBottomState,
             "changeMessageContent": appState.changeMessageContent
         })
        );

        return (
            <div>
                { appState.messageContent ? <Message content={appState.messageContent} changeMessageContent={(text) => {

                    appState.changeMessageContent(text);

                }}
                                            /> : ""}
                {animate ? <ReactCSSTransitionGroup
                    transitionName="enter"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={1}
                           >
                    {childrenWithProps}
                </ReactCSSTransitionGroup> : childrenWithProps}

                {appState.bottomState
              ? <footer>
                  <div>
                      <IndexLink to="/" className="bg home" activeClassName="home2">
                          <div>
                              <p>首页</p>
                          </div>
                      </IndexLink>
                  </div>
                  <div>
                      <a href="http://www.dazhao100.com/wx/" className="bg zhiguan" activeClassName="zhiguan2">
                          <div>
                              <p>职观</p>
                          </div>
                      </a>
                  </div>
                  <div>
                      <Link to="/Zhaoda" className="bg zhaoda" activeClassName="zhaoda2">
                          <div>
                              <p>招答</p>
                          </div>
                      </Link>
                  </div>
                  <div>
                      <Link to="/mine" className="bg mine" activeClassName="mine2">
                          <div>
                              <p>我的</p>
                          </div>
                      </Link>
                  </div>
              </footer> : ""}
            </div>
        );

    }
}

MainLayout.childContextTypes = {
    "changeMessageContent": PropTypes.func,
    "changeBottomState": PropTypes.func
};

export default MainLayout;
