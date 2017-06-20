import React from "react";
// Import {connect} from "react-redux";
// Import {bindActionCreators} from "redux";
import "./MainLayout.scss";
import Message from "./Message/Message.jsx";
import {IndexLink, Link} from "react-router";
// Import * as actionCreators from "../../actions/show.js";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Store from "../../store/store";
const store = new Store();

class MainLayout extends React.Component {

    constructor (props) {

        super(props);

    }

    render () {

        // Const {actions, show} = this.props;

        const enterList = ["/", "/Zhaoda/main", "/mine", "/zhiGuan", "/notify", "/cvcenter", "/growrecord", "/schoolRecruit", "/intern", "/enterprise", "/tologin", "/login", "/register", "/response", "/toquestion"],
            pathname = this.props.location.pathname;
        let animate = false;

        enterList.map((value) => {

            if (value === pathname) {

                animate = true;

            }

        });

        const childrenWithProps = React.Children.map(this.props.children,
         (child) => React.cloneElement(child, {
             "showBottom": store.showBottom,
             "key": this.props.location.pathname
         })
        );

        return (
            <div>
                {/* Show.show_message ? <Message content={show.show_message} showMessage={(text) => {

                    actions.showMessage(text);

                }}
                                     /> : ""*/}
                {animate ? <ReactCSSTransitionGroup
                    transitionName="enter"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={1}
                           >
                    {childrenWithProps}
                </ReactCSSTransitionGroup> : childrenWithProps}

                {true
              ? <footer>
                  <div>
                      <IndexLink to="/" className="bg home" activeClassName="home2">
                          <div>
                              <p>首页</p>
                          </div>
                      </IndexLink>
                  </div>
                  <div>
                      <Link to="/zhiGuan" className="bg zhiguan" activeClassName="zhiguan2">
                          <div>
                              <p>职观</p>
                          </div>
                      </Link>
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


// Const mapStateToProps = (state) => ({"show": state.show});
//
// Const mapDispatchToProps = (dispatch) => ({"actions": bindActionCreators(actionCreators, dispatch)});
//
//
// Const MainLayout = connect(
//   MapStateToProps,
//   MapDispatchToProps
// )(Layout);


export default MainLayout;
