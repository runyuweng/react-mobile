import React from "react";
import "./ZhaoDaQuesDetail.scss";
import {Link} from "react-router";

class ZhaoDaQuesDetail extends React.Component {

    constructor (props) {

        super(props);
        this.state = {"detail": sessionStorage.getItem("detail") || ""};

    }

    handleChange (e) {

        this.setState({"detail": e.target.value});

    }


    render () {

        const {detail} = this.state;

        return (
            <div className="ZhaoDaQuesDetail">
                <header>
                    <div className="search">
                        <span onClick={() => {

                            history.go(-1);

                        }}
                        >上一步</span>
                        <span>提问-问题详情</span>
                        {detail ? <Link to="choosetopic">
                            <span onClick={() => {

                                sessionStorage.setItem("detail", this.state.detail);

                            }}
                            >下一步</span>
                        </Link> : <span onClick={() => {

                            this.props.changeMessageContent("请输入后再试");

                        }}
                                  >下一步</span>
                          }
                    </div>
                </header>
                <div className="intro">
                    <textarea
                        value={detail}
                        rows="3"
                        placeholder="填写问题情景、条件等详细叙述(非必填)"
                        onChange={(e) => {

                            this.handleChange(e);

                        }}
                    />
                </div>
                <div className="blank" />
            </div>
        );

    }
}
export default ZhaoDaQuesDetail;
