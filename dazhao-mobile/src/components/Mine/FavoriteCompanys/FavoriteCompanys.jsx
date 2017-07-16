import React from "react";
import "./FavoriteCompanys.scss";
import ajax from "../../../services/ajax.js";
import { Link } from 'react-router';

class FavoriteCompanys extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            "page": 1,
            "enterprise": [
                // {
                //     "company_id": "0",
                //     "img": "http://www.dazhao100.com/update/1491443750l009127445.png",
                //     "company_name": "阿里巴巴网络技术有限公司",
                //     "company_city": "上海",
                //     "company_type": "互联网",
                //     "company_stage": "上市",
                //     "company_numbers": "100人以上",
                //     "jobs": [
                //         "算法实习",
                //         "JAVA",
                //         "web"
                //     ]
                // },
                // {
                //     "company_id": "1",
                //     "img": "http://www.dazhao100.com/update/1491443750l009127445.png",
                //     "company_name": "阿里巴巴网络技术有限公司",
                //     "company_city": "上海",
                //     "company_type": "互联网",
                //     "company_stage": "上市",
                //     "company_numbers": "100人以上",
                //     "jobs": [
                //         "算法实习",
                //         "JAVA",
                //         "web"
                //     ]
                // }
            ]
        };

        this.fetchCollectionEnterprise = this.fetchCollectionEnterprise.bind(this);

    }

    componentDidMount () {

        this.fetchCollectionEnterprise(this.state.page);

    }

    fetchCollectionEnterprise (page) {

        ajax({"url": `/zhaoda/company/mycarecompany?page=${page}`}).
        then((data) => {

            if (data.code === "S01") {

                this.context.changeMessageContent(data.message);

                const enterprise = data.contents;

                this.setState({"enterprise": this.state.enterprise.concat(enterprise)});

            } else if (data.code === "S02") {

                this.context.changeMessageContent(data.message);

                const enterprise = data.contents;

                this.setState({"enterprise": this.state.enterprise.concat(enterprise)});

            } else if(data.code === "E01"){
                
                this.context.changeMessageContent(data.message);
                this.setState({"enterprise": []});

            }

        });

    }

    render () {

        const {enterprise} = this.state;

        const enterpriseList = enterprise.map((value, i) => {

            const jobs = value.jobs.map((elem, index) =>
                    index === value.jobs.length - 1
                        ? <span key={index}>{elem.job_name}</span>
                    : <span key={index}>{elem.job_name}、</span>
                );


            return (
                <Link to={`/company/${value.companyid}`}>
                    <div className="jobitems" key={i}>
                        <span className="pics">
                            <img src={value.img} />
                        </span>
                        <div className="jobintro">
                            <h2>{value.name}<span>认证</span></h2>
                            <h3>[<em>{value.jobs.length}</em>个]{jobs}</h3>
                            <span className="address">
                                <em>{value.city}</em>
                            </span>
                            <span>
                                <em>{value.type}</em>
                                <b>|</b>
                                <em>外商独资</em>
                                <b>|</b>
                                <em>{value.stage}</em>
                                <b>|</b>
                                <em>{value.numbers}</em>
                            </span>
                        </div>
                    </div>
                </Link>
            );

        });

        return (
            <div id="favoriteCompany">
                {enterpriseList}
            </div>
        );

    }
}

FavoriteCompanys.contextTypes = {
    changeMessageContent : React.PropTypes.func
}

export default FavoriteCompanys;
