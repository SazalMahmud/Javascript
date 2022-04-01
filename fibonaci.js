// 0 ,1 ,1 , 2, 3, 5, 8

/*
3rd = 2nd + 1st;
4th = 3rd + 2nd;
5th = 4th + 3rd;
nth = (n-1) + (n-2)
*/
 function fibSeries(num){
     if(typeof num != 'number'){     // must be input a number
         return 'plase enter a number'
     }
     if(num<2){
         return ' plase enter a positive number'  // negative number not allaow
     }
     const fibo =[0,1];
     for(var i=2; i<=num; i++){
         fibo [i]= fibo[i-1] + fibo[i-2];
     }
     return fibo;
 }

 var fiboNumber = fibSeries(5);
 console.log(fiboNumber);