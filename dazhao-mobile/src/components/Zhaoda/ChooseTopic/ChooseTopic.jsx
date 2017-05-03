import React from 'react';
import './ChooseTopic.scss';

class ChooseTopic extends React.Component {

  constructor(props) {
    super(props);
    this.state={
        topics:[
            {
                topicName:'职业素养',
                checked: false
            },
            {
                topicName:'职业规划',
                checked: false
            },
            {
                topicName:'求职技巧',
                checked: false
            },
            {
                topicName:'求职面试',
                checked: false
            }
        ],
        choosedtopic:[],
        isSubmit:false
    };
    this.handleClick = this.handleClick.bind(this);
    this.cancleChecked = this.cancleChecked.bind(this);
    this.submitClick = this.submitClick.bind(this);
  }

  cancleChecked(num,value){
    const topics = JSON.parse(JSON.stringify(this.state)).topics;
    const choosedtopic = JSON.parse(JSON.stringify(this.state)).choosedtopic;
    choosedtopic.splice(num,1);

    topics.map((elem,index)=>{
        elem.topicName===value ? elem.checked=!elem.checked : ""
    })

    this.setState({
        topics:topics,
        choosedtopic : choosedtopic
    })
  }

  submitClick(){
    this.setState({
        isSubmit : !this.state.isSubmit
    })
  }

  handleClick(args,value){
    const choosedtopic = JSON.parse(JSON.stringify(this.state)).choosedtopic;
    const topics = JSON.parse(JSON.stringify(this.state)).topics;

    choosedtopic.indexOf(value)===-1 ? choosedtopic.push(value) : choosedtopic.splice(choosedtopic.indexOf(value),1);

    topics.map((elem,index)=>{
        index===args ? elem.checked=!elem.checked : ""
    })
    this.setState({
        topics:topics,
        choosedtopic : choosedtopic
    })

  }

  render() {
    const { topics, choosedtopic, isSubmit } = this.state;
    const choosedtopicList = choosedtopic.map((elem,index)=>{
        return(
            <div className="chooseditem" key={elem}>{elem}<span className="cancle" onClick={this.cancleChecked.bind(this,index,elem)}><img src="/src/images/icon/cancle.png" alt="取消" /></span></div>
        )
    })
    const topicsList = topics.map((elem,index)=>{
        return(
            <div className="topicitem" key={index}>
                {elem.checked ? <span onClick={this.handleClick.bind(this,index,elem.topicName)}><img src="/src/images/icon/agree.png" alt="checked" /></span>:<span onClick={this.handleClick.bind(this,index,elem.topicName)}></span>}
                <span>{elem.topicName}</span>
            </div>
        )
    })

    return (
      <div id="chooseTopic">
        <header>
            <div className="search">
                <span onClick={() => {

                    history.go(-1);

                }}
                >上一步</span>
                <span>选择话题</span>
                <span onClick={this.submitClick}>提交</span>
            </div>
        </header>
        <div className="choosemain">
            <div className="choosedtopic">
                { choosedtopicList }
            {/*
                <span>职业素养<em>X</em></span>
                <span>职业素养<em>X</em></span>
                <span>职业素养<em>X</em></span>
            */}
            </div>
            <div className="topicfilter">
                <span><img src="/src/images/搜素.png" alt="搜索" /></span>
                <input type="text" />
            </div>
            <div className="topicfound">
                { topicsList }
            {/*
                <div className="topicitem">
                    <span><img src="/src/images/icon/agree.png" alt="checked" /></span>
                    <span>职业素养</span>
                </div>
                <div className="topicitem">
                    <span></span>
                    <span>职业规划</span>
                </div>
                <div className="topicitem">
                    <span></span>
                    <span>求职技巧</span>
                </div>
                <div className="topicitem">
                    <span></span>
                    <span>求职面试</span>
                </div>
            */}
            </div>
        </div>

        {isSubmit ?
        <div className="submitpage">
            <div className="submitcontent">
                <p><span><img onClick={this.submitClick} src="/src/images/邀请-关闭@2x.png" alt="关闭" /></span></p>
                <h3>提交成功，你可以邀请专家替您解答</h3>
                <div className="specialists">
                    <div className="specialist">
                        <span className="img">
                            <span><img src="/src/images/选择@2x.png" alt="选择" /></span>
                        </span>
                        <span className="specialistname">Michael</span>
                        <span className="specialiststage">骨灰级猎头</span>
                    </div>
                    <div className="specialist">
                        <span className="img">
                            <span><img src="/src/images/选择@2x.png" alt="选择" /></span>
                        </span>
                        <span className="specialistname">Michael</span>
                        <span className="specialiststage">骨灰级猎头</span>
                    </div>
                    <div className="specialist">
                        <span className="img">
                            <span><img src="/src/images/选择@2x.png" alt="选择" /></span>
                        </span>
                        <span className="specialistname">Michael</span>
                        <span className="specialiststage">骨灰级猎头</span>
                    </div>
                    <div className="specialist">
                        <span className="img">
                            <span><img src="/src/images/选择@2x.png" alt="选择" /></span>
                        </span>
                        <span className="specialistname">Michael</span>
                        <span className="specialiststage">骨灰级猎头</span>
                    </div>
                    <div className="specialist">
                        <span className="img">
                            <span><img src="/src/images/选择@2x.png" alt="选择" /></span>
                        </span>
                        <span className="specialistname">Michael</span>
                        <span className="specialiststage">骨灰级猎头</span>
                    </div>
                    <div className="specialist">
                        <span className="img">
                            <span><img src="/src/images/选择@2x.png" alt="选择" /></span>
                        </span>
                        <span className="specialistname">Michael</span>
                        <span className="specialiststage">骨灰级猎头</span>
                    </div>
                </div>
                <div className="bottombutton">
                    <span>查看更多</span>
                    <span>邀请回答</span>
                </div>
            </div>
        </div>:
        ""}

      </div>
    );
  }
}

export default ChooseTopic;