import React from "react";
import "./Loading.scss";
import {Link} from "react-router";

class Loading extends React.Component {

    constructor (props) {

        super(props);
        this.state = {
            height:0
        }

    }
    componentDidMount(){
        const pageHeight = document.body.clientHeight,
              winHeight = window.screen.height;
        console.log('pageHeight',pageHeight);
        console.log('winHeight',winHeight);
        this.setState({
            height: (pageHeight > winHeight ? pageHeight : winHeight)
        })
    }


    render () {
        const {height} = this.state;


        return (
            <div className="loading" style={{height:height}}>
                <div className="content">
                    <div className="dot1 dot"></div>
                    <div className="dot2 dot"></div>
                </div>
            </div>
        );

    }
}
export default Loading;
