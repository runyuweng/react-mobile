import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import "./MainLayout.scss";
import { Link } from 'react-router';

import * as actionCreators from '../../actions/show.js';

class Layout extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const { actions , show } = this.props;

    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       showTop:(text)=>{actions.showTop(text)},
       showBottom:(text)=>{actions.showBottom(text)},
       show: show
     })
    );

    return(
        <div>
          {childrenWithProps}
          {show.show_top?
            <footer>
              <div>
                <Link to="/" activeStyle={{color:'#000'}}>
                  <div>
                    <img src="/src/images/home.png"/>
                    <p>首页</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/page1" activeStyle={{color:'#000'}}>
                  <div>
                    <img src="/src/images/zhiguan.png"/>
                    <p>职观</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/Zhaoda/main" activeStyle={{color:'#000'}}>
                  <div>
                    <img src="/src/images/zhaoda.png"/>
                    <p>招答</p>
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/page3" activeStyle={{color:'#000'}}>
                  <div>
                    <img src="/src/images/userpage.png"/>
                    <p>我的</p>
                  </div>
                </Link>
              </div>
            </footer>:''}
        </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { show : state.show}
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}


const MainLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)

export default MainLayout;
