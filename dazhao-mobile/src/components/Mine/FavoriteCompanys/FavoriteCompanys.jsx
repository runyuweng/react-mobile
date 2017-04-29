import React from 'react';
import './FavoriteCompanys.scss';

class FavoriteCompanys extends React.Component {

  constructor(props) {
    super(props);
    this.state={
        enterprise:[
            {
                img: '/src/images/ali.png',
                name:'社会科学文献出版社',
                city:'北京市',
                type:'广告媒体',
                stage:'成熟',
                numbers:'1000以上'
            },
            {
                img: '/src/images/ali.png',
                name:'社会科学文献出版社',
                city:'北京市',
                type:'广告媒体',
                stage:'成熟',
                numbers:'1000以上'
            },
            {
                img: '/src/images/ali.png',
                name:'社会科学文献出版社',
                city:'北京市',
                type:'广告媒体',
                stage:'成熟',
                numbers:'1000以上'
            },
            {
                img: '/src/images/ali.png',
                name:'社会科学文献出版社',
                city:'北京市',
                type:'广告媒体',
                stage:'成熟',
                numbers:'1000以上'
            },
            {
                img: '/src/images/ali.png',
                name:'社会科学文献出版社',
                city:'北京市',
                type:'广告媒体',
                stage:'成熟',
                numbers:'1000以上'
            },
            {
                img: '/src/images/ali.png',
                name:'社会科学文献出版社',
                city:'北京市',
                type:'广告媒体',
                stage:'成熟',
                numbers:'1000以上'
            }
        ]
    }
  }

  render() {
    const { enterprise } = this.state;

    const enterpriseList = enterprise.map((value, i) =>
        <div className="jobitems" key={i}>
            <span className="pics">
                <img src={value.img} />
            </span>
            <div className="jobintro">
                <h2>{value.name}<span>认证</span></h2>
                <h3><span>[<em>8</em>个]推荐算法实习</span>、<span>JAVA研发工程</span>、</h3>
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
        );
    return (
      <div id="favoriteCompany">
        {enterpriseList}
      </div>
    );
  }
}

export default FavoriteCompanys;
