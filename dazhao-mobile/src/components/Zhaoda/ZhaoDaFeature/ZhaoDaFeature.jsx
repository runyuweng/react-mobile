import React from "react";
import "./ZhaoDaFeature.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";
import Loading from "../../Public/Loading/Loading.jsx";

class ZhaoDaFeature extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "zhuanlan": [],
            "showLoading": true
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


            if (data.code === "S01") {

                const zhuanlan = data.contents;

                this.setState({
                    zhuanlan,
                    "showLoading": false
                });

            }

        });

    }

    render () {

        const {zhuanlan, showLoading} = this.state;

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
            <div>
                {showLoading ? <Loading /> : <div className="ZhaoDaFeature">
                    {ZhuanLanList}
                </div>}
            </div>
        );

    }
}
export default ZhaoDaFeature;
