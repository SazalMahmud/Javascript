const frdList = ['sazal','foysal-','ruhulamin','tarek mama'];
const frdLength = frdList.map(friend => friend.length);
//console.log(frdLength);

const list =[
    {name:'iphn' , price:100000, color:'black'},
    {name:'nokia', price: 1002, color:'blue'},
    {name:'sumsang', price: 20033, color:'white'},
    {name:'aktel', price: 100, color:'green'}
];
const calculate_list = list.map(n =>n.price);
//console.log(calculate_list);
//
// Map ............... foreach
//list.map(n => console.log(n));
list.forEach(n => console.log(n));
