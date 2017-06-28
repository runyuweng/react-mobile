import React from "react";
import "./ZhaoDaFeature.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

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
        this.fetchLatestZhuanlan = this.fetchLatestZhuanlan.bind(this);

    }

    componentDidMount () {

        this.fetchLatestZhuanlan();

    }

    // 专栏信息
    fetchLatestZhuanlan () {

        ajax({"url": "/zhaoda/zhuanlan/lastestzhuanlan?page=-1"}).
        then((data) => {
            console.log(data)
            if (data.code === "S01") {

                const zhuanlan = data.contents;

                this.setState({zhuanlan});

            } else if (data.code === "E01") {

                // 如果查询出错，启用备用数据
                this.setState({"zhuanlan": []});

            }

        });

    }

    render () {

        const {zhuanlan} = this.state;

        const ZhuanLanList = zhuanlan.map((elem, index) =>
            <div className="feature" key={index}>
                <Link to={{
                    "pathname": "tofeature",
                    "query": {"colid": elem.colid}
                }}
                >
                    <div className="featureImg">
                        <img src={"/src/images/zhuanlan.png" || elem.colposterbig} />
                    </div>
                    <span className="fTheme">{elem.colname}</span>
                </Link>
                <div className="publisher">
                    <span className="cicle" />
                    {"Michael" || elem.name}
                    {
                        elem.vip
                            ? <span className="vip"><img src="/src/images/vip.png" /></span>
                        : ""
                    }
                </div>
                <p>{elem.coldescription}</p>
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
