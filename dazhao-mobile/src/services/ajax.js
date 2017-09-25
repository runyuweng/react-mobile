import {
  setCookie,
  getCookie,
  delCookie
} from './tools.js';
import {
  hashHistory
} from "react-router";

export default function ajax(options) {

  let config = {
    url: 'http://115.159.59.188' + options.url,
    method: options.method || "GET",
    async: options.async || true,
    data: options.data || '',
    header: options.header || {},
    file: options.file || '',
    fileUrl: options.fileUrl || '',
    noParse: options.noParse || '',
    qiniuToken: options.token || '',
    listener: options.obj
  }

  const tool = {
    createXhr: () => {
      if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        return new XMLHttpRequest();
      } else { // code for IE6, IE5
        return new ActiveXObject("Microsoft.XMLHTTP");
      }
    },
    sendXhr: () => {
      if (!config.file) {
        xhr.open(config.method, config.url, config.async);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        if (getCookie("token")) {
          xhr.setRequestHeader("token", getCookie("token"));
        }

        xhr.send(config.data);
      } else {
        xhr.open("POST", config.fileUrl, false);
        let form = new FormData(); // FormData 对象
        form.append("token", config.qiniuToken);
        form.append("file", config.file); // 文件对象
        xhr.send(form);

      }

    },
    setToken: () => {
      if (xhr.getResponseHeader("token")) {
        setCookie("token", xhr.getResponseHeader("token"));
      }
    },
    verify: () => {
      const data = (!config.noParse) ? (JSON.parse(xhr.responseText)) : xhr.responseText;
      if (data.code === "E03") {
        hashHistory.push({
          pathname: 'tologin',
          query: {}
        })
      } else {
        return !config.noParse ? JSON.parse(xhr.responseText) : xhr.responseText;
      }
    },
    addListener: () => {
      //监听组件，一旦进入componentWillUnmount生命周期就执行abort方法
      if (xhr && config.listener) {
        Object.defineProperty(config.listener, '_calledComponentWillUnmount', {
          configurable: true,
          set: function(value) {
            if (value === true) xhr.abort();
            Object.defineProperty(config.listener, '_calledComponentWillUnmount', {
              value: value
            })
          }
        })
      }
    }
  }


  let xhr = tool.createXhr();

  tool.addListener();

  //判断是否是异步
  if (!config.async) {
    tool.sendXhr();
    return new Promise(
      function(resolve, reject) {
        tool.setToken();
        resolve(tool.verify());
      }
    );
  } else {
    return new Promise(
      function(resolve, reject) {
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            tool.setToken();
            resolve(tool.verify());
          }
        }
        tool.sendXhr();
      }

    );
  }

}