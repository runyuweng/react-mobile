import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import "./MainLayout.scss";
import Message from "./Message/Message.jsx";
import {IndexLink, Link} from "react-router";
import * as actionCreators from "../../actions/show.js";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Layout extends React.Component {

    constructor (props) {

        super(props);

    }

    render () {

        const {actions, show} = this.props;
        const enterList = ["/", "/Zhaoda/main", "/mine", "/zhiGuan", "/notify", "/cvcenter", "/growrecord", "/schoolRecruit", "/intern", "/enterprise", "/tologin", "/login","/register"],
            pathname = this.props.location.pathname;
        let animate = false;

        enterList.map((value) => {

            if (value === pathname) {

                animate = true;

            }

        });

        const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
         "showTop": (text) => {

             actions.showTop(text);

         },
         "showBottom": (text) => {

             actions.showBottom(text);

         },
         "showMessage": (text) => {

             actions.showMessage(text);

         },
         "key": this.props.location.pathname,
         show
     })
    );

        return (
            <div>
                {show.show_message ? <Message content={show.show_message} showMessage={(text) => {

                    actions.showMessage(text);

                }}
                                     /> : ""}
                {animate ? <ReactCSSTransitionGroup
                    transitionName="enter"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={1}
                           >
                    {childrenWithProps}
                </ReactCSSTransitionGroup> : childrenWithProps}

                {show.show_bottom
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
                      <Link to="/Zhaoda/main" className="bg zhaoda" activeClassName="zhaoda2">
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


const mapStateToProps = (state) => ({"show": state.show});

const mapDispatchToProps = (dispatch) => ({"actions": bindActionCreators(actionCreators, dispatch)});


const MainLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);


export default MainLayout;
