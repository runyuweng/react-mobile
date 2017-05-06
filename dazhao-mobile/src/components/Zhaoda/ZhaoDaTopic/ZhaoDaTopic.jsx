import React from "react";
import "./ZhaoDaTopic.scss";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";
import {Link} from "react-router";

class ZhaoDaTopic extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            topicCategory : [
                { 
                    id:0,
                    topicName:"全部"
                },
                { 
                    id:1,
                    topicName:"行业"
                },
                { 
                    id:2,
                    topicName:"专栏"
                },{ 
                    id:3,
                    topicName:"求职"
                },
                { 
                    id:4,
                    topicName:"技能"
                },
                { 
                    id:5,
                    topicName:"名企"
                }
            ],
            topics : [
                {
                    "id":0,
                    "topicImg": "/src/images/topicImg.png",
                    "topicTitle": "职业素养",
                    "questionNum": 24
                },
                {
                    "id":1,
                    "topicImg": "/src/images/topicImg.png",
                    "topicTitle": "职业素养",
                    "questionNum": 24
                },
                {
                    "id":2,
                    "topicImg": "/src/images/topicImg.png",
                    "topicTitle": "职业素养",
                    "questionNum": 24
                },
                {
                    "id":3,
                    "topicImg": "/src/images/topicImg.png",
                    "topicTitle": "职业素养",
                    "questionNum": 24
                },
                {
                    "id":4,
                    "topicImg": "/src/images/topicImg.png",
                    "topicTitle": "职业素养",
                    "questionNum": 24
                },
                {
                    "id":5,
                    "topicImg": "/src/images/topicImg.png",
                    "topicTitle": "职业素养",
                    "questionNum": 24
                }
            ],
            active : 0
        };
        this.topicClick = this.topicClick.bind(this)

    }


    componentDidMount () {

        this.props.showBottom(true);

    }

    topicClick(index){
        this.setState({
            active: index
        })
    }

    render () {

        const { topicCategory, topics, active } = this.state;
        const topicCategoryList = topicCategory.map((elem,index)=>{
            return <li onClick={this.topicClick.bind(this,index)} className={active == index ? "active" : ""} key={elem.id}>{elem.topicName}</li>
        });
        const topicsList = topics.map((elem,index)=>{
            return(
                <Link to="/totopic" key={index}>
                    <div className="item" key={index}>
                        <span><img src={elem.topicImg} /></span>
                        <p>{elem.topicTitle}</p>
                        <p>{elem.questionNum}个问题</p>
                    </div>
                </Link>
            )
        })

        return (
            <div className="container ZhaoDaTopic">
                <header>
                    <TopBar title="话题广场" border="noboder" />
                    <div className="select">
                        <ul>{topicCategoryList}</ul>
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
