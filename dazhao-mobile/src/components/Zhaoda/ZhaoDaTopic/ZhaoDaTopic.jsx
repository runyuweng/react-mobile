import React from "react";
import "./ZhaoDaTopic.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import {Link} from "react-router";

class ZhaoDaTopic extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "pressDownX": 0, // 鼠标按下的位置
            "nowX": 0, // 鼠标移动后的位置
            "delateX": 0, // 移动的距离
            "currentX": 0,
            "topicCategory": [
                {
                    "id": 0,
                    "topicName": "全部"
                },
                {
                    "id": 1,
                    "topicName": "行业"
                },
                {
                    "id": 2,
                    "topicName": "专栏"
                }, {
                    "id": 3,
                    "topicName": "求职"
                },
                {
                    "id": 4,
                    "topicName": "技能"
                },
                {
                    "id": 5,
                    "topicName": "名企"
                },
                {
                    "id": 6,
                    "topicName": "求职"
                },
                {
                    "id": 7,
                    "topicName": "技能"
                },
                {
                    "id": 8,
                    "topicName": "名企"
                }
            ],
            "topics": [
                {
                    "id": 0,
                    "topicImg": "/src/images/topicImg.png",
                    "topicTitle": "职业素养",
                    "questionNum": 24
                },
                {
                    "id": 1,
                    "topicImg": "/src/images/topicImg.png",
                    "topicTitle": "职业素养",
                    "questionNum": 24
                },
                {
                    "id": 2,
                    "topicImg": "/src/images/topicImg.png",
                    "topicTitle": "职业素养",
                    "questionNum": 24
                },
                {
                    "id": 3,
                    "topicImg": "/src/images/topicImg.png",
                    "topicTitle": "职业素养",
                    "questionNum": 24
                },
                {
                    "id": 4,
                    "topicImg": "/src/images/topicImg.png",
                    "topicTitle": "职业素养",
                    "questionNum": 24
                },
                {
                    "id": 5,
                    "topicImg": "/src/images/topicImg.png",
                    "topicTitle": "职业素养",
                    "questionNum": 24
                }
            ],
            "active": 0
        };
        this.topicClick = this.topicClick.bind(this);

    }


    componentDidMount () {

        this.props.showBottom(true);

        this._touchEvent(this.refs.navbar);

    }

    topicClick (index) {

        this.setState({"active": index});

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

        const {topicCategory, topics, active} = this.state;
        const topicCategoryList = topicCategory.map((elem, index) => <li onClick={this.topicClick.bind(this, index)} className={active == index ? "active" : ""} key={elem.id}>{elem.topicName}</li>);
        const topicsList = topics.map((elem, index) =>
            <Link to="/totopic" key={index}>
                <div className="item" key={index}>
                    <span><img src={elem.topicImg} /></span>
                    <p>{elem.topicTitle}</p>
                    <p>{elem.questionNum}个问题</p>
                </div>
            </Link>
            );

        return (
            <div className="container ZhaoDaTopic">
                <header>
                    <TopBar title="话题广场" border="noboder" />
                    <div className="select">
                        <ul ref="navbar">{topicCategoryList}</ul>
                    </div>
                </header>
                <div className="content">
                    <div className="itemGroup">{topicsList}</div>
                </div>
            </div>
        );

    }
}

export default ZhaoDaTopic;
