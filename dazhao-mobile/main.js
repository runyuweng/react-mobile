import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Router , Route , browserHistory , hashHistory , IndexRoute } from 'react-router';
import MainLayout from './src/components/MainLayout/MainLayout.jsx';
import Index from './src/components/Index/Index.jsx';
import Zhaoda from './src/components/Zhaoda/Zhaoda.jsx';
import ZhaoDaIndex from './src/components/ZhaoDaIndex/ZhaoDaIndex.jsx';
import ZhaoDaDiscover from './src/components/ZhaoDaDiscover/ZhaoDaDiscover.jsx';
import ZhaoDaFeature from './src/components/ZhaoDaFeature/ZhaoDaFeature.jsx';

import { Provider } from 'react-redux';
import reducer from './src/reducers/index.js';

const store = createStore(reducer);




const page1 = () => {
  return(
    <div key="1">
      <span>这里是课程页面</span>
    </div>
  )
}

const page3 = () => {
  return(
    <div key="2">
      <span>这里是直播</span>
    </div>
  )
}


const Routes = () => {
  return(
    <Provider store={store}>
      <Router history = {hashHistory}>
        <Route path="/" component={MainLayout}>
          <IndexRoute component={Index}/>
          <Route path="page1" component={page1}></Route>
          <Route path="Zhaoda" component={Zhaoda}>
            <Route path="main" component={ZhaoDaIndex}></Route>
            <Route path="discover" component={ZhaoDaDiscover}>
            </Route>
            <Route path="feature" component={ZhaoDaFeature}>
            </Route>
          </Route>
          <Route path="page3" component={page3}></Route>
        </Route>
      </Router>
    </Provider>
  )
}

ReactDOM.render(<Routes />, document.getElementById('app'))
