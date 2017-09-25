import React from "react";
import "./FavoriteCompanys.scss";
import ajax from "../../../services/ajax.js";
import {Link} from "react-router";
import axios from "axios";
import { getCookie } from "../../../services/tools.js";

class FavoriteCompanys extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            "page": 1,
            "enterprise": []
        };
        this.getInitData = this.getInitData.bind(this);
        // this.fetchCollectionEnterprise = this.fetchCollectionEnterprise.bind(this);
    }

    getInitData() {
        axios.get(`http://www.dazhao100.com/api.php?u=getComfavorite&uid=${getCookie("uid")}`).then((data) => {
            if (data.data.error == "0") {
                const enterprise = data.data.listjson
                this.setState({enterprise})
                console.log(this.state.enterprise)
            }
        })
    }

    componentDidMount () {
        this.getInitData()
        // this.fetchCollectionEnterprise(this.state.page);
    }

    // fetchCollectionEnterprise (page) {
    //     ajax({"url": `/zhaoda/company/mycarecompany?page=${page}`}).
    //     then((data) => {
    //         if (data.code === "S01") {
    //             this.context.changeMessageContent(data.message);
    //             const enterprise = data.contents;
    //             this.setState({"enterprise": this.state.enterprise.concat(enterprise)});
    //         } else if (data.code === "S02") {
    //             this.context.changeMessageContent(data.message);
    //             const enterprise = data.contents;
    //             this.setState({"enterprise": this.state.enterprise.concat(enterprise)});
    //         } else if (data.code === "E01") {
    //             this.context.changeMessageContent(data.message);
    //             this.setState({"enterprise": []});
    //         } else {
    //             this.context.changeMessageContent(data.message);
    //         }
    //     });
    // }

    render () {
        const {enterprise} = this.state;
        const enterpriseList = enterprise.map((value, i) => {
            console.log(value.openingslist.length)
            const openingslist = value.openingslist.map((elem, index) =>
                    index === value.openingslist.length - 1
                        ? <span key={index}>{elem.tb_name}</span>
                    : <span key={index}>{elem.tb_name}、</span>
                );

            // return (
            //     <Link key={i} to={`/company/${value.companyid}`}>
            //         <div className="jobitems">
            //             <span className="pics">
            //                 <img src={value.img} />
            //             </span>
            //             <div className="jobintro">
            //                 <h2>{value.name}<span>认证</span></h2>
            //                 <h3>[<em>{value.jobs.length}</em>个]{jobs}</h3>
            //                 <span className="address">
            //                     <em>{value.city}</em>
            //                 </span>
            //                 <span>
            //                     <em>{value.type}</em>
            //                     <b>|</b>
            //                     <em>外商独资</em>
            //                     <b>|</b>
            //                     <em>{value.stage}</em>
            //                     <b>|</b>
            //                     <em>{value.numbers}</em>
            //                 </span>
            //             </div>
            //         </div>
            //     </Link>
            // );

            return (
                <Link key={i} to={`/company/${value.companyid}`}>
                    <div className="jobitems">
                        <span className="pics">
                            <img src={value.img} />
                        </span>
                        <div className="jobintro">
                            <h2>{value.companyname}<span>认证</span></h2>
                            <h3>[<em>{value.openingslist.length}</em>个]{openingslist}</h3>
                            <span className="address">
                                <em>{value.city}</em>
                            </span>
                            <span>
                                <em>{value.industry}</em>
                                <b>|</b>
                                <em>{value.unittype}</em>
                                <b>|</b>
                                <em>{value.tb_stage}</em>
                                <b>|</b>
                                <em>{value.unitsize}</em>
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

FavoriteCompanys.contextTypes = {"changeMessageContent": React.PropTypes.func};

export default FavoriteCompanys;
