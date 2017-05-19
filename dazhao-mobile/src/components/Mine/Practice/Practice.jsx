import React from "react";
import "./Practice.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

class Practice extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "practiceExpre": [
                {
                    "uid": 1,
                    "entrydate": "2014.07",
                    "leavedate": "2014-09",
                    "company_name": "德勤华永会计师事务所",
                    "job": "企业风险服务部实习生",
                    "city": "上海",
                    "practiceDetail": ["简明扼要，尽可能用专业化的词语写出工作职责，但不要将其夸大", "要用点句，以形动词开始，三到五句为佳，避免大段文字", "突出重点，工作成就宜精确化、数字化，切勿写在公司感受", "根据目标职位需要的能力，有针对性的挑选内容"]
                },
                {
                    "uid": 2,
                    "entrydate": "2014.07",
                    "leavedate": "2014-09",
                    "company_name": "科尔尼(上海)企业咨询有限公司",
                    "job": "咨询师助理",
                    "city": "上海",
                    "practiceDetail": ["简明扼要，尽可能用专业化的词语写出工作职责，但不要将其夸大", "要用点句，以形动词开始，三到五句为佳，避免大段文字", "突出重点，工作成就宜精确化、数字化，切勿写在公司感受", "根据目标职位需要的能力，有针对性的挑选内容"]
                }
            ]
        };
        this.fetchPracticeExpre = this.fetchPracticeExpre.bind(this);

    }

    componentDidMount () {

        this.fetchPracticeExpre();

    }


    fetchPracticeExpre () {

        ajax({"url": `/basicmessage?resumeid=${this.props.location.query.resumeid}`}).
        then((data) => {

            if (data.code === "S01") {

                const practiceExpre = data.contents;

                this.setState({practiceExpre});

            } else if (data.code === "E01") {

                this.setState({"practiceExpre": []});

            }

        });

    }

    render () {

        const {practiceExpre} = this.state;

        const practiceExpreList = practiceExpre.map((value, i) => {

            const practiceDetailList = value.practiceDetail.map((elem, index) =>
                <em key={index}>{`${index + 1}、${elem}`}</em>
                );


            return (
                <div key={i} className="edititems">

                    <div>
                        <em>实习单位</em>
                        <p>
                            <span>{value.company_name}</span>
                        </p>
                    </div>

                    <div>
                        <em>实习职位</em>
                        <p>
                            <span>{value.job}</span>
                        </p>
                    </div>

                    <div>
                        <em>实习城市</em>
                        <p>
                            <span>{value.city}</span>
                        </p>
                    </div>

                    <div>
                        <em>入职时间</em>
                        <p>
                            <span>{value.entrydate}</span>
                        </p>
                    </div>

                    <div>
                        <em>离职时间</em>
                        <p>
                            <span>{value.leavedate}</span>
                        </p>
                    </div>

                    <div>
                        <em>工作内容</em>
                        <p>
                            <span>TIPS：</span><br />
                            <span>{practiceDetailList}</span>
                        </p>
                    </div>

                </div>
            );

        });

        return (
            <div className="Practice">
                <div className="TopBar">
                    <span onClick={(e) => {

                        history.back();

                    }}
                    >
                        <img src="/src/images/arrow-left.png" />
                    </span>
                    <span>编辑实习信息</span>
                    <span>保存</span>
                </div>

                {practiceExpreList}

                <div className="pracBot">
                    <p><span><img src="/src/images/add.png" /></span>
                        <b>继续添加</b></p>
                </div>

            </div>
        );

    }
}
export default Practice;
