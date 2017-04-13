import React from "react";
import ReactDOM from "react-dom";
import "./SortBy.scss";
import {Link} from "react-router";
import QueueAnim from "rc-queue-anim";
import DropdownList from '../../MainLayout/DropdownList/DropdownList.jsx'

class SortBy extends React.Component {


    onClick(element){
        if (!this.props.showLoading) {
            ["list1","list2","list3","list4"].map((index) => {
                if (element !== index ) {
                    document.getElementById(index).style.display = "none";
                }
            })

            const vdisplay = document.getElementById(element).style.display;

            if (vdisplay === "block") {
                document.getElementById(element).style.display = "none";
            }
            else if (vdisplay === "none"){
                document.getElementById(element).style.display = "block";
            }
            else{
                document.getElementById(element).style.display = "block";
            }

            ReactDOM.render(<DropdownList />, document.getElementById(element));
        }else{
            return;
        }
    }

    render () {

        return (

            <div className="sort">
                <ul>
                    <li onClick={this.onClick.bind(this,"list1")}>默认排序<img src="/src/images/Back_down.png" />
                        <div id="list1"></div>
                    </li>
                    <li onClick={this.onClick.bind(this,"list2")}>全国<img src="/src/images/Back_down.png" />
                        <div id="list2"></div>
                    </li>
                    <li onClick={this.onClick.bind(this,"list3")}>5k-8k<img src="/src/images/Back_down.png" />
                        <div id="list3"></div>
                    </li>
                    <li onClick={this.onClick.bind(this,"list4")}>本科<img src="/src/images/Back_down.png" />
                        <div id="list4"></div>
                    </li>
                </ul>
            </div>

        );

    }
}
export default SortBy;
