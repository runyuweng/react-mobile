import React from "react";
import "./ZhaoDaTopic.scss";
import TopBar from "../../Public/TopBar/TopBar.jsx";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";
import Loading from "../../Public/Loading/Loading.jsx";

class ZhaoDaTopic extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "pressDownX": 0, // 鼠标按下的位置
            "nowX": 0, // 鼠标移动后的位置
            "delateX": 0, // 移动的距离
            "currentX": 0,
            "topicCategory": [],
            "topics": [],
            "active": 0,
            "showLoading": true
        };
        this.topicClick = this.topicClick.bind(this);

    }


    componentDidMount () {

        this.context.changeBottomState(true);


        this._touchEvent(this.refs.navbar);

        ajax({"url": "/zhaoda/topic/topiccategory"}).
        then((data) => {

            this.setState({"topicCategory": data.contents});

        });

        ajax({"url": "/zhaoda/topic/hottopics?categoryid=-1 "}).
        then((data) => {

            this.setState({
                "topics": data.contents,
                "showLoading": false
            });

        });

    }

    topicClick (index, id) {

        this.setState({
            "active": index,
            "showLoading": true
        });
        ajax({"url": `/zhaoda/topic/hottopics?categoryid=${id}`}).
        then((data) => {

            this.setState({
                "topics": data.contents,
                "showLoading": false
            });

        });

    }

        // 滑动事件
    _touchEvent (elem) {

            // 触屏开始
        elem.addEventListener("touchstart", (e) => {

            const _this = elem;
            let isStart = true;
            const event = e || window.event;
            const pressDownX = event.touches[0].pageX;
            const left = parseInt(_this.style.left || _this.offsetLeft);

            this.setState({
                pressDownX,
                "currentX": left
            });

                // 触屏移动
            _this.addEventListener("touchmove", (e) => {

                e.preventDefault();
                if (isStart) {

                    let left = this.state.currentX;
                    const element = _this;
                    const width = element.clientWidth;
                    const windowWidth = window.innerWidth;
                    const event = e || window.event;

                    this.setState({
                        "nowX": event.touches[0].pageX,
                        "delateX": event.touches[0].pageX - this.state.pressDownX
                    });
                    left += this.state.delateX;

                        // 边界判断
                    if (windowWidth > width) {

                        return;

                    }

                    if (left > windowWidth - width - 10 && left < 0) {

                        element.style.left = `${left}px`;

                    } else if (left < windowWidth - width - 10) {

                        element.style.left = `${windowWidth - width - 10}px`;

                    } else if (left > 0) {

                        element.style.left = "0px";

                    }


                }

            });

                // 触屏结束
            _this.addEventListener("touchend", () => {

                e.preventDefault();
                if (isStart) {

                    const element = _this;
                    const currentX = parseInt(element.style.left);

                    this.setState({
                        "pressDownX": 0,
                        "nowX": 0,
                        currentX,
                        "delateX": 0
                    });

                }
                isStart = false;

            });

        });

    }

    render () {

        const {topicCategory, topics, active, showLoading} = this.state;

        const topicCategoryList = topicCategory.map((elem, index) => <li onClick={this.topicClick.bind(this, index, elem.id)} className={active == index ? "active" : ""} key={index}>{elem.topictypename}</li>);
        const topicsList = topics.map((elem, index) =>
            <Link to={`/totopic/${elem.tid}`} key={index}>
                <div className="item" key={index}>
                    <span><img src={elem.img || "/src/images/topicImg.png"} /></span>
                    <span>
                        <p>{elem.topicname}</p>
                        <p>{elem.questionnum}个问题</p>
                    </span>
                </div>
            </Link>
            );

        return (
            <div>

                <div className="container ZhaoDaTopic">
                    <header>
                        <TopBar title="话题广场" border="noboder" />
                        <div className="select">
                            <ul ref="navbar">{topicCategoryList}</ul>
                        </div>
                    </header>
                    {showLoading ? <Loading />
                    : <div className="content">
                        <div className="itemGroup">{topicsList}</div>
                    </div>}
                </div>
            </div>
        );

    }
}

ZhaoDaTopic.contextTypes = {"changeBottomState": React.PropTypes.func};

export default ZhaoDaTopic;
