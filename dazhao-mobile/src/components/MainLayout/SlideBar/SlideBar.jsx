import React from 'react';
import "./SlideBar.scss";
import { Link } from 'react-router';

class SlideBar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        startPoint : 0,
        currentPoint : 0,
        currentLeft : 0,
        currentWidth : 0,
        titleWidth : 0,
        industry : [],
        active : 0
    }
  }

  componentWillReceiveProps(props){
      console.log(props);
      this.setState({
          industry : props.industry
      },()=>{
          this.setState({
              currentWidth : this.refs.industryList.offsetWidth,
              titleWidth : this.refs.title.offsetWidth,
          })
      })
  }

  startMove(e){
      this.setState({
          startPoint: e.touches[0].pageX
      })
  }
  handleMove(e){
      let displacement = e.touches[0].pageX-this.state.startPoint,
            minLeft = this.state.currentWidth-(document.body.clientWidth-this.state.titleWidth),
            currentLeft = displacement > 0 ? 0 : (displacement < -minLeft ? -minLeft : displacement);
      this.setState({currentLeft: currentLeft});
  }

  render() {
    const { currentLeft, industry, active } = this.state;
    const listItem = industry.map((value,i)=>{
        return (<li
            className = {active == i ?"active" : ""}
            onClick = {()=>{
                this.setState({
                    active:i
                })
            }}
            key={value.industry_id}>
                {value.industry_name}
            </li>)
    })

    return(
        <nav className="SlideBar">
          <p ref = "title">行业分类</p>
          <ul
           style = {{"left":currentLeft}}
           ref="industryList"
           onTouchStart={(e)=>{this.startMove(e)}}
           onTouchMove={(e)=>{this.handleMove(e)}}
          >
            {listItem}
          </ul>
        </nav>
    )
  }
}
export default SlideBar;
