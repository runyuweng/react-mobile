import React from "react";
import "./ZhaoDaSearch.scss";
import ZhaoDaSearchTop from "../ZhaoDaSearchTop/ZhaoDaSearchTop.jsx";
import {Link} from "react-router";

class ZhaoDaSearch extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
            "Keyword": "",
            "response": [
                {
                    "id": 1,
                    "title": "研究生和本科学历在求职过程中真的会有很大影响吗？",
                    "answer": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学..."
                },
                {
                    "id": 2,
                    "title": "研究生和本科学历在求职过程中真的会有很大差别吗？",
                    "answer": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学..."
                },
                {
                    "id": 3,
                    "title": "研究生和本科学历在求职过程中真的会有很大影响吗？",
                    "answer": "这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学..."
                }
            ]
        };

    }

    render () {

        const {Keyword, response} = this.state;
        const responseList = response.map((item) =>
            <div className="items" key={item.id}>
                <Link to="/toquestion"><span>{item.title}</span></Link>
                <Link to="/response"><p>{item.answer}</p></Link>
            </div>
      );


        return (
            <div className="ZhaoDaSearch">
                <ZhaoDaSearchTop />
                <div className="getting">
                    {/*
          <div className="items">
            <Link to = "/response"><span><b>研究生</b>和本科学历在求职过程中真的会有很大差别吗？</span></Link>
            <p>这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚<b>研究生</b>学...</p>
          </div>

          <div className="items">
            <span><b>研究生</b>和本科学历在求职过程中真的会有很大差别吗？</span>
            <p>这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚<b>研究生学</b>...</p>
          </div>

          <div className="items">
            <span><b>研究生</b>和本科学历在求职过程中真的会有很大差别吗？</span>
            <p>这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚<b>研究生学</b>...</p>
          </div>

          <div className="items">
            <span><b>研究生</b>和本科学历在求职过程中真的会有很大差别吗？</span>
            <p>这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚<b>研究生学</b>...</p>
          </div>
            */}
                    {responseList}
                </div>
            </div>
        );

    }
}

export default ZhaoDaSearch;
