

/*
var num = [23,34,53,3,45,65,64,9];
var i,sum=0;

for(i=0; i<num.length; i++){
    var element = num[i];
    sum = sum+element;
}
console.log(sum);
*/

//function

function allNumber(num){
    var i, sum=0;
    for(i=0; i<num.length; i++){
        var element = num[i];
        sum =sum+element;
    }
    return sum;   
}
var total = allNumber([1,2,3]);
console.log(total);
