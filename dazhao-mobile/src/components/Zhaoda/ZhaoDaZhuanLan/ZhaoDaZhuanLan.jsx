import React from "react";
import ZhaoDaSearchTop from "../ZhaoDaSearchTop/ZhaoDaSearchTop.jsx";
import "./ZhaoDaZhuanLan.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

class ZhaoDaZhuanLan extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "keyword": this.props.location.query.keyword,
            "zhuanlan": [
                {
                    "id": 1,
                    "zhuanlan_title": "#麦力达#第一期---考研那些事儿",
                    "zhuanlan_intro": "读研？工作？跨专业？选热门？如何选择变成现在最合适的 如何选择编程未来最正确的？"
                },
                {
                    "id": 2,
                    "zhuanlan_title": "#麦力达#第一期---考研那些事儿",
                    "zhuanlan_intro": "读研？工作？跨专业？选热门？如何选择变成现在最合适的 如何选择编程未来最正确的？"
                },
                {
                    "id": 3,
                    "zhuanlan_title": "#麦力达#第一期---考研那些事儿",
                    "zhuanlan_intro": "读研？工作？跨专业？选热门？如何选择变成现在最合适的 如何选择编程未来最正确的？"
                }
            ]
        };

        this.fetchZhuanlan = this.fetchZhuanlan.bind(this); 
    }

    componentDidMount() {
        console.log(this.props.location.query.keyword);
        this.fetchZhuanlan(this.state.keyword);
    }

    fetchZhuanlan(keyword){
        ajax({"url": `/zhaoda/zhuanlan?keyword=${keyword}`}).
        then((data) => {

            if (data.code === "S01") {

                this.setState({"zhuanlan": data.contents});

            } else if (data.code === "E01") {

                this.setState({"zhuanlan": []});

            }

        });
    }
    render () {

        const { zhuanlan } = this.state;
        const zhuanlanList = zhuanlan.map((value,index)=>{
            return(
                <div key={index} className="item">
                    <div className="left">
                        <span className="circle1" />
                        <p>
                            <span>{value.zhuanlan_title}</span><br />
                            <span>{value.zhuanlan_intro}</span>
                        </p>
                    </div>
                </div>
            )
        })

        return (
            <div className="ZhaoDaZhuanLan ZhaoDaUser ZhaoDaHomeSearch">
                <ZhaoDaSearchTop />
                <div className="usermain">
                    {zhuanlanList}
                </div>

            </div>
        );

    }
}
export default ZhaoDaZhuanLan;
