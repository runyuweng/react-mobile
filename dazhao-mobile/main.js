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
import Home from './src/components/Home/Home/Home.jsx';
import HomeJobDetail from './src/components/Home/JobDetail/JobDetail.jsx';
import HomeCompany from './src/components/Home/Company/Company.jsx';
import HomeShRecruit from './src/components/Home/ShRecruit/ShRecruit.jsx';
import HomeEnterprise from './src/components/Home/Enterprise/Enterprise.jsx';

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
import Mine from './src/components/Mine/Mine/Mine.jsx';
import MineGrowRecord from './src/components/Mine/GrowRecord/GrowRecord.jsx';
import MineCvCenter from './src/components/Mine/CvCenter/CvCenter.jsx';
import MineNotify from './src/components/Mine/Notify/Notify.jsx';
import MineCvMessage from './src/components/Mine/CvMessage/CvMessage.jsx';
import MineEditMg from './src/components/Mine/EditMg/EditMg.jsx';
import MineEduEx from './src/components/Mine/EduEx/EduEx.jsx';
import MinePractice from './src/components/Mine/Practice/Practice.jsx';

import ZhaoDaQuiz from './src/components/Other/ZhaoDaQuiz/ZhaoDaQuiz.jsx';





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
          <IndexRoute component={Home}/>
          <Route path="zhiGuan" component={zhiGuan}></Route>
          <Route path="home" component={Home}></Route>
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
          <Route path="tofeature" component={ZhaoDaToFeatures}></Route>
          <Route path="totopic" component={ZhaoDaToTopic}></Route>

          <Route path="jobdetail" component={HomeJobDetail}></Route>
          <Route path="company" component={HomeCompany}></Route>
          <Route path="schoolRecruit" component={HomeShRecruit}></Route>
          <Route path="enterprise" component={HomeEnterprise}></Route>

          <Route path="mine" component={Mine}></Route>
          <Route path="cvcenter" component={MineCvCenter}></Route>
          <Route path="growrecord" component={MineGrowRecord}></Route>
          <Route path="notify" component={MineNotify}></Route>
          <Route path="cvmessage" component={MineCvMessage}></Route>
          <Route path="edmessage" component={MineEditMg}></Route>
          <Route path="edupexp" component={MineEduEx}></Route>
          <Route path="practice" component={MinePractice}></Route>
        </Route>
      </Router>
    </Provider>
  )
}

ReactDOM.render(<Routes />, document.getElementById('app'))
