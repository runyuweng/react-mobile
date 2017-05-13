import React from "react";
import "./ZhaoDaAddAnswer.scss";
import ajax from "../../../services/ajax.js";

class ZhaoDaAddAnswer extends React.PureComponent {

    constructor (props) {

        super(props);
        this.state = {
            "answerContent": "",
            "html": ""
        };
        this.submitClick = this.submitClick.bind(this);

    }

    componentDidMount () {

        this.props.showBottom(false);

    }

    addPicture () {

        this.refs.file.click();

    }

    handleFile(){
      // console.log(this.refs.file.files.item(0));
      // console.log(this.state.html);
      // console.log(window.URL.createObjectURL(this.refs.file.files.item(0)));
      this.setState({
          html:`${this.refs.input.innerHTML}<img src="${window.URL.createObjectURL(this.refs.file.files[0])}"/>`
      })
      this.refs.file.value = "";
      // ajax({file:this.refs.file,fileUrl:'http://upload.qiniu.com/'}).then((data)=>{
      //   console.log(data);
      // })


    }


    submitClick () {

    }

    setFocus (obj) {

        console.log(this.state.html);
        if (window.getSelection) { // Ie11 10 9 ff safari

            obj.focus(); // 解决ff不获取焦点无法定位问题
            var range = window.getSelection();// 创建range

            range.selectAllChildren(obj);// Range 选择obj下所有子内容
            range.collapseToEnd();// 光标移至最后

        } else if (document.selection) { // Ie10 9 8 7 6 5

            var range = document.selection.createRange();// 创建选择对象
                // Var range = document.body.createTextRange();

            range.moveToElementText(obj);// Range定位到obj
            range.collapse(false);// 光标移至最后
            range.select();

        }

    }

    render () {

        return (
            <div className="zhaoDaAddAnswer">
                <header>
                    <div className="search">
                        <span onClick={() => {

                            history.go(-1);

                        }}
                        >取消</span>
                        <span>添加回答</span>
                        <span onClick={this.submitClick}>提交</span>
                    </div>
                </header>
                <input name="file" type="file" ref="file" style={{"display": "none"}} onChange={() => this.handleFile()}/>

                <div
                    contentEditable
                    className="answercontent"
                    ref="input"
                    onInput={(e) => {

                        console.log(this.refs.input.innerHTML);
                    // Console.log(e.target.value);
                        this.setState({"html": this.refs.input.innerHTML}, () => {

                            this.setFocus(this.refs.input);

                        });

                    }}
                    dangerouslySetInnerHTML={{"__html": this.state.html}}
                />
                <footer>
                    <img src="/src/images/icon/pic.png" onClick={() => this.addPicture()} />
                </footer>
            </div>
        );

    }
}

export default ZhaoDaAddAnswer;
