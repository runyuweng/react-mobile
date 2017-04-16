import React from "react";
import "./TopBar.scss";
import {Link} from "react-router";
 

class TopBar extends React.Component {

    constructor (props) {

        super(props);

    }


    render () {

        const {title, border} = this.props;


        return (
            <div className="TopBar" style={border == "noboder" ? {"borderBottom": "none"} : {"borderBottom": "1px solid #DBDBDB"}}>
                <span onClick={(e) => {

                    history.back();

                }}
                >
                    <img src="/src/images/arrow-left.png" />
                </span>
                <span>{title}</span>
            </div>
        );

    }
}
export default TopBar;
