// posative number
/*
function ArrayNu(num){
    var count=0;
    for(i=0; i<num.length; i++) {
        var element =num[i];
        if(element>count)
        {
            count=element;
        }

    }
    return count;

}

var taka = [13,34,21];
var taka2=ArrayNu(taka);
console.log(" big amount",taka2);

*/
// negative number
function ArrayNu(num){
    var count=num[0];
    for(i=0; i<num.length; i++) {
        var element =num[i];
        if(element>count)
        {
            count=element;
        }

    }
    return count;

}

var taka = [-13,-34,-21];
var taka2=ArrayNu(taka);
console.log(" big amount",taka2);