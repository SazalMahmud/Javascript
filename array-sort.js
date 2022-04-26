
// only single degite sort hobe
const numers =[6,4,2,8,9,1,1];
const sorteNymbers = numers.sort();
//console.log(sorteNymbers);

const list = ['sazal','abir','ruhul','kamal','joshim'];
const sortList =list.sort();
//console.log(sortList);
const reversList = list.reverse();
//console.log(reversList);
const sortReversList =list.sort().reverse();
//console.log(sortReversList)

// original sort number ... useing function

const bigNumbers = [45, 4, 22, 64, 6,56];
const sortBignumber = bigNumbers.sort(function(a,b){
return a-b;
});
console.log(sortBignumber);