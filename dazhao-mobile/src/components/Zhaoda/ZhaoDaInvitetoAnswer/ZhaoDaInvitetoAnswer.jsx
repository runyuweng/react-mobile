import React from "react";
import "./ZhaoDaInvitetoAnswer.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import ajax from "../../../services/ajax.js";

class ZhaoDaInvitetoAnswer extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            user:[
                {
                    "sid":1,
                    "name":"Michael",
                    "img":"/src/images/pople.png",
                    "job":"国际教练协会（ICF）认证教练",
                    "isInvited":false
                },
                {
                    "sid":2,
                    "name":"Michael",
                    "img":"/src/images/pople.png",
                    "job":"国际教练协会（ICF）认证教练",
                    "isInvited":false
                },
                {
                    "sid":3,
                    "name":"Michael",
                    "img":"/src/images/pople.png",
                    "job":"国际教练协会（ICF）认证教练",
                    "isInvited":true
                }
            ]
        };
        this.fetchUser = this.fetchUser.bind(this);
        this.invitetoanswer = this.invitetoanswer.bind(this);
    }

    componentDidMount () {

        // this.props.showBottom(false);
        this.setState({
            "topic":this.props.location.query.topic
        },()=>{
            this.fetchUser(this.state.topic);
        })

    }

    fetchUser(topic){
        ajax({"url": `/zhaoda/fetchuser?topic=${topic}`}).
      then((data) => {
        if (data.code==="S01") {
            const user = data.contents;
            this.setState({
                user:user
            })
        }else if (data.code==="E01") {
            this.setState({
                user:[]
            })
        }
      })
    }

    invitetoanswer(userid,index){

        if (this.state.user[index].isInvited) {
            // this.props.showMessage("已经邀请过了");
        }else{
            ajax({"url": `/zhaoda/invitetoanswer?userid=${userid}`}).
            then((data) => {
                if (data.code==="S01") {
                    const user = JSON.parse(JSON.stringify(this.state)).user;
                    user[index].isInvited = !this.state.user[index].isInvited;

                    this.setState({
                        user:user
                    })

                }else if (data.code==="E01") {
                    this.setState({
                        user:[]
                    })
                }
            })
        }

    }

    render () {

        const { user } = this.state;
        const userList = user.map((value,index)=>{
            return(
                <div key={index} className="item">
                    <div className="left">
                        <span className="circle">
                            <img src={value.img} alt="用户头像" />
                        </span>
                        <p>
                            <span>{value.name}</span><br />
                            <span>{value.job}</span>
                        </p>
                    </div>
                    <span className="right" onClick={this.invitetoanswer.bind(this,value.sid,index)}>{value.isInvited?"已邀请":"邀请回答"}</span>
                </div>
            )
        })

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
