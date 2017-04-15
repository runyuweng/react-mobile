import React from "react";
import { createStore ,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import "./DropdownList.scss";
import {Link} from "react-router";

class DropdownList extends React.Component {

    handleClick(store,i) {
        console.log(this.props.id)
        store.dispatch({type:"SORT_FILTER",id:i,sort:this.props.id})
    }

    componentDidMount() {

    }

    render () {

        const {store,id} = this.props
        const sortItem = this.props.sortItems.defaultSort;
        const sortItemList = sortItem.map((elem,i) => {
            return <span key={elem} onClick={this.handleClick.bind(this,store,i)}>{elem}</span>
        })

        return (
            <div className="DropdownList">
                {sortItemList}
            </div>
        );

    }
}


export default DropdownList;
