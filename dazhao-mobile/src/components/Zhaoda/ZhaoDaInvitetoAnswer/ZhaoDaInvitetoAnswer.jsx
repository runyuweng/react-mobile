import React from "react";
import "./ZhaoDaInvitetoAnswer.scss";
import TopBar from "../../Public/TopBar/TopBar.jsx";
import ajax from "../../../services/ajax.js";

class ZhaoDaInvitetoAnswer extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "user": [
                {
                    "sid": 1,
                    "name": "Michael",
                    "img": "/src/images/pople.png",
                    "job": "国际教练协会（ICF）认证教练",
                    "isInvited": false
                },
                {
                    "sid": 2,
                    "name": "Michael",
                    "img": "/src/images/pople.png",
                    "job": "国际教练协会（ICF）认证教练",
                    "isInvited": false
                },
                {
                    "sid": 3,
                    "name": "Michael",
                    "img": "/src/images/pople.png",
                    "job": "国际教练协会（ICF）认证教练",
                    "isInvited": true
                }
            ]
        };
        this.fetchUser = this.fetchUser.bind(this);
        this.invitetoanswer = this.invitetoanswer.bind(this);

    }

    componentDidMount () {

        this.props.changeBottomState(false);

        this.setState({"qid": this.props.location.query.qid}, () => {

            this.fetchUser(this.state.qid);

        });

    }

    fetchUser (qid) {

        ajax({"url": `/zhaoda/user/recommenduser?qid=${qid}`}).
      then((data) => {

          console.log(data);

          if (data.code === "S01") {

              const user = data.contents;

              this.setState({user});

          } else if (data.code === "E01") {

              this.setState({"user": []});

          }

      });

    }

    invitetoanswer (qid, userid, index) {

        if (this.state.user[index].status === 1) {

            this.props.changeMessageContent("已经邀请过了");

        } else {


            ajax({"url": `/zhaoda/question/inviteanswer?qid=${qid}&id=${userid}`}).
            then((data) => {

                console.log(data);
                if (data.code === "S01") {

                    const user = JSON.parse(JSON.stringify(this.state)).user;

                    user[index].status = this.state.user[index].status === 0 ? 1 : 0;

                    this.setState({user});

                } else if (data.code === "E01") {

                    this.setState({"user": []});

                }

            });

        }

    }

    render () {

        const {user , qid} = this.state;
        const userList = user.map((value, index) =>
            <div key={index} className="item">
                <div className="left">
                    <span className="circle">
                        <img src={value.img} alt="用户头像" />
                    </span>
                    <p>
                        <span>{value.nickname}</span><br />
                        <span>{value.intro}</span>
                    </p>
                </div>
                <span className="right" onClick={this.invitetoanswer.bind(this, qid, value.uid, index)}>{value.status === 1 ? "已邀请" : "邀请回答"}</span>
            </div>
            );

        return (
            <div className="zhaoDaInvitetoAnswer">
                <header>
                    <TopBar title="邀请回答" border="boder" />
                </header>
                <div className="answercontent">
                    {userList}
                </div>
            </div>
        );

    }
}

export default ZhaoDaInvitetoAnswer;
