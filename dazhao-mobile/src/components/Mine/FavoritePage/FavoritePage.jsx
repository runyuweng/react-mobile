import React from "react";
import "./FavoritePage.scss";
import {Link} from "react-router";
import TopBar from "../../Public/TopBar/TopBar.jsx";

class FavoritePage extends React.Component {

    constructor (props) {

        super(props);

    }

    render () {

        return (
            <div id="favoritePage">
                <header>
                    <TopBar title="收藏夹" border="noboder" />
                </header>
                <div className="fgnav">
                    <ul>
                        <Link to="/favoritepage/favoritejobs" activeClassName="active">
                            <li>收藏职位</li>
                        </Link>
                        <Link to="/favoritepage/favoritecompanys" activeClassName="active">
                            <li>收藏企业</li>
                        </Link>
                    </ul>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );

    }
}

export default FavoritePage;
