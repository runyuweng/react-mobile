import React from "react";
import "./Company.scss";
import {Link} from "react-router";
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";

class Company extends React.Component {


    render () {

        return (
            <div className="Company">
                <header>
                    <TopBar border='border' title="企业详情" img="/src/images/love.png"/>
                </header>

                <div id="jobTop">
                    <span className="joblog"><img src="/src/images/ali.png" /></span>
                    <h2>阿里巴巴网络技术有限公司</h2>
                    <div>
                        <span><img src="/src/images/source58.png" /><em>上海</em></span>
                        <span>认证</span>
                    </div>
                    <p>
                        <span>互联网</span>
                        <em>|</em>
                        <span>外商独资</span>
                        <em>|</em>
                        <span>上市</span>
                        <em>|</em>
                        <span>1000人以上</span>
                    </p>
                </div>

                <div className="companyMain">
                    <ul>
                        <Link to="/company/compantintro"  activeClassName="active">
                            <li>企业介绍</li>
                        </Link>
                        <Link to="/company/positions"  activeClassName="active">
                            <li>招聘岗位</li>
                        </Link>
                        <li>空中宣讲</li>
                    </ul>
                    {this.props.children}

                </div>

            </div>
        );

    }
}
export default Company;
