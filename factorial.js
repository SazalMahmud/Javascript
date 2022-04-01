
//esay   
/*var factorial =1;
for(var i=1; i<=7; i++){

    
    factorial =factorial*i;
}
console.log(factorial); */

// var ,const,let (same)
function getFactorial(num){
 let factorial=1;
 let i=1;
 while(i<=num){
     factorial=factorial*i;
     i++;
 }
  return factorial;
}
const myFactorial = getFactorial(6);
console.log(myFactorial);