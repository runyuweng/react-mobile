import React from "react";
import "./ZhaoDaFeature.scss";
import {Link} from "react-router";

class ZhaoDaFeature extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "zhuanlan": [
                {
                    "imgsrc": "/src/images/zhuanlan.png",
                    "topic": "#麦力达#第一期--考研那些事儿..",
                    "name": "Michal",
                    "vip": true,
                    "theme": "读研？工作？跨专业？选热门？如何选择变成现在最合适的 如何选择编程未来最正确的？"

                },
                {
                    "imgsrc": "/src/images/zhuanlan.png",
                    "topic": "#麦力达#第一期--考研那些事儿..",
                    "name": "Michal",
                    "vip": true,
                    "theme": "读研？工作？跨专业？选热门？如何选择变成现在最合适的 如何选择编程未来最正确的？"

                },
                {
                    "imgsrc": "/src/images/zhuanlan.png",
                    "topic": "#麦力达#第一期--考研那些事儿..",
                    "name": "Michal",
                    "vip": true,
                    "theme": "读研？工作？跨专业？选热门？如何选择变成现在最合适的 如何选择编程未来最正确的？"

                }
            ]
        };

    }

    // 专栏信息
    fetchZhuanlan () {

    }

    render () {

        const {zhuanlan} = this.state;

        const ZhuanLanList = zhuanlan.map((elem, index) =>
            <div className="feature" key={index}>
                <Link to="tofeature">
                    <div className="featureImg">
                        <img src={elem.imgsrc} />
                    </div>
                    <span className="fTheme">{elem.topic}</span>
                </Link>
                <div className="publisher">
                    <span className="cicle" />
                    {elem.name}
                    {
                        elem.vip?
                        <span className="vip"><img src="/src/images/vip.png" /></span>
                        :""
                    }
                </div>
                <p>{elem.theme}</p>
            </div>
            );

        return (
            <div className="ZhaoDaFeature">

                {ZhuanLanList}

            </div>
        );

    }
}
export default ZhaoDaFeature;
