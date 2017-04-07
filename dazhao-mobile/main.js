import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore
}
from 'redux';
import {
  Router, Route, browserHistory, hashHistory, IndexRoute
}
from 'react-router';
import MainLayout from './src/components/MainLayout/MainLayout.jsx';
import Index from './src/components/Index/Index.jsx';
import ZhaoDaMine from './src/components/ZhaoDaMine/ZhaoDaMine.jsx';
import Zhaoda from './src/components/Zhaoda/Zhaoda.jsx';
import ZhaoDaIndex from './src/components/ZhaoDaIndex/ZhaoDaIndex.jsx';
import ZhaoDaDiscover from './src/components/ZhaoDaDiscover/ZhaoDaDiscover.jsx';
import ZhaoDaFeature from './src/components/ZhaoDaFeature/ZhaoDaFeature.jsx';
import ZhaoDaTopic from './src/components/ZhaoDaTopic/ZhaoDaTopic.jsx';
import ZhaoDaMessage from './src/components/ZhaoDaMessage/ZhaoDaMessage.jsx';
import ZhaoDaSearch from './src/components/ZhaoDaSearch/ZhaoDaSearch.jsx';
import ZhaoDaResponse from './src/components/ZhaoDaResponse/ZhaoDaResponse.jsx';
import ZhaoDaQuiz from './src/components/ZhaoDaQuiz/ZhaoDaQuiz.jsx';

import ZhaoDaConsult from './src/components/ZhaoDaConsult/ZhaoDaConsult.jsx';

import ZhaoDaQuesDetail from './src/components/ZhaoDaQuesDetail/ZhaoDaQuesDetail.jsx';

import ZhaoDaToQuestion from './src/components/ZhaoDaToQuestion/ZhaoDaToQuestion.jsx';

import ZhaoDaCvCenter from './src/components/ZhaoDaCvCenter/ZhaoDaCvCenter.jsx';

import ZhaoDaGrowRecord from './src/components/ZhaoDaGrowRecord/ZhaoDaGrowRecord.jsx';

import ZhaoDaNotify from './src/components/ZhaoDaNotify/ZhaoDaNotify.jsx';

import ZhaoDaCvMessage from './src/components/ZhaoDaCvMessage/ZhaoDaCvMessage.jsx';

import ZhaoDaEditMg from './src/components/ZhaoDaEditMg/ZhaoDaEditMg.jsx';

import ZhaoDaEduEx from './src/components/ZhaoDaEduEx/ZhaoDaEduEx.jsx';

import ZhaoDaPractice from './src/components/ZhaoDaPractice/ZhaoDaPractice.jsx';

import ZhaoDaToFeatures from './src/components/ZhaoDaToFeatures/ZhaoDaToFeatures.jsx';

import ZhaoDaToTopic from './src/components/ZhaoDaToTopic/ZhaoDaToTopic.jsx';

import ZhaoDaHome from './src/components/ZhaoDaHome/ZhaoDaHome.jsx';

import {
  Provider
}
from 'react-redux';
import reducer from './src/reducers/index.js';

const store = createStore(reducer);



const page1 = () => {
  return (
    <div key="1">
      <span>这里是课程页面</span>
    </div>
  )
}


const Routes = () => {
  return (
    <Provider store={store}>
      <Router history = {hashHistory}>
        <Route path="/" component={MainLayout}>
          <IndexRoute component={ZhaoDaHome}/>
          <Route path="home" component={ZhaoDaHome}></Route>
          <Route path="Zhaoda" component={Zhaoda}>
            <Route path="main" component={ZhaoDaIndex}></Route>
            <Route path="discover" component={ZhaoDaDiscover}></Route>
            <Route path="feature" component={ZhaoDaFeature}></Route>
          </Route>
          <Route path="topic" component={ZhaoDaTopic}></Route>
          <Route path="message" component={ZhaoDaMessage}></Route>
          <Route path="search" component={ZhaoDaSearch}></Route>
          <Route path="response" component={ZhaoDaResponse}></Route>
          // <Route path="quiz" component={ZhaoDaQuiz}></Route>
          <Route path="consult" component={ZhaoDaConsult}></Route>
          <Route path="detail" component={ZhaoDaQuesDetail}></Route>
          <Route path="toquestion" component={ZhaoDaToQuestion}></Route>
          <Route path="cvcenter" component={ZhaoDaCvCenter}></Route>
          <Route path="growrecord" component={ZhaoDaGrowRecord}></Route>
          <Route path="notify" component={ZhaoDaNotify}></Route>
          <Route path="cvmessage" component={ZhaoDaCvMessage}></Route>
          <Route path="edmessage" component={ZhaoDaEditMg}></Route>
          <Route path="edupexp" component={ZhaoDaEduEx}></Route>
          <Route path="practice" component={ZhaoDaPractice}></Route>
          <Route path="tofeature" component={ZhaoDaToFeatures}></Route>
          <Route path="totopic" component={ZhaoDaToTopic}></Route>
          <Route path="mine" component={ZhaoDaMine}></Route>
        </Route>
      </Router>
    </Provider>
  )
}

ReactDOM.render(<Routes />, document.getElementById('app'))
