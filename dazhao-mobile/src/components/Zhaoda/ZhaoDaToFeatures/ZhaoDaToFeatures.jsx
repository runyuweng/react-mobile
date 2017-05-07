import React from "react";
import "./ZhaoDaToFeatures.scss";
import "../../MainLayout/AnswerMain/AnswerMain.scss";
import {Link} from "react-router";

class ZhaoDaToFeatures extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "guestIntroStretch": false,
            "shortIntroStretch" : true,
            data:{
                video:"http://html5videoformatconverter.com/data/images/happyfit2.ogv",
                playtimes:204,//播放次数
                concern:true,//是否关注
                title:"#麦力答#第一期----考研那些事儿",
                intro:" 读研？工作？跨专业？选热门？如何让选择变成现在最适合的？如何让选择变成未来组以正确的？请听--麦力答",
                guest:{//嘉宾信息
                    img:"/src/images/vip.png",
                    guestImg: "/src/images/pople.png",
                    name:"Michiael",
                    vip:true,//是否是VIP
                    intro:"国际教练协会（ICF）认证教练、WIT Advisory Group总裁国际教练协会（ICF）认证教练、WIT Advisory Group总裁国际教练协会（ICF）认证教练"
                }
            },
            album:[//专辑列表
                {
                  id: 1,
                  img:"/src/images/zhuanlan.png",
                  title:"#麦力答#第二期----三年国考  成就万里挑一",
                  playtimes:204
                },
                {
                  id: 2,
                  img:"/src/images/zhuanlan.png",
                  title:"#麦力答#第二期----三年国考  成就万里挑一",
                  playtimes:204
                },
                {
                  id: 3,
                  img:"/src/images/zhuanlan.png",
                  title:"#麦力答#第二期----三年国考  成就万里挑一",
                  playtimes:204
                }
            ],
            answers:[
                {
                  id: 1,
                  author:'Michael',
                  question:'请问研究生和本科生在求职过程中真的会有很大影响吗？',
                  replayto:'马军',//回复对象
                  answer:'这个问题，还得要看企业的需求，比如说企业的一些技术岗位，这个问题，还得要看企业的需求，比如说企业的一些技术岗位，这些企业在招聘介绍里就会写清楚研究生学历还是本科生学历；对于一些管',
                  agreenum:9,
                  remark:10,
                  collect:false,//是否收藏
                  time:'2016年11月30日'//提问时间
                },
                {
                  id: 2,
                  author:'Michael',
                  question:'请问研究生和本科生在求职过程中真的会有很大影响吗？',
                  replayto:'马军',//回复对象
                  answer:'这个问题，还得要看企业的需求，比如说企业的一些技术岗位，这个问题，还得要看企业的需求，比如说企业的一些技术岗位，这些企业在招聘介绍里就会写清楚研究生学历还是本科生学历；对于一些管',
                  agreenum:9,
                  remark:10,
                  collect:false,//是否收藏
                  time:'2016年11月30日'//提问时间
                },
                {
                  id: 3,
                  author:'Michael',
                  question:'请问研究生和本科生在求职过程中真的会有很大影响吗？',
                  replayto:'马军',//回复对象
                  answer:'这个问题，还得要看企业的需求，比如说企业的一些技术岗位，这个问题，还得要看企业的需求，比如说企业的一些技术岗位，这些企业在招聘介绍里就会写清楚研究生学历还是本科生学历；对于一些管',
                  agreenum:9,
                  remark:10,
                  collect:false,//是否收藏
                  time:'2016年11月30日'//提问时间
                }
            ]
        }

    }

    componentDidMount () {

        this.props.showBottom();


        this.setState({
          "commentWidth":this.refs.comment.clientWidth
        },
        ()=>{

          const answers=JSON.parse(JSON.stringify(this.state)).answers;

          answers.map((value,i)=>{
            const isShowall = value.answer.length<(this.state.commentWidth/13*2+(this.state.commentWidth-101)/13)
            Object.assign(value,{showall:isShowall});
          })

          this.setState({
            answers:answers
          })

        });


    }

    showallClick(index){
       let answers = JSON.parse(JSON.stringify(this.state)).answers;

       answers[index].showall=true;

       this.setState({
        answers:answers
       })

    }

    render () {

        const {data, album, answers, commentWidth} = this.state;

        const albumList = album.map((value,i)=><div className="albunItems" key={i}>
            <span><img src={value.img} /></span>
            <div className="itemsR">
                <h3>{value.title}</h3>
                <span><em>{value.playtimes}</em>次播放</span>
            </div>
        </div>)

        const answerList = answers.map((value,i)=>{
          const commentlength = value.showall ? -1 : (commentWidth/13*2+(commentWidth-101)/13);
          return(
            <div className="answerItems" key={i}>
              <h3>{value.question}</h3>
              <div className="vector">
                  <span><img src="/src/images/user.png" /></span>
                  <em>{value.replayto}</em>
                  <time>{value.time}</time>
              </div>

              <article>
                  <div className="publisher">
                      <span><img src="/src/images/user.png" /></span>
                      <em>{value.author}</em>
                      <span className="vip"><img src="/src/images/vip.png" /></span>
                  </div>
                  <div className="comment" ref="comment">{value.showall ? value.answer : value.answer.slice(0,commentlength).concat("...")}
                    {value.showall ? "" : <span onClick={this.showallClick.bind(this,i)}>查看全部</span>}
                  </div>
                  <div className="more">
                      <span><b><img src="/src/images/zan.png" /></b>赞同{value.agreenum}</span>
                      <span><b><img src="/src/images/comment.png" /></b>评论{value.remark}</span>
                      <span><b><img src="/src/images/cang.png" /></b>收藏</span>
                  </div>
              </article>
              <span className="NO">Q{i+1}</span>
            </div>
          )
        })

        const myStyle = {
            width : '100%',
            display : "block"
        }

        return (
            <div className="ZhaoDaToFeatures">
                <header>
                    <video id="video" controls poster="/src/images/zhuanlan.png" >
                        <source src={data.video} />
                    </video>
                    <div className="TopBar">
                        <span onClick={(e) => {

                            history.back();

                        }}
                        >
                            <img src="/src/images/Back_left.png" />
                        </span>
                    </div>
                    <div className="videoM">
                        <div className="videoL">
                            <span><img src="/src/images/eye.png" /></span>
                            <em><b>{data.playtimes}</b>次播放</em>
                        </div>
                        <div className="videoR">
                            <span><img src="/src/images/love.png" /></span>
                            <span><img src="/src/images/top.png" /></span>
                        </div>
                    </div>
                    <div id="videoMessage">
                        <div className="zhuanlandescrip">
                            <div className="vTitle">
                                <h3>{data.title}</h3>
                                <span><em>简介</em><img onClick={()=>{
                                    this.setState({
                                        "shortIntroStretch":!this.state.shortIntroStretch
                                    })
                                }} src={this.state.shortIntroStretch ? "/src/images/Back_top.png" : "/src/images/Back_down.png"} /></span>
                            </div>
                            {this.state.shortIntroStretch ? <p>{data.intro}</p> : ""}
                        </div>
                        <div className="guestIntro">
                            <h3>嘉宾介绍</h3>
                            <div className="intro">
                                <span className="circle">
                                    <img src={data.guest.guestImg} alt="嘉宾" />
                                </span>
                                <div className="introR">

                                    <span><em>Michile</em><img src={data.guest.img} /></span>
                                    <span style={{"display":!this.state.guestIntroStretch ? "WebKitBox" : "inline"}}>{data.guest.intro}</span>

                                </div>
                            </div>
                            {
                                !this.state.guestIntroStretch ?
                                <span onClick={()=>{
                                    this.setState({
                                        "guestIntroStretch" : true
                                    })
                                }} className="more"><em>展开</em><img src="/src/images/Back_down.png" />
                                </span> : ""
                            }
                        </div>
                    </div>
                </header>

                <div id="album">
                    <h3>专辑列表</h3>
                    {albumList}

                    <p><input type="button" value="查看全部" /></p>
                </div>

                <div className="guestAnswer">
                    <header className="ul">
                        <ul>
                            <li className="active">嘉宾解答</li>
                            <li>热问榜单</li>
                        </ul>
                    </header>

                    {answerList}

                </div>
            </div>
        );

    }
}

export default ZhaoDaToFeatures;
