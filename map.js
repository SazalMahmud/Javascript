const value = [1,3,2,5];
const output =[];

//funcction
//function number2(number){
 //   return number*2;
//}

// function 2
const number2 = number =>number*5;

for(const number of value){
  //  const ans = number*5;
  const ans = number2(number);
    output.push(ans);
}
//console.log(output);

// shortcut formula (map - loper kaj kora)
// formula 1
const output2 = value.map(number2);
//console.log(output2);

//formula 2
const output3 = value.map(number =>number*2);
console.log(output3);
