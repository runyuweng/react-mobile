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
//公共部分
import MainLayout from './src/components/MainLayout/MainLayout.jsx';

//首页部分
import ZhaoDaHome from './src/components/Home/ZhaoDaHome/ZhaoDaHome.jsx';
import ZhaoDaJobDetail from './src/components/Home/ZhaoDaJobDetail/ZhaoDaJobDetail.jsx';
import ZhaoDaCompany from './src/components/Home/ZhaoDaCompany/ZhaoDaCompany.jsx';
import ZhaoDaShRecruit from './src/components/Home/ZhaoDaShRecruit/ZhaoDaShRecruit.jsx';
import ZhaoDaEnterprise from './src/components/Home/ZhaoDaEnterprise/ZhaoDaEnterprise.jsx';

//招答部分
import Zhaoda from './src/components/Zhaoda/Zhaoda/Zhaoda.jsx';
import ZhaoDaDiscover from './src/components/Zhaoda/ZhaoDaDiscover/ZhaoDaDiscover.jsx';
import ZhaoDaFeature from './src/components/Zhaoda/ZhaoDaFeature/ZhaoDaFeature.jsx';
import ZhaoDaMessage from './src/components/Zhaoda/ZhaoDaMessage/ZhaoDaMessage.jsx';
import ZhaoDaToFeatures from './src/components/Zhaoda/ZhaoDaToFeatures/ZhaoDaToFeatures.jsx';
import ZhaoDaToTopic from './src/components/Zhaoda/ZhaoDaToTopic/ZhaoDaToTopic.jsx';
import ZhaoDaIndex from './src/components/Zhaoda/ZhaoDaIndex/ZhaoDaIndex.jsx';
import ZhaoDaTopic from './src/components/Zhaoda/ZhaoDaTopic/ZhaoDaTopic.jsx';
import ZhaoDaSearch from './src/components/Zhaoda/ZhaoDaSearch/ZhaoDaSearch.jsx';
import ZhaoDaToQuestion from './src/components/Zhaoda/ZhaoDaToQuestion/ZhaoDaToQuestion.jsx';
import ZhaoDaResponse from './src/components/Zhaoda/ZhaoDaResponse/ZhaoDaResponse.jsx';
import ZhaoDaConsult from './src/components/Zhaoda/ZhaoDaConsult/ZhaoDaConsult.jsx';
import ZhaoDaQuesDetail from './src/components/Zhaoda/ZhaoDaQuesDetail/ZhaoDaQuesDetail.jsx';

//个人中心部分
import ZhaoDaMine from './src/components/Mine/ZhaoDaMine/ZhaoDaMine.jsx';
import ZhaoDaGrowRecord from './src/components/Mine/ZhaoDaGrowRecord/ZhaoDaGrowRecord.jsx';
import ZhaoDaCvCenter from './src/components/Mine/ZhaoDaCvCenter/ZhaoDaCvCenter.jsx';
import ZhaoDaNotify from './src/components/Mine/ZhaoDaNotify/ZhaoDaNotify.jsx';
import ZhaoDaCvMessage from './src/components/Mine/ZhaoDaCvMessage/ZhaoDaCvMessage.jsx';
import ZhaoDaEditMg from './src/components/Mine/ZhaoDaEditMg/ZhaoDaEditMg.jsx';
import ZhaoDaEduEx from './src/components/Mine/ZhaoDaEduEx/ZhaoDaEduEx.jsx';
import ZhaoDaPractice from './src/components/Mine/ZhaoDaPractice/ZhaoDaPractice.jsx';

import ZhaoDaQuiz from './src/components/ZhaoDaQuiz/ZhaoDaQuiz.jsx';





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

const zhiGuan = () => {
  return(
    <h1 style={{'fontSize':'0.1rem'}}>职官页面</h1>
  )
}


const Routes = () => {
  return (
    <Provider store={store}>
      <Router history = {hashHistory}>
        <Route path="/" component={MainLayout}>
          <IndexRoute component={ZhaoDaHome}/>
          <Route path="zhiGuan" component={zhiGuan}></Route>
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
          <Route path="jobdetail" component={ZhaoDaJobDetail}></Route>
          <Route path="company" component={ZhaoDaCompany}></Route>
          <Route path="schoolRecruit" component={ZhaoDaShRecruit}></Route>
          <Route path="enterprise" component={ZhaoDaEnterprise}></Route>
          <Route path="mine" component={ZhaoDaMine}></Route>
        </Route>
      </Router>
    </Provider>
  )
}

ReactDOM.render(<Routes />, document.getElementById('app'))
