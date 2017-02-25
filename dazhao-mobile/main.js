import React from 'react';
import ReactDOM from 'react-dom';
import { Router , Route , browserHistory , hashHistory} from 'react-router';
import MainLayout from './src/MainLayout/MainLayout.jsx';
import Index from './src/components/Index/Index.jsx';
import QueueAnim from 'rc-queue-anim';

const page1 = () => {
  return(
    <QueueAnim className="demo-content"
      duration="2000">
      <div key="1">
        <span>这里是课程页面</span>
      </div>
    </QueueAnim>
  )
}

const page2 = () => {
  return(
    <QueueAnim className="demo-content"
      duration="2000">
      <div key="2">
        <span>这里是直播</span>
      </div>
    </QueueAnim>
  )
}

const page3 = () => {
  return(
    <QueueAnim className="demo-content"
      duration="2000">
      <div key="3">
        <span>这里是个人中心</span>
      </div>
    </QueueAnim>
  )
}

const Routes = () => {
  return(
      <Router history = {hashHistory}>
        <Route path="/" component={MainLayout}>
          <Route path="/index" component={Index}></Route>
          <Route path="/page1" component={page1}></Route>
          <Route path="/page2" component={page2}></Route>
          <Route path="/page3" component={page3}></Route>
        </Route>
      </Router>
  )
}

ReactDOM.render(<Routes />, document.getElementById('app'))
