import React from "react";
import "./EditMg.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

export default class Select extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "type": props.type || "",
            "date": []
        };

    }

    componentDidMount () {

        this.fetchDate();

    }

    componentWillReceiveProps (props) {

        if (props.type !== this.state.type) {

            this.setState({"type": props.type}, () => {

                this.fetchDate();

            });

        }

    }

    fetchProvince = () => {

        ajax({"url": "/zhaoda/position/getprovince"}).then((data) => {

            const newData = data.contents.map((d) => ({
                "id": d.provincecode,
                "name": d.provincename
            }));

            this.setState({"data": newData});

        });

    }
    fetchCity = () => {

        ajax({"url": `/zhaoda/position/getcity?province=${this.props.province}`}).then((data) => {

            const newData = data.contents.map((d) => ({
                "id": d.cityid,
                "name": d.cityname
            }));

            this.setState({"data": newData});

        });

    }

    fetchDate = () => {

        switch (this.state.type) {
        case "city":
            this.fetchCity();
            break;
        case "province":
            this.fetchProvince();
            break;
        case "politics":
            this.setState({
                "data": [
                    {
                        "id": "党员",
                        "name": "党员"
                    },
                    {
                        "id": "团员",
                        "name": "团员"
                    },
                    {
                        "id": "群众",
                        "name": "群众"
                    }
                ]
            });
            break;
        case "edu":
            this.setState({
                "data": [
                    {
                        "id": "3",
                        "name": "大专"
                    },
                    {
                        "id": "4",
                        "name": "本科"
                    },
                    {
                        "id": "5",
                        "name": "硕士"
                    },
                    {
                        "id": "6",
                        "name": "博士"
                    },
                    {
                        "id": "7",
                        "name": "学士"
                    }
                ]
            });
        default:break;
        }

    }

    render () {

        return (
            <div ref="topDiv" className="topDiv">
                <div className="centermain">
                    <div className="mainhead">请选择</div>
                    <div className="mainbody">
                        {(this.state.data || []).map((d, i) => <input
                            key={d.id}
                            type="button"
                            onClick={() => {

                                this.props.handleChange(this.state.type, d.id, d.name);

                            }}
                            value={d.name}
                                                               />)
                      }
                    </div>
                    <div className="mainfooter">
                        <span onClick={() => {

                            this.props.handleClose();

                        }}
                        >取消</span>
                    </div>
                </div>
            </div>
        );

    }
}
