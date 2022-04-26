const food = 'mangoar ange rice chile cheken';
const words =food.split('a');
console.log(words);

// slice (4 theka 10 porjonto)
const devide = food.slice(4,10);
console.log(devide);

// substr( 3 er por 4 ta valu dekhabe)
const need = food.substr(3,9);
console.log(need);

//substring
const anather = food.substring(3,7);
console.log(anather);

//concat(jora dea)
const first ='my';
const second ='town';
//const add = first.concat(second);
const add =first.concat(second).concat('sazal');
console.log(add);

// join (jora dea)
const joining =['a','b','f'];
const alljoind = joining.join('-');
console.log(alljoind);


