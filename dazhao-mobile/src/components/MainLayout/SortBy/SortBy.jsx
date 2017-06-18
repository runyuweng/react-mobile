import React from "react";
import ReactDOM from "react-dom";
import "./SortBy.scss";
import {Link} from "react-router";
import constants from "../../../constants/constants";

class SortBy extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "sortBy": [
                {
                    "name": "sort",
                    "content": constants.sort
                },
                {
                    "name": "province",
                    "content": constants.province
                },
                {
                    "name": "salary",
                    "content": constants.salary
                },
                {
                    "name": "degree",
                    "content": constants.degree
                }
            ],
            "display": [false, false, false, false], // 控制下拉框的显示与否
            "whichItem": [0, 0, 0, 0] // 控制每种排序方式的当前显示的项索引
        };

    }
    componentWillMount () {

        if (parseInt(this.props.count) === 3) {

            this.setState({
                "sortBy": [
                    {
                        "name": "sort",
                        "content": constants.sort
                    },
                    {
                        "name": "province",
                        "content": constants.province
                    },
                    {
                        "name": "degree",
                        "content": constants.degree
                    }
                ]
            });

        }

    }
    componentWillReceiveProps (props) {

        if (props.reset) {

            this.setState({
                "display": [false, false, false, false], // 控制下拉框的显示与否
                "whichItem": [0, 0, 0, 0] // 控制每种排序方式的当前显示的项索引
            });

        }

    }


    handleClick (index) {

        const display = this.state.display;

        for (let i = 0; i < this.state.display.length; i++) {

            i === index ? display[i] = !this.state.display[i] : display[i] = false;

        }
        this.setState({display});

    }

    itemClick (i, index, id, type) {

        const whichItem = this.state.whichItem;

        whichItem[i] = index;
        this.setState({whichItem});
        this.props.sortChange(id, type);

    }

    render () {


        const {sortBy} = this.state;
        const count = parseInt(this.props.count) || 4;

        const sortList = sortBy.map((elem, i) => <li key={i} onClick={this.handleClick.bind(this, i)}>
            {sortBy[i].content[this.state.whichItem[i]].name}
            <img src="/src/images/Back_down.png" />
            {
                            this.state.display[i]
                            ? <div>
                                {sortBy[i].content.map((value, index) => <span
                                    onClick={this.itemClick.bind(this, i, index, value.id, sortBy[i].name)}
                                    key={value.id}
                                                                         >
                                    {value.name}
                                </span>)}
                            </div> : ""
                        }
        </li>);


        return (

            <div className="sort">
                <ul className={count == 4 ? "list4" : "list3"}>
                    {sortList}
                </ul>
            </div>

        );

    }
}
export default SortBy;
