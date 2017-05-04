import React from "react";
import "./Activity.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";

class Activity extends React.Component {

    constructor (props) {

        super(props);

    }

    render () {

        return (
            <div id="activity">
                <header>
                    <TopBar title="大招活动" border="boder" />
                </header>
                <div className="activities">
                    <div className="activity">
                        <time>2月28日<em />09:00</time>
                        <div className="activitymain">
                            <p>
                                <span>花开不待春·招邀青云客</span>
                                <time>14:30</time>
                            </p>
                            <span>
                                <img src="/src/images/zlbhlog.png" alt="珠联璧合" />
                            </span>
                            <p>珠联璧合|海量招聘信息，春招无限可能。</p>
                            <span>点击进入招聘会主场→</span>
                        </div>
                    </div>
                    <div className="activity">
                        <time>2月28日<em />09:00</time>
                        <div className="activitymain">
                            <p>
                                <span>花开不待春·招邀青云客</span>
                                <time>14:30</time>
                            </p>
                            <span>
                                <img src="/src/images/zlbhlog.png" alt="珠联璧合" />
                            </span>
                            <p>珠联璧合|海量招聘信息，春招无限可能。</p>
                            <span>点击进入招聘会主场→</span>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default Activity;
