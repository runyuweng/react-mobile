import React from "react";
import "./DropdownList.scss";
import {Link} from "react-router";

class DropdownList extends React.Component {


    render () {

        return (
            <div className="DropdownList">
                <span>排序方式一</span>
                <span>排序方式二</span>
                <span>排序方式三</span>
            </div>
        );

    }
}
export default DropdownList;
