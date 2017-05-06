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
