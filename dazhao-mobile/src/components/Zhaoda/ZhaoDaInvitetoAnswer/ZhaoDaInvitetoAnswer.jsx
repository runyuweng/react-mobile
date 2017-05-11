import React from "react";
import "./ZhaoDaInvitetoAnswer.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";

class ZhaoDaInvitetoAnswer extends React.Component {

    constructor (props) {

        super(props);

    }

    componentDidMount () {

        this.props.showBottom(false);

    }

    render () {

        return (
            <div className="zhaoDaInvitetoAnswer">
                <header>
                    <TopBar title="邀请回答" border="boder" />
                </header>
                <div className="answercontent">
                    <div className="item">
                        <div className="left">
                            <span className="circle" />
                            <p>
                                <span>Michael</span><br />
                                <span>国际教练协会（ICF）认证教练</span>
                            </p>
                        </div>
                        <span className="right">邀请回答</span>
                    </div>
                    <div className="item">
                        <div className="left">
                            <span className="circle" />
                            <p>
                                <span>Michael</span><br />
                                <span>国际教练协会（ICF）认证教练</span>
                            </p>
                        </div>
                        <span className="right">邀请回答</span>
                    </div>
                    <div className="item">
                        <div className="left">
                            <span className="circle" />
                            <p>
                                <span>Michael</span><br />
                                <span>国际教练协会（ICF）认证教练</span>
                            </p>
                        </div>
                        <span className="right">邀请回答</span>
                    </div>
                </div>
            </div>
        );

    }
}

export default ZhaoDaInvitetoAnswer;
