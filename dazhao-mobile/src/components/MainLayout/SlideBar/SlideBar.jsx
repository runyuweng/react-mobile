import React from "react";
import "./SlideBar.scss";
import {Link} from "react-router";


class SlideBar extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "industryWidth": "",
            "startPoint": 0,
            "currentLeft": 0,
            "active": 0,
            "industry": []
        };

    }

    componentWillReceiveProps (props) {

        this.setState({"industry": props.industry});

    }

    startMove (e) {

        this.setState({"startPoint": e.touches[0].pageX});

    }

    handleMove (e) {

        let displacement = parseInt(parseInt(e.touches[0].pageX) - this.state.startPoint > 0 ? "5" : "-5"),
            maxLeft = -(this.refs.industryList.offsetWidth - (document.body.clientWidth - this.refs.title.offsetWidth)),
            preLeft = this.state.currentLeft,
            currentLeft = 0;

        if (preLeft + displacement >= 0) {

            currentLeft = 0;

        } else if (preLeft + displacement <= maxLeft) {

            currentLeft = maxLeft;

        } else {

            currentLeft = preLeft + displacement;

        }

        this.setState({
            currentLeft,
            "startPoint": e.touches[0].pageX
        });

    }

    render () {

        const {currentLeft, industry, active, industryWidth} = this.state;
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

                <p ref="title">行业分类<em>|</em></p>

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
