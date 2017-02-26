import React from 'react';
import "./MainLayout.scss";
import { Link } from 'react-router';

class MainLayout extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    return(
        <div>
          {this.props.children}

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
          </footer>
        </div>
    )
  }
}
export default MainLayout;
