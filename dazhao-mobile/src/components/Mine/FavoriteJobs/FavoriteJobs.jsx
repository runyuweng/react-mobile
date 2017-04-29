import React from 'react';
import './FavoriteJobs.scss';

class FavoriteJobs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        jobs:[
            {
                company:{
                    img: '/src/images/ali.png',
                    name:'社会科学文献出版社',
                    city:'北京市',
                    type:'广告/公关/会展',
                    stage:'成熟'
                },
                job_name:'市场部社会学实习生'
            },
            {
                company:{
                    img: '/src/images/ali.png',
                    name:'社会科学文献出版社',
                    city:'北京市',
                    type:'广告/公关/会展',
                    stage:'成熟'
                },
                job_name:'市场部社会学实习生'
            },
            {
                company:{
                    img: '/src/images/ali.png',
                    name:'社会科学文献出版社',
                    city:'北京市',
                    type:'广告/公关/会展',
                    stage:'成熟'
                },
                job_name:'市场部社会学实习生'
            },
            {
                company:{
                    img: '/src/images/ali.png',
                    name:'社会科学文献出版社',
                    city:'北京市',
                    type:'广告/公关/会展',
                    stage:'成熟'
                },
                job_name:'市场部社会学实习生'
            },
            {
                company:{
                    img: '/src/images/ali.png',
                    name:'社会科学文献出版社',
                    city:'北京市',
                    type:'广告/公关/会展',
                    stage:'成熟'
                },
                job_name:'市场部社会学实习生'
            },
            {
                company:{
                    img: '/src/images/ali.png',
                    name:'社会科学文献出版社',
                    city:'北京市',
                    type:'广告/公关/会展',
                    stage:'成熟'
                },
                job_name:'市场部社会学实习生'
            },
            {
                company:{
                    img: '/src/images/ali.png',
                    name:'社会科学文献出版社',
                    city:'北京市',
                    type:'广告/公关/会展',
                    stage:'成熟'
                },
                job_name:'市场部社会学实习生'
            }
        ]
    }
  }

  render() {
        const {jobs} = this.state;
        const jobList = jobs.map((value, i) => <div className="jobitems" key={i}>
            <span className="pics"><img src={value.company.img} /></span>
            <div className="jobintro">
                <h2>{value.job_name}</h2>
                <h3>{value.company.name}</h3>
                <span>
                    <em>{value.company.city}</em>
                    <em>学历</em>
                </span>
                <span>
                    <em>{value.company.type}</em>
                    <b>|</b>
                    <em>外商独资</em>
                    <b>|</b>
                    <em>{value.company.stage}</em>
                    <b>|</b>
                    <em>100人以上</em>
                </span>
            </div>
        </div>);
    return (
      <div id="favoriteJobs">
        {jobList}
      </div>
    );
  }
}

export default FavoriteJobs;