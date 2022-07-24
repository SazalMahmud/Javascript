/*console.log('one');
setInterval(()=>{
 console.log('two');
},2000);
console.log('three'); */
let a=0;
const interval = setInterval(()=>{
   a++;
   console.log(a);
   if(a>3){
    clearInterval(interval);
   }
},1000);