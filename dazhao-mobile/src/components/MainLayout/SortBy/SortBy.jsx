import React from "react";
import ReactDOM from "react-dom";
import "./SortBy.scss";
import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import {Link} from "react-router";
import constants from "../../../constants/constants";

class SortBy extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            "sortBy": [
                constants.sort,
                constants.city,
                constants.salary,
                constants.edu
            ],
            "display": [false, false, false, false], // 控制下拉框的显示与否
            "whichItem": [0, 0, 0, 0] // 控制每种排序方式的当前显示的项索引
        };

    }


    handleClick (index) {

        const display = this.state.display;

        for (let i = 0; i < this.state.display.length; i++) {

            i === index ? display[i] = !this.state.display[i] : display[i] = false;

        }
        this.setState({display});

    }

    itemClick (i, index) {

        const whichItem = this.state.whichItem;

        whichItem[i] = index;
        this.setState({whichItem});
        this.props.sortChange(index);

    }

    render () {

        const {sortBy} = this.state;


        const sortList = sortBy.map((elem, i) => <li key={i} onClick={this.handleClick.bind(this, i)}>
            {this.state.sortBy[i][this.state.whichItem[i]]}
            <img src="/src/images/Back_down.png" />
            {
                this.state.display[i]
                ? <div>
                    {this.state.sortBy[i].map((elem, index) => <span
                        onClick={this.itemClick.bind(this, i, index)}
                        key={index}
                                                                           >{this.state.sortBy[i][index]}
                    </span>)}
                </div> : ""

            }
        </li>);

        return (

            <div className="sort">
                <ul>
                    {sortList}
                </ul>
            </div>

        );

    }
}
export default SortBy;
