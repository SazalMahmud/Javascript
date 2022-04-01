var MyComputer = {
 price:57000,
 storage:'1TB',
 processor:"5i"

}
console.log(MyComputer);
// indivisual valo see
console.log(MyComputer.price);

// set a object property value
MyComputer.price=500000;
console.log(MyComputer.price);

//set a object property value anather formula
var change ='storage'
MyComputer[change]='500g'
console.log(MyComputer);
