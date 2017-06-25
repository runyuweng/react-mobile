import React from "react";
import "./TopBar.scss";
import {Link} from "react-router";

class TopBar extends React.Component {

    constructor (props) {

        super(props);

    }


    render () {

        const {title, border, link, img, backTo} = this.props;


        return (
            <div className="TopBar">
                <div className="content" style={border == "noboder" ? {"borderBottom": "none"} : {"borderBottom": "1px solid #DBDBDB"}}>
                    {backTo ? <Link to={backTo}>
                        <span>
                            <img src="/src/images/arrow-left.png" />
                        </span>
                    </Link> : <span onClick={(e) => {

                        history.back();

                    }}
                              >
                        <img src="/src/images/arrow-left.png" />
                    </span>}
                    <span>{title}</span>
                    {link ? <span>
                        <Link to={link.url}>{link.content}</Link>
                    </span> : ""}

                    {img ? <span><img src={img} /></span> : ""}
                </div>
            </div>
        );

    }
}
export default TopBar;
