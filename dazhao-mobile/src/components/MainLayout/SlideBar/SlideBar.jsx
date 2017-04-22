import React from "react";
import "./SlideBar.scss";
import {Link} from "react-router";


class SlideBar extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "startPoint": 0,
            "currentLeft": 0,
            "active": 0,
            "industry": []
        };

    }

    componentWillReceiveProps (props) {

        // this.setState({"industry": props.industry});
        this.setState({"industry": [
            {category_id:1,category_name:'body:'+document.body.clientWidth},
            {category_id:2,category_name:'title:'+this.refs.title.offsetWidth},
            {category_id:3,category_name:'industry'+this.refs.industryList.offsetWidth},
            {category_id:4,category_name:'left:'+this.state.currentLeft},
            {category_id:5,category_name:'test'},
            {category_id:6,category_name:'test'},
            {category_id:7,category_name:'test'},
            {category_id:8,category_name:'test'}
        ]},()=>{
            this.setState({"industry": [
                {category_id:1,category_name:'body:'+document.body.clientWidth},
                {category_id:2,category_name:'title:'+this.refs.title.offsetWidth},
                {category_id:3,category_name:'industry'+this.refs.industryList.offsetWidth},
                {category_id:4,category_name:'left:'+this.state.currentLeft},
                {category_id:5,category_name:'test'},
                {category_id:6,category_name:'test'},
                {category_id:7,category_name:'test'},
                {category_id:8,category_name:'test'},
                {category_id:9,category_name:'industry(new)'+this.refs.industryList.offsetWidth}
            ]})
        });

    }

    startMove (e) {

        this.setState({"startPoint": e.touches[0].pageX});

    }

    handleMove (e) {
        this.setState({"industry": [
            {category_id:1,category_name:'body:'+document.body.clientWidth},
            {category_id:2,category_name:'title:'+this.refs.title.offsetWidth},
            {category_id:3,category_name:'industry'+this.refs.industryList.offsetWidth},
            {category_id:4,category_name:'left:'+this.state.currentLeft},
            {category_id:5,category_name:'test'},
            {category_id:6,category_name:'test'},
            {category_id:7,category_name:'test'},
            {category_id:8,category_name:'test'},
            {category_id:9,category_name:'industry(new)'+this.refs.industryList.offsetWidth}
        ]})

        let displacement = parseInt((parseInt(e.touches[0].pageX) - this.state.startPoint)>0?'5':'-5'),
            maxLeft = -(this.refs.industryList.offsetWidth-(document.body.clientWidth - this.refs.title.offsetWidth)),
            preLeft = this.state.currentLeft,
            currentLeft = 0;

        if ((preLeft + displacement) >= 0) {

            currentLeft = 0;

        } else if ((preLeft + displacement) <= maxLeft) {

            currentLeft = maxLeft;

        } else {

            currentLeft = preLeft + displacement;

        }

        this.setState({
            currentLeft: currentLeft,
            startPoint: e.touches[0].pageX
        });

    }

    render () {

        const {currentLeft, industry, active} = this.state;
        const listItem = industry.map((value, i) => <li
            className={active == i ? "active" : ""}
            onClick={() => {

                this.setState({"active": i});
                this.props.change(value.category_id);

            }}
            key={value.category_id}
                                                    >
            {value.category_name}
        </li>
    );

        return (
            <nav className="SlideBar">
                <p ref="title">行业分类</p>
                <ul
                    style={{"left": currentLeft}}
                    ref="industryList"
                    onTouchStart={(e) => {
                        this.startMove(e);
                    }}
                    onTouchMove={(e) => {

                        this.handleMove(e);

                    }}
                >
                    {listItem}
                </ul>
            </nav>
        );

    }
}

export default SlideBar;
