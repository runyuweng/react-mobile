import {setCookie,getCookie,delCookie} from './tools.js'

function ajax(options) {

    let config = {
        url: 'http://115.159.159.79' + options.url,
        method: options.method || "GET",
        async: options.async || true,
        data: options.data || '',
        header: options.header || {}
    }

    const tool = {
        createXhr:()=>{
            if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
                return new XMLHttpRequest();
            } else { // code for IE6, IE5
                return new ActiveXObject("Microsoft.XMLHTTP");
            }
        },
        sendXhr:()=>{
            xmlhttp.open(config.method, config.url, config.async);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            if(getCookie("token")){
              xmlhttp.setRequestHeader("token", getCookie("token"));
            }

            xmlhttp.send(config.data);
        },
        setToken:()=>{
          if(xmlhttp.getResponseHeader("token")){
            setCookie("token",xmlhttp.getResponseHeader("token"));
          }
        }
    }


    let xmlhttp = tool.createXhr();

    //判断是否是异步
    if (!config.async) {
        tool.sendXhr();
        return new Promise(
            function(resolve, reject) {
                tool.setToken();
                resolve(JSON.parse(xmlhttp.responseText))
            }
        );
    } else {
        return new Promise(
            function(resolve, reject) {
                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        tool.setToken();
                        resolve(JSON.parse(xmlhttp.responseText));
                    }
                }
                tool.sendXhr();
            }

        );
    }
}


export default ajax;
