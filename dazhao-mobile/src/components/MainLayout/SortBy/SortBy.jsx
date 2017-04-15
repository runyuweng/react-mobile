import React from "react";
import ReactDOM from "react-dom";
import "./SortBy.scss";
import { createStore ,applyMiddleware} from 'redux';
import sortfilter from "../../../reducers/sortfilter.js";
import {Link} from "react-router";
import QueueAnim from "rc-queue-anim";
import DropdownList from '../../MainLayout/DropdownList/DropdownList.jsx'

const store = createStore(sortfilter,applyMiddleware(logger));

class SortBy extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sortBy : [
                {defaultSort:["默认排序","排序一","排序二"]},
                {defaultSort:["全国","排序三","排序四"]},
                {defaultSort:["5k-8k","排序五","排序六"]},
                {defaultSort:["本科","排序七","排序八"]}
            ],
            listDisplay : [true,true,true,true],
            prev : null
        }
    }


    onClick(element,i){


        console.log(this.state.listDisplay[i])

        this.state.sortBy.map((elem,index) => {
            index !== i ?
            ReactDOM.render( <div></div> , document.getElementById(`list${index}`)) :
            (
                this.state.listDisplay[i] ?
                ReactDOM.render(<DropdownList store={store} id={i} sortItems={this.state.sortBy[i]}/> , document.getElementById(element)) :
                ReactDOM.render( <div></div> , document.getElementById(`list${index}`))
            )
        })

        const listDisplay = this.state.listDisplay;

        for (var j = 0; j < listDisplay.length; j++) {
            j === i ? (listDisplay[j] = !this.state.listDisplay[i]) : (listDisplay[j] = true)
        }

        this.setState({
            listDisplay : listDisplay
        })

    }

    render () {

        const { sortBy } = this.state;
        const sortList = sortBy.map((elem,i) => {
            return  <li key={elem.defaultSort} onClick={this.onClick.bind(this,`list${i}`,i)}>
                        {this.state.sortBy[i].defaultSort[parseInt(store.getState()[i])%10]}
                        <img src="/src/images/Back_down.png" />
                        <div id={"list"+i}></div>
                    </li>
        })
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
