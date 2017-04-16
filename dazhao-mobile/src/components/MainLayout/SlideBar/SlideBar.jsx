import React from "react";
import "./SlideBar.scss";
import {Link} from "react-router";


class SlideBar extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "startPoint": 0,
            "currentLeft": 0,
            "currentWidth": 0,
            "titleWidth": 0,
            "industry": [],
            "active": 0
        };

    }

    componentWillReceiveProps (props) {

        this.setState({"industry": props.industry}, () => {

            this.setState({
                "currentWidth": this.refs.industryList.offsetWidth,
                "titleWidth": this.refs.title.offsetWidth
            });

        });

    }

    startMove (e) {

        this.setState({"startPoint": e.touches[0].pageX});

    }

    handleMove (e) {

        let displacement = parseInt((e.touches[0].pageX - this.state.startPoint)/10),
            maxLeft = this.state.currentWidth - (document.body.clientWidth - this.state.titleWidth),
            currentLeft = 0;

        if (this.state.currentLeft + displacement >= 0) {

            currentLeft = 0;

        } else if (-(this.state.currentLeft + displacement) >= maxLeft) {

            currentLeft = -maxLeft;

        } else {

            currentLeft = this.state.currentLeft + displacement;

        }

        this.setState({currentLeft});

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
