import React from "react";
import "./Notify.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import {Link} from "react-router";
import QueueAnim from "rc-queue-anim";

class Notify extends React.Component {

    constructor (props) {

        super(props);

    }

    componentDidMount () {

        this.props.showBottom();

    }

    render () {

        return (
            <div className="Notify">
                <header>
                    <TopBar title="消息通知" border="boder" />
                </header>

                <div className="experience">
                    <div>
                        <span><img src="/src/images/state.png" />
                            <em>投递状态</em></span>
                    </div>
                    <div>
                        <span><img src="/src/images/invite.png" />
                            <em>校招邀约</em></span>
                    </div>
                    <div>
                        <span><img src="/src/images/zdmessage.png" />
                            <em>招答通知</em></span>
                    </div>
                </div>

            </div>
        );

    }
}
export default Notify;
