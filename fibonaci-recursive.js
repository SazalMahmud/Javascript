function fibrcab(num){
    if(num == 0){
        return [0];
    }
    if(num == 1){
        return [0,1];
    }
    var fibo =fibrcab(num-1);
    fibo[num] = fibo [num-1] + fibo[num-2];
    return fibo;
}

var number = fibrcab(6);
console.log(number);
