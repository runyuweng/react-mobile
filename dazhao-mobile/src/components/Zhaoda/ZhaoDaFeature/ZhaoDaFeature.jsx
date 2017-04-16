import React from "react";
import "./ZhaoDaFeature.scss";
import {Link} from "react-router";


class ZhaoDaFeature extends React.Component {
    render () {

        return (
            <div className="ZhaoDaFeature">
                <div className="feature">
                    <Link to="tofeature">
                        <div className="featureImg"><img src="/src/images/1481373795l515443385.png" />
                        </div>
                        <span className="fTheme">#麦力达#第一期--考研那些事儿..
            </span>
                    </Link>
                    <div className="publisher">
                        <span className="cicle" />
            Michal
            <span className="vip"><img src="/src/images/vip.png" /></span>
                    </div>
                    <p>读研？工作？跨专业？选热门？如何选择变成现在最合适的 如何选择编程未来最正确的？</p>
                </div>

                <div className="feature">
                    <div className="featureImg"><img src="/src/images/1481373795l515443385.png" />
                    </div>
                    <span className="fTheme">#麦力达#第一期--考研那些事儿..</span>
                    <div className="publisher">
                        <span className="cicle" />
            Michal
            <span className="vip"><img src="/src/images/vip.png" /></span>
                    </div>
                    <p>读研？工作？跨专业？选热门？如何选择变成现在最合适的 如何选择编程未来最正确的？</p>
                </div>

                <div className="feature">
                    <div className="featureImg"><img src="/src/images/1481373795l515443385.png" />
                    </div>
                    <span className="fTheme">#麦力达#第一期--考研那些事儿..</span>
                    <div className="publisher">
                        <span className="cicle" />
            Michal
            <span className="vip"><img src="/src/images/vip.png" /></span>
                    </div>
                    <p>读研？工作？跨专业？选热门？如何选择变成现在最合适的 如何选择编程未来最正确的？</p>
                </div>


            </div>
        );

    }
}
export default ZhaoDaFeature;
