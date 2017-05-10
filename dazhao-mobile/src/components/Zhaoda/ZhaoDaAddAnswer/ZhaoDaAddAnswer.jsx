import React from 'react';
import './ZhaoDaAddAnswer.scss';

class ZhaoDaAddAnswer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
      this.props.showBottom(false);
  }

  render() {
    return (
      <div className="zhaoDaAddAnswer">
        <header>
            <div className="search">
                <span onClick={() => {

                    history.go(-1);

                }}
                >取消</span>
                <span>添加回答</span>
                <span>提交</span>
            </div>
        </header>
        <div className="answercontent">
            <input type="text" placeholder="填写回答内容" />
        </div>
      </div>
    );
  }
}

export default ZhaoDaAddAnswer;