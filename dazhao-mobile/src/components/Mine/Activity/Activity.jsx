import React from "react";
import "./Activity.scss";
import TopBar from "../../Public/TopBar/TopBar.jsx";
import ajax from "../../../services/ajax.js";

class Activity extends React.Component {

    constructor (props) {

        super(props);
        this.state = {"activities": []};
        this.fetchActivity = this.fetchActivity.bind(this);

    }

    componentDidMount () {

        this.fetchActivity();

    }

    fetchActivity () {

        ajax({"url": "/zhaoda/activity"}).
        then((data) => {

            if (data.code === "S01") {

                // 请求成功，显示提示消息
                this.props.changeMessageContent(data.message);
                this.setState({"activities": data.contents});

            } else if (data.code === "E01") {

                // 获取失败
                this.props.changeMessageContent(data.message);
                this.setState({"activities": []});

            }

        });

    }

    render () {

        const {activities} = this.state;
        const activitiesList = activities.map((value, i) =>
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
                    <a href={`http://${value.activityurl}`}><span>点击进入招聘会主场→</span></a>
                </div>
            </div>
            );

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
