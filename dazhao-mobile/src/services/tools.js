export function verifyTel(phone){
  if(!(/^1[34578]\d{9}$/.test(phone))){
     return false;
   }else{
     return true;
   }
}
