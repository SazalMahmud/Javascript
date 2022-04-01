var first = 5;
var second = 8;
var third   =3
console.log(first,second,third);
//details formula
var temp = first;
var first = second;
var second =third;
var third = temp;
console.log(first,second,third);
// shotcut formula
[ first,second,third] = [third,first,second];
console.log(first,second,third);
