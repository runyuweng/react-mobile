import React from "react";
import "./EditMg.scss";
import {Link} from "react-router";
import ajax from "../../../services/ajax.js";

export default class Select extends React.Component {
    constructor (props) {

        super(props);
        this.state = {
          type: props.type||'',
          date: []
        };
    }

    componentDidMount(){
      this.fetchDate();
    }
    
    componentWillReceiveProps(props){
      if(props.type !== this.state.type){
        this.setState({
          type: props.type
        },()=>{
          this.fetchDate();
        })
      }
    }

    fetchDate = () => {
      switch(this.state.type){
        case 'city':
          this.setState({
            data: [
              {
                id: 1,
                name: '武汉',
              },
                            {
                id: 2,
                name: '常州',
              },
                            {
                id: 3,
                name: '北京',
              }
            ]
          });
          break;
        case 'province':
          this.setState({
            data:[
              {
                id: 1,
                name: '湖北',
              },
                            {
                id: 2,
                name: '江苏',
              },
                            {
                id: 3,
                name: '浙江',
              }
            ]
          });
          break;
        case 'politics':
          this.setState({
            data:[
              {
                id: 1,
                name: '党员',
              },
                            {
                id: 2,
                name: '团员',
              },
                            {
                id: 3,
                name: '少先队员',
              }
            ]
          });
          break;
          default:break;
      }
    }

    render(){
      return (
          <div ref="topDiv" className="topDiv">
            <div className="centermain">
                <div className="mainhead">请选择</div>
                <div className="mainbody">
                    {(this.state.data||[]).map((d,i)=>{
                      return <input
                      key={d.id}
                      type="button"
                      onClick={() => {this.props.handleChange(this.state.type, d.id, d.name)}}
                      value={d.name} />})
                      }
                </div>
                <div className="mainfooter">
                    <span onClick={() => {

                        this.props.handleClose();

                    }}
                    >取消</span>
                </div>
            </div>
        </div>
      )
    }
}