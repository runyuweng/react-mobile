import React from "react";
import "./ZhaoDaAddAnswer.scss";
import ajax from "../../../services/ajax.js";
import {hashHistory} from "react-router";

class ZhaoDaAddAnswer extends React.PureComponent {

    constructor (props) {

        super(props);
        this.state = {
            "answerContent": "",
            "html": "填写回答内容...",
            "fileStore": {},
            "qid": props.params.qid,
            "bottom": 0
        };
        this.submitClick = this.submitClick.bind(this);

    }

    componentDidMount () {

        this.props.changeBottomState(false);

    }

    addPicture () {

        this.refs.file.click();

    }

    handleFile () {

        if (this.refs.file.files.length) {

            const fileStore = this.state.fileStore;

            fileStore[this.refs.file.files[0].name] = this.refs.file.files[0];
            this.setState({
                "html": `${this.refs.input.innerHTML}<img location="${this.refs.file.files[0].name}" src="${window.URL.createObjectURL(this.refs.file.files[0])}"/>`,
                fileStore
            });

        }

    }

    handleCallback (data, i) {

        let arr = [],
            length = this.state.html.split("location").length;

        for (let n = 0; n < length; n++) {

            arr.push(this.state.html.split("location")[n]);

        }
        let newHtml = "";
        const newItem = arr[i + 1].replace(/src\=\"[^\"]*(?=\")/g, `src="http://oq0303egt.bkt.clouddn.com/${data.key}`);

        arr[i + 1] = newItem;
        for (let n = 0; n < arr.length; n++) {

            if (n === 0) {

                newHtml = arr[0];

            } else {

                newHtml = `${newHtml}location${arr[n]}`;

            }

        }
        this.setState({"html": newHtml});

    }


    submitClick () {

        const that = this;

        if (this.refs.input.innerHTML.length <= 5) {

            this.props.changeMessageContent("最少输入五个字");

        } else {

            this.setState({"html": this.refs.input.innerHTML}, () => {

                const imageUrl = this.state.html.match(/location\=\"[^\"]*(?=\")/g);

                if (imageUrl) {

                    const files = imageUrl.map((value) => {

                        const key = value.slice(10, value.length);


                        return this.state.fileStore[key];

                    });

                    ajax({
                        "url": "/zhaoda/getqiniutoken",
                        "noParse": true
                    }).
            then((token) => {

                files.map((value, i) => {

                    ajax({
                        "fileUrl": "http://upload.qiniu.com/",
                        "file": value,
                        token
                    }).
                then((data) => {

                    that.handleCallback(data, i);

                });

                });

            }).
            then(() => {

                ajax({
                    "url": "/zhaoda/question/addanswer",
                    "method": "POST",
                    "data": `answer=${this.state.html}&qid=${this.state.qid}`
                }).
              then((data) => {

                  hashHistory.push({
                      "pathname": `toquestion/${this.state.qid}`,
                      "query": {}
                  });
                  // That.props.showMessage("回答成功");


              });

            });

                } else {

                    ajax({
                        "url": "/zhaoda/question/addanswer",
                        "method": "POST",
                        "data": `answer=${this.state.html}&qid=${this.state.qid}`
                    }).
          then((data) => {

              hashHistory.push({
                  "pathname": `toquestion/${this.state.qid}`,
                  "query": {}
              });

          });

                }

            });


        }


    }

    setFocus (obj) {

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

    handleFocus = () => {

        if (this.state.html === "填写回答内容...") {

            this.setState({"html": ""});

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
                <input name="file" type="file" ref="file" style={{"display": "none"}} onChange={() => this.handleFile()} />

                <div
                    onFocus={this.handleFocus}
                    contentEditable
                    className="answercontent"
                    ref="input"
                    dangerouslySetInnerHTML={{"__html": this.state.html}}
                />
                <footer name="footer" style={{"bottom": this.state.bottom}}>
                    <img src="/src/images/icon/pic.png" onClick={() => this.addPicture()} />
                </footer>
            </div>
        );

    }
}

export default ZhaoDaAddAnswer;
