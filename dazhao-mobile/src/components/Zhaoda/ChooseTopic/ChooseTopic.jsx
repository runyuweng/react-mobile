import React from "react";
import "./ChooseTopic.scss";
import ajax from "../../../services/ajax.js";
import {hashHistory} from "react-router";


class ChooseTopic extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "title": "",
            "topics": [],
            "choosedtopic": [],
            "choosedid": [],
            "isSubmit": false,
            "specialists": [],
            "invited": [],
            "qid": 1
        };
        this.handleClick = this.handleClick.bind(this);
        this.cancleChecked = this.cancleChecked.bind(this);
        this.submitClick = this.submitClick.bind(this);
        this.selectClick = this.selectClick.bind(this);
        this.forMore = this.forMore.bind(this);

    }

    selectClick (index, uid) {

        const specialists = JSON.parse(JSON.stringify(this.state)).specialists;

        let selected = JSON.parse(JSON.stringify(this.state)).invited;


        specialists.map((elem, num) => {

            num === index ? elem.selected = !elem.selected : "";
            if (num === index && elem.selected) {

                selected.push(uid);

            } else if (num === index && !elem.selected) {

                selected = selected.filter((value, i) => value !== uid);

            }

        });
        this.setState({
            specialists,
            "invited": selected
        });

    }

    cancleChecked (num, value) {

        const topics = JSON.parse(JSON.stringify(this.state)).topics;
        const choosedtopic = JSON.parse(JSON.stringify(this.state)).choosedtopic;
        const choosedid = JSON.parse(JSON.stringify(this.state)).choosedid;

        choosedtopic.splice(num, 1);
        choosedid.splice(num, 1);

        topics.map((elem, index) => {

            elem.topicname === value ? elem.checked = !elem.checked : "";

        });

        this.setState({
            topics,
            choosedtopic,
            choosedid
        });

    }

    // 提交
    submitClick () {

        if (this.state.choosedid.length > 0) {

            this.setState({"isSubmit": !this.state.isSubmit}, () => {

                this.state.isSubmit ? this.refs.submitpage.addEventListener("touchmove", (e) => {

                    e.preventDefault();

                }, true) : "";

                if (this.state.isSubmit) {

                    ajax({
                        "url": "/zhaoda/question/askquestion",
                        "method": "POST",
                        "data": `qtitle=${sessionStorage.getItem("question")}&qcontent=${sessionStorage.getItem("detail")}&tid=${this.state.choosedid.join(",")}`
                    }).
                then((data) => {


                    const newData = [];

                    data.contents.map((value, i) => {

                        newData.push(value);
                        newData[i].selected = false;

                    });

                    this.setState({
                        "specialists": data.contents ? newData : [],
                        "qid": data.lastestqid
                    });

                });

                }

            });

        } else {

            this.props.changeMessageContent("请输入话题并选择后再试");

        }


    }

    handleClick (args, value, id) {

        const choosedtopic = JSON.parse(JSON.stringify(this.state)).choosedtopic;
        const choosedid = JSON.parse(JSON.stringify(this.state)).choosedid;
        const topics = JSON.parse(JSON.stringify(this.state)).topics;

        choosedtopic.indexOf(value) === -1 ? choosedtopic.push(value) : choosedtopic.splice(choosedtopic.indexOf(value), 1);
        choosedid.indexOf(id) === -1 ? choosedid.push(id) : choosedid.splice(choosedid.indexOf(id), 1);

        topics.map((elem, index) => {

            index === args ? elem.checked = !elem.checked : "";

        });
        this.setState({
            topics,
            choosedtopic,
            choosedid
        });

    }

    handleInvite () {

        if (this.state.invited.length > 0) {

            ajax({"url": `/zhaoda/question/inviteanswer?qid=${this.state.qid}&id=${this.state.invited.join(",")}`}).
        then((data) => {


            if (data.code === "S01") {

                this.props.changeMessageContent("邀请成功");
                hashHistory.push({"pathname": `/toquestion/${this.state.qid}`});

            }


        });

        } else {

            this.props.changeMessageContent("请选择后邀请");

        }

    }

    // 查看更多
    forMore () {

        this.props.changeMessageContent("该功能完善中...");

    }

    handleChange (e) {

        this.setState({"title": e.target.value}, () => {

            if (this.state.title) {

                ajax({"url": `/zhaoda/topic/similartopic?topicname=${this.state.title}`}).
          then((data) => {


              if (data.contents) {

                  const newData = JSON.parse(JSON.stringify(data.contents));

                  newData.map((value, i) => {

                      newData[i].checked = false;

                  });
                  this.setState({"topics": data.contents});

              } else {

                  this.setState({"topics": []});

              }

          });

            }

        });

    }

    render () {

        const {topics, choosedtopic, isSubmit, specialists, title} = this.state;
        const choosedtopicList = choosedtopic.map((elem, index) =>
            <div className="chooseditem" key={elem}><span>{elem}</span><span className="cancle" onClick={this.cancleChecked.bind(this, index, elem)}><img src="/src/images/icon/cancle.png" alt="取消" /></span></div>
        );
        const topicsList = topics.map((elem, index) =>
            <div className="topicitem" key={index}>
                {elem.checked ? <span onClick={this.handleClick.bind(this, index, elem.topicname, elem.tid)}><img src="/src/images/icon/agree.png" alt="checked" /></span> : <span onClick={this.handleClick.bind(this, index, elem.topicname, elem.tid)} />}
                <span>{elem.topicname}</span>
            </div>
        );

        const specialistsList = specialists.map((elem, index) =>
            <div className="specialist" key={index}>
                <span className="img">
                    <img onClick={this.selectClick.bind(this, index, elem.uid)} src={elem.img || "/src/images/pople.png"} alt="头像" />
                    {elem.selected ? <span><img src="/src/images/选择@2x.png" alt="选择" /></span> : ""}
                </span>
                <span className="specialistname">{elem.nickname}</span>
                <span className="specialiststage">{elem.label}</span>
            </div>
        );

        return (
            <div id="chooseTopic">
                <header>
                    <div className="search">
                        <span onClick={() => {

                            history.go(-1);

                        }}
                        >上一步</span>
                        <span>提问-问题详情</span>
                        <span onClick={this.submitClick}>提交</span>
                    </div>
                </header>
                <div className="choosemain">
                    <div className="choosedtopic">
                        { choosedtopicList }
                    </div>
                    <div className="topicfilter">
                        <span><img src="/src/images/搜素.png" alt="搜索" /></span>
                        <input type="text" value={title} onChange={(e) => this.handleChange(e)} />
                    </div>
                    <div className="topicfound">
                        { topicsList }
                    </div>
                </div>

                {isSubmit
        ? <div className="submitpage" ref="submitpage">
            <div className="submitcontent">
                <p><span><img onClick={this.submitClick} src="/src/images/邀请-关闭@2x.png" alt="关闭" /></span></p>
                <h3>提交成功，你可以邀请专家替您解答</h3>
                <div className="specialists">
                    {specialistsList}
                </div>
                <div className="bottombutton">
                    <span onClick={() => {

                        this.forMore();

                    }}
                    >查看更多</span>
                    <span onClick={() => {

                        this.handleInvite();

                    }}
                    >邀请回答</span>
                </div>
            </div>
        </div>
        : ""}

            </div>
        );

    }
}

export default ChooseTopic;
