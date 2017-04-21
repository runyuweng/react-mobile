import React from "react";
import "./ZhaoDaMessage.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import {Link} from "react-router";

class ZhaoDaMessage extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "limit" : 3,
            "informs" :[
                {
                    "from" : ["Michael","李刚","Simon","Michael","李刚"],
                    "topic" : "研究生和本科学历在求职过程中真的会有很大差别吗？"
                },
                {
                    "from" : ["Kangkang","李刚","Jane","李刚"],
                    "topic" : "研究生和本科学历在求职过程中真的会有很大差别吗？"
                },
                {
                    "from" : ["Simon","Michael","李刚","Simon"],
                    "topic" : "研究生和本科学历在求职过程中真的会有很大差别吗？"
                },
                {
                    "from" : ["Michael","李刚","Simon"],
                    "topic" : "研究生和本科学历在求职过程中真的会有很大差别吗？"
                },
                {
                    "from" : ["Michael"],
                    "topic" : "研究生和本科学历在求职过程中真的会有很大差别吗？"
                }
            ]
        }

    }

    componentDidMount () {

        this.props.showBottom();

    }

    //获取通知
    fetchInform(){

    }

    render () {

        const { informs , limit } = this.state;

        const InformsList = informs.map((elem,index) => {

            const FromList = elem.from.map((elem1,index1) => {

                if (elem.from.length-1 >= limit) {

                    if (index1 <= limit-1) {

                        return index1 === limit-1 ? elem1 : elem1 + "、"

                    }
                    else{
                        return "";
                    }

                }
                else{

                    return index1 === elem.from.length-1 ? elem1 : elem1 +　"、"

                }

            })

            return(
                <div className="zhaodamessage" key={index}>
                    <span className="who">
                    {FromList}
                    {elem.from.length > limit ? (" 等" + elem.from.length + "人") :
                    (elem.from.length ===1 ? " " : " " + elem.from.length + "人")}
                    回答了你的问题：</span>
                    <p>{elem.topic}</p>
                </div>
            )
        })


        return (
            <div className="ZhaoDaMessage">
                <TopBar title="消息" border="boder" />
                <nav>
                    <ul>
                        <li className="active">通知</li>
                        <li>私信</li>
                        <li>系统</li>
                    </ul>
                </nav>
                <div id="MessageMain">

                {InformsList}

                </div>
            </div>
        );

    }
}

export default ZhaoDaMessage;
