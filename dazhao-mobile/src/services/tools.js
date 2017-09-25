export function verifyTel(str){
  if(!(/^1[34578]\d{9}$/.test(str))){
     return false;
   }else{
     return true;
   }
}

export function checkEmail(str){
    var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
    return reg.test(str);
}

export function setCookie(name,value){
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

export function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
    else
    return null;
}

export function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null)
    document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

export function getUrlPara(para) {
  var url = window.location.href.split('?')[1],
    paras = url.split('&'),
    obj = {}

  paras.forEach(function(e, i) {
    obj[paras[i].split('=')[0]] = paras[i].split('=')[1]
  })
  return obj[para];
}
