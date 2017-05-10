import React from 'react';
import './ZhaoDaComents.scss';
import TopBar from "../../MainLayout/TopBar/TopBar.jsx";

class ZhaoDaComents extends React.Component {

  constructor(props) {
    super(props);
  }

    componentDidMount () {

        this.props.showBottom(false);

    }

  render() {
    return (
        <div className="ZhaoDaComents">
            <header>
                <TopBar title="评论" border="boder" />
            </header>
            <div className="comentsmain">
                <div className="comenttop">
                    <div className="left">
                        <div className="publisher">
                            Michael
                            <span className="vip"><img src="/src/images/vip.png" /></span>，
                            <span>骨灰级教练</span>
                        </div>
                        <div className="specialistComment">
                            这个问题，还得要看企业的需求，比如说一些企业的技术岗位，这些企业在招聘介绍里就会写清楚研究生学
                        </div>
                    </div>
                    <span><img src="/src/images/Back_Button.png" alt="right" /></span>
                </div>
                <div className="comments">
                    <div className="commentItem">
                        <div className="name"><span>李华</span><span className="userpic"><img src="/src/images/user.png" alt="user" /></span></div>
                        <div className="comment">
                            谢谢老师的指点。谢谢老师的指点。谢谢老师的指点。谢谢老师的指点。谢谢老师的指点。
                        </div>
                    </div>
                    <div className="commentItem">
                        <div className="name"><span>李华</span><span className="userpic"><img src="/src/images/user.png" alt="user" /></span></div>
                        <div className="comment">
                            谢谢老师的指点。谢谢老师的指点。谢谢老师的指点。谢谢老师的指点。谢谢老师的指点。
                        </div>
                    </div>
                    <div className="commentItem">
                        <div className="name"><span>李华</span><span className="userpic"><img src="/src/images/user.png" alt="user" /></span></div>
                        <div className="comment">
                            谢谢老师的指点。谢谢老师的指点。谢谢老师的指点。谢谢老师的指点。谢谢老师的指点。
                        </div>
                    </div>
                </div>
            </div>
            <div className="commentbox">
                <input type="text" placeholder="非常不错的建议" />
                <span>发表评论</span>
            </div>
        </div>
    );
  }
}

export default ZhaoDaComents;