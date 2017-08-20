import React from "react";
import "./Home.scss";
import {Link} from "react-router";

class Home extends React.Component {
    constructor (props) {

        super(props);
        this.state = {"currentNum": 0};

    }

    componentDidMount () {
        this.props.changeBottomState(true);
        

        const bannerChange = setInterval(() => {

            if (this.state.currentNum < 2) {

                this.setState({"currentNum": Number(this.state.currentNum) + 1});

            } else {

                this.setState({"currentNum": 0});

            }

        }, 4000);

        this.setState({bannerChange});

    }

    componentWillUnmount () {

        clearInterval(this.state.bannerChange);

    }


    render () {

        const {currentNum} = this.state;
        const images = ["/src/images/banner1.jpg", "/src/images/banner2.png", "/src/images/banner3.png"];
        const activeList = ["active0", "active1", "active2"];
        const dotList = images.map((value, i) =>
            <div key={i} onClick={() => {

                this.setState({"currentNum": i});

            }}
            >.</div>
      );
        const currentImage = images[currentNum];
        const activeStyle = activeList[currentNum];


        return (
            <div className="index">
                <header>
                    <img src={currentImage} />
                    <div className="search">
                        <input type="text" placeholder="课程名称" />
                        <button>
                            <img src="/src/images/searchico.png" />
                        </button>
                    </div>
                    <div className={`rotation ${activeStyle}`}>
                        {dotList}
                    </div>
                </header>
                <div className="container">
                    <section>
                        <div className="title"><span>课程预告</span></div>
                        <div className="content-large">
                            <img src="/src/images/1487917069l108992947.png" />
                            <div className="tips">2月25日  15：00-19：00</div>
                        </div>
                    </section>
                    <section>
                        <div className="title">
                            <span>课程推荐</span>
                            <span className="more">更多 ></span>
                        </div>
                        <div className="content-two">
                            <div className="content">
                                <img src="/src/images/1487917069l108992947.png" />
                                <div className="info">基于大数据的人工...</div>
                            </div>
                            <div className="content">
                                <img src="/src/images/1481979697l859459990.png" />
                                <div className="info">读MBTI，如何更好...</div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="title">
                            <span>职场通识</span>
                            <span className="more">更多 ></span>
                        </div>
                        <div className="content-two">
                            <div className="content">
                                <img src="/src/images/1481979697l859459990.png" />
                                <div className="info">读MBTI，如何更好...</div>
                            </div>
                            <div className="content">
                                <img src="/src/images/1481373795l515443385.png" />
                                <div className="info">情商低到底有多可...</div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="title">
                            <span>行业解读</span>
                            <span className="more">更多 ></span>
                        </div>
                        <div className="content-two">
                            <div className="content">
                                <img src="/src/images/1487917069l108992947.png" />
                                <div className="info">基于大数据的人工...</div>
                            </div>
                            <div className="content">
                                <img src="/src/images/1481189424l698185646.png" />
                                <div className="info">资本运作弄潮儿--...</div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="title">
                            <span>学长学姐</span>
                            <span className="more">更多 ></span>
                        </div>
                        <div className="content-two">
                            <div className="content">
                                <img src="/src/images/1478935977l996178167.jpg" />
                                <div className="info">如何跨专业准备...</div>
                            </div>
                            <div className="content">
                                <img src="/src/images/1478937533l353542196.jpg" />
                                <div className="info">应届生应该选择大...</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );

    }
}
export default Home;
