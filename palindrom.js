function palindrom(x){
    if(x<0){
        return false ;
    }
 let n = x ;
 let ans = 0;
 while(x!=0){
   let digit = x%10;
   ans = (ans * 10) + digit ;
   x = Math.floor(x/10);
 }



  if(ans===n){
  return true ;
 }
  return false ;
}
var returnResult = palindrom(-121);
console.log(returnResult);