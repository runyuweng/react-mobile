import React from "react";
import "./Activity.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import ajax from "../../../services/ajax.js";

class Activity extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            activities:[
                {
                    "id":1,
                    "publishdate":"2月28日",
                    "publishtime":"09:00",
                    "activitytitle":"花开不待春·招邀青云客",
                    "activitydatetime":"14:30",
                    "activityimg":"/src/images/zlbhlog.png",
                    "activityintro":"珠联璧合|海量招聘信息，春招无限可能。",
                    "activityurl":"www.baidu.com"
                },
                {
                    "id":1,
                    "publishdate":"2月28日",
                    "publishtime":"09:00",
                    "activitytitle":"花开不待春·招邀青云客",
                    "activitydatetime":"14:30",
                    "activityimg":"/src/images/zlbhlog.png",
                    "activityintro":"珠联璧合|海量招聘信息，春招无限可能。",
                    "activityurl":"www.baidu.com"
                }
            ]
        };
        this.fetchActivity = this.fetchActivity.bind(this);   

    }

    componentDidMount() {
        this.fetchActivity()
    }

    fetchActivity(){
        ajax({"url":'/dazhaoactivity'}).
        then((data)=>{
            if (data.code==='S01') {
                this.setState({
                    activities:data.contents
                })
            }else if (data.code==='E01') {
                this.setState({
                    activities:[]
                })
            }
        })
    }

    render () {

        const { activities } = this.state;
        const activitiesList = activities.map((value,i)=>{
            return(
                <div key={i} className="activity">
                    <time>{value.publishdate}<em />{value.publishtime}</time>
                    <div className="activitymain">
                        <p>
                            <span>{value.activitytitle}</span>
                            <time>{value.activitydatetime}</time>
                        </p>
                        <span>
                            <img src={value.activityimg} alt="珠联璧合" />
                        </span>
                        <p>{value.activityintro}</p>
                        <span>点击进入招聘会主场→</span>
                    </div>
                </div>
            )
        })

        return (
            <div id="activity">
                <header>
                    <TopBar title="大招活动" border="boder" />
                </header>
                <div className="activities">
                    {activitiesList}
                </div>
            </div>
        );

    }
}

export default Activity;
