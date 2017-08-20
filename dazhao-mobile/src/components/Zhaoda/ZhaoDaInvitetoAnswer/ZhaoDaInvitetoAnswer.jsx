import React from "react";
import "./ZhaoDaInvitetoAnswer.scss";
import TopBar from "../../Public/TopBar/TopBar.jsx";
import ajax from "../../../services/ajax.js";
import Loading from "../../Public/Loading/Loading.jsx";
const PropTypes = require("prop-types");

class ZhaoDaInvitetoAnswer extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "user": [],
            "showLoading": true,
            "norecommenduser": false
        };
        this.fetchUser = this.fetchUser.bind(this);
        this.invitetoanswer = this.invitetoanswer.bind(this);

    }

    componentDidMount () {

        this.props.changeBottomState(false);

        this.setState({"qid": this.props.params.qid}, () => {

            this.fetchUser(this.state.qid);

        });

    }

    fetchUser (qid) {

        ajax({"url": `/zhaoda/user/recommenduser?qid=${qid}`}).
      then((data) => {


          if (data.code === "S01") {

              if (data.contents.length > 0) {

                  const user = data.contents;

                  this.setState({
                      user,
                      "showLoading": false
                  });

              } else {

                  this.setState({"norecommenduser": true});

              }

          } else {

              this.props.changeMessageContent(data.message);

          }

      });

    }

    invitetoanswer (qid, userid, index) {

        if (this.state.user[index].status === 1) {

            this.props.changeMessageContent("已经邀请过了");

        } else {


            ajax({"url": `/zhaoda/question/inviteanswer?qid=${qid}&id=${userid}`}).
            then((data) => {


                if (data.code === "S01") {

                    const user = JSON.parse(JSON.stringify(this.state)).user;

                    user[index].status = this.state.user[index].status === 0 ? 1 : 0;

                    this.setState({user});
                    this.context.changeMessageContent("操作成功");

                } else if (data.code === "E01") {

                    this.setState({"user": []});
                    this.props.changeMessageContent(date.message);

                }

            });

        }

    }

    render () {

        const {user, qid, showLoading} = this.state;
        const userList = user.map((value, index) =>
            <div key={index} className="item">
                <div className="left">
                    <span className="circle">
                        <img src={value ? value.img : ""} alt="用户头像" />
                    </span>
                    <p>
                        <span>{value ? value.nickname : ""}</span><br />
                        <span>{value ? value.intro : ""}</span>
                    </p>
                </div>
                <span className="right" onClick={this.invitetoanswer.bind(this, qid, value ? value.uid : "", index)}>{(value ? value.status : "") === 1 ? "已邀请" : "邀请回答"}</span>
            </div>
            );

        return (
            <div className="zhaoDaInvitetoAnswer">
                <header>
                    <TopBar title="邀请回答" border="boder" />
                </header>
                {
                    this.state.norecommenduser

                    ? <p className="noruser">对不起，暂时没有推荐用户！</p> : ""
                }
                {showLoading ? <Loading />
                : <div className="answercontent">
                    {userList}
                </div>}
            </div>
        );

    }
}
ZhaoDaInvitetoAnswer.contextTypes = {"changeMessageContent": PropTypes.func};
export default ZhaoDaInvitetoAnswer;
