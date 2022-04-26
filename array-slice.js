// slice(4 theka 8 porjonto)
const numners =[2,6,8,3,10,11,12,13,14,45,56];
const numberSliced = numners.slice(4,8);
//console.log(numberSliced);

// splice remove element an array( 4 er por 3 ta vlaue count hobe)
//const numberSpliced = numners.splice(4,3);
//console.log(numberSpliced);
//console.log(numners);

// remove and add value
const numberSliced2 = numners.splice(5, 2, 4, 9, 10, 11);
console.log(numberSliced2);
console.log(numners);
