import React from 'react';
import ReactDOM from 'react-dom';
import { Router , Route , browserHistory , hashHistory , IndexRoute } from 'react-router';
import MainLayout from './src/components/MainLayout/MainLayout.jsx';
import Index from './src/components/Index/Index.jsx';
import Zhaoda from './src/components/Zhaoda/Zhaoda.jsx';
import QueueAnim from 'rc-queue-anim';

const page1 = () => {
  return(
    <div key="1">
      <span>这里是课程页面</span>
    </div>
  )
}

// const page2 = () => {
//   return(
//     <div key="2">
//       <span>这里是直播</span>
//     </div>
//   )
// }


const Routes = () => {
  return(
      <Router history = {hashHistory}>
        <Route path="/" component={MainLayout}>
          <IndexRoute component={Index}/>
          <Route path="page1" component={page1}></Route>
          <Route path="Zhaoda" component={Zhaoda}></Route>
          <Route path="page3" component={page3}></Route>
        </Route>
      </Router>
  )
}

ReactDOM.render(<Routes />, document.getElementById('app'))
